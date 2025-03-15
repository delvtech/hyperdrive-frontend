export const LiquidationLogic = {
  name: 'LiquidationLogic' as const,
  abi: [
  {
    "type": "function",
    "name": "CLOSE_FACTOR_HF_THRESHOLD",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MAX_LIQUIDATION_CLOSE_FACTOR",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "IsolationModeTotalDebtUpdated",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "totalDebt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LiquidationCall",
    "inputs": [
      {
        "name": "collateralAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "debtAsset",
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
        "name": "debtToCover",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidatedCollateralAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidator",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "receiveAToken",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
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
  }
] as const,
  bytecode: '0x613499610035600b8282823980515f1a60731461002957634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004a575f3560e01c806383c1087d1461004e578063a18964a51461006f578063d246754414610090575b5f80fd5b818015610059575f80fd5b5061006d610068366004613018565b610099565b005b61007e670d2f13f7789f000081565b60405190815260200160405180910390f35b61007e61271081565b6100a1612e80565b6040808301516001600160a01b039081165f908152602089815283822060608701518416835284832060808801519094168352908890529290206100e4826106c9565b61016085018190526100f7908390610894565b6101618989886040518060a00160405280866040518060200160405290815f8201548152505081526020018a5f015181526020018a608001516001600160a01b031681526020018a60c001516001600160a01b031681526020018a60e0015160ff168152506108ec565b5060c08901819052610160890151610180955093508992509050610dae565b8660200187604001886060018381525083815250838152505050506101e281848460405180608001604052808961016001518152602001896040015181526020018960c0015181526020018a61010001516001600160a01b0316815250610e2d565b6101ed868487611195565b60a08801526001600160a01b03908116610120880152908116610100870152908116610140860181905260808701516040516370a0823160e01b815292166004830152906370a0823190602401602060405180830381865afa158015610255573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061027991906130fe565b808552610160850151610100860151610120870151606088015160a089015160c08b01516102ae968a96959493929091611292565b60e08701526060860181905260808601919091526040850151036102e85760038201546102e8908290600160a81b900461ffff165f611592565b835160e085015160808601516102fe9190613129565b0361036857600383015461031f908290600160a81b900461ffff165f6115f2565b84608001516001600160a01b031685604001516001600160a01b03167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b6103728585611646565b6101608401516060808701519086015161039092859290915f611850565b6103a68989838761016001518860600151611b6b565b8460a00151156103c3576103be898989868989611cf3565b6103ce565b6103ce838686611e7b565b60e08401511561057f575f6103e284611f26565b90505f6103fc828760e00151611f8f90919063ffffffff16565b6101408701516080890151604051630ed1279f60e11b81526001600160a01b0391821660048201529293505f92911690631da24f3e90602401602060405180830381865afa158015610450573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061047491906130fe565b90508082111561048e576104888184611fcc565b60e08801525b8661014001516001600160a01b031663f866c31989608001518961014001516001600160a01b031663ae1673356040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104e8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061050c919061313c565b8a60e001516040518463ffffffff1660e01b815260040161054e939291906001600160a01b039384168152919092166020820152604081019190915260600190565b5f604051808303815f87803b158015610565575f80fd5b505af1158015610577573d5f803e3d5ffd5b505050505050505b6105b1338561016001516101e00151866060015188606001516001600160a01b031661200e909392919063ffffffff16565b6101608401516101e00151608086015160608601516040516337ecbb3b60e11b81523360048201526001600160a01b0392831660248201526044810191909152911690636fd97676906064015f604051808303815f87803b158015610614575f80fd5b505af1158015610626573d5f803e3d5ffd5b5050505084608001516001600160a01b031685606001516001600160a01b031686604001516001600160a01b03167fe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e00528687606001518860800151338b60a001516040516106b6949392919093845260208401929092526001600160a01b031660408301521515606082015260800190565b60405180910390a4505050505050505050565b6106d1612ef6565b6106d9612ef6565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546001600160801b03808216610100840181905260e084015260028501548082166101408501819052610120850152600160801b928390048216610160850152829004166101808301526004808501546001600160a01b039081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff166102408401526040805163b1bf962d60e01b8152905163b1bf962d928281019260209291908290030181865afa1580156107c8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107ec91906130fe565b8160200181815250815f0181815250508061020001516001600160a01b031663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa15801561083d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108619190613157565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b600382015464ffffffffff428116600160801b90920416036108b4575050565b6108be82826120ad565b6108c8828261218b565b50600301805464ffffffffff60801b1916600160801b4264ffffffffff1602179055565b5f805f805f806108fe875f0151511590565b1561091a57505f94508493508392508291505f19905081610da1565b6109a96040518061026001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f151581526020015f151581525090565b608088015160ff16156109ed57608088015160ff165f90815260208a90526040902060608901516109da91906122eb565b6101808401526101c08301526101a08201525b87602001518160c001511015610cc65760c08101518851610a0d91612394565b610a215760c08101805160010190526109ed565b60c08101515f90815260208b905260409020546001600160a01b03166102008201819052610a595760c08101805160010190526109ed565b6102008101516001600160a01b03165f90815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a9083015261018082015115801590610ae15750816101e00151896080015160ff16145b610b5d57606089015161020083015160405163b3596f0760e01b81526001600160a01b03918216600482015291169063b3596f0790602401602060405180830381865afa158015610b34573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b5891906130fe565b610b64565b8161018001515b825260a082015115801590610b84575060c08201518951610b84916123e6565b15610c7357610ba0896040015182845f01518560200151612434565b6040830181905261010083018051610bb9908390613129565b90525060808901516101e0830151610bd49160ff16906124e5565b1515610240830152608082015115610c2a57816102400151610bfa578160800151610c01565b816101a001515b8260400151610c10919061319e565b8261014001818151610c229190613129565b905250610c33565b60016102208301525b816102400151610c47578160a00151610c4e565b816101c001515b8260400151610c5d919061319e565b8261016001818151610c6f9190613129565b9052505b60c08201518951610c83916124f5565b15610cb557610c9f896040015182845f01518560200151612541565b8261012001818151610cb19190613129565b9052505b5060c08101805160010190526109ed565b8061010001515f03610cd8575f610cf3565b80610100015181610140015181610cf157610cf16131b5565b045b6101408201526101008101515f03610d0b575f610d26565b80610100015181610160015181610d2457610d246131b5565b045b61016082015261012081015115610d6857610d63816101200151610d5d83610160015184610100015161267090919063ffffffff16565b90612694565b610d6b565b5f195b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b5f805f805f610dc18760800151896126c9565b90925090505f610dd18284613129565b90505f670d2f13f7789f00008811610deb57612710610def565b6113885b90505f610dfc8383612670565b90505f818b6020015111610e14578a60200151610e16565b815b949850929650929450505050505b93509350939050565b6040805160a0810182525f80825260208201819052918101829052606081018290526080810191909152604080516020810190915284548152610e6f906127b5565b151560208601525050501515815281516101c00151610e8d906127b5565b151560608601525050501515604082015280518015610ead575080604001515b60405180604001604052806002815260200161323760f01b81525090610eef5760405162461bcd60e51b8152600401610ee691906131c9565b60405180910390fd5b508060200151158015610f0457508060600151155b60405180604001604052806002815260200161323960f01b81525090610f3d5760405162461bcd60e51b8152600401610ee691906131c9565b5060608201516001600160a01b03161580610f635750670d2f13f7789f00008260400151105b80610fcd575081606001516001600160a01b0316637a5d20ea6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fa9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fcd9190613215565b60405180604001604052806002815260200161353960f01b815250906110065760405162461bcd60e51b8152600401610ee691906131c9565b50600384015464ffffffffff428116600160b81b9092041610801561103f5750600383015464ffffffffff428116600160b81b90920416105b60405180604001604052806002815260200161393760f01b815250906110785760405162461bcd60e51b8152600401610ee691906131c9565b50670de0b6b3a764000082604001511060405180604001604052806002815260200161343560f01b815250906110c15760405162461bcd60e51b8152600401610ee691906131c9565b50604080516020810190915284549081905260101c61ffff161580159061110b5750600384015460408051602081019091528654815261110b91600160a81b900461ffff166123e6565b1515608082018190526040805180820190915260028152611a1b60f11b60208201529061114b5760405162461bcd60e51b8152600401610ee691906131c9565b5081602001515f141560405180604001604052806002815260200161343760f01b8152509061118d5760405162461bcd60e51b8152600401610ee691906131c9565b505050505050565b6004820154604080516020808201835285549182905291840151606085015160e08601515f958695869586956001600160a01b0390931694911c61ffff169260ff16156112815760e08901805160ff9081165f90815260208e815260409182902054935182519182019092528d549081905266010000000000009093046001600160a01b031692611230929182169160a89190911c166124e5565b1561126c5760e08a015160ff165f90815260208d90526040902054640100000000900461ffff1693506001600160a01b0381161561126c578092505b6001600160a01b0381161561127f578091505b505b929a90995091975095509350505050565b5f805f6112f3604051806101a001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405163b3596f0760e01b81526001600160a01b038b8116600483015286169063b3596f0790602401602060405180830381865afa158015611337573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061135b91906130fe565b815260405163b3596f0760e01b81526001600160a01b038a8116600483015286169063b3596f0790602401602060405180830381865afa1580156113a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113c591906130fe565b6020828101919091526040805191820190528c549081905260301c60ff1660c08201526101c08b01515160301c60ff1660a0820181905260c0820151600a90810a60e08401520a61010082015260408051602081019091528c549081905260981c61ffff166101608201526101008101518151611442919061319e565b8160e00151898360200151611457919061319e565b611461919061319e565b61146b9190613230565b6060820181905261147c9087612670565b604082018190528710156114e957610120810187905260e081015160208201516114de9188916114ac919061319e565b61010084015161012085015185516114c4919061319e565b6114ce919061319e565b6114d89190613230565b906127fd565b6101408201526114fd565b604081015161012082015261014081018890525b6101608101511561156f5761012081015161151890876127fd565b816101200151611528919061324f565b6080820181905261016082015161153f9190612670565b6101808201819052610120820151611557919061324f565b81610140015182610180015193509350935050611584565b8061012001518161014001515f935093509350505b985098509895505050505050565b6040805180820190915260028152610dcd60f21b6020820152608083106115cc5760405162461bcd60e51b8152600401610ee691906131c9565b50600182811b1b81156115e4578354811784556115ec565b835481191684555b50505050565b6040805180820190915260028152610dcd60f21b60208201526080831061162c5760405162461bcd60e51b8152600401610ee691906131c9565b50600182811b81011b81156115e4578354811784556115ec565b80606001518160200151106116f5576101608101516102208101516080840151606084015161014090930151604051637a94c56560e11b81526001600160a01b03928316600482015260248101949094526044840152169063f5298aca906064016020604051808303815f875af11580156116c3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116e791906130fe565b610160820151602001525050565b60208101511561179c576101608101516102208101516080840151602084015161014090930151604051637a94c56560e11b81526001600160a01b03928316600482015260248101949094526044840152169063f5298aca906064016020604051808303815f875af115801561176d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061179191906130fe565b610160820151602001525b80610160015161020001516001600160a01b0316639dc29fac8360800151836020015184606001516117ce919061324f565b6040516001600160e01b031960e085901b1681526001600160a01b039092166004830152602482015260440160408051808303815f875af1158015611815573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118399190613262565b61016083015160a081019190915260c001525b5050565b61187760405180608001604052805f81526020015f81526020015f81526020015f81525090565b610140850151602086015161188b91611fcc565b60608281019182526007880154604080516101408101825260088b01546001600160801b03600160801b918290048116835260208084018b90528385018a905260c08d810151978501979097529651608084015260a0808d0151908401526101a08c0151958301959095526001600160a01b038a811660e0840152835196870184528c5496879052600160fc1b909616151561010083015260098c01540490931661012084015251637b424dcf60e11b815292169163f6849b9e9161195291600401613284565b606060405180830381865afa15801561196d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119919190613306565b604084015260208301528082526119a790612826565b6001870180546001600160801b03928316600160801b02921691909117905560208101516119d490612826565b6003870180546001600160801b0319166001600160801b03929092169190911790556040810151611a0490612826565b6002870180546001600160801b03928316600160801b029216919091179055604080516020810190915286548152611a429051600160fc1b16151590565b15611af7578215611a9f57611a5683612826565b600987018054601090611a7a908490600160801b90046001600160801b0316613331565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b8115611af757611aae82612826565b600987018054601090611ad2908490600160801b90046001600160801b0316613358565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b80516020808301516040808501516101008a01516101408b015183519687529486019390935290840152606083015260808201526001600160a01b038516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b6040805160208101909152835481525f908190611b89908888612892565b50915091508115611cea576001600160a01b0381165f908152602088905260408120600901546101c0860151516001600160801b039091169190611bf49060029060301c60ff16611bda919061324f565b611be590600a613458565b611bef9087613230565b612826565b9050806001600160801b0316826001600160801b031611611c6c576001600160a01b0383165f81815260208b8152604080832060090180546001600160801b0319169055519182527faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a2611ce7565b5f611c778284613358565b6001600160a01b0385165f81815260208d815260409182902060090180546001600160801b0319166001600160801b03959095169485179055905183815292935090917faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a2505b50505b50505050505050565b6101408101516040516370a0823160e01b81523360048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015611d3c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d6091906130fe565b6101408301516080808601519085015160405163f866c31960e01b81526001600160a01b0392831660048201523360248201526044810191909152929350169063f866c319906064015f604051808303815f87803b158015611dc0575f80fd5b505af1158015611dd2573d5f803e3d5ffd5b50505050805f03611cea57335f90815260208681526040918290208251918201909252855481526004860154611e16918a918a9185916001600160a01b0316612935565b15611e71576003850154611e38908290600160a81b900461ffff1660016115f2565b604080850151905133916001600160a01b0316907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2905f90a35b5050505050505050565b5f611e85846106c9565b9050611e918482610894565b60408301516080830151611eab9186918491905f90611850565b61014082015160808085015190840151610100840151604051636b81068560e11b81526001600160a01b0393841660048201523360248201526044810192909252606482015291169063d7020d0a906084015f604051808303815f87803b158015611f14575f80fd5b505af1158015611e71573d5f803e3d5ffd5b60038101545f90600160801b900464ffffffffff16428103611f54575050600101546001600160801b031690565b6001830154611f82906001600160801b0380821691611f7c91600160801b9091041684612b1f565b90611fcc565b9392505050565b50919050565b5f81156b033b2e3c9fd0803ce800000060028404190484111715611fb1575f80fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b5f81156b019d971e4fe8401e740000001983900484111517611fec575f80fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6040516323b872dd60e01b8082526001600160a01b0385811660048401528416602483015260448201839052905f80606483828a5af1612050573d5f803e3d5ffd5b5061205a85612b5b565b6120a65760405162461bcd60e51b815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610ee6565b5050505050565b6101608101511561211b575f6120cd826101600151836102400151612b1f565b90506120e68260e0015182611fcc90919063ffffffff16565b61010083018190526120f790612826565b6001840180546001600160801b0319166001600160801b0392909216919091179055505b80511561184c575f612137826101800151836102400151612bfc565b905061215182610120015182611fcc90919063ffffffff16565b610140830181905261216290612826565b6002840180546001600160801b03929092166001600160801b0319909216919091179055505050565b6121be6040518060c001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b816101a001515f036121cf57505050565b61012082015182516121e091611fcc565b602082015261014082015182516121f691611fcc565b6040820152606082015161026083015161024084015161221e92919064ffffffffff16612c04565b60608201819052604083015161223391611fcc565b80825260208201516080840151604084015161224f9190613129565b612259919061324f565b612263919061324f565b608082018190526101a083015161227a9190612670565b60a08201819052156122e6576122a5611bef8361010001518360a00151611f8f90919063ffffffff16565b6008840180545f906122c19084906001600160801b0316613331565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505b505050565b81545f90819081908190660100000000000090046001600160a01b031680156123795760405163b3596f0760e01b81526001600160a01b03828116600483015287169063b3596f0790602401602060405180830381865afa158015612352573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061237691906130fe565b91505b50945461ffff80821697620100009092041695945092505050565b6040805180820190915260028152610dcd60f21b60208201525f90608083106123d05760405162461bcd60e51b8152600401610ee691906131c9565b50508151600182901b1c60031615155b92915050565b6040805180820190915260028152610dcd60f21b60208201525f90608083106124225760405162461bcd60e51b8152600401610ee691906131c9565b50509051600191821b82011c16151590565b5f8061243f85611f26565b600486810154604051630ed1279f60e11b81526001600160a01b038a8116938201939093529293505f9287926124bc928692911690631da24f3e90602401602060405180830381865afa158015612498573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f7c91906130fe565b6124c6919061319e565b90508381816124d7576124d76131b5565b04925050505b949350505050565b5f8215801590611f825750501490565b6040805180820190915260028152610dcd60f21b60208201525f90608083106125315760405162461bcd60e51b8152600401610ee691906131c9565b50509051600191821b1c16151590565b6006830154604051630ed1279f60e11b81526001600160a01b0386811660048301525f928392911690631da24f3e90602401602060405180830381865afa15801561258e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125b291906130fe565b905080156125d0576125cd6125c686612d29565b8290611fcc565b90505b60058501546040516370a0823160e01b81526001600160a01b038881166004830152909116906370a0823190602401602060405180830381865afa15801561261a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061263e91906130fe565b6126489082613129565b9050612654818561319e565b9050828181612665576126656131b5565b049695505050505050565b5f81156113881983900484111517612686575f80fd5b506127109102611388010490565b5f8115670de0b6b3a7640000600284041904841117156126b2575f80fd5b50670de0b6b3a76400009190910260028204010490565b6102008101516040516370a0823160e01b81526001600160a01b0384811660048301525f9283929116906370a0823190602401602060405180830381865afa158015612717573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061273b91906130fe565b6102208401516040516370a0823160e01b81526001600160a01b038781166004830152909116906370a0823190602401602060405180830381865afa158015612786573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906127aa91906130fe565b915091509250929050565b51670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b5f811561271060028404190484111715612815575f80fd5b506127109190910260028204010490565b5f6001600160801b0382111561288e5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b6064820152608401610ee6565b5090565b5f805f61289e86612d7f565b15612926575f6128ce877faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa612dc2565b5f81815260208781526040808320546001600160a01b03168084528a8352818420825193840190925290549182905292935060d41c64ffffffffff169050801561292257600195509093509150610e249050565b5050505b505f9586955085945092505050565b81515f9060d41c64ffffffffff1615612b07575f826001600160a01b0316637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa158015612985573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129a9919061313c565b6001600160a01b0316630542975c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129e4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a08919061313c565b9050806001600160a01b031663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a46573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a6a919061313c565b604051632474521560e21b81527fd1d2cf869016112a9af1107bcf43c3759daf22cf734aad47d0c9c726e33bc78260048201523360248201526001600160a01b0391909116906391d1485490604401602060405180830381865afa158015612ad4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612af89190613215565b612b05575f915050612b16565b505b612b1386868686612de6565b90505b95945050505050565b5f80612b3264ffffffffff84164261324f565b612b3c908561319e565b6301e13380900490506124dd816b033b2e3c9fd0803ce8000000613129565b5f612b7d565b62461bcd60e51b5f52602060045280602452508060445260645ffd5b3d8015612bbc5760208114612bed57612bb77f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f612b61565b611f89565b823b612be457612be47311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b6014612b61565b60019150611f89565b3d5f803e50505f511515919050565b5f611f828383425b5f80612c1764ffffffffff85168461324f565b9050805f03612c35576b033b2e3c9fd0803ce8000000915050611f82565b5f1981015f808060028511612c4a575f612c4f565b600285035b925066038882915c4000612c638a80611fcc565b81612c7057612c706131b5565b0491506301e13380612c82838b611fcc565b81612c8f57612c8f6131b5565b0490505f82612c9e868861319e565b612ca8919061319e565b6002900490505f8285612cbb888a61319e565b612cc5919061319e565b612ccf919061319e565b60069004905080826301e13380612ce68a8f61319e565b612cf09190613230565b612d06906b033b2e3c9fd0803ce8000000613129565b612d109190613129565b612d1a9190613129565b9b9a5050505050505050505050565b60038101545f90600160801b900464ffffffffff16428103612d57575050600201546001600160801b031690565b6002830154611f82906001600160801b0380821691611f7c91600160801b9091041684612bfc565b80515f907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa168015801590611f825750612dba60018261324f565b161592915050565b81515f9082165f198101198116825b60029190911c908115612b1657600101612dd1565b5f612df3825161ffff1690565b5f03612e0057505f6124dd565b60408051602081019091528354908190527faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa16612e3f575060016124dd565b6040805160208101909152835481525f90612e5b908787612892565b5050905080158015612e765750825160d41c64ffffffffff16155b9695505050505050565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612ef1612ef6565b905290565b6040518061028001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f8152602001612f6b60405180602001604052805f81525090565b81525f6020820181905260408201819052606082018190526080820181905260a09091015290565b604051610120810167ffffffffffffffff81118282101715612fc357634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b0381168114612fdd575f80fd5b50565b8035612feb81612fc9565b919050565b8015158114612fdd575f80fd5b8035612feb81612ff0565b803560ff81168114612feb575f80fd5b5f805f805f8587036101a081121561302e575f80fd5b8635955060208701359450604087013593506060870135925061012080607f198301121561305a575f80fd5b613062612f93565b91506080880135825260a0880135602083015261308160c08901612fe0565b604083015261309260e08901612fe0565b60608301526101006130a5818a01612fe0565b60808401526130b5828a01612ffd565b60a08401526130c76101408a01612fe0565b60c08401526130d96101608a01613008565b60e08401526130eb6101808a01612fe0565b9083015250949793965091945092919050565b5f6020828403121561310e575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156123e0576123e0613115565b5f6020828403121561314c575f80fd5b8151611f8281612fc9565b5f805f806080858703121561316a575f80fd5b845193506020850151925060408501519150606085015164ffffffffff81168114613193575f80fd5b939692955090935050565b80820281158282048414176123e0576123e0613115565b634e487b7160e01b5f52601260045260245ffd5b5f602080835283518060208501525f5b818110156131f5578581018301518582016040015282016131d9565b505f604082860101526040601f19601f8301168501019250505092915050565b5f60208284031215613225575f80fd5b8151611f8281612ff0565b5f8261324a57634e487b7160e01b5f52601260045260245ffd5b500490565b818103818111156123e0576123e0613115565b5f8060408385031215613273575f80fd5b505080516020909101519092909150565b5f61014082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e08301516132e660e08401826001600160a01b03169052565b506101008381015180151584830152505061012092830151919092015290565b5f805f60608486031215613318575f80fd5b8351925060208401519150604084015190509250925092565b6001600160801b0381811683821601908082111561335157613351613115565b5092915050565b6001600160801b0382811682821603908082111561335157613351613115565b600181815b808511156133b257815f190482111561339857613398613115565b808516156133a557918102915b93841c939080029061337d565b509250929050565b5f826133c8575060016123e0565b816133d457505f6123e0565b81600181146133ea57600281146133f457613410565b60019150506123e0565b60ff84111561340557613405613115565b50506001821b6123e0565b5060208310610133831016604e8410600b8410161715613433575081810a6123e0565b61343d8383613378565b805f190482111561345057613450613115565b029392505050565b5f611f8283836133ba56fea26469706673582212206146e953a98fe41ffefe6cf16f278f24ca100cff895ccf96c8a512a58bc5d87164736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "CLOSE_FACTOR_HF_THRESHOLD()": "a18964a5",
  "MAX_LIQUIDATION_CLOSE_FACTOR()": "d2467544",
  "executeLiquidationCall(mapping(address => DataTypes.ReserveData) storage,mapping(uint256 => address) storage,mapping(address => DataTypes.UserConfigurationMap) storage,mapping(uint8 => DataTypes.EModeCategory) storage,DataTypes.ExecuteLiquidationCallParams)": "83c1087d"
} as const
};
