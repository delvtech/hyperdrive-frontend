export const SupplyLogic = {
  name: 'SupplyLogic' as const,
  abi: [
  {
    "type": "event",
    "name": "ReserveDataUpdated",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "liquidityRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "stableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidityIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReserveUsedAsCollateralDisabled",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReserveUsedAsCollateralEnabled",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Supply",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "onBehalfOf",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "referralCode",
        "type": "uint16",
        "indexed": true,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdraw",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
] as const,
  bytecode: '0x613126610035600b8282823980515f1a60731461002957634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610610055575f3560e01c8063186dea44146100595780631913f1611461008a5780638a5dadd1146100ab578063bf697a26146100ca575b5f80fd5b818015610064575f80fd5b50610078610073366004612afe565b6100e9565b60405190815260200160405180910390f35b818015610095575f80fd5b506100a96100a4366004612bb2565b61041d565b005b8180156100b6575f80fd5b506100a96100c5366004612c43565b610636565b8180156100d5575f80fd5b506100a96100e4366004612d28565b61088f565b80516001600160a01b03165f9081526020869052604081208161010b82610a92565b9050806101e001516001600160a01b031684604001516001600160a01b0316141560405180604001604052806002815260200161393360f01b8152509061016e5760405162461bcd60e51b81526004016101659190612dad565b60405180910390fd5b506101798282610c5d565b6101008101516101e0820151604051630ed1279f60e11b81523360048201525f926101fb9290916001600160a01b0390911690631da24f3e906024015b602060405180830381865afa1580156101d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101f59190612df9565b90610cb5565b60208601519091506001810161020e5750805b610219838284610cf7565b855161022a90859085905f85610dfc565b60038401546040805160208101909152885481525f916102559190600160a81b900461ffff16611117565b905080801561026357508282145b156102bb576003850154610284908990600160a81b900461ffff165f61116c565b865160405133916001600160a01b0316907f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd905f90a35b6101e08401516040808901516101008701519151636b81068560e11b81523360048201526001600160a01b0391821660248201526044810186905260648101929092529091169063d7020d0a906084015f604051808303815f87803b158015610322575f80fd5b505af1158015610334573d5f803e3d5ffd5b50505050808015610376575060408051602081019091528854908190527f55555555555555555555555555555555555555555555555555555555555555551615155b156103af576103af8b8b8b8b6040518060200160405290815f820154815250508b5f0151338d606001518e608001518f60a001516111ce565b86604001516001600160a01b0316336001600160a01b0316885f01516001600160a01b03167f3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f78560405161040591815260200190565b60405180910390a45093505050505b95945050505050565b80516001600160a01b03165f9081526020859052604081209061043f82610a92565b905061044b8282610c5d565b61045f818385602001518660400151611338565b825160208401516104759184918491905f610dfc565b6101e08101516020840151845161049a926001600160a01b03909116913391906115a5565b6101e08101516040808501516020860151610100850151925163b3f1c93d60e01b81523360048201526001600160a01b039283166024820152604481019190915260648101929092525f92169063b3f1c93d906084016020604051808303815f875af115801561050c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105309190612e10565b905080156105b85761054f878787856101c00151866101e00151611644565b156105b8576003830154610571908690600160a81b900461ffff16600161116c565b83604001516001600160a01b0316845f01516001600160a01b03167e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f260405160405180910390a35b836060015161ffff1684604001516001600160a01b0316855f01516001600160a01b03167f2b627736bca15cd5381dcf80b0bf11fd197d01a037c52b927a881a10fb73ba613388602001516040516106259291906001600160a01b03929092168252602082015260400190565b60405180910390a450505050505050565b80516001600160a01b03165f9081526020869052604090206106578161182c565b6003810154600160a81b900461ffff165f61067f6106748461187b565b6060860151906118de565b905083604001516001600160a01b031684602001516001600160a01b0316141580156106aa57508015155b15610885576020808501516001600160a01b03165f908152868252604090819020815192830190915280548252906106e29084611117565b156107df5760408051602081019091528154908190527f5555555555555555555555555555555555555555555555555555555555555555161561077d5761077d898989895f8a602001516001600160a01b03166001600160a01b031681526020019081526020015f206040518060200160405290815f82015481525050895f01518a602001518b60c001518c60e001518d61010001516111ce565b84606001518560800151036107df5761079781845f61116c565b84602001516001600160a01b0316855f01516001600160a01b03167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b8460a001515f03610883576040808601516001600160a01b039081165f9081526020898152908390208351918201909352865481526004870154610829928d928d92869216611644565b156108815761083a8185600161116c565b85604001516001600160a01b0316865f01516001600160a01b03167e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f260405160405180910390a35b505b505b5050505050505050565b6001600160a01b0385165f90815260208a905260408120906108b082610a92565b6101e08101516040516370a0823160e01b81523360048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa1580156108fe573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109229190612df9565b905061092e828261191b565b600383015460408051602081019091528a54815261095691600160a81b900461ffff16611117565b15158715150361096857505050610883565b8615610a0f5761097f8c8c8b856101c001516119dd565b604051806040016040528060028152602001611b1960f11b815250906109b85760405162461bcd60e51b81526004016101659190612dad565b5060038301546109d6908a90600160a81b900461ffff16600161116c565b60405133906001600160a01b038a16907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2905f90a3610a84565b6003830154610a2b908a90600160a81b900461ffff165f61116c565b604080516020810190915289548152610a4e908d908d908d908c338c8c8c6111ce565b60405133906001600160a01b038a16907f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd905f90a35b505050505050505050505050565b610a9a612996565b610aa2612996565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546001600160801b03808216610100840181905260e084015260028501548082166101408501819052610120850152600160801b928390048216610160850152829004166101808301526004808501546001600160a01b039081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff166102408401526040805163b1bf962d60e01b8152905163b1bf962d928281019260209291908290030181865afa158015610b91573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bb59190612df9565b8160200181815250815f0181815250508061020001516001600160a01b031663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa158015610c06573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c2a9190612e2b565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b600382015464ffffffffff428116600160801b9092041603610c7d575050565b610c878282611a79565b610c918282611b57565b50600301805464ffffffffff60801b1916600160801b4264ffffffffff1602179055565b5f81156b019d971e4fe8401e740000001983900484111517610cd5575f80fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b604080518082019091526002815261191b60f11b602082015282610d2e5760405162461bcd60e51b81526004016101659190612dad565b50604080518082019091526002815261199960f11b602082015281831115610d695760405162461bcd60e51b81526004016101659190612dad565b505f80610d7a856101c00151611cbc565b945050505091508160405180604001604052806002815260200161323760f01b81525090610dbb5760405162461bcd60e51b81526004016101659190612dad565b50604080518082019091526002815261323960f01b60208201528115610df45760405162461bcd60e51b81526004016101659190612dad565b505050505050565b610e2360405180608001604052805f81526020015f81526020015f81526020015f81525090565b6101408501516020860151610e3791610cb5565b60608281019182526007880154604080516101408101825260088b01546001600160801b03600160801b918290048116835260208084018b90528385018a905260c08d810151978501979097529651608084015260a0808d0151908401526101a08c0151958301959095526001600160a01b038a811660e0840152835196870184528c5496879052600160fc1b909616151561010083015260098c01540490931661012084015251637b424dcf60e11b815292169163f6849b9e91610efe91600401612e72565b606060405180830381865afa158015610f19573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f3d9190612ef4565b60408401526020830152808252610f5390611d00565b6001870180546001600160801b03928316600160801b0292169190911790556020810151610f8090611d00565b6003870180546001600160801b0319166001600160801b03929092169190911790556040810151610fb090611d00565b6002870180546001600160801b03928316600160801b029216919091179055604080516020810190915286548152610fee9051600160fc1b16151590565b156110a357821561104b5761100283611d00565b600987018054601090611026908490600160801b90046001600160801b0316612f33565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b81156110a35761105a82611d00565b60098701805460109061107e908490600160801b90046001600160801b0316612f5a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b80516020808301516040808501516101008a01516101408b015183519687529486019390935290840152606083015260808201526001600160a01b038516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b6040805180820190915260028152610dcd60f21b60208201525f90608083106111535760405162461bcd60e51b81526004016101659190612dad565b50508151600182811b81019190911c1615155b92915050565b6040805180820190915260028152610dcd60f21b6020820152608083106111a65760405162461bcd60e51b81526004016101659190612dad565b50600182811b81011b81156111c0578354811784556111c8565b835481191684555b50505050565b6001600160a01b038086165f90815260208b8152604080832081516102408101835281546102208201908152815260018201546001600160801b0380821695830195909552600160801b908190048516938201939093526002820154808516606083015283900484166080820152600382015480851660a083015264ffffffffff848204811660c084015261ffff600160a81b83041660e0840152600160b81b90910416610100820152600482015486166101208201526005820154861661014082015260068201548616610160820152600782015490951661018086015260088101548084166101a087015282900483166101c0860152600901548083166101e086015204166102008301526112eb8b8b8b8b8a888b8b611d6c565b9150508015806112ff575081515161ffff16155b60405180604001604052806002815260200161353760f01b81525090610a845760405162461bcd60e51b81526004016101659190612dad565b604080518082019091526002815261191b60f11b60208201528261136f5760405162461bcd60e51b81526004016101659190612dad565b505f805f611381876101c00151611cbc565b94505050925092508260405180604001604052806002815260200161323760f01b815250906113c35760405162461bcd60e51b81526004016101659190612dad565b50604080518082019091526002815261323960f01b602082015281156113fc5760405162461bcd60e51b81526004016101659190612dad565b50604080518082019091526002815261064760f31b602082015282156114355760405162461bcd60e51b81526004016101659190612dad565b50866101e001516001600160a01b0316846001600160a01b03161415604051806040016040528060028152602001610e4d60f21b8152509061148a5760405162461bcd60e51b81526004016101659190612dad565b506101c08701515160741c640fffffffff1680158061156c57506101c08801515160301c60ff166114bc90600a61305a565b6114c69082613065565b8661155f8a61010001518a6008015f9054906101000a90046001600160801b03166001600160801b03168c6101e001516001600160a01b031663b1bf962d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611531573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115559190612df9565b6101f5919061307c565b611569919061307c565b11155b60405180604001604052806002815260200161353160f01b815250906108835760405162461bcd60e51b81526004016101659190612dad565b6040516323b872dd60e01b8082526001600160a01b0385811660048401528416602483015260448201839052905f80606483828a5af16115e7573d5f803e3d5ffd5b506115f185611e16565b61163d5760405162461bcd60e51b815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610165565b5050505050565b81515f9060d41c64ffffffffff1615611816575f826001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa158015611694573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116b8919061308f565b6001600160a01b0316630542975c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116f3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611717919061308f565b9050806001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa158015611755573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611779919061308f565b604051632474521560e21b81527fd1d2cf869016112a9af1107bcf43c3759daf22cf734aad47d0c9c726e33bc78260048201523360248201526001600160a01b0391909116906391d1485490604401602060405180830381865afa1580156117e3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118079190612e10565b611814575f915050610414565b505b611822868686866119dd565b9695505050505050565b604080516020808201835283549182905282518084019093526002835261323960f01b908301526001603c1b16156118775760405162461bcd60e51b81526004016101659190612dad565b5050565b60038101545f90600160801b900464ffffffffff164281036118a9575050600101546001600160801b031690565b60018301546118d1906001600160801b03808216916101f591600160801b9091041684611eb7565b9392505050565b50919050565b5f81156b033b2e3c9fd0803ce800000060028404190484111715611900575f80fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b604080518082019091526002815261343360f01b6020820152816119525760405162461bcd60e51b81526004016101659190612dad565b505f80611963846101c00151611cbc565b945050505091508160405180604001604052806002815260200161323760f01b815250906119a45760405162461bcd60e51b81526004016101659190612dad565b50604080518082019091526002815261323960f01b6020820152811561163d5760405162461bcd60e51b81526004016101659190612dad565b5f6119ea825161ffff1690565b5f036119f757505f611a71565b60408051602081019091528354908190527faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa16611a3657506001611a71565b6040805160208101909152835481525f90611a52908787611ef3565b5050905080158015611a6d5750825160d41c64ffffffffff16155b9150505b949350505050565b61016081015115611ae7575f611a99826101600151836102400151611eb7565b9050611ab28260e0015182610cb590919063ffffffff16565b6101008301819052611ac390611d00565b6001840180546001600160801b0319166001600160801b0392909216919091179055505b805115611877575f611b03826101800151836102400151611f99565b9050611b1d82610120015182610cb590919063ffffffff16565b6101408301819052611b2e90611d00565b6002840180546001600160801b03929092166001600160801b0319909216919091179055505050565b611b8a6040518060c001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b816101a001515f03611b9b57505050565b6101208201518251611bac91610cb5565b60208201526101408201518251611bc291610cb5565b60408201526060820151610260830151610240840151611bea92919064ffffffffff16611fa1565b606082018190526040830151611bff91610cb5565b808252602082015160808401516040840151611c1b919061307c565b611c2591906130aa565b611c2f91906130aa565b608082018190526101a0830151611c4691906120c6565b60a0820181905215611cb757611c76611c718361010001518360a001516118de90919063ffffffff16565b611d00565b6008840180545f90611c929084906001600160801b0316612f33565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b505050565b5167010000000000000081161515916702000000000000008216151591670400000000000000811615159167080000000000000082161515916001603c1b16151590565b5f6001600160801b03821115611d685760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b6064820152608401610165565b5090565b5f805f80611db78c8c8c6040518060a001604052808e81526020018b81526020018d6001600160a01b031681526020018a6001600160a01b031681526020018c60ff168152506120ea565b9550955050505050670de0b6b3a764000082101560405180604001604052806002815260200161333560f01b81525090611e045760405162461bcd60e51b81526004016101659190612dad565b50909b909a5098505050505050505050565b5f611e38565b62461bcd60e51b5f52602060045280602452508060445260645ffd5b3d8015611e775760208114611ea857611e727f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611e1c565b6118d8565b823b611e9f57611e9f7311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b6014611e1c565b600191506118d8565b3d5f803e50505f511515919050565b5f80611eca64ffffffffff8416426130aa565b611ed49085613065565b6301e1338090049050611a71816b033b2e3c9fd0803ce800000061307c565b5f805f611eff866125ac565b15611f87575f611f2f877faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6125ef565b5f81815260208781526040808320546001600160a01b03168084528a8352818420825193840190925290549182905292935060d41c64ffffffffff1690508015611f8357600195509093509150611f909050565b5050505b505f9150819050805b93509350939050565b5f6118d18383425b5f80611fb464ffffffffff8516846130aa565b9050805f03611fd2576b033b2e3c9fd0803ce80000009150506118d1565b5f1981015f808060028511611fe7575f611fec565b600285035b925066038882915c40006120008a80610cb5565b8161200d5761200d6130bd565b0491506301e1338061201f838b610cb5565b8161202c5761202c6130bd565b0490505f8261203b8688613065565b6120459190613065565b6002900490505f8285612058888a613065565b6120629190613065565b61206c9190613065565b60069004905080826301e133806120838a8f613065565b61208d91906130d1565b6120a3906b033b2e3c9fd0803ce800000061307c565b6120ad919061307c565b6120b7919061307c565b9b9a5050505050505050505050565b5f811561138819839004841115176120dc575f80fd5b506127109102611388010490565b5f805f805f806120fc875f0151511590565b1561211857505f94508493508392508291505f1990508161259f565b6121a76040518061026001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f151581526020015f151581525090565b608088015160ff16156121eb57608088015160ff165f90815260208a90526040902060608901516121d89190612613565b6101808401526101c08301526101a08201525b87602001518160c0015110156124c45760c0810151885161220b916126bc565b61221f5760c08101805160010190526121eb565b60c08101515f90815260208b905260409020546001600160a01b031661020082018190526122575760c08101805160010190526121eb565b6102008101516001600160a01b03165f90815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a90830152610180820151158015906122df5750816101e00151896080015160ff16145b61235b57606089015161020083015160405163b3596f0760e01b81526001600160a01b03918216600482015291169063b3596f0790602401602060405180830381865afa158015612332573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123569190612df9565b612362565b8161018001515b825260a082015115801590612382575060c0820151895161238291611117565b156124715761239e896040015182845f0151856020015161270b565b60408301819052610100830180516123b790839061307c565b90525060808901516101e08301516123d29160ff1690612780565b1515610240830152608082015115612428578161024001516123f85781608001516123ff565b816101a001515b826040015161240e9190613065565b8261014001818151612420919061307c565b905250612431565b60016102208301525b816102400151612445578160a0015161244c565b816101c001515b826040015161245b9190613065565b826101600181815161246d919061307c565b9052505b60c0820151895161248191612790565b156124b35761249d896040015182845f015185602001516127dc565b82610120018181516124af919061307c565b9052505b5060c08101805160010190526121eb565b8061010001515f036124d6575f6124f1565b806101000151816101400151816124ef576124ef6130bd565b045b6101408201526101008101515f03612509575f612524565b80610100015181610160015181612522576125226130bd565b045b610160820152610120810151156125665761256181610120015161255b8361016001518461010001516120c690919063ffffffff16565b9061290b565b612569565b5f195b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b80515f907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1680158015906118d157506125e76001826130aa565b161592915050565b81515f9082165f198101198116825b60029190911c908115610414576001016125fe565b81545f90819081908190660100000000000090046001600160a01b031680156126a15760405163b3596f0760e01b81526001600160a01b03828116600483015287169063b3596f0790602401602060405180830381865afa15801561267a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061269e9190612df9565b91505b50945461ffff80821697620100009092041695945092505050565b6040805180820190915260028152610dcd60f21b60208201525f90608083106126f85760405162461bcd60e51b81526004016101659190612dad565b5050905160019190911b1c600316151590565b5f806127168561187b565b600486810154604051630ed1279f60e11b81526001600160a01b038a8116938201939093529293505f928792612759928692911690631da24f3e906024016101b6565b6127639190613065565b9050838181612774576127746130bd565b04979650505050505050565b5f82158015906118d15750501490565b6040805180820190915260028152610dcd60f21b60208201525f90608083106127cc5760405162461bcd60e51b81526004016101659190612dad565b50509051600191821b1c16151590565b6006830154604051630ed1279f60e11b81526001600160a01b0386811660048301525f928392911690631da24f3e90602401602060405180830381865afa158015612829573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061284d9190612df9565b9050801561286b5761286861286186612940565b8290610cb5565b90505b60058501546040516370a0823160e01b81526001600160a01b038881166004830152909116906370a0823190602401602060405180830381865afa1580156128b5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128d99190612df9565b6128e3908261307c565b90506128ef8185613065565b9050828181612900576129006130bd565b049695505050505050565b5f8115670de0b6b3a764000060028404190484111715612929575f80fd5b50670de0b6b3a76400009190910260028204010490565b60038101545f90600160801b900464ffffffffff1642810361296e575050600201546001600160801b031690565b60028301546118d1906001600160801b03808216916101f591600160801b9091041684611f99565b6040518061028001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f8152602001612a0b60405180602001604052805f81525090565b81525f6020820181905260408201819052606082018190526080820181905260a09091015290565b60405160c0810167ffffffffffffffff81118282101715612a6257634e487b7160e01b5f52604160045260245ffd5b60405290565b6040516080810167ffffffffffffffff81118282101715612a6257634e487b7160e01b5f52604160045260245ffd5b604051610120810167ffffffffffffffff81118282101715612a6257634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381168114612adb575f80fd5b50565b8035612ae981612ac7565b919050565b803560ff81168114612ae9575f80fd5b5f805f805f858703610140811215612b14575f80fd5b8635955060208701359450604087013593506060870135925060c0607f1982011215612b3e575f80fd5b50612b47612a33565b6080870135612b5581612ac7565b815260a0870135602082015260c0870135612b6f81612ac7565b604082015260e08701356060820152610100870135612b8d81612ac7565b6080820152612b9f6101208801612aee565b60a0820152809150509295509295909350565b5f805f8084860360e0811215612bc6575f80fd5b8535945060208601359350604086013592506080605f1982011215612be9575f80fd5b50612bf2612a68565b6060860135612c0081612ac7565b81526080860135602082015260a0860135612c1a81612ac7565b604082015260c086013561ffff81168114612c33575f80fd5b6060820152939692955090935050565b5f805f805f8587036101a0811215612c59575f80fd5b8635955060208701359450604087013593506060870135925061012080607f1983011215612c85575f80fd5b612c8d612a97565b9150612c9b60808901612ade565b8252612ca960a08901612ade565b6020830152612cba60c08901612ade565b604083015260e088013560608301526101008089013560808401528189013560a084015261014089013560c0840152612cf66101608a01612ade565b60e0840152612d086101808a01612aee565b9083015250949793965091945092919050565b8015158114612adb575f80fd5b5f805f805f805f805f6101208a8c031215612d41575f80fd5b8935985060208a0135975060408a0135965060608a0135955060808a0135612d6881612ac7565b945060a08a0135612d7881612d1b565b935060c08a0135925060e08a0135612d8f81612ac7565b9150612d9e6101008b01612aee565b90509295985092959850929598565b5f602080835283518060208501525f5b81811015612dd957858101830151858201604001528201612dbd565b505f604082860101526040601f19601f8301168501019250505092915050565b5f60208284031215612e09575f80fd5b5051919050565b5f60208284031215612e20575f80fd5b81516118d181612d1b565b5f805f8060808587031215612e3e575f80fd5b845193506020850151925060408501519150606085015164ffffffffff81168114612e67575f80fd5b939692955090935050565b5f61014082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151612ed460e08401826001600160a01b03169052565b506101008381015180151584830152505061012092830151919092015290565b5f805f60608486031215612f06575f80fd5b8351925060208401519150604084015190509250925092565b634e487b7160e01b5f52601160045260245ffd5b6001600160801b03818116838216019080821115612f5357612f53612f1f565b5092915050565b6001600160801b03828116828216039080821115612f5357612f53612f1f565b600181815b80851115612fb457815f1904821115612f9a57612f9a612f1f565b80851615612fa757918102915b93841c9390800290612f7f565b509250929050565b5f82612fca57506001611166565b81612fd657505f611166565b8160018114612fec5760028114612ff657613012565b6001915050611166565b60ff84111561300757613007612f1f565b50506001821b611166565b5060208310610133831016604e8410600b8410161715613035575081810a611166565b61303f8383612f7a565b805f190482111561305257613052612f1f565b029392505050565b5f6118d18383612fbc565b808202811582820484141761116657611166612f1f565b8082018082111561116657611166612f1f565b5f6020828403121561309f575f80fd5b81516118d181612ac7565b8181038181111561116657611166612f1f565b634e487b7160e01b5f52601260045260245ffd5b5f826130eb57634e487b7160e01b5f52601260045260245ffd5b50049056fea26469706673582212208d1a7dee0d422ae1ada7afeec01b39bae39632e5cfc05d5410ef90c7e961ea3b64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "executeFinalizeTransfer(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,mapping(address => DataTypes.UserConfigurationMap) storage,DataTypes.FinalizeTransferParams)": "8a5dadd1",
  "executeSupply(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,DataTypes.UserConfigurationMap storage,DataTypes.ExecuteSupplyParams)": "1913f161",
  "executeUseReserveAsCollateral(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.UserConfigurationMap storage,address,bool,uint256,address,uint8)": "bf697a26",
  "executeWithdraw(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.UserConfigurationMap storage,DataTypes.ExecuteWithdrawParams)": "186dea44"
} as const
};
