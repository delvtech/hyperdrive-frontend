export const MultiTokenDataProvider = 
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
      "stateMutability": "pure",
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
      "stateMutability": "pure",
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
    "object": "0x60c060405234801561001057600080fd5b50604051610a49380380610a4983398101604081905261002f91610043565b6001600160a01b031660805260a052610080565b6000806040838503121561005657600080fd5b825160208401519092506001600160a01b038116811461007557600080fd5b809150509250929050565b60805160a0516109a46100a560003960006102d20152600061029601526109a46000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80637ecebe00116100665780637ecebe0014610107578063bd85b0391461011a578063c45a01551461012d578063c905a4b51461014d578063e985e9c51461015557600080fd5b8062ad800c1461009757806321ff32a9146100c05780633656eec2146100e15780634e41a1fb146100f4575b600080fd5b6100aa6100a5366004610698565b610178565b6040516100b79190610701565b60405180910390f35b6100d36100ce36600461072b565b6101af565b6040519081526020016100b7565b6100d36100ef366004610767565b6101f5565b6100aa610102366004610698565b61022c565b6100d3610115366004610793565b61023a565b6100d3610128366004610698565b610266565b610135610288565b6040516001600160a01b0390911681526020016100b7565b6100d36102cb565b6101686101633660046107ae565b610303565b60405190151581526020016100b7565b60606101aa61018683610347565b6040516020016101969190610701565b604051602081830303815290604052610475565b919050565b60008381526003602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526101ee9101610196565b9392505050565b6000828152602081815260408083206001600160a01b03851684528252808320548151928301526102269101610196565b92915050565b60606101aa61018683610499565b6001600160a01b0381166000908152600660209081526040808320548151928301526101aa9101610196565b6000818152600160209081526040808320548151928301526101aa9101610196565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916102c89101610196565b90565b60006102c87f000000000000000000000000000000000000000000000000000000000000000060405160200161019691815260200190565b6001600160a01b038281166000908152600260209081526040808320938516835292815282822054835160ff90911615159181019190915290916102269101610196565b606060f882901c6001600160f81b03831660006103638261058b565b90506000836003811115610379576103796107d8565b036103ab576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061046d565b60018360038111156103bf576103bf6107d8565b036103eb57806040516020016103d591906107ee565b604051602081830303815290604052935061046d565b60028360038111156103ff576103ff6107d8565b0361041557806040516020016103d59190610827565b6003836003811115610429576104296107d8565b0361046d576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016104909190610701565b60405180910390fd5b606060f882901c6001600160f81b03831660006104b58261058b565b905060008360038111156104cb576104cb6107d8565b036104fd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061046d565b6001836003811115610511576105116107d8565b0361052757806040516020016103d59190610861565b600283600381111561053b5761053b6107d8565b0361055157806040516020016103d59190610899565b6003836003811115610565576105656107d8565b0361046d576040516c485950455244524956452d575360981b6020820152602d0161045b565b60408051604d8082526080820190925260609190600090826020820181803683370190505090506105bd600a856108db565b6105c8906030610905565b60f81b816105d7600185610918565b815181106105e7576105e761092b565b60200101906001600160f81b031916908160001a905350610609600a85610941565b935060015b841561068a5761061f600a866108db565b61062a906030610905565b60f81b82600161063a8487610918565b6106449190610918565b815181106106545761065461092b565b60200101906001600160f81b031916908160001a905350610676600a86610941565b94508061068281610955565b91505061060e565b918290030190815292915050565b6000602082840312156106aa57600080fd5b5035919050565b60005b838110156106cc5781810151838201526020016106b4565b50506000910152565b600081518084526106ed8160208601602086016106b1565b601f01601f19169290920160200192915050565b6020815260006101ee60208301846106d5565b80356001600160a01b03811681146101aa57600080fd5b60008060006060848603121561074057600080fd5b8335925061075060208501610714565b915061075e60408501610714565b90509250925092565b6000806040838503121561077a57600080fd5b8235915061078a60208401610714565b90509250929050565b6000602082840312156107a557600080fd5b6101ee82610714565b600080604083850312156107c157600080fd5b6107ca83610714565b915061078a60208401610714565b634e487b7160e01b600052602160045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161081a8160118501602087016106b1565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516108548160128501602087016106b1565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b81526000825161088c8160108501602087016106b1565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161081a8160118501602087016106b1565b634e487b7160e01b600052601260045260246000fd5b6000826108ea576108ea6108c5565b500690565b634e487b7160e01b600052601160045260246000fd5b80820180821115610226576102266108ef565b81810381811115610226576102266108ef565b634e487b7160e01b600052603260045260246000fd5b600082610950576109506108c5565b500490565b600060018201610967576109676108ef565b506001019056fea2646970667358221220df2f983c536c6e2785fe0d9f5fc96599a1b8ebef97783007eb0464228ee29a3864736f6c63430008130033",
    "sourceMap": "625:3523:41:-:0;;;965:128;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1944:20:42;;;1974:34;;625:3523:41;;14:351:167;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;193:16;;252:2;237:18;;231:25;193:16;;-1:-1:-1;;;;;;285:31:167;;275:42;;265:70;;331:1;328;321:12;265:70;354:5;344:15;;;14:351;;;;;:::o;:::-;625:3523:41;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100925760003560e01c80637ecebe00116100665780637ecebe0014610107578063bd85b0391461011a578063c45a01551461012d578063c905a4b51461014d578063e985e9c51461015557600080fd5b8062ad800c1461009757806321ff32a9146100c05780633656eec2146100e15780634e41a1fb146100f4575b600080fd5b6100aa6100a5366004610698565b610178565b6040516100b79190610701565b60405180910390f35b6100d36100ce36600461072b565b6101af565b6040519081526020016100b7565b6100d36100ef366004610767565b6101f5565b6100aa610102366004610698565b61022c565b6100d3610115366004610793565b61023a565b6100d3610128366004610698565b610266565b610135610288565b6040516001600160a01b0390911681526020016100b7565b6100d36102cb565b6101686101633660046107ae565b610303565b60405190151581526020016100b7565b60606101aa61018683610347565b6040516020016101969190610701565b604051602081830303815290604052610475565b919050565b60008381526003602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526101ee9101610196565b9392505050565b6000828152602081815260408083206001600160a01b03851684528252808320548151928301526102269101610196565b92915050565b60606101aa61018683610499565b6001600160a01b0381166000908152600660209081526040808320548151928301526101aa9101610196565b6000818152600160209081526040808320548151928301526101aa9101610196565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916102c89101610196565b90565b60006102c87f000000000000000000000000000000000000000000000000000000000000000060405160200161019691815260200190565b6001600160a01b038281166000908152600260209081526040808320938516835292815282822054835160ff90911615159181019190915290916102269101610196565b606060f882901c6001600160f81b03831660006103638261058b565b90506000836003811115610379576103796107d8565b036103ab576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061046d565b60018360038111156103bf576103bf6107d8565b036103eb57806040516020016103d591906107ee565b604051602081830303815290604052935061046d565b60028360038111156103ff576103ff6107d8565b0361041557806040516020016103d59190610827565b6003836003811115610429576104296107d8565b0361046d576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016104909190610701565b60405180910390fd5b606060f882901c6001600160f81b03831660006104b58261058b565b905060008360038111156104cb576104cb6107d8565b036104fd576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061046d565b6001836003811115610511576105116107d8565b0361052757806040516020016103d59190610861565b600283600381111561053b5761053b6107d8565b0361055157806040516020016103d59190610899565b6003836003811115610565576105656107d8565b0361046d576040516c485950455244524956452d575360981b6020820152602d0161045b565b60408051604d8082526080820190925260609190600090826020820181803683370190505090506105bd600a856108db565b6105c8906030610905565b60f81b816105d7600185610918565b815181106105e7576105e761092b565b60200101906001600160f81b031916908160001a905350610609600a85610941565b935060015b841561068a5761061f600a866108db565b61062a906030610905565b60f81b82600161063a8487610918565b6106449190610918565b815181106106545761065461092b565b60200101906001600160f81b031916908160001a905350610676600a86610941565b94508061068281610955565b91505061060e565b918290030190815292915050565b6000602082840312156106aa57600080fd5b5035919050565b60005b838110156106cc5781810151838201526020016106b4565b50506000910152565b600081518084526106ed8160208601602086016106b1565b601f01601f19169290920160200192915050565b6020815260006101ee60208301846106d5565b80356001600160a01b03811681146101aa57600080fd5b60008060006060848603121561074057600080fd5b8335925061075060208501610714565b915061075e60408501610714565b90509250925092565b6000806040838503121561077a57600080fd5b8235915061078a60208401610714565b90509250929050565b6000602082840312156107a557600080fd5b6101ee82610714565b600080604083850312156107c157600080fd5b6107ca83610714565b915061078a60208401610714565b634e487b7160e01b600052602160045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161081a8160118501602087016106b1565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516108548160128501602087016106b1565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b81526000825161088c8160108501602087016106b1565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161081a8160118501602087016106b1565b634e487b7160e01b600052601260045260246000fd5b6000826108ea576108ea6108c5565b500690565b634e487b7160e01b600052601160045260246000fd5b80820180821115610226576102266108ef565b81810381811115610226576102266108ef565b634e487b7160e01b600052603260045260246000fd5b600082610950576109506108c5565b500490565b600060018201610967576109676108ef565b506001019056fea2646970667358221220df2f983c536c6e2785fe0d9f5fc96599a1b8ebef97783007eb0464228ee29a3864736f6c63430008130033",
    "sourceMap": "625:3523:41:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3128:160;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2777:232;;;;;;:::i;:::-;;:::i;:::-;;;1612:25:167;;;1600:2;1585:18;2777:232:41;1466:177:167;1696:182:41;;;;;;:::i;:::-;;:::i;3411:164::-;;;;;;:::i;:::-;;:::i;3724:128::-;;;;;;:::i;:::-;;:::i;2013:152::-;;;;;;:::i;:::-;;:::i;1429:97::-;;;:::i;:::-;;;-1:-1:-1;;;;;2262:32:167;;;2244:51;;2232:2;2217:18;1429:97:41;2098:203:167;1195:111:41;;;:::i;2354:195::-;;;;;;:::i;:::-;;:::i;:::-;;;2918:14:167;;2911:22;2893:41;;2881:2;2866:18;2354:195:41;2753:187:167;3128:160:41;3205:13;3230:51;3249:30;3271:7;3249:21;:30::i;:::-;3238:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;3230:7;:51::i;:::-;3128:160;;;:::o;2777:232::-;2917:7;2955:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;2955:36:41;;;;;;;;;;;:45;;;;;;;;;;;2944:57;;;;;1612:25:167;2936:66:41;;1585:18:167;2944:57:41;1466:177:167;2936:66:41;2777:232;;;;;:::o;1696:182::-;1803:7;1841:19;;;;;;;;;;;-1:-1:-1;;;;;1841:28:41;;;;;;;;;;1830:40;;;;;1612:25:167;1822:49:41;;1585:18:167;1830:40:41;1466:177:167;1822:49:41;1696:182;;;;:::o;3411:164::-;3490:13;3515:53;3534:32;3558:7;3534:23;:32::i;3724:128::-;-1:-1:-1;;;;;3827:16:41;;3789:7;3827:16;;;:7;:16;;;;;;;;;3816:28;;;;;1612:25:167;3808:37:41;;1585:18:167;3816:28:41;1466:177:167;2013:152:41;2097:7;2135:21;;;:12;:21;;;;;;;;;2124:33;;;;;1612:25:167;2116:42:41;;1585:18:167;2124:33:41;1466:177:167;1429:97:41;1498:20;;;-1:-1:-1;;;;;1509:8:41;2262:32:167;1498:20:41;;;2244:51:167;1471:7:41;;1490:29;;2217:18:167;1498:20:41;2098:203:167;1490:29:41;1429:97;:::o;1195:111::-;1244:7;1263:36;1282:15;1271:27;;;;;;1612:25:167;;1600:2;1585:18;;1466:177;2354:195:41;-1:-1:-1;;;;;2504:26:41;;;2469:4;2504:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;2493:48;;2504:36;;;;2918:14:167;2911:22;2493:48:41;;;2893:41:167;;;;2469:4:41;;2485:57;;2866:18:167;2493:48:41;2753:187:167;2533:719:32;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:32;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:32;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:32;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;4200:29:167;3187:47:32;;;4188:42:167;4246:12;;3187:47:32;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;4040:106:41:-;4132:6;4109:30;;-1:-1:-1;;;4109:30:41;;;;;;;;:::i;:::-;;;;;;;;3384:705:32;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:32;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:32;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:32;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:32;;;5601:28:167;5645:12;;4038:33:32;5399:264:167;4247:1154:32;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:32;-1:-1:-1;4841:9:32;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:32;;;;;;;;-1:-1:-1;4878:10:32;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:32;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:32;;;;;;;;-1:-1:-1;5084:10:32;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:32;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:32:o;14:180:167:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:167;;14:180;-1:-1:-1;14:180:167:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:167;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:167;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:167:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:173::-;1023:20;;-1:-1:-1;;;;;1072:31:167;;1062:42;;1052:70;;1118:1;1115;1108:12;1133:328;1210:6;1218;1226;1279:2;1267:9;1258:7;1254:23;1250:32;1247:52;;;1295:1;1292;1285:12;1247:52;1331:9;1318:23;1308:33;;1360:38;1394:2;1383:9;1379:18;1360:38;:::i;:::-;1350:48;;1417:38;1451:2;1440:9;1436:18;1417:38;:::i;:::-;1407:48;;1133:328;;;;;:::o;1648:254::-;1716:6;1724;1777:2;1765:9;1756:7;1752:23;1748:32;1745:52;;;1793:1;1790;1783:12;1745:52;1829:9;1816:23;1806:33;;1858:38;1892:2;1881:9;1877:18;1858:38;:::i;:::-;1848:48;;1648:254;;;;;:::o;1907:186::-;1966:6;2019:2;2007:9;1998:7;1994:23;1990:32;1987:52;;;2035:1;2032;2025:12;1987:52;2058:29;2077:9;2058:29;:::i;2488:260::-;2556:6;2564;2617:2;2605:9;2596:7;2592:23;2588:32;2585:52;;;2633:1;2630;2623:12;2585:52;2656:29;2675:9;2656:29;:::i;:::-;2646:39;;2704:38;2738:2;2727:9;2723:18;2704:38;:::i;2945:127::-;3006:10;3001:3;2997:20;2994:1;2987:31;3037:4;3034:1;3027:15;3061:4;3058:1;3051:15;3077:449;-1:-1:-1;;;3334:3:167;3327:32;3309:3;3388:6;3382:13;3404:75;3472:6;3467:2;3462:3;3458:12;3451:4;3443:6;3439:17;3404:75;:::i;:::-;3499:16;;;;3517:2;3495:25;;3077:449;-1:-1:-1;;3077:449:167:o;3531:450::-;-1:-1:-1;;;3788:3:167;3781:33;3763:3;3843:6;3837:13;3859:75;3927:6;3922:2;3917:3;3913:12;3906:4;3898:6;3894:17;3859:75;:::i;:::-;3954:16;;;;3972:2;3950:25;;3531:450;-1:-1:-1;;3531:450:167:o;4492:448::-;-1:-1:-1;;;4749:3:167;4742:31;4724:3;4802:6;4796:13;4818:75;4886:6;4881:2;4876:3;4872:12;4865:4;4857:6;4853:17;4818:75;:::i;:::-;4913:16;;;;4931:2;4909:25;;4492:448;-1:-1:-1;;4492:448:167:o;4945:449::-;-1:-1:-1;;;5202:3:167;5195:32;5177:3;5256:6;5250:13;5272:75;5340:6;5335:2;5330:3;5326:12;5319:4;5311:6;5307:17;5272:75;:::i;5800:127::-;5861:10;5856:3;5852:20;5849:1;5842:31;5892:4;5889:1;5882:15;5916:4;5913:1;5906:15;5932:112;5964:1;5990;5980:35;;5995:18;;:::i;:::-;-1:-1:-1;6029:9:167;;5932:112::o;6049:127::-;6110:10;6105:3;6101:20;6098:1;6091:31;6141:4;6138:1;6131:15;6165:4;6162:1;6155:15;6181:125;6246:9;;;6267:10;;;6264:36;;;6280:18;;:::i;6311:128::-;6378:9;;;6399:11;;;6396:37;;;6413:18;;:::i;6444:127::-;6505:10;6500:3;6496:20;6493:1;6486:31;6536:4;6533:1;6526:15;6560:4;6557:1;6550:15;6576:120;6616:1;6642;6632:35;;6647:18;;:::i;:::-;-1:-1:-1;6681:9:167;;6576:120::o;6701:135::-;6740:3;6761:17;;;6758:43;;6781:18;;:::i;:::-;-1:-1:-1;6828:1:167;6817:13;;6701:135::o",
    "linkReferences": {},
    "immutableReferences": {
      "12488": [
        {
          "start": 662,
          "length": 32
        }
      ],
      "12490": [
        {
          "start": 722,
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash_\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_factory_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"constructor\":{\"params\":{\"_factory_\":\"The factory which is used to deploy the linking contracts\",\"_linkerCodeHash_\":\"The hash of the erc20 linker contract deploy code\"}},\"factory()\":{\"returns\":{\"_0\":\"The linking factory.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"linkerCodeHash()\":{\"returns\":{\"_0\":\"The code hash.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}}},\"title\":\"MultiTokenDataProvider\",\"version\":1},\"userdoc\":{\"errors\":{\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"constructor\":{\"notice\":\"Initializes the MultiToken's data provider.\"},\"factory()\":{\"notice\":\"Gets the factory which is used to deploy the linking contracts.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"linkerCodeHash()\":{\"notice\":\"Gets the code hash of the erc20 linker contract.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"}},\"notice\":\"The MultiToken data provider.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/token/MultiTokenDataProvider.sol\":\"MultiTokenDataProvider\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0\",\"dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
          "stateMutability": "pure",
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
          "stateMutability": "pure",
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
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57",
        "urls": [
          "bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0",
          "dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs"
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
    "id": 12484,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "IHyperdrive": [
        7431
      ],
      "IMultiTokenRead": [
        7868
      ],
      "MultiTokenDataProvider": [
        12483
      ],
      "MultiTokenStorage": [
        12544
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:4110:41",
    "nodes": [
      {
        "id": 12264,
        "nodeType": "PragmaDirective",
        "src": "39:23:41",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 12266,
        "nodeType": "ImportDirective",
        "src": "64:51:41",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "../libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 12484,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12265,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "73:7:41",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12268,
        "nodeType": "ImportDirective",
        "src": "116:60:41",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 12484,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12267,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "125:11:41",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12270,
        "nodeType": "ImportDirective",
        "src": "177:68:41",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
        "file": "../interfaces/IMultiTokenRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 12484,
        "sourceUnit": 7869,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12269,
              "name": "IMultiTokenRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7868,
              "src": "186:15:41",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12272,
        "nodeType": "ImportDirective",
        "src": "246:60:41",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiTokenStorage.sol",
        "file": "./MultiTokenStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 12484,
        "sourceUnit": 12545,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12271,
              "name": "MultiTokenStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12544,
              "src": "255:17:41",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12483,
        "nodeType": "ContractDefinition",
        "src": "625:3523:41",
        "nodes": [
          {
            "id": 12290,
            "nodeType": "FunctionDefinition",
            "src": "965:128:41",
            "nodes": [],
            "body": {
              "id": 12289,
              "nodeType": "Block",
              "src": "1091:2:41",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 12278,
              "nodeType": "StructuredDocumentation",
              "src": "740:220:41",
              "text": "@notice Initializes the MultiToken's data provider.\n @param _linkerCodeHash_ The hash of the erc20 linker contract deploy code\n @param _factory_ The factory which is used to deploy the linking contracts"
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 12285,
                    "name": "_linkerCodeHash_",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12280,
                    "src": "1062:16:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "id": 12286,
                    "name": "_factory_",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12282,
                    "src": "1080:9:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 12287,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 12284,
                  "name": "MultiTokenStorage",
                  "nameLocations": [
                    "1044:17:41"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 12544,
                  "src": "1044:17:41"
                },
                "nodeType": "ModifierInvocation",
                "src": "1044:46:41"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 12283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12280,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash_",
                  "nameLocation": "994:16:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12290,
                  "src": "986:24:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12279,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12282,
                  "mutability": "mutable",
                  "name": "_factory_",
                  "nameLocation": "1028:9:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12290,
                  "src": "1020:17:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "976:67:41"
            },
            "returnParameters": {
              "id": 12288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1091:0:41"
            },
            "scope": 12483,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 12304,
            "nodeType": "FunctionDefinition",
            "src": "1195:111:41",
            "nodes": [],
            "body": {
              "id": 12303,
              "nodeType": "Block",
              "src": "1253:53:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 12299,
                            "name": "_linkerCodeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12490,
                            "src": "1282:15:41",
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
                            "id": 12297,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1271:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1275:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1271:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1271:27:41",
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
                      "id": 12296,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "1263:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1263:36:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12302,
                  "nodeType": "ExpressionStatement",
                  "src": "1263:36:41"
                }
              ]
            },
            "baseFunctions": [
              7831
            ],
            "documentation": {
              "id": 12291,
              "nodeType": "StructuredDocumentation",
              "src": "1099:91:41",
              "text": "@notice Gets the code hash of the erc20 linker contract.\n @return The code hash."
            },
            "functionSelector": "c905a4b5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "linkerCodeHash",
            "nameLocation": "1204:14:41",
            "parameters": {
              "id": 12292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1218:2:41"
            },
            "returnParameters": {
              "id": 12295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12294,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12304,
                  "src": "1244:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12293,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1244:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1243:9:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12318,
            "nodeType": "FunctionDefinition",
            "src": "1429:97:41",
            "nodes": [],
            "body": {
              "id": 12317,
              "nodeType": "Block",
              "src": "1480:46:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 12313,
                            "name": "_factory",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12488,
                            "src": "1509:8:41",
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
                            "id": 12311,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1498:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1502:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1498:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1498:20:41",
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
                      "id": 12310,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "1490:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1490:29:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12316,
                  "nodeType": "ExpressionStatement",
                  "src": "1490:29:41"
                }
              ]
            },
            "baseFunctions": [
              7826
            ],
            "documentation": {
              "id": 12305,
              "nodeType": "StructuredDocumentation",
              "src": "1312:112:41",
              "text": "@notice Gets the factory which is used to deploy the linking contracts.\n @return The linking factory."
            },
            "functionSelector": "c45a0155",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "factory",
            "nameLocation": "1438:7:41",
            "parameters": {
              "id": 12306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1445:2:41"
            },
            "returnParameters": {
              "id": 12309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12308,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12318,
                  "src": "1471:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12307,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1471:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1470:9:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12341,
            "nodeType": "FunctionDefinition",
            "src": "1696:182:41",
            "nodes": [],
            "body": {
              "id": 12340,
              "nodeType": "Block",
              "src": "1812:66:41",
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
                                "id": 12332,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12496,
                                "src": "1841:10:41",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 12334,
                              "indexExpression": {
                                "id": 12333,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12321,
                                "src": "1852:7:41",
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
                              "src": "1841:19:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 12336,
                            "indexExpression": {
                              "id": 12335,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12323,
                              "src": "1861:7:41",
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
                            "src": "1841:28:41",
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
                            "id": 12330,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1830:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1834:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1830:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1830:40:41",
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
                      "id": 12329,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "1822:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1822:49:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12339,
                  "nodeType": "ExpressionStatement",
                  "src": "1822:49:41"
                }
              ]
            },
            "baseFunctions": [
              7860
            ],
            "documentation": {
              "id": 12319,
              "nodeType": "StructuredDocumentation",
              "src": "1532:159:41",
              "text": "@notice Gets an account's balance of a sub-token.\n @param tokenId The sub-token id.\n @param account The account.\n @return The balance."
            },
            "functionSelector": "3656eec2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "1705:9:41",
            "overrides": {
              "id": 12325,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1785:8:41"
            },
            "parameters": {
              "id": 12324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12321,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1732:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12341,
                  "src": "1724:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1724:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12323,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1757:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12341,
                  "src": "1749:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1749:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1714:56:41"
            },
            "returnParameters": {
              "id": 12328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12327,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12341,
                  "src": "1803:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1803:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1802:9:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12360,
            "nodeType": "FunctionDefinition",
            "src": "2013:152:41",
            "nodes": [],
            "body": {
              "id": 12359,
              "nodeType": "Block",
              "src": "2106:59:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 12353,
                              "name": "_totalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12500,
                              "src": "2135:12:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 12355,
                            "indexExpression": {
                              "id": 12354,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12344,
                              "src": "2148:7:41",
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
                            "src": "2135:21:41",
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
                            "id": 12351,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2124:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2128:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2124:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2124:33:41",
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
                      "id": 12350,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "2116:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2116:42:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12358,
                  "nodeType": "ExpressionStatement",
                  "src": "2116:42:41"
                }
              ]
            },
            "baseFunctions": [
              7821
            ],
            "documentation": {
              "id": 12342,
              "nodeType": "StructuredDocumentation",
              "src": "1884:124:41",
              "text": "@notice Gets the total supply of a sub-token.\n @param tokenId The sub-token id.\n @return The total supply."
            },
            "functionSelector": "bd85b039",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "2022:11:41",
            "overrides": {
              "id": 12346,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2079:8:41"
            },
            "parameters": {
              "id": 12345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12344,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2051:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12360,
                  "src": "2043:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12343,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2043:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2033:31:41"
            },
            "returnParameters": {
              "id": 12349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12348,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12360,
                  "src": "2097:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2096:9:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12383,
            "nodeType": "FunctionDefinition",
            "src": "2354:195:41",
            "nodes": [],
            "body": {
              "id": 12382,
              "nodeType": "Block",
              "src": "2475:74:41",
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
                                "id": 12374,
                                "name": "_isApprovedForAll",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12506,
                                "src": "2504:17:41",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                  "typeString": "mapping(address => mapping(address => bool))"
                                }
                              },
                              "id": 12376,
                              "indexExpression": {
                                "id": 12375,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12363,
                                "src": "2522:7:41",
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
                              "src": "2504:26:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 12378,
                            "indexExpression": {
                              "id": 12377,
                              "name": "operator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12365,
                              "src": "2531:8:41",
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
                            "src": "2504:36:41",
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
                            "id": 12372,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2493:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2497:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2493:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2493:48:41",
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
                      "id": 12371,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "2485:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2485:57:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12381,
                  "nodeType": "ExpressionStatement",
                  "src": "2485:57:41"
                }
              ]
            },
            "baseFunctions": [
              7840
            ],
            "documentation": {
              "id": 12361,
              "nodeType": "StructuredDocumentation",
              "src": "2171:178:41",
              "text": "@notice Gets the approval status of an operator for an account.\n @param account The account.\n @param operator The operator.\n @return The approval status."
            },
            "functionSelector": "e985e9c5",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "2363:16:41",
            "overrides": {
              "id": 12367,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2451:8:41"
            },
            "parameters": {
              "id": 12366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12363,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2397:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12383,
                  "src": "2389:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12362,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2389:7:41",
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
                  "id": 12365,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2422:8:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12383,
                  "src": "2414:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12364,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2414:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2379:57:41"
            },
            "returnParameters": {
              "id": 12370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12369,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12383,
                  "src": "2469:4:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12368,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2469:4:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2468:6:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12410,
            "nodeType": "FunctionDefinition",
            "src": "2777:232:41",
            "nodes": [],
            "body": {
              "id": 12409,
              "nodeType": "Block",
              "src": "2926:83:41",
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
                                  "id": 12399,
                                  "name": "_perTokenApprovals",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 12514,
                                  "src": "2955:18:41",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                                  }
                                },
                                "id": 12401,
                                "indexExpression": {
                                  "id": 12400,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 12386,
                                  "src": "2974:7:41",
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
                                "src": "2955:27:41",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 12403,
                              "indexExpression": {
                                "id": 12402,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12388,
                                "src": "2983:7:41",
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
                              "src": "2955:36:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 12405,
                            "indexExpression": {
                              "id": 12404,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12390,
                              "src": "2992:7:41",
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
                            "src": "2955:45:41",
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
                            "id": 12397,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2944:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12398,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2948:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2944:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12406,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2944:57:41",
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
                      "id": 12396,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "2936:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2936:66:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12408,
                  "nodeType": "ExpressionStatement",
                  "src": "2936:66:41"
                }
              ]
            },
            "baseFunctions": [
              7851
            ],
            "documentation": {
              "id": 12384,
              "nodeType": "StructuredDocumentation",
              "src": "2555:217:41",
              "text": "@notice Gets the approval status of an operator for an account.\n @param tokenId The sub-token id.\n @param account The account.\n @param spender The spender.\n @return The approval status."
            },
            "functionSelector": "21ff32a9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "perTokenApprovals",
            "nameLocation": "2786:17:41",
            "overrides": {
              "id": 12392,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2899:8:41"
            },
            "parameters": {
              "id": 12391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12386,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2821:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12410,
                  "src": "2813:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2813:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12388,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2846:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12410,
                  "src": "2838:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12387,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2838:7:41",
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
                  "id": 12390,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2871:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12410,
                  "src": "2863:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2863:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2803:81:41"
            },
            "returnParameters": {
              "id": 12395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12394,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12410,
                  "src": "2917:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2917:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2916:9:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12430,
            "nodeType": "FunctionDefinition",
            "src": "3128:160:41",
            "nodes": [],
            "body": {
              "id": 12429,
              "nodeType": "Block",
              "src": "3220:68:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 12424,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12413,
                                "src": "3271:7:41",
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
                                "id": 12422,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8311,
                                "src": "3249:7:41",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 12423,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3257:13:41",
                              "memberName": "assetIdToName",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8137,
                              "src": "3249:21:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 12425,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3249:30:41",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 12420,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3238:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3242:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3238:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12426,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3238:42:41",
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
                      "id": 12419,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "3230:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3230:51:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12428,
                  "nodeType": "ExpressionStatement",
                  "src": "3230:51:41"
                }
              ]
            },
            "baseFunctions": [
              7807
            ],
            "documentation": {
              "id": 12411,
              "nodeType": "StructuredDocumentation",
              "src": "3015:108:41",
              "text": "@notice Gets the name of a sub-token.\n @param tokenId The sub-token id.\n @return The name."
            },
            "functionSelector": "00ad800c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "3137:4:41",
            "overrides": {
              "id": 12415,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3187:8:41"
            },
            "parameters": {
              "id": 12414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12413,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3159:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12430,
                  "src": "3151:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3151:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3141:31:41"
            },
            "returnParameters": {
              "id": 12418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12417,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12430,
                  "src": "3205:13:41",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12416,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3205:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3204:15:41"
            },
            "scope": 12483,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12450,
            "nodeType": "FunctionDefinition",
            "src": "3411:164:41",
            "nodes": [],
            "body": {
              "id": 12449,
              "nodeType": "Block",
              "src": "3505:70:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 12444,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12433,
                                "src": "3558:7:41",
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
                                "id": 12442,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8311,
                                "src": "3534:7:41",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 12443,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3542:15:41",
                              "memberName": "assetIdToSymbol",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8221,
                              "src": "3534:23:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                "typeString": "function (uint256) pure returns (string memory)"
                              }
                            },
                            "id": 12445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3534:32:41",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 12440,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3523:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3527:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3523:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3523:44:41",
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
                      "id": 12439,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "3515:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3515:53:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12448,
                  "nodeType": "ExpressionStatement",
                  "src": "3515:53:41"
                }
              ]
            },
            "baseFunctions": [
              7814
            ],
            "documentation": {
              "id": 12431,
              "nodeType": "StructuredDocumentation",
              "src": "3294:112:41",
              "text": "@notice Gets the symbol of a sub-token.\n @param tokenId The sub-token id.\n @return The symbol."
            },
            "functionSelector": "4e41a1fb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "3420:6:41",
            "overrides": {
              "id": 12435,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3472:8:41"
            },
            "parameters": {
              "id": 12434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12433,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3444:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12450,
                  "src": "3436:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12432,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3436:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3426:31:41"
            },
            "returnParameters": {
              "id": 12438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12437,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12450,
                  "src": "3490:13:41",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12436,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3490:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3489:15:41"
            },
            "scope": 12483,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12469,
            "nodeType": "FunctionDefinition",
            "src": "3724:128:41",
            "nodes": [],
            "body": {
              "id": 12468,
              "nodeType": "Block",
              "src": "3798:54:41",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 12462,
                              "name": "_nonces",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12526,
                              "src": "3827:7:41",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 12464,
                            "indexExpression": {
                              "id": 12463,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12453,
                              "src": "3835:7:41",
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
                            "src": "3827:16:41",
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
                            "id": 12460,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3816:3:41",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 12461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3820:6:41",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3816:10:41",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 12465,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3816:28:41",
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
                      "id": 12459,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "3808:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3808:37:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12467,
                  "nodeType": "ExpressionStatement",
                  "src": "3808:37:41"
                }
              ]
            },
            "baseFunctions": [
              7867
            ],
            "documentation": {
              "id": 12451,
              "nodeType": "StructuredDocumentation",
              "src": "3581:138:41",
              "text": "@notice Gets the permitForAll signature nonce for an account.\n @param account The account.\n @return The signature nonce."
            },
            "functionSelector": "7ecebe00",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "nonces",
            "nameLocation": "3733:6:41",
            "overrides": {
              "id": 12455,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3771:8:41"
            },
            "parameters": {
              "id": 12454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12453,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3748:7:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12469,
                  "src": "3740:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12452,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3740:7:41",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3739:17:41"
            },
            "returnParameters": {
              "id": 12458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12457,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 12469,
                  "src": "3789:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12456,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3789:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3788:9:41"
            },
            "scope": 12483,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 12482,
            "nodeType": "FunctionDefinition",
            "src": "4040:106:41",
            "nodes": [],
            "body": {
              "id": 12481,
              "nodeType": "Block",
              "src": "4092:54:41",
              "nodes": [],
              "statements": [
                {
                  "errorCall": {
                    "arguments": [
                      {
                        "id": 12478,
                        "name": "_bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12472,
                        "src": "4132:6:41",
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
                        "id": 12475,
                        "name": "IHyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7431,
                        "src": "4109:11:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                          "typeString": "type(contract IHyperdrive)"
                        }
                      },
                      "id": 12477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4121:10:41",
                      "memberName": "ReturnData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7364,
                      "src": "4109:22:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 12479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4109:30:41",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12480,
                  "nodeType": "RevertStatement",
                  "src": "4102:37:41"
                }
              ]
            },
            "documentation": {
              "id": 12470,
              "nodeType": "StructuredDocumentation",
              "src": "3858:177:41",
              "text": "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revert",
            "nameLocation": "4049:7:41",
            "parameters": {
              "id": 12473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12472,
                  "mutability": "mutable",
                  "name": "_bytes",
                  "nameLocation": "4070:6:41",
                  "nodeType": "VariableDeclaration",
                  "scope": 12482,
                  "src": "4057:19:41",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 12471,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4057:5:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4056:21:41"
            },
            "returnParameters": {
              "id": 12474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4092:0:41"
            },
            "scope": 12483,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 12274,
              "name": "MultiTokenStorage",
              "nameLocations": [
                "660:17:41"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 12544,
              "src": "660:17:41"
            },
            "id": 12275,
            "nodeType": "InheritanceSpecifier",
            "src": "660:17:41"
          },
          {
            "baseName": {
              "id": 12276,
              "name": "IMultiTokenRead",
              "nameLocations": [
                "679:15:41"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7868,
              "src": "679:15:41"
            },
            "id": 12277,
            "nodeType": "InheritanceSpecifier",
            "src": "679:15:41"
          }
        ],
        "canonicalName": "MultiTokenDataProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 12273,
          "nodeType": "StructuredDocumentation",
          "src": "308:317:41",
          "text": "@author DELV\n @title MultiTokenDataProvider\n @notice The MultiToken data provider.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          12483,
          7868,
          12544
        ],
        "name": "MultiTokenDataProvider",
        "nameLocation": "634:22:41",
        "scope": 12484,
        "usedErrors": [
          7364
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 41
} as const;
