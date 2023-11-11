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
    "object": "0x608060405234801561001057600080fd5b50610710806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea26469706673582212206b9b1b2fb1e21637e0539bc8d509c9efc5aff9e34a4b55ac954b849f9290b3d764736f6c63430008130033",
    "sourceMap": "128:859:45:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c8c28ad146100515780636322c7511461007a5780638a227c39146100aa578063957462ac146100cb575b600080fd5b61006461005f366004610478565b6100de565b60405161007191906104b5565b60405180910390f35b61009c610088366004610478565b60f881901c916001600160f81b0390911690565b6040516100719291906104fe565b6100bd6100b836600461052a565b6100f2565b604051908152602001610071565b6100646100d9366004610478565b610109565b606060006100eb83610116565b9392505050565b6000806100ff8484610244565b9150505b92915050565b606060006100eb83610279565b606060f882901c6001600160f81b03831660006101328261036b565b90506000836003811115610148576101486104e8565b0361017a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061023c565b600183600381111561018e5761018e6104e8565b036101ba57806040516020016101a4919061055a565b604051602081830303815290604052935061023c565b60028360038111156101ce576101ce6104e8565b036101e457806040516020016101a49190610593565b60038360038111156101f8576101f86104e8565b0361023c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b60006001600160f81b0382111561026e5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b606060f882901c6001600160f81b03831660006102958261036b565b905060008360038111156102ab576102ab6104e8565b036102dd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061023c565b60018360038111156102f1576102f16104e8565b0361030757806040516020016101a491906105cd565b600283600381111561031b5761031b6104e8565b0361033157806040516020016101a49190610605565b6003836003811115610345576103456104e8565b0361023c576040516c485950455244524956452d575360981b6020820152602d0161022a565b60408051604d80825260808201909252606091906000908260208201818036833701905050905061039d600a85610647565b6103a8906030610671565b60f81b816103b7600185610684565b815181106103c7576103c7610697565b60200101906001600160f81b031916908160001a9053506103e9600a856106ad565b935060015b841561046a576103ff600a86610647565b61040a906030610671565b60f81b82600161041a8487610684565b6104249190610684565b8151811061043457610434610697565b60200101906001600160f81b031916908160001a905350610456600a866106ad565b945080610462816106c1565b9150506103ee565b918290030190815292915050565b60006020828403121561048a57600080fd5b5035919050565b60005b838110156104ac578181015183820152602001610494565b50506000910152565b60208152600082518060208401526104d4816040850160208701610491565b601f01601f19169190910160400192915050565b634e487b7160e01b600052602160045260246000fd5b604081016004841061052057634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561053d57600080fd5b82356004811061054c57600080fd5b946020939093013593505050565b700243cb832b9323934bb32902637b7339d1607d1b815260008251610586816011850160208701610491565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516105c0816012850160208701610491565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516105f8816010850160208701610491565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251610586816011850160208701610491565b634e487b7160e01b600052601260045260246000fd5b60008261065657610656610631565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156101035761010361065b565b818103818111156101035761010361065b565b634e487b7160e01b600052603260045260246000fd5b6000826106bc576106bc610631565b500490565b6000600182016106d3576106d361065b565b506001019056fea26469706673582212206b9b1b2fb1e21637e0539bc8d509c9efc5aff9e34a4b55ac954b849f9290b3d764736f6c63430008130033",
    "sourceMap": "128:859:45:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;635:161;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:32;2196:14;;;;-1:-1:-1;;;;;2253:120:32;;;;380:249:45;;;;;;;;;:::i;155:219::-;;;;;;:::i;:::-;;:::i;:::-;;;1902:25:167;;;1890:2;1875:18;155:219:45;1756:177:167;802:183:45;;;;;;:::i;:::-;;:::i;635:161::-;694:13;719:19;741:26;763:3;741:21;:26::i;:::-;719:48;635:161;-1:-1:-1;;;635:161:45:o;155:219::-;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;-1:-1:-1;;155:219:45;;;;;:::o;802:183::-;877:13;902:21;926:28;950:3;926:23;:28::i;2533:719:32:-;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:32;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:32;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:32;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;3061:29:167;3187:47:32;;;3049:42:167;3107:12;;3187:47:32;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;1198:469::-;1309:10;-1:-1:-1;;;;;1401:10:32;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:32;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:32;1620:18;;;;1617:34;;1198:469::o;3384:705::-;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:32;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:32;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:32;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:32;;;4239:28:167;4283:12;;4038:33:32;4037:264:167;4247:1154:32;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:32;-1:-1:-1;4841:9:32;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:32;;;;;;;;-1:-1:-1;4878:10:32;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:32;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:32;;;;;;;;-1:-1:-1;5084:10:32;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:32;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:32:o;14:180:167:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:167;;14:180;-1:-1:-1;14:180:167:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:167;423:16;;416:27;199:250::o;454:396::-;603:2;592:9;585:21;566:4;635:6;629:13;678:6;673:2;662:9;658:18;651:34;694:79;766:6;761:2;750:9;746:18;741:2;733:6;729:15;694:79;:::i;:::-;834:2;813:15;-1:-1:-1;;809:29:167;794:45;;;;841:2;790:54;;454:396;-1:-1:-1;;454:396:167:o;855:127::-;916:10;911:3;907:20;904:1;897:31;947:4;944:1;937:15;971:4;968:1;961:15;987:417;1165:2;1150:18;;1198:1;1187:13;;1177:144;;1243:10;1238:3;1234:20;1231:1;1224:31;1278:4;1275:1;1268:15;1306:4;1303:1;1296:15;1177:144;1330:25;;;1386:2;1371:18;1364:34;987:417;:::o;1409:342::-;1495:6;1503;1556:2;1544:9;1535:7;1531:23;1527:32;1524:52;;;1572:1;1569;1562:12;1524:52;1611:9;1598:23;1650:1;1643:5;1640:12;1630:40;;1666:1;1663;1656:12;1630:40;1689:5;1741:2;1726:18;;;;1713:32;;-1:-1:-1;;;1409:342:167:o;1938:449::-;-1:-1:-1;;;2195:3:167;2188:32;2170:3;2249:6;2243:13;2265:75;2333:6;2328:2;2323:3;2319:12;2312:4;2304:6;2300:17;2265:75;:::i;:::-;2360:16;;;;2378:2;2356:25;;1938:449;-1:-1:-1;;1938:449:167:o;2392:450::-;-1:-1:-1;;;2649:3:167;2642:33;2624:3;2704:6;2698:13;2720:75;2788:6;2783:2;2778:3;2774:12;2767:4;2759:6;2755:17;2720:75;:::i;:::-;2815:16;;;;2833:2;2811:25;;2392:450;-1:-1:-1;;2392:450:167:o;3130:448::-;-1:-1:-1;;;3387:3:167;3380:31;3362:3;3440:6;3434:13;3456:75;3524:6;3519:2;3514:3;3510:12;3503:4;3495:6;3491:17;3456:75;:::i;:::-;3551:16;;;;3569:2;3547:25;;3130:448;-1:-1:-1;;3130:448:167:o;3583:449::-;-1:-1:-1;;;3840:3:167;3833:32;3815:3;3894:6;3888:13;3910:75;3978:6;3973:2;3968:3;3964:12;3957:4;3949:6;3945:17;3910:75;:::i;4438:127::-;4499:10;4494:3;4490:20;4487:1;4480:31;4530:4;4527:1;4520:15;4554:4;4551:1;4544:15;4570:112;4602:1;4628;4618:35;;4633:18;;:::i;:::-;-1:-1:-1;4667:9:167;;4570:112::o;4687:127::-;4748:10;4743:3;4739:20;4736:1;4729:31;4779:4;4776:1;4769:15;4803:4;4800:1;4793:15;4819:125;4884:9;;;4905:10;;;4902:36;;;4918:18;;:::i;4949:128::-;5016:9;;;5037:11;;;5034:37;;;5051:18;;:::i;5082:127::-;5143:10;5138:3;5134:20;5131:1;5124:31;5174:4;5171:1;5164:15;5198:4;5195:1;5188:15;5214:120;5254:1;5280;5270:35;;5285:18;;:::i;:::-;-1:-1:-1;5319:9:167;;5214:120::o;5339:135::-;5378:3;5399:17;;;5396:43;;5419:18;;:::i;:::-;-1:-1:-1;5466:1:167;5455:13;;5339:135::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "assetIdToName(uint256)": "3c8c28ad",
    "assetIdToSymbol(uint256)": "957462ac",
    "decodeAssetId(uint256)": "6322c751",
    "encodeAssetId(uint8,uint256)": "8a227c39"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"assetIdToSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/test/MockAssetId.sol\":{\"keccak256\":\"0xed0dc7539d62e6578f9b65a76496ae38ea1c3694b8c763929d026da2aacc3b31\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9fd3d858f3829be2413709cedaa078d0778354fd9e211f5c22a3ed7b8c0c4d07\",\"dweb:/ipfs/QmWkRKdZ1ZjZV8JS4yZMR4XVqpgrGWAEYobYmvc4Gjp6Md\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
        "contracts/test/MockAssetId.sol": "MockAssetId"
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
    "absolutePath": "contracts/test/MockAssetId.sol",
    "id": 12799,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "MockAssetId": [
        12798
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:949:45",
    "nodes": [
      {
        "id": 12713,
        "nodeType": "PragmaDirective",
        "src": "39:23:45",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 12715,
        "nodeType": "ImportDirective",
        "src": "64:62:45",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 12799,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12714,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "73:7:45",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12798,
        "nodeType": "ContractDefinition",
        "src": "128:859:45",
        "nodes": [
          {
            "id": 12736,
            "nodeType": "FunctionDefinition",
            "src": "155:219:45",
            "nodes": [],
            "body": {
              "id": 12735,
              "nodeType": "Block",
              "src": "283:91:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    12726
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12726,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "301:2:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 12735,
                      "src": "293:10:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12725,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "293:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 12732,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 12729,
                        "name": "_prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12718,
                        "src": "328:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 12730,
                        "name": "_timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12720,
                        "src": "337:10:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 12727,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8311,
                        "src": "306:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 12728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "314:13:45",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8040,
                      "src": "306:21:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 12731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "306:42:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "293:55:45"
                },
                {
                  "expression": {
                    "id": 12733,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12726,
                    "src": "365:2:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 12724,
                  "id": 12734,
                  "nodeType": "Return",
                  "src": "358:9:45"
                }
              ]
            },
            "functionSelector": "8a227c39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "encodeAssetId",
            "nameLocation": "164:13:45",
            "parameters": {
              "id": 12721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12718,
                  "mutability": "mutable",
                  "name": "_prefix",
                  "nameLocation": "209:7:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 12736,
                  "src": "187:29:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 12717,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 12716,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "187:7:45",
                        "195:13:45"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8017,
                      "src": "187:21:45"
                    },
                    "referencedDeclaration": 8017,
                    "src": "187:21:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12720,
                  "mutability": "mutable",
                  "name": "_timestamp",
                  "nameLocation": "234:10:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 12736,
                  "src": "226:18:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:73:45"
            },
            "returnParameters": {
              "id": 12724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12723,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12736,
                  "src": "274:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12722,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "273:9:45"
            },
            "scope": 12798,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12763,
            "nodeType": "FunctionDefinition",
            "src": "380:249:45",
            "nodes": [],
            "body": {
              "id": 12762,
              "nodeType": "Block",
              "src": "485:144:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    12750,
                    12752
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12750,
                      "mutability": "mutable",
                      "name": "prefix",
                      "nameLocation": "518:6:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 12762,
                      "src": "496:28:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                        "typeString": "enum AssetId.AssetIdPrefix"
                      },
                      "typeName": {
                        "id": 12749,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 12748,
                          "name": "AssetId.AssetIdPrefix",
                          "nameLocations": [
                            "496:7:45",
                            "504:13:45"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 8017,
                          "src": "496:21:45"
                        },
                        "referencedDeclaration": 8017,
                        "src": "496:21:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 12752,
                      "mutability": "mutable",
                      "name": "timestamp",
                      "nameLocation": "534:9:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 12762,
                      "src": "526:17:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12751,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "526:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 12757,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 12755,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12738,
                        "src": "582:3:45",
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
                        "id": 12753,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8311,
                        "src": "547:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 12754,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "568:13:45",
                      "memberName": "decodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8053,
                      "src": "547:34:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$",
                        "typeString": "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)"
                      }
                    },
                    "id": 12756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:39:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "495:91:45"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 12758,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12750,
                        "src": "604:6:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 12759,
                        "name": "timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12752,
                        "src": "612:9:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 12760,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "603:19:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "functionReturnParameters": 12745,
                  "id": 12761,
                  "nodeType": "Return",
                  "src": "596:26:45"
                }
              ]
            },
            "functionSelector": "6322c751",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decodeAssetId",
            "nameLocation": "389:13:45",
            "parameters": {
              "id": 12739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12738,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "420:3:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 12763,
                  "src": "412:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "402:27:45"
            },
            "returnParameters": {
              "id": 12745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12763,
                  "src": "453:21:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 12741,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 12740,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "453:7:45",
                        "461:13:45"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8017,
                      "src": "453:21:45"
                    },
                    "referencedDeclaration": 8017,
                    "src": "453:21:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12744,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12763,
                  "src": "476:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "452:32:45"
            },
            "scope": 12798,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12780,
            "nodeType": "FunctionDefinition",
            "src": "635:161:45",
            "nodes": [],
            "body": {
              "id": 12779,
              "nodeType": "Block",
              "src": "709:87:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    12771
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12771,
                      "mutability": "mutable",
                      "name": "_name",
                      "nameLocation": "733:5:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 12779,
                      "src": "719:19:45",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 12770,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "719:6:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 12776,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 12774,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12765,
                        "src": "763:3:45",
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
                        "id": 12772,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8311,
                        "src": "741:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 12773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "749:13:45",
                      "memberName": "assetIdToName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8137,
                      "src": "741:21:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 12775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "741:26:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "719:48:45"
                },
                {
                  "expression": {
                    "id": 12777,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12771,
                    "src": "784:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 12769,
                  "id": 12778,
                  "nodeType": "Return",
                  "src": "777:12:45"
                }
              ]
            },
            "functionSelector": "3c8c28ad",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assetIdToName",
            "nameLocation": "644:13:45",
            "parameters": {
              "id": 12766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12765,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "666:3:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 12780,
                  "src": "658:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "657:13:45"
            },
            "returnParameters": {
              "id": 12769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12768,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12780,
                  "src": "694:13:45",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12767,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:6:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "693:15:45"
            },
            "scope": 12798,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12797,
            "nodeType": "FunctionDefinition",
            "src": "802:183:45",
            "nodes": [],
            "body": {
              "id": 12796,
              "nodeType": "Block",
              "src": "892:93:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    12788
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12788,
                      "mutability": "mutable",
                      "name": "_symbol",
                      "nameLocation": "916:7:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 12796,
                      "src": "902:21:45",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 12787,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "902:6:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 12793,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 12791,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12782,
                        "src": "950:3:45",
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
                        "id": 12789,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8311,
                        "src": "926:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 12790,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "934:15:45",
                      "memberName": "assetIdToSymbol",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8221,
                      "src": "926:23:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      }
                    },
                    "id": 12792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "926:28:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "902:52:45"
                },
                {
                  "expression": {
                    "id": 12794,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12788,
                    "src": "971:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 12786,
                  "id": 12795,
                  "nodeType": "Return",
                  "src": "964:14:45"
                }
              ]
            },
            "functionSelector": "957462ac",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "assetIdToSymbol",
            "nameLocation": "811:15:45",
            "parameters": {
              "id": 12783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12782,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "844:3:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 12797,
                  "src": "836:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "836:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "826:27:45"
            },
            "returnParameters": {
              "id": 12786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12785,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12797,
                  "src": "877:13:45",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12784,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:6:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:15:45"
            },
            "scope": 12798,
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
          12798
        ],
        "name": "MockAssetId",
        "nameLocation": "137:11:45",
        "scope": 12799,
        "usedErrors": [
          7413
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 45
} as const;
