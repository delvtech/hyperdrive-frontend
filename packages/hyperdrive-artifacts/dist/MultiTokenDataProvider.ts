{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_linkerCodeHash_",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_factory_",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ReturnData",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "linkerCodeHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "perTokenApprovals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60c060405234801561001057600080fd5b5060405161064c38038061064c83398101604081905261002f91610043565b6001600160a01b031660805260a052610080565b6000806040838503121561005657600080fd5b825160208401519092506001600160a01b038116811461007557600080fd5b809150509250929050565b60805160a0516105a76100a560003960006102f6015260006102ba01526105a76000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80637ecebe00116100665780637ecebe0014610107578063bd85b0391461011a578063c45a01551461012d578063c905a4b51461014d578063e985e9c51461015557600080fd5b8062ad800c1461009757806321ff32a9146100c05780633656eec2146100e15780634e41a1fb146100f4575b600080fd5b6100aa6100a536600461038f565b610178565b6040516100b791906103ee565b60405180910390f35b6100d36100ce366004610418565b6101b9565b6040519081526020016100b7565b6100d36100ef366004610454565b6101ff565b6100aa61010236600461038f565b610236565b6100d3610115366004610480565b61025e565b6100d361012836600461038f565b61028a565b6101356102ac565b6040516001600160a01b0390911681526020016100b7565b6100d36102ef565b61016861016336600461049b565b610327565b60405190151581526020016100b7565b60606101b4600460008481526020019081526020016000206040516020016101a091906104c5565b60405160208183030381529060405261036b565b919050565b60008381526003602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526101f891016101a0565b9392505050565b6000828152602081815260408083206001600160a01b038516845282528083205481519283015261023091016101a0565b92915050565b60606101b4600560008481526020019081526020016000206040516020016101a091906104c5565b6001600160a01b0381166000908152600660209081526040808320548151928301526101b491016101a0565b6000818152600160209081526040808320548151928301526101b491016101a0565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916102ec91016101a0565b90565b60006102ec7f00000000000000000000000000000000000000000000000000000000000000006040516020016101a091815260200190565b6001600160a01b038281166000908152600260209081526040808320938516835292815282822054835160ff909116151591810191909152909161023091016101a0565b80604051636e64089360e11b815260040161038691906103ee565b60405180910390fd5b6000602082840312156103a157600080fd5b5035919050565b6000815180845260005b818110156103ce576020818501810151868301820152016103b2565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006101f860208301846103a8565b80356001600160a01b03811681146101b457600080fd5b60008060006060848603121561042d57600080fd5b8335925061043d60208501610401565b915061044b60408501610401565b90509250925092565b6000806040838503121561046757600080fd5b8235915061047760208401610401565b90509250929050565b60006020828403121561049257600080fd5b6101f882610401565b600080604083850312156104ae57600080fd5b6104b783610401565b915061047760208401610401565b600060208083526000845481600182811c9150808316806104e757607f831692505b858310810361050457634e487b7160e01b85526022600452602485fd5b878601838152602001818015610521576001811461053757610562565b60ff198616825284151560051b82019650610562565b60008b81526020902060005b8681101561055c57815484820152908501908901610543565b83019750505b5094999850505050505050505056fea264697066735822122011b597337bb722b8b0f6adf4b9a95f5bc24056626005b89db924567d5aa7bde864736f6c63430008130033",
    "sourceMap": "573:3491:40:-:0;;;913:128;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1944:20:41;;;1974:34;;573:3491:40;;14:351:165;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:165;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;:::-;573:3491:40;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100925760003560e01c80637ecebe00116100665780637ecebe0014610107578063bd85b0391461011a578063c45a01551461012d578063c905a4b51461014d578063e985e9c51461015557600080fd5b8062ad800c1461009757806321ff32a9146100c05780633656eec2146100e15780634e41a1fb146100f4575b600080fd5b6100aa6100a536600461038f565b610178565b6040516100b791906103ee565b60405180910390f35b6100d36100ce366004610418565b6101b9565b6040519081526020016100b7565b6100d36100ef366004610454565b6101ff565b6100aa61010236600461038f565b610236565b6100d3610115366004610480565b61025e565b6100d361012836600461038f565b61028a565b6101356102ac565b6040516001600160a01b0390911681526020016100b7565b6100d36102ef565b61016861016336600461049b565b610327565b60405190151581526020016100b7565b60606101b4600460008481526020019081526020016000206040516020016101a091906104c5565b60405160208183030381529060405261036b565b919050565b60008381526003602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526101f891016101a0565b9392505050565b6000828152602081815260408083206001600160a01b038516845282528083205481519283015261023091016101a0565b92915050565b60606101b4600560008481526020019081526020016000206040516020016101a091906104c5565b6001600160a01b0381166000908152600660209081526040808320548151928301526101b491016101a0565b6000818152600160209081526040808320548151928301526101b491016101a0565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916102ec91016101a0565b90565b60006102ec7f00000000000000000000000000000000000000000000000000000000000000006040516020016101a091815260200190565b6001600160a01b038281166000908152600260209081526040808320938516835292815282822054835160ff909116151591810191909152909161023091016101a0565b80604051636e64089360e11b815260040161038691906103ee565b60405180910390fd5b6000602082840312156103a157600080fd5b5035919050565b6000815180845260005b818110156103ce576020818501810151868301820152016103b2565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006101f860208301846103a8565b80356001600160a01b03811681146101b457600080fd5b60008060006060848603121561042d57600080fd5b8335925061043d60208501610401565b915061044b60408501610401565b90509250925092565b6000806040838503121561046757600080fd5b8235915061047760208401610401565b90509250929050565b60006020828403121561049257600080fd5b6101f882610401565b600080604083850312156104ae57600080fd5b6104b783610401565b915061047760208401610401565b600060208083526000845481600182811c9150808316806104e757607f831692505b858310810361050457634e487b7160e01b85526022600452602485fd5b878601838152602001818015610521576001811461053757610562565b60ff198616825284151560051b82019650610562565b60008b81526020902060005b8681101561055c57815484820152908501908901610543565b83019750505b5094999850505050505050505056fea264697066735822122011b597337bb722b8b0f6adf4b9a95f5bc24056626005b89db924567d5aa7bde864736f6c63430008130033",
    "sourceMap": "573:3491:40:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3076:144;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2725:232;;;;;;:::i;:::-;;:::i;:::-;;;1664:25:165;;;1652:2;1637:18;2725:232:40;1518:177:165;1644:182:40;;;;;;:::i;:::-;;:::i;3343:148::-;;;;;;:::i;:::-;;:::i;3640:128::-;;;;;;:::i;:::-;;:::i;1961:152::-;;;;;;:::i;:::-;;:::i;1377:97::-;;;:::i;:::-;;;-1:-1:-1;;;;;2314:32:165;;;2296:51;;2284:2;2269:18;1377:97:40;2150:203:165;1143:111:40;;;:::i;2302:195::-;;;;;;:::i;:::-;;:::i;:::-;;;2970:14:165;;2963:22;2945:41;;2933:2;2918:18;2302:195:40;2805:187:165;3076:144:40;3153:13;3178:35;3197:5;:14;3203:7;3197:14;;;;;;;;;;;3186:26;;;;;;;;:::i;:::-;;;;;;;;;;;;;3178:7;:35::i;:::-;3076:144;;;:::o;2725:232::-;2865:7;2903:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;2903:36:40;;;;;;;;;;;:45;;;;;;;;;;;2892:57;;;;;1664:25:165;2884:66:40;;1637:18:165;2892:57:40;1518:177:165;2884:66:40;2725:232;;;;;:::o;1644:182::-;1751:7;1789:19;;;;;;;;;;;-1:-1:-1;;;;;1789:28:40;;;;;;;;;;1778:40;;;;;1664:25:165;1770:49:40;;1637:18:165;1778:40:40;1518:177:165;1770:49:40;1644:182;;;;:::o;3343:148::-;3422:13;3447:37;3466:7;:16;3474:7;3466:16;;;;;;;;;;;3455:28;;;;;;;;:::i;3640:128::-;-1:-1:-1;;;;;3743:16:40;;3705:7;3743:16;;;:7;:16;;;;;;;;;3732:28;;;;;1664:25:165;3724:37:40;;1637:18:165;3732:28:40;1518:177:165;1961:152:40;2045:7;2083:21;;;:12;:21;;;;;;;;;2072:33;;;;;1664:25:165;2064:42:40;;1637:18:165;2072:33:40;1518:177:165;1377:97:40;1446:20;;;-1:-1:-1;;;;;1457:8:40;2314:32:165;1446:20:40;;;2296:51:165;1419:7:40;;1438:29;;2269:18:165;1446:20:40;2150:203:165;1438:29:40;1377:97;:::o;1143:111::-;1192:7;1211:36;1230:15;1219:27;;;;;;1664:25:165;;1652:2;1637:18;;1518:177;2302:195:40;-1:-1:-1;;;;;2452:26:40;;;2417:4;2452:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;2441:48;;2452:36;;;;2970:14:165;2963:22;2441:48:40;;;2945:41:165;;;;2417:4:40;;2433:57;;2918:18:165;2441:48:40;2805:187:165;3956:106:40;4048:6;4025:30;;-1:-1:-1;;;4025:30:40;;;;;;;;:::i;:::-;;;;;;;;14:180:165;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:165;;14:180;-1:-1:-1;14:180:165:o;354:423::-;396:3;434:5;428:12;461:6;456:3;449:19;486:1;496:162;510:6;507:1;504:13;496:162;;;572:4;628:13;;;624:22;;618:29;600:11;;;596:20;;589:59;525:12;496:162;;;500:3;703:1;696:4;687:6;682:3;678:16;674:27;667:38;766:4;759:2;755:7;750:2;742:6;738:15;734:29;729:3;725:39;721:50;714:57;;;354:423;;;;:::o;782:220::-;931:2;920:9;913:21;894:4;951:45;992:2;981:9;977:18;969:6;951:45;:::i;1007:173::-;1075:20;;-1:-1:-1;;;;;1124:31:165;;1114:42;;1104:70;;1170:1;1167;1160:12;1185:328;1262:6;1270;1278;1331:2;1319:9;1310:7;1306:23;1302:32;1299:52;;;1347:1;1344;1337:12;1299:52;1383:9;1370:23;1360:33;;1412:38;1446:2;1435:9;1431:18;1412:38;:::i;:::-;1402:48;;1469:38;1503:2;1492:9;1488:18;1469:38;:::i;:::-;1459:48;;1185:328;;;;;:::o;1700:254::-;1768:6;1776;1829:2;1817:9;1808:7;1804:23;1800:32;1797:52;;;1845:1;1842;1835:12;1797:52;1881:9;1868:23;1858:33;;1910:38;1944:2;1933:9;1929:18;1910:38;:::i;:::-;1900:48;;1700:254;;;;;:::o;1959:186::-;2018:6;2071:2;2059:9;2050:7;2046:23;2042:32;2039:52;;;2087:1;2084;2077:12;2039:52;2110:29;2129:9;2110:29;:::i;2540:260::-;2608:6;2616;2669:2;2657:9;2648:7;2644:23;2640:32;2637:52;;;2685:1;2682;2675:12;2637:52;2708:29;2727:9;2708:29;:::i;:::-;2698:39;;2756:38;2790:2;2779:9;2775:18;2756:38;:::i;3123:1214::-;3232:4;3261:2;3290;3279:9;3272:21;3313:1;3346:6;3340:13;3376:3;3398:1;3426:9;3422:2;3418:18;3408:28;;3486:2;3475:9;3471:18;3508;3498:61;;3552:4;3544:6;3540:17;3530:27;;3498:61;3605:2;3597:6;3594:14;3574:18;3571:38;3568:165;;-1:-1:-1;;;3632:33:165;;3688:4;3685:1;3678:15;3718:4;3639:3;3706:17;3568:165;3789:18;;;286:19;;;338:4;329:14;3832:18;3859:128;;;;4001:1;3996:315;;;;3825:486;;3859:128;-1:-1:-1;;3892:24:165;;3880:37;;3960:14;;3953:22;3950:1;3946:30;3937:40;;;-1:-1:-1;3859:128:165;;3996:315;3070:1;3063:14;;;3107:4;3094:18;;4091:1;4105:165;4119:6;4116:1;4113:13;4105:165;;;4197:14;;4184:11;;;4177:35;4240:16;;;;4134:10;;4105:165;;;4290:11;;;-1:-1:-1;;3825:486:165;-1:-1:-1;4328:3:165;;3123:1214;-1:-1:-1;;;;;;;;;3123:1214:165:o",
    "linkReferences": {},
    "immutableReferences": {
      "13140": [
        {
          "start": 698,
          "length": 32
        }
      ],
      "13142": [
        {
          "start": 758,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "balanceOf(uint256,address)": "3656eec2",
    "factory()": "c45a0155",
    "isApprovedForAll(address,address)": "e985e9c5",
    "linkerCodeHash()": "c905a4b5",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash_\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_factory_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"constructor\":{\"params\":{\"_factory_\":\"The factory which is used to deploy the linking contracts\",\"_linkerCodeHash_\":\"The hash of the erc20 linker contract deploy code\"}},\"factory()\":{\"returns\":{\"_0\":\"The linking factory.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"linkerCodeHash()\":{\"returns\":{\"_0\":\"The code hash.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}}},\"title\":\"MultiTokenDataProvider\",\"version\":1},\"userdoc\":{\"errors\":{\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"constructor\":{\"notice\":\"Initializes the MultiToken's data provider.\"},\"factory()\":{\"notice\":\"Gets the factory which is used to deploy the linking contracts.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"linkerCodeHash()\":{\"notice\":\"Gets the code hash of the erc20 linker contract.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"}},\"notice\":\"The MultiToken data provider.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/token/MultiTokenDataProvider.sol\":\"MultiTokenDataProvider\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef\",\"dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_linkerCodeHash_",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "_factory_",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "type": "error",
          "name": "ReturnData"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "factory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerCodeHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
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
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
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
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "perTokenApprovals",
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
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
        "methods": {
          "balanceOf(uint256,address)": {
            "params": {
              "account": "The account.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The balance."
            }
          },
          "constructor": {
            "params": {
              "_factory_": "The factory which is used to deploy the linking contracts",
              "_linkerCodeHash_": "The hash of the erc20 linker contract deploy code"
            }
          },
          "factory()": {
            "returns": {
              "_0": "The linking factory."
            }
          },
          "isApprovedForAll(address,address)": {
            "params": {
              "account": "The account.",
              "operator": "The operator."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "linkerCodeHash()": {
            "returns": {
              "_0": "The code hash."
            }
          },
          "name(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The name."
            }
          },
          "nonces(address)": {
            "params": {
              "account": "The account."
            },
            "returns": {
              "_0": "The signature nonce."
            }
          },
          "perTokenApprovals(uint256,address,address)": {
            "params": {
              "account": "The account.",
              "spender": "The spender.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "symbol(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The symbol."
            }
          },
          "totalSupply(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The total supply."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "balanceOf(uint256,address)": {
            "notice": "Gets an account's balance of a sub-token."
          },
          "constructor": {
            "notice": "Initializes the MultiToken's data provider."
          },
          "factory()": {
            "notice": "Gets the factory which is used to deploy the linking contracts."
          },
          "isApprovedForAll(address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "linkerCodeHash()": {
            "notice": "Gets the code hash of the erc20 linker contract."
          },
          "name(uint256)": {
            "notice": "Gets the name of a sub-token."
          },
          "nonces(address)": {
            "notice": "Gets the permitForAll signature nonce for an account."
          },
          "perTokenApprovals(uint256,address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "symbol(uint256)": {
            "notice": "Gets the symbol of a sub-token."
          },
          "totalSupply(uint256)": {
            "notice": "Gets the total supply of a sub-token."
          }
        },
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
        "contracts/src/token/MultiTokenDataProvider.sol": "MultiTokenDataProvider"
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
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f",
        "urls": [
          "bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef",
          "dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
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
    "absolutePath": "contracts/src/token/MultiTokenDataProvider.sol",
    "id": 13136,
    "exportedSymbols": {
      "IHyperdrive": [
        7103
      ],
      "IMultiTokenRead": [
        7545
      ],
      "MultiTokenDataProvider": [
        13135
      ],
      "MultiTokenStorage": [
        13196
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:4026:40",
    "nodes": [
      {
        "id": 12920,
        "nodeType": "PragmaDirective",
        "src": "39:23:40",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 12922,
        "nodeType": "ImportDirective",
        "src": "64:60:40",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13136,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12921,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "73:11:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12924,
        "nodeType": "ImportDirective",
        "src": "125:68:40",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
        "file": "../interfaces/IMultiTokenRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13136,
        "sourceUnit": 7546,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12923,
              "name": "IMultiTokenRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7545,
              "src": "134:15:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12926,
        "nodeType": "ImportDirective",
        "src": "194:60:40",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiTokenStorage.sol",
        "file": "./MultiTokenStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13136,
        "sourceUnit": 13197,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12925,
              "name": "MultiTokenStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13196,
              "src": "203:17:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13135,
        "nodeType": "ContractDefinition",
        "src": "573:3491:40",
        "nodes": [
          {
            "id": 12944,
            "nodeType": "FunctionDefinition",
            "src": "913:128:40",
            "nodes": [],
            "body": {
              "id": 12943,
              "nodeType": "Block",
              "src": "1039:2:40",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 12932,
              "nodeType": "StructuredDocumentation",
              "src": "688:220:40",
              "text": "@notice Initializes the MultiToken's data provider.\n @param _linkerCodeHash_ The hash of the erc20 linker contract deploy code\n @param _factory_ The factory which is used to deploy the linking contracts"
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 12939,
                    "name": "_linkerCodeHash_",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12934,
                    "src": "1010:16:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "id": 12940,
                    "name": "_factory_",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12936,
                    "src": "1028:9:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 12941,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 12938,
                  "name": "MultiTokenStorage",
                  "nameLocations": [
                    "992:17:40"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 13196,
                  "src": "992:17:40"
                },
                "nodeType": "ModifierInvocation",
                "src": "992:46:40"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 12937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12934,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash_",
                  "nameLocation": "942:16:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 12944,
                  "src": "934:24:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12933,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "934:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12936,
                  "mutability": "mutable",
                  "name": "_factory_",
                  "nameLocation": "976:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 12944,
                  "src": "968:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12935,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "968:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "924:67:40"
            },
            "returnParameters": {
              "id": 12942,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1039:0:40"
            },
            "scope": 13135,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 12958,
            "nodeType": "FunctionDefinition",
            "src": "1143:111:40",
            "nodes": [],
            "body": {
              "id": 12957,
              "nodeType": "Block",
              "src": "1201:53:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 12953,
                            "name": "_linkerCodeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13142,
                            "src": "1230:15:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "id": 12951,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1219:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1223:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1219:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1219:27:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 12950,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "1211:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1211:36:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12956,
                  "nodeType": "ExpressionStatement",
                  "src": "1211:36:40"
                }
              ]
            },
            "baseFunctions": [
              7508
            ],
            "documentation": {
              "id": 12945,
              "nodeType": "StructuredDocumentation",
              "src": "1047:91:40",
              "text": "@notice Gets the code hash of the erc20 linker contract.\n @return The code hash."
            },
            "functionSelector": "c905a4b5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "linkerCodeHash",
            "nameLocation": "1152:14:40",
            "parameters": {
              "id": 12946,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1166:2:40"
            },
            "returnParameters": {
              "id": 12949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12948,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12958,
                  "src": "1192:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12947,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1192:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1191:9:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12972,
            "nodeType": "FunctionDefinition",
            "src": "1377:97:40",
            "nodes": [],
            "body": {
              "id": 12971,
              "nodeType": "Block",
              "src": "1428:46:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 12967,
                            "name": "_factory",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13140,
                            "src": "1457:8:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 12965,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1446:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12966,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1450:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1446:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1446:20:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 12964,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "1438:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1438:29:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12970,
                  "nodeType": "ExpressionStatement",
                  "src": "1438:29:40"
                }
              ]
            },
            "baseFunctions": [
              7503
            ],
            "documentation": {
              "id": 12959,
              "nodeType": "StructuredDocumentation",
              "src": "1260:112:40",
              "text": "@notice Gets the factory which is used to deploy the linking contracts.\n @return The linking factory."
            },
            "functionSelector": "c45a0155",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "factory",
            "nameLocation": "1386:7:40",
            "parameters": {
              "id": 12960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1393:2:40"
            },
            "returnParameters": {
              "id": 12963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12962,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12972,
                  "src": "1419:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12961,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1419:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1418:9:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12995,
            "nodeType": "FunctionDefinition",
            "src": "1644:182:40",
            "nodes": [],
            "body": {
              "id": 12994,
              "nodeType": "Block",
              "src": "1760:66:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 12986,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13148,
                                "src": "1789:10:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 12988,
                              "indexExpression": {
                                "id": 12987,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12975,
                                "src": "1800:7:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1789:19:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 12990,
                            "indexExpression": {
                              "id": 12989,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12977,
                              "src": "1809:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1789:28:40",
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
                            "id": 12984,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1778:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12985,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1782:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1778:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1778:40:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 12983,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "1770:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1770:49:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12993,
                  "nodeType": "ExpressionStatement",
                  "src": "1770:49:40"
                }
              ]
            },
            "baseFunctions": [
              7537
            ],
            "documentation": {
              "id": 12973,
              "nodeType": "StructuredDocumentation",
              "src": "1480:159:40",
              "text": "@notice Gets an account's balance of a sub-token.\n @param tokenId The sub-token id.\n @param account The account.\n @return The balance."
            },
            "functionSelector": "3656eec2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "1653:9:40",
            "overrides": {
              "id": 12979,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1733:8:40"
            },
            "parameters": {
              "id": 12978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12975,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1680:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1672:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1672:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12977,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1705:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1697:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1697:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:56:40"
            },
            "returnParameters": {
              "id": 12982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12981,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1751:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1751:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1750:9:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13014,
            "nodeType": "FunctionDefinition",
            "src": "1961:152:40",
            "nodes": [],
            "body": {
              "id": 13013,
              "nodeType": "Block",
              "src": "2054:59:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 13007,
                              "name": "_totalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13152,
                              "src": "2083:12:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 13009,
                            "indexExpression": {
                              "id": 13008,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12998,
                              "src": "2096:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2083:21:40",
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
                            "id": 13005,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2072:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 13006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2076:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2072:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 13010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2072:33:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 13004,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "2064:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13011,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2064:42:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13012,
                  "nodeType": "ExpressionStatement",
                  "src": "2064:42:40"
                }
              ]
            },
            "baseFunctions": [
              7498
            ],
            "documentation": {
              "id": 12996,
              "nodeType": "StructuredDocumentation",
              "src": "1832:124:40",
              "text": "@notice Gets the total supply of a sub-token.\n @param tokenId The sub-token id.\n @return The total supply."
            },
            "functionSelector": "bd85b039",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "1970:11:40",
            "overrides": {
              "id": 13000,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2027:8:40"
            },
            "parameters": {
              "id": 12999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12998,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1999:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13014,
                  "src": "1991:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1991:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1981:31:40"
            },
            "returnParameters": {
              "id": 13003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13002,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13014,
                  "src": "2045:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2044:9:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13037,
            "nodeType": "FunctionDefinition",
            "src": "2302:195:40",
            "nodes": [],
            "body": {
              "id": 13036,
              "nodeType": "Block",
              "src": "2423:74:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 13028,
                                "name": "_isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13158,
                                "src": "2452:17:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                  "typeString": "mapping(address => mapping(address => bool))"
                                }
                              },
                              "id": 13030,
                              "indexExpression": {
                                "id": 13029,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13017,
                                "src": "2470:7:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2452:26:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 13032,
                            "indexExpression": {
                              "id": 13031,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13019,
                              "src": "2479:8:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2452:36:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 13026,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2441:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 13027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2445:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2441:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 13033,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2441:48:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 13025,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "2433:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2433:57:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13035,
                  "nodeType": "ExpressionStatement",
                  "src": "2433:57:40"
                }
              ]
            },
            "baseFunctions": [
              7517
            ],
            "documentation": {
              "id": 13015,
              "nodeType": "StructuredDocumentation",
              "src": "2119:178:40",
              "text": "@notice Gets the approval status of an operator for an account.\n @param account The account.\n @param operator The operator.\n @return The approval status."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "2311:16:40",
            "overrides": {
              "id": 13021,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2399:8:40"
            },
            "parameters": {
              "id": 13020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13017,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2345:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13037,
                  "src": "2337:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13016,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2337:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13019,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2370:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13037,
                  "src": "2362:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13018,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2362:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2327:57:40"
            },
            "returnParameters": {
              "id": 13024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13023,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13037,
                  "src": "2417:4:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13022,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2417:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2416:6:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13064,
            "nodeType": "FunctionDefinition",
            "src": "2725:232:40",
            "nodes": [],
            "body": {
              "id": 13063,
              "nodeType": "Block",
              "src": "2874:83:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 13053,
                                  "name": "_perTokenApprovals",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13166,
                                  "src": "2903:18:40",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                                  }
                                },
                                "id": 13055,
                                "indexExpression": {
                                  "id": 13054,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13040,
                                  "src": "2922:7:40",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2903:27:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 13057,
                              "indexExpression": {
                                "id": 13056,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13042,
                                "src": "2931:7:40",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2903:36:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 13059,
                            "indexExpression": {
                              "id": 13058,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13044,
                              "src": "2940:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2903:45:40",
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
                            "id": 13051,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2892:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 13052,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2896:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2892:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 13060,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2892:57:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 13050,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "2884:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13061,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2884:66:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13062,
                  "nodeType": "ExpressionStatement",
                  "src": "2884:66:40"
                }
              ]
            },
            "baseFunctions": [
              7528
            ],
            "documentation": {
              "id": 13038,
              "nodeType": "StructuredDocumentation",
              "src": "2503:217:40",
              "text": "@notice Gets the approval status of an operator for an account.\n @param tokenId The sub-token id.\n @param account The account.\n @param spender The spender.\n @return The approval status."
            },
            "functionSelector": "21ff32a9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "perTokenApprovals",
            "nameLocation": "2734:17:40",
            "overrides": {
              "id": 13046,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2847:8:40"
            },
            "parameters": {
              "id": 13045,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13040,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2769:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13064,
                  "src": "2761:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2761:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13042,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2794:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13064,
                  "src": "2786:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13041,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2786:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13044,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2819:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13064,
                  "src": "2811:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13043,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2811:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2751:81:40"
            },
            "returnParameters": {
              "id": 13049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13048,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13064,
                  "src": "2865:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13047,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2865:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2864:9:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13083,
            "nodeType": "FunctionDefinition",
            "src": "3076:144:40",
            "nodes": [],
            "body": {
              "id": 13082,
              "nodeType": "Block",
              "src": "3168:52:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 13076,
                              "name": "_name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13170,
                              "src": "3197:5:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                "typeString": "mapping(uint256 => string storage ref)"
                              }
                            },
                            "id": 13078,
                            "indexExpression": {
                              "id": 13077,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13067,
                              "src": "3203:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3197:14:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          ],
                          "expression": {
                            "id": 13074,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3186:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 13075,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3190:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3186:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 13079,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3186:26:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 13073,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "3178:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3178:35:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13081,
                  "nodeType": "ExpressionStatement",
                  "src": "3178:35:40"
                }
              ]
            },
            "baseFunctions": [
              7484
            ],
            "documentation": {
              "id": 13065,
              "nodeType": "StructuredDocumentation",
              "src": "2963:108:40",
              "text": "@notice Gets the name of a sub-token.\n @param tokenId The sub-token id.\n @return The name."
            },
            "functionSelector": "00ad800c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "3085:4:40",
            "overrides": {
              "id": 13069,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3135:8:40"
            },
            "parameters": {
              "id": 13068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13067,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3107:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13083,
                  "src": "3099:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3099:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3089:31:40"
            },
            "returnParameters": {
              "id": 13072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13071,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13083,
                  "src": "3153:13:40",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13070,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3153:6:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3152:15:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13102,
            "nodeType": "FunctionDefinition",
            "src": "3343:148:40",
            "nodes": [],
            "body": {
              "id": 13101,
              "nodeType": "Block",
              "src": "3437:54:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 13095,
                              "name": "_symbol",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13174,
                              "src": "3466:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                "typeString": "mapping(uint256 => string storage ref)"
                              }
                            },
                            "id": 13097,
                            "indexExpression": {
                              "id": 13096,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13086,
                              "src": "3474:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3466:16:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          ],
                          "expression": {
                            "id": 13093,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3455:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 13094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3459:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3455:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 13098,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3455:28:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 13092,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "3447:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13099,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3447:37:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13100,
                  "nodeType": "ExpressionStatement",
                  "src": "3447:37:40"
                }
              ]
            },
            "baseFunctions": [
              7491
            ],
            "documentation": {
              "id": 13084,
              "nodeType": "StructuredDocumentation",
              "src": "3226:112:40",
              "text": "@notice Gets the symbol of a sub-token.\n @param tokenId The sub-token id.\n @return The symbol."
            },
            "functionSelector": "4e41a1fb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "3352:6:40",
            "overrides": {
              "id": 13088,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3404:8:40"
            },
            "parameters": {
              "id": 13087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13086,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3376:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13102,
                  "src": "3368:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13085,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3368:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3358:31:40"
            },
            "returnParameters": {
              "id": 13091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13090,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13102,
                  "src": "3422:13:40",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13089,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3422:6:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3421:15:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13121,
            "nodeType": "FunctionDefinition",
            "src": "3640:128:40",
            "nodes": [],
            "body": {
              "id": 13120,
              "nodeType": "Block",
              "src": "3714:54:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 13114,
                              "name": "_nonces",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13178,
                              "src": "3743:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 13116,
                            "indexExpression": {
                              "id": 13115,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13105,
                              "src": "3751:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3743:16:40",
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
                            "id": 13112,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3732:3:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 13113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3736:6:40",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3732:10:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 13117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3732:28:40",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 13111,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "3724:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3724:37:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13119,
                  "nodeType": "ExpressionStatement",
                  "src": "3724:37:40"
                }
              ]
            },
            "baseFunctions": [
              7544
            ],
            "documentation": {
              "id": 13103,
              "nodeType": "StructuredDocumentation",
              "src": "3497:138:40",
              "text": "@notice Gets the permitForAll signature nonce for an account.\n @param account The account.\n @return The signature nonce."
            },
            "functionSelector": "7ecebe00",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "3649:6:40",
            "overrides": {
              "id": 13107,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3687:8:40"
            },
            "parameters": {
              "id": 13106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13105,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3664:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13121,
                  "src": "3656:15:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13104,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3656:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3655:17:40"
            },
            "returnParameters": {
              "id": 13110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13109,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13121,
                  "src": "3705:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3705:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3704:9:40"
            },
            "scope": 13135,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13134,
            "nodeType": "FunctionDefinition",
            "src": "3956:106:40",
            "nodes": [],
            "body": {
              "id": 13133,
              "nodeType": "Block",
              "src": "4008:54:40",
              "nodes": [],
              "statements": [
                {
                  "errorCall": {
                    "arguments": [
                      {
                        "id": 13130,
                        "name": "_bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13124,
                        "src": "4048:6:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 13127,
                        "name": "IHyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7103,
                        "src": "4025:11:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                          "typeString": "type(contract IHyperdrive)"
                        }
                      },
                      "id": 13129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4037:10:40",
                      "memberName": "ReturnData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7038,
                      "src": "4025:22:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 13131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4025:30:40",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13132,
                  "nodeType": "RevertStatement",
                  "src": "4018:37:40"
                }
              ]
            },
            "documentation": {
              "id": 13122,
              "nodeType": "StructuredDocumentation",
              "src": "3774:177:40",
              "text": "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revert",
            "nameLocation": "3965:7:40",
            "parameters": {
              "id": 13125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13124,
                  "mutability": "mutable",
                  "name": "_bytes",
                  "nameLocation": "3986:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 13134,
                  "src": "3973:19:40",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 13123,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3973:5:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3972:21:40"
            },
            "returnParameters": {
              "id": 13126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4008:0:40"
            },
            "scope": 13135,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 12928,
              "name": "MultiTokenStorage",
              "nameLocations": [
                "608:17:40"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 13196,
              "src": "608:17:40"
            },
            "id": 12929,
            "nodeType": "InheritanceSpecifier",
            "src": "608:17:40"
          },
          {
            "baseName": {
              "id": 12930,
              "name": "IMultiTokenRead",
              "nameLocations": [
                "627:15:40"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7545,
              "src": "627:15:40"
            },
            "id": 12931,
            "nodeType": "InheritanceSpecifier",
            "src": "627:15:40"
          }
        ],
        "canonicalName": "MultiTokenDataProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 12927,
          "nodeType": "StructuredDocumentation",
          "src": "256:317:40",
          "text": "@author DELV\n @title MultiTokenDataProvider\n @notice The MultiToken data provider.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          13135,
          7545,
          13196
        ],
        "name": "MultiTokenDataProvider",
        "nameLocation": "582:22:40",
        "scope": 13136,
        "usedErrors": [
          7038
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 40
}