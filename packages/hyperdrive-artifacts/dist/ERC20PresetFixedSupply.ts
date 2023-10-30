export const ERC20PresetFixedSupply = {
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "initialSupply",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: {
    object:
      "0x60806040523480156200001157600080fd5b5060405162000e3338038062000e33833981016040819052620000349162000202565b8383600362000044838262000325565b50600462000053828262000325565b5050506200006881836200007260201b60201c565b5050505062000419565b6001600160a01b038216620000cd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000e19190620003f1565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200016557600080fd5b81516001600160401b03808211156200018257620001826200013d565b604051601f8301601f19908116603f01168101908282118183101715620001ad57620001ad6200013d565b81604052838152602092508683858801011115620001ca57600080fd5b600091505b83821015620001ee5785820183015181830184015290820190620001cf565b600093810190920192909252949350505050565b600080600080608085870312156200021957600080fd5b84516001600160401b03808211156200023157600080fd5b6200023f8883890162000153565b955060208701519150808211156200025657600080fd5b50620002658782880162000153565b60408701516060880151919550935090506001600160a01b03811681146200028c57600080fd5b939692955090935050565b600181811c90821680620002ac57607f821691505b602082108103620002cd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200013857600081815260208120601f850160051c81016020861015620002fc5750805b601f850160051c820191505b818110156200031d5782815560010162000308565b505050505050565b81516001600160401b038111156200034157620003416200013d565b620003598162000352845462000297565b84620002d3565b602080601f831160018114620003915760008415620003785750858301515b600019600386901b1c1916600185901b1785556200031d565b600085815260208120601f198616915b82811015620003c257888601518255948401946001909101908401620003a1565b5085821015620003e15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200041357634e487b7160e01b600052601160045260246000fd5b92915050565b610a0a80620004296000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101ad578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806342966c681461015c57806370a082311461017157806379cc67901461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101ee565b6040516100e9919061083b565b60405180910390f35b6101056101003660046108a5565b610280565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b6101056101353660046108cf565b61029a565b604051601281526020016100e9565b6101056101573660046108a5565b6102be565b61016f61016a36600461090b565b6102e0565b005b61011961017f366004610924565b6001600160a01b031660009081526020819052604090205490565b61016f6101a83660046108a5565b6102ed565b6100dc610306565b6101056101c33660046108a5565b610315565b6101056101d63660046108a5565b610395565b6101196101e9366004610946565b6103a3565b6060600380546101fd90610979565b80601f016020809104026020016040519081016040528092919081815260200182805461022990610979565b80156102765780601f1061024b57610100808354040283529160200191610276565b820191906000526020600020905b81548152906001019060200180831161025957829003601f168201915b5050505050905090565b60003361028e8185856103ce565b60019150505b92915050565b6000336102a88582856104f3565b6102b385858561056d565b506001949350505050565b60003361028e8185856102d183836103a3565b6102db91906109b3565b6103ce565b6102ea3382610711565b50565b6102f88233836104f3565b6103028282610711565b5050565b6060600480546101fd90610979565b6000338161032382866103a3565b9050838110156103885760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102b382868684036103ce565b60003361028e81858561056d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104305760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161037f565b6001600160a01b0382166104915760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161037f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006104ff84846103a3565b90506000198114610567578181101561055a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161037f565b61056784848484036103ce565b50505050565b6001600160a01b0383166105d15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161037f565b6001600160a01b0382166106335760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161037f565b6001600160a01b038316600090815260208190526040902054818110156106ab5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161037f565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610567565b6001600160a01b0382166107715760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161037f565b6001600160a01b038216600090815260208190526040902054818110156107e55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161037f565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016104e6565b600060208083528351808285015260005b818110156108685785810183015185820160400152820161084c565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146108a057600080fd5b919050565b600080604083850312156108b857600080fd5b6108c183610889565b946020939093013593505050565b6000806000606084860312156108e457600080fd5b6108ed84610889565b92506108fb60208501610889565b9150604084013590509250925092565b60006020828403121561091d57600080fd5b5035919050565b60006020828403121561093657600080fd5b61093f82610889565b9392505050565b6000806040838503121561095957600080fd5b61096283610889565b915061097060208401610889565b90509250929050565b600181811c9082168061098d57607f821691505b6020821081036109ad57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561029457634e487b7160e01b600052601160045260246000fdfea26469706673582212201e6c0b5abdacef13693fb762a2bf13a35a798a9d019ca97c3cf2c7b8e0e5a5b464736f6c63430008130033",
    sourceMap:
      "637:349:80:-:0;;;828:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;926:4;932:6;2046:5:74;:13;926:4:80;2046:5:74;:13;:::i;:::-;-1:-1:-1;2069:7:74;:17;2079:7;2069;:17;:::i;:::-;;1980:113;;950:27:80::1;956:5;963:13;950:5;;;:27;;:::i;:::-;828:156:::0;;;;637:349;;8520:535:74;-1:-1:-1;;;;;8603:21:74;;8595:65;;;;-1:-1:-1;;;8595:65:74;;4578:2:165;8595:65:74;;;4560:21:165;4617:2;4597:18;;;4590:30;4656:33;4636:18;;;4629:61;4707:18;;8595:65:74;;;;;;;;8747:6;8731:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8899:18:74;;:9;:18;;;;;;;;;;;:28;;;;;;8952:37;5109:25:165;;;8952:37:74;;5082:18:165;8952:37:74;;;;;;;8520:535;;:::o;12073:91::-;;;;:::o;14:127:165:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:165;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:165;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:165:o;991:791::-;1108:6;1116;1124;1132;1185:3;1173:9;1164:7;1160:23;1156:33;1153:53;;;1202:1;1199;1192:12;1153:53;1229:16;;-1:-1:-1;;;;;1294:14:165;;;1291:34;;;1321:1;1318;1311:12;1291:34;1344:61;1397:7;1388:6;1377:9;1373:22;1344:61;:::i;:::-;1334:71;;1451:2;1440:9;1436:18;1430:25;1414:41;;1480:2;1470:8;1467:16;1464:36;;;1496:1;1493;1486:12;1464:36;;1519:63;1574:7;1563:8;1552:9;1548:24;1519:63;:::i;:::-;1622:2;1607:18;;1601:25;1669:2;1654:18;;1648:25;1509:73;;-1:-1:-1;1601:25:165;-1:-1:-1;1648:25:165;-1:-1:-1;;;;;;1702:31:165;;1692:42;;1682:70;;1748:1;1745;1738:12;1682:70;991:791;;;;-1:-1:-1;991:791:165;;-1:-1:-1;;991:791:165:o;1787:380::-;1866:1;1862:12;;;;1909;;;1930:61;;1984:4;1976:6;1972:17;1962:27;;1930:61;2037:2;2029:6;2026:14;2006:18;2003:38;2000:161;;2083:10;2078:3;2074:20;2071:1;2064:31;2118:4;2115:1;2108:15;2146:4;2143:1;2136:15;2000:161;;1787:380;;;:::o;2298:545::-;2400:2;2395:3;2392:11;2389:448;;;2436:1;2461:5;2457:2;2450:17;2506:4;2502:2;2492:19;2576:2;2564:10;2560:19;2557:1;2553:27;2547:4;2543:38;2612:4;2600:10;2597:20;2594:47;;;-1:-1:-1;2635:4:165;2594:47;2690:2;2685:3;2681:12;2678:1;2674:20;2668:4;2664:31;2654:41;;2745:82;2763:2;2756:5;2753:13;2745:82;;;2808:17;;;2789:1;2778:13;2745:82;;;2749:3;;;2298:545;;;:::o;3019:1352::-;3139:10;;-1:-1:-1;;;;;3161:30:165;;3158:56;;;3194:18;;:::i;:::-;3223:97;3313:6;3273:38;3305:4;3299:11;3273:38;:::i;:::-;3267:4;3223:97;:::i;:::-;3375:4;;3439:2;3428:14;;3456:1;3451:663;;;;4158:1;4175:6;4172:89;;;-1:-1:-1;4227:19:165;;;4221:26;4172:89;-1:-1:-1;;2976:1:165;2972:11;;;2968:24;2964:29;2954:40;3000:1;2996:11;;;2951:57;4274:81;;3421:944;;3451:663;2245:1;2238:14;;;2282:4;2269:18;;-1:-1:-1;;3487:20:165;;;3605:236;3619:7;3616:1;3613:14;3605:236;;;3708:19;;;3702:26;3687:42;;3800:27;;;;3768:1;3756:14;;;;3635:19;;3605:236;;;3609:3;3869:6;3860:7;3857:19;3854:201;;;3930:19;;;3924:26;-1:-1:-1;;4013:1:165;4009:14;;;4025:3;4005:24;4001:37;3997:42;3982:58;3967:74;;3854:201;-1:-1:-1;;;;;4101:1:165;4085:14;;;4081:22;4068:36;;-1:-1:-1;3019:1352:165:o;4736:222::-;4801:9;;;4822:10;;;4819:133;;;4874:10;4869:3;4865:20;4862:1;4855:31;4909:4;4906:1;4899:15;4937:4;4934:1;4927:15;4819:133;4736:222;;;;:::o;4963:177::-;637:349:80;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101ad578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806342966c681461015c57806370a082311461017157806379cc67901461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101ee565b6040516100e9919061083b565b60405180910390f35b6101056101003660046108a5565b610280565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b6101056101353660046108cf565b61029a565b604051601281526020016100e9565b6101056101573660046108a5565b6102be565b61016f61016a36600461090b565b6102e0565b005b61011961017f366004610924565b6001600160a01b031660009081526020819052604090205490565b61016f6101a83660046108a5565b6102ed565b6100dc610306565b6101056101c33660046108a5565b610315565b6101056101d63660046108a5565b610395565b6101196101e9366004610946565b6103a3565b6060600380546101fd90610979565b80601f016020809104026020016040519081016040528092919081815260200182805461022990610979565b80156102765780601f1061024b57610100808354040283529160200191610276565b820191906000526020600020905b81548152906001019060200180831161025957829003601f168201915b5050505050905090565b60003361028e8185856103ce565b60019150505b92915050565b6000336102a88582856104f3565b6102b385858561056d565b506001949350505050565b60003361028e8185856102d183836103a3565b6102db91906109b3565b6103ce565b6102ea3382610711565b50565b6102f88233836104f3565b6103028282610711565b5050565b6060600480546101fd90610979565b6000338161032382866103a3565b9050838110156103885760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102b382868684036103ce565b60003361028e81858561056d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104305760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161037f565b6001600160a01b0382166104915760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161037f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006104ff84846103a3565b90506000198114610567578181101561055a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161037f565b61056784848484036103ce565b50505050565b6001600160a01b0383166105d15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161037f565b6001600160a01b0382166106335760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161037f565b6001600160a01b038316600090815260208190526040902054818110156106ab5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161037f565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610567565b6001600160a01b0382166107715760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161037f565b6001600160a01b038216600090815260208190526040902054818110156107e55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161037f565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016104e6565b600060208083528351808285015260005b818110156108685785810183015185820160400152820161084c565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146108a057600080fd5b919050565b600080604083850312156108b857600080fd5b6108c183610889565b946020939093013593505050565b6000806000606084860312156108e457600080fd5b6108ed84610889565b92506108fb60208501610889565b9150604084013590509250925092565b60006020828403121561091d57600080fd5b5035919050565b60006020828403121561093657600080fd5b61093f82610889565b9392505050565b6000806040838503121561095957600080fd5b61096283610889565b915061097060208401610889565b90509250929050565b600181811c9082168061098d57607f821691505b6020821081036109ad57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561029457634e487b7160e01b600052601160045260246000fdfea26469706673582212201e6c0b5abdacef13693fb762a2bf13a35a798a9d019ca97c3cf2c7b8e0e5a5b464736f6c63430008130033",
    sourceMap:
      "637:349:80:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98:74;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4444:197;;;;;;:::i;:::-;;:::i;:::-;;;1169:14:165;;1162:22;1144:41;;1132:2;1117:18;4444:197:74;1004:187:165;3255:106:74;3342:12;;3255:106;;;1342:25:165;;;1330:2;1315:18;3255:106:74;1196:177:165;5203:256:74;;;;;;:::i;:::-;;:::i;3104:91::-;;;3186:2;1853:36:165;;1841:2;1826:18;3104:91:74;1711:184:165;5854:234:74;;;;;;:::i;:::-;;:::i;578:89:76:-;;;;;;:::i;:::-;;:::i;:::-;;3419:125:74;;;;;;:::i;:::-;-1:-1:-1;;;;;3519:18:74;3493:7;3519:18;;;;;;;;;;;;3419:125;973:161:76;;;;;;:::i;:::-;;:::i;2369:102:74:-;;;:::i;6575:427::-;;;;;;:::i;:::-;;:::i;3740:189::-;;;;;;:::i;:::-;;:::i;3987:149::-;;;;;;:::i;:::-;;:::i;2158:98::-;2212:13;2244:5;2237:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98;:::o;4444:197::-;4527:4;719:10:84;4581:32:74;719:10:84;4597:7:74;4606:6;4581:8;:32::i;:::-;4630:4;4623:11;;;4444:197;;;;;:::o;5203:256::-;5300:4;719:10:84;5356:38:74;5372:4;719:10:84;5387:6:74;5356:15;:38::i;:::-;5404:27;5414:4;5420:2;5424:6;5404:9;:27::i;:::-;-1:-1:-1;5448:4:74;;5203:256;-1:-1:-1;;;;5203:256:74:o;5854:234::-;5942:4;719:10:84;5996:64:74;719:10:84;6012:7:74;6049:10;6021:25;719:10:84;6012:7:74;6021:9;:25::i;:::-;:38;;;;:::i;:::-;5996:8;:64::i;578:89:76:-;633:27;719:10:84;653:6:76;633:5;:27::i;:::-;578:89;:::o;973:161::-;1049:46;1065:7;719:10:84;1088:6:76;1049:15;:46::i;:::-;1105:22;1111:7;1120:6;1105:5;:22::i;:::-;973:161;;:::o;2369:102:74:-;2425:13;2457:7;2450:14;;;;;:::i;6575:427::-;6668:4;719:10:84;6668:4:74;6749:25;719:10:84;6766:7:74;6749:9;:25::i;:::-;6722:52;;6812:15;6792:16;:35;;6784:85;;;;-1:-1:-1;;;6784:85:74;;3355:2:165;6784:85:74;;;3337:21:165;3394:2;3374:18;;;3367:30;3433:34;3413:18;;;3406:62;-1:-1:-1;;;3484:18:165;;;3477:35;3529:19;;6784:85:74;;;;;;;;;6903:60;6912:5;6919:7;6947:15;6928:16;:34;6903:8;:60::i;3740:189::-;3819:4;719:10:84;3873:28:74;719:10:84;3890:2:74;3894:6;3873:9;:28::i;3987:149::-;-1:-1:-1;;;;;4102:18:74;;;4076:7;4102:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3987:149::o;10457:340::-;-1:-1:-1;;;;;10558:19:74;;10550:68;;;;-1:-1:-1;;;10550:68:74;;3761:2:165;10550:68:74;;;3743:21:165;3800:2;3780:18;;;3773:30;3839:34;3819:18;;;3812:62;-1:-1:-1;;;3890:18:165;;;3883:34;3934:19;;10550:68:74;3559:400:165;10550:68:74;-1:-1:-1;;;;;10636:21:74;;10628:68;;;;-1:-1:-1;;;10628:68:74;;4166:2:165;10628:68:74;;;4148:21:165;4205:2;4185:18;;;4178:30;4244:34;4224:18;;;4217:62;-1:-1:-1;;;4295:18:165;;;4288:32;4337:19;;10628:68:74;3964:398:165;10628:68:74;-1:-1:-1;;;;;10707:18:74;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10758:32;;1342:25:165;;;10758:32:74;;1315:18:165;10758:32:74;;;;;;;;10457:340;;;:::o;11078:411::-;11178:24;11205:25;11215:5;11222:7;11205:9;:25::i;:::-;11178:52;;-1:-1:-1;;11244:16:74;:37;11240:243;;11325:6;11305:16;:26;;11297:68;;;;-1:-1:-1;;;11297:68:74;;4569:2:165;11297:68:74;;;4551:21:165;4608:2;4588:18;;;4581:30;4647:31;4627:18;;;4620:59;4696:18;;11297:68:74;4367:353:165;11297:68:74;11407:51;11416:5;11423:7;11451:6;11432:16;:25;11407:8;:51::i;:::-;11168:321;11078:411;;;:::o;7456:788::-;-1:-1:-1;;;;;7552:18:74;;7544:68;;;;-1:-1:-1;;;7544:68:74;;4927:2:165;7544:68:74;;;4909:21:165;4966:2;4946:18;;;4939:30;5005:34;4985:18;;;4978:62;-1:-1:-1;;;5056:18:165;;;5049:35;5101:19;;7544:68:74;4725:401:165;7544:68:74;-1:-1:-1;;;;;7630:16:74;;7622:64;;;;-1:-1:-1;;;7622:64:74;;5333:2:165;7622:64:74;;;5315:21:165;5372:2;5352:18;;;5345:30;5411:34;5391:18;;;5384:62;-1:-1:-1;;;5462:18:165;;;5455:33;5505:19;;7622:64:74;5131:399:165;7622:64:74;-1:-1:-1;;;;;7768:15:74;;7746:19;7768:15;;;;;;;;;;;7801:21;;;;7793:72;;;;-1:-1:-1;;;7793:72:74;;5737:2:165;7793:72:74;;;5719:21:165;5776:2;5756:18;;;5749:30;5815:34;5795:18;;;5788:62;-1:-1:-1;;;5866:18:165;;;5859:36;5912:19;;7793:72:74;5535:402:165;7793:72:74;-1:-1:-1;;;;;7899:15:74;;;:9;:15;;;;;;;;;;;7917:20;;;7899:38;;8114:13;;;;;;;;;;:23;;;;;;8163:26;;1342:25:165;;;8114:13:74;;8163:26;;1315:18:165;8163:26:74;;;;;;;8200:37;9375:659;;-1:-1:-1;;;;;9458:21:74;;9450:67;;;;-1:-1:-1;;;9450:67:74;;6144:2:165;9450:67:74;;;6126:21:165;6183:2;6163:18;;;6156:30;6222:34;6202:18;;;6195:62;-1:-1:-1;;;6273:18:165;;;6266:31;6314:19;;9450:67:74;5942:397:165;9450:67:74;-1:-1:-1;;;;;9613:18:74;;9588:22;9613:18;;;;;;;;;;;9649:24;;;;9641:71;;;;-1:-1:-1;;;9641:71:74;;6546:2:165;9641:71:74;;;6528:21:165;6585:2;6565:18;;;6558:30;6624:34;6604:18;;;6597:62;-1:-1:-1;;;6675:18:165;;;6668:32;6717:19;;9641:71:74;6344:398:165;9641:71:74;-1:-1:-1;;;;;9746:18:74;;:9;:18;;;;;;;;;;;9767:23;;;9746:44;;9883:12;:22;;;;;;;9931:37;1342:25:165;;;9746:9:74;;:18;9931:37;;1315:18:165;9931:37:74;1196:177:165;14:548;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:173::-;635:20;;-1:-1:-1;;;;;684:31:165;;674:42;;664:70;;730:1;727;720:12;664:70;567:173;;;:::o;745:254::-;813:6;821;874:2;862:9;853:7;849:23;845:32;842:52;;;890:1;887;880:12;842:52;913:29;932:9;913:29;:::i;:::-;903:39;989:2;974:18;;;;961:32;;-1:-1:-1;;;745:254:165:o;1378:328::-;1455:6;1463;1471;1524:2;1512:9;1503:7;1499:23;1495:32;1492:52;;;1540:1;1537;1530:12;1492:52;1563:29;1582:9;1563:29;:::i;:::-;1553:39;;1611:38;1645:2;1634:9;1630:18;1611:38;:::i;:::-;1601:48;;1696:2;1685:9;1681:18;1668:32;1658:42;;1378:328;;;;;:::o;1900:180::-;1959:6;2012:2;2000:9;1991:7;1987:23;1983:32;1980:52;;;2028:1;2025;2018:12;1980:52;-1:-1:-1;2051:23:165;;1900:180;-1:-1:-1;1900:180:165:o;2085:186::-;2144:6;2197:2;2185:9;2176:7;2172:23;2168:32;2165:52;;;2213:1;2210;2203:12;2165:52;2236:29;2255:9;2236:29;:::i;:::-;2226:39;2085:186;-1:-1:-1;;;2085:186:165:o;2276:260::-;2344:6;2352;2405:2;2393:9;2384:7;2380:23;2376:32;2373:52;;;2421:1;2418;2411:12;2373:52;2444:29;2463:9;2444:29;:::i;:::-;2434:39;;2492:38;2526:2;2515:9;2511:18;2492:38;:::i;:::-;2482:48;;2276:260;;;;;:::o;2541:380::-;2620:1;2616:12;;;;2663;;;2684:61;;2738:4;2730:6;2726:17;2716:27;;2684:61;2791:2;2783:6;2780:14;2760:18;2757:38;2754:161;;2837:10;2832:3;2828:20;2825:1;2818:31;2872:4;2869:1;2862:15;2900:4;2897:1;2890:15;2754:161;;2541:380;;;:::o;2926:222::-;2991:9;;;3012:10;;;3009:133;;;3064:10;3059:3;3055:20;3052:1;3045:31;3099:4;3096:1;3089:15;3127:4;3124:1;3117:15",
    linkReferences: {},
  },
  methodIdentifiers: {
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "burn(uint256)": "42966c68",
    "burnFrom(address,uint256)": "79cc6790",
    "decimals()": "313ce567",
    "decreaseAllowance(address,uint256)": "a457c2d7",
    "increaseAllowance(address,uint256)": "39509351",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"details":"{ERC20} token, including:  - Preminted initial supply  - Ability for holders to burn (destroy) their tokens  - No access control mechanism (for minting/pausing) and hence no governance This contract uses {ERC20Burnable} to include burn capabilities - head to its documentation for details. _Available since v3.4._ _Deprecated in favor of https://wizard.openzeppelin.com/[Contracts Wizard]._","events":{"Approval(address,address,uint256)":{"details":"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."},"Transfer(address,address,uint256)":{"details":"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."}},"kind":"dev","methods":{"allowance(address,address)":{"details":"See {IERC20-allowance}."},"approve(address,uint256)":{"details":"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See {IERC20-balanceOf}."},"burn(uint256)":{"details":"Destroys `amount` tokens from the caller. See {ERC20-_burn}."},"burnFrom(address,uint256)":{"details":"Destroys `amount` tokens from `account`, deducting from the caller\'s allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``\'s tokens of at least `amount`."},"constructor":{"details":"Mints `initialSupply` amount of token and transfers them to `owner`. See {ERC20-constructor}."},"decimals()":{"details":"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it\'s overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."},"decreaseAllowance(address,uint256)":{"details":"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."},"increaseAllowance(address,uint256)":{"details":"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."},"name()":{"details":"Returns the name of the token."},"symbol()":{"details":"Returns the symbol of the token, usually a shorter version of the name."},"totalSupply()":{"details":"See {IERC20-totalSupply}."},"transfer(address,uint256)":{"details":"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."},"transferFrom(address,address,uint256)":{"details":"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``\'s tokens of at least `amount`."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":"ERC20PresetFixedSupply"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b","license":"MIT","urls":["bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df","dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":{"keccak256":"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b","license":"MIT","urls":["bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f","dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":{"keccak256":"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec","license":"MIT","urls":["bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3","dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "initialSupply",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Approval",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Transfer",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "burn",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "burnFrom",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "allowance(address,address)": {
            details: "See {IERC20-allowance}.",
          },
          "approve(address,uint256)": {
            details:
              "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.",
          },
          "balanceOf(address)": {
            details: "See {IERC20-balanceOf}.",
          },
          "burn(uint256)": {
            details:
              "Destroys `amount` tokens from the caller. See {ERC20-_burn}.",
          },
          "burnFrom(address,uint256)": {
            details:
              "Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`.",
          },
          constructor: {
            details:
              "Mints `initialSupply` amount of token and transfers them to `owner`. See {ERC20-constructor}.",
          },
          "decimals()": {
            details:
              "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.",
          },
          "decreaseAllowance(address,uint256)": {
            details:
              "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.",
          },
          "increaseAllowance(address,uint256)": {
            details:
              "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.",
          },
          "name()": {
            details: "Returns the name of the token.",
          },
          "symbol()": {
            details:
              "Returns the symbol of the token, usually a shorter version of the name.",
          },
          "totalSupply()": {
            details: "See {IERC20-totalSupply}.",
          },
          "transfer(address,uint256)": {
            details:
              "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.",
          },
          "transferFrom(address,address,uint256)": {
            details:
              "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.",
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {},
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/",
      ],
      optimizer: {
        enabled: true,
        runs: 200,
      },
      metadata: {
        bytecodeHash: "ipfs",
      },
      compilationTarget: {
        "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":
          "ERC20PresetFixedSupply",
      },
      libraries: {},
    },
    sources: {
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        keccak256:
          "0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b",
        urls: [
          "bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df",
          "dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        keccak256:
          "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        urls: [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":
        {
          keccak256:
            "0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b",
          urls: [
            "bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f",
            "dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":
        {
          keccak256:
            "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
          urls: [
            "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
            "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":
        {
          keccak256:
            "0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec",
          urls: [
            "bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3",
            "dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        keccak256:
          "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        urls: [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath:
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol",
    id: 59152,
    exportedSymbols: {
      Context: [60015],
      ERC20: [58902],
      ERC20Burnable: [59024],
      ERC20PresetFixedSupply: [59151],
      IERC20: [58980],
      IERC20Metadata: [59086],
    },
    nodeType: "SourceUnit",
    src: "129:858:80",
    nodes: [
      {
        id: 59124,
        nodeType: "PragmaDirective",
        src: "129:23:80",
        nodes: [],
        literals: ["solidity", "^", "0.8", ".0"],
      },
      {
        id: 59125,
        nodeType: "ImportDirective",
        src: "154:41:80",
        nodes: [],
        absolutePath:
          "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol",
        file: "../extensions/ERC20Burnable.sol",
        nameLocation: "-1:-1:-1",
        scope: 59152,
        sourceUnit: 59025,
        symbolAliases: [],
        unitAlias: "",
      },
      {
        id: 59151,
        nodeType: "ContractDefinition",
        src: "637:349:80",
        nodes: [
          {
            id: 59150,
            nodeType: "FunctionDefinition",
            src: "828:156:80",
            nodes: [],
            body: {
              id: 59149,
              nodeType: "Block",
              src: "940:44:80",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 59145,
                        name: "owner",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 59137,
                        src: "956:5:80",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 59146,
                        name: "initialSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 59135,
                        src: "963:13:80",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 59144,
                      name: "_mint",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 58719,
                      src: "950:5:80",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256)",
                      },
                    },
                    id: 59147,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "950:27:80",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 59148,
                  nodeType: "ExpressionStatement",
                  src: "950:27:80",
                },
              ],
            },
            documentation: {
              id: 59129,
              nodeType: "StructuredDocumentation",
              src: "692:131:80",
              text: " @dev Mints `initialSupply` amount of token and transfers them to `owner`.\n See {ERC20-constructor}.",
            },
            implemented: true,
            kind: "constructor",
            modifiers: [
              {
                arguments: [
                  {
                    id: 59140,
                    name: "name",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 59131,
                    src: "926:4:80",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory",
                    },
                  },
                  {
                    id: 59141,
                    name: "symbol",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 59133,
                    src: "932:6:80",
                    typeDescriptions: {
                      typeIdentifier: "t_string_memory_ptr",
                      typeString: "string memory",
                    },
                  },
                ],
                id: 59142,
                kind: "baseConstructorSpecifier",
                modifierName: {
                  id: 59139,
                  name: "ERC20",
                  nameLocations: ["920:5:80"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 58902,
                  src: "920:5:80",
                },
                nodeType: "ModifierInvocation",
                src: "920:19:80",
              },
            ],
            name: "",
            nameLocation: "-1:-1:-1",
            parameters: {
              id: 59138,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 59131,
                  mutability: "mutable",
                  name: "name",
                  nameLocation: "854:4:80",
                  nodeType: "VariableDeclaration",
                  scope: 59150,
                  src: "840:18:80",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 59130,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "840:6:80",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 59133,
                  mutability: "mutable",
                  name: "symbol",
                  nameLocation: "874:6:80",
                  nodeType: "VariableDeclaration",
                  scope: 59150,
                  src: "860:20:80",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 59132,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "860:6:80",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 59135,
                  mutability: "mutable",
                  name: "initialSupply",
                  nameLocation: "890:13:80",
                  nodeType: "VariableDeclaration",
                  scope: 59150,
                  src: "882:21:80",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 59134,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "882:7:80",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 59137,
                  mutability: "mutable",
                  name: "owner",
                  nameLocation: "913:5:80",
                  nodeType: "VariableDeclaration",
                  scope: 59150,
                  src: "905:13:80",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 59136,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "905:7:80",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "839:80:80",
            },
            returnParameters: {
              id: 59143,
              nodeType: "ParameterList",
              parameters: [],
              src: "940:0:80",
            },
            scope: 59151,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 59127,
              name: "ERC20Burnable",
              nameLocations: ["672:13:80"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 59024,
              src: "672:13:80",
            },
            id: 59128,
            nodeType: "InheritanceSpecifier",
            src: "672:13:80",
          },
        ],
        canonicalName: "ERC20PresetFixedSupply",
        contractDependencies: [],
        contractKind: "contract",
        documentation: {
          id: 59126,
          nodeType: "StructuredDocumentation",
          src: "197:439:80",
          text: " @dev {ERC20} token, including:\n  - Preminted initial supply\n  - Ability for holders to burn (destroy) their tokens\n  - No access control mechanism (for minting/pausing) and hence no governance\n This contract uses {ERC20Burnable} to include burn capabilities - head to\n its documentation for details.\n _Available since v3.4._\n _Deprecated in favor of https://wizard.openzeppelin.com/[Contracts Wizard]._",
        },
        fullyImplemented: true,
        linearizedBaseContracts: [59151, 59024, 58902, 59086, 58980, 60015],
        name: "ERC20PresetFixedSupply",
        nameLocation: "646:22:80",
        scope: 59152,
        usedErrors: [],
      },
    ],
    license: "MIT",
  },
  id: 80,
} as const;
