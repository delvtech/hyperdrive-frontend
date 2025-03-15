export const StETHHyperdriveCoreDeployer = {
  name: 'StETHHyperdriveCoreDeployer' as const,
  abi: [
  {
    "type": "function",
    "name": "deployHyperdrive",
    "inputs": [
      {
        "name": "__name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_config",
        "type": "tuple",
        "internalType": "struct IHyperdrive.PoolConfig",
        "components": [
          {
            "name": "baseToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "vaultSharesToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "linkerFactory",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "linkerCodeHash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "initialVaultSharePrice",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "minimumShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "minimumTransactionAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "circuitBreakerDelta",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "positionDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "checkpointDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timeStretch",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "governance",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "feeCollector",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sweepCollector",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "checkpointRewarder",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fees",
            "type": "tuple",
            "internalType": "struct IHyperdrive.Fees",
            "components": [
              {
                "name": "curve",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "flat",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "governanceLP",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "governanceZombie",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          }
        ]
      },
      {
        "name": "_adminController",
        "type": "address",
        "internalType": "contract IHyperdriveAdminController"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "_target0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target1",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target2",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target3",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target4",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_salt",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  }
] as const,
  bytecode: '0x608060405234801561000f575f80fd5b50611d728061001d5f395ff3fe608060405234801562000010575f80fd5b50600436106200002c575f3560e01c80638cc23ce01462000030575b5f80fd5b62000047620000413660046200035b565b62000063565b6040516001600160a01b03909116815260200160405180910390f35b604080513360208201529081018290525f90606001604051602081830303815290604052805190602001208b8b8b8a8a8a8a8a604051620000a490620000e5565b620000b798979695949392919062000573565b8190604051809103905ff5905080158015620000d5573d5f803e3d5ffd5b509b9a5050505050505050505050565b611721806200061c83390190565b634e487b7160e01b5f52604160045260245ffd5b604051610200810167ffffffffffffffff811182821017156200012e576200012e620000f3565b60405290565b5f82601f83011262000144575f80fd5b813567ffffffffffffffff80821115620001625762000162620000f3565b604051601f8301601f19908116603f011681019082821181831017156200018d576200018d620000f3565b81604052838152866020858801011115620001a6575f80fd5b836020870160208301375f602085830101528094505050505092915050565b80356001600160a01b0381168114620001dc575f80fd5b919050565b5f60808284031215620001f2575f80fd5b6040516080810181811067ffffffffffffffff82111715620002185762000218620000f3565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f61026082840312156200025b575f80fd5b6200026562000107565b90506200027282620001c5565b81526200028260208301620001c5565b60208201526200029560408301620001c5565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016062000300818401620001c5565b9082015261018062000314838201620001c5565b908201526101a062000328838201620001c5565b908201526101c06200033c838201620001c5565b908201526101e06200035184848301620001e1565b9082015292915050565b5f805f805f805f805f806103808b8d03121562000376575f80fd5b8a3567ffffffffffffffff808211156200038e575f80fd5b6200039c8e838f0162000134565b9b50620003ad8e60208f0162000249565b9a50620003be6102808e01620001c5565b99506102a08d0135915080821115620003d5575f80fd5b50620003e48d828e0162000134565b975050620003f66102c08c01620001c5565b9550620004076102e08c01620001c5565b9450620004186103008c01620001c5565b9350620004296103208c01620001c5565b92506200043a6103408c01620001c5565b91506103608b013590509295989b9194979a5092959850565b80516001600160a01b0316825260208101516200047b60208401826001600160a01b03169052565b5060408101516200049760408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516200050a828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b5f6103408083528a5180828501525f91505b80821015620005a9576020828d010151610360838601015260208201915062000585565b61036091505f82828601015281601f19601f83011685010192505050620005d4602083018a62000453565b6001600160a01b039788166102808301529587166102a08201529386166102c08501529185166102e08401528416610300830152909216610320909201919091529291505056fe61032060405234801562000011575f80fd5b50604051620017213803806200172183398101604081905262000034916200033d565b60015f81905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a01518216610240528901516102605287166102205288908890889088908890889088908890620000fa8982620004fd565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e052166103005250620005c99950505050505050505050565b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b03811182821017156200016f576200016f62000135565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001a057620001a062000135565b604052919050565b80516001600160a01b0381168114620001bf575f80fd5b919050565b5f60808284031215620001d5575f80fd5b604051608081016001600160401b0381118282101715620001fa57620001fa62000135565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f61026082840312156200023d575f80fd5b6200024762000149565b90506200025482620001a8565b81526200026460208301620001a8565b60208201526200027760408301620001a8565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120808301518183015250610140808301518183015250610160620002e2818401620001a8565b90820152610180620002f6838201620001a8565b908201526101a06200030a838201620001a8565b908201526101c06200031e838201620001a8565b908201526101e06200033384848301620001c4565b9082015292915050565b5f805f805f805f80610340898b03121562000356575f80fd5b88516001600160401b03808211156200036d575f80fd5b818b0191508b601f83011262000381575f80fd5b81518181111562000396576200039662000135565b60209150620003ae601f8201601f1916830162000175565b8181528d83838601011115620003c2575f80fd5b5f5b82811015620003e1578481018401518282018501528301620003c4565b505f838383010152809b505050620003fc8c828d016200022b565b985050506200040f6102808a01620001a8565b9550620004206102a08a01620001a8565b9450620004316102c08a01620001a8565b9350620004426102e08a01620001a8565b9250620004536103008a01620001a8565b9150620004646103208a01620001a8565b90509295985092959890939650565b600181811c908216806200048857607f821691505b602082108103620004a757634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620004f857805f5260205f20601f840160051c81016020851015620004d45750805b601f840160051c820191505b81811015620004f5575f8155600101620004e0565b50505b505050565b81516001600160401b0381111562000519576200051962000135565b62000531816200052a845462000473565b84620004ad565b602080601f83116001811462000567575f84156200054f5750858301515b5f19600386901b1c1916600185901b178555620005c1565b5f85815260208120601f198616915b82811015620005975788860151825594840194600190910190840162000576565b5085821015620005b557878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051611041620006e05f395f81816105d30152818161063d015261073401525f818161054e0152818161076301526107c001525f8181610508015261095601525f81816105a001526106d201525f81816101ca015281816103820152818161060e0152818161066f015281816106a10152818161070501528181610796015281816107f001528181610925015261098901525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50506110415ff3fe6080604052600436106101b6575f3560e01c80639032c726116100eb578063d899e11211610089578063e44808bc11610063578063e44808bc14610570578063eac3e7991461058f578063f3f70707146105c2578063f698da25146105f5576101b6565b8063d899e1121461053d578063dbbe80701461052a578063ded06231146103bc576101b6565b8063a6e8a859116100c5578063a6e8a859146104f7578063ab033ea9146102bf578063cba2e58d1461052a578063cbc13434146102fa576101b6565b80639032c726146104b95780639cd241af146104d8578063a22cb46514610487576101b6565b806330adf81f116101585780634c2ac1d9116101325780634c2ac1d91461045a5780634ed2d6ac1461046d5780637180c8ca1461048757806377d05ff4146104a6576101b6565b806330adf81f146103e95780633e691db91461041c578063414f826d1461043b576101b6565b806317fad7fc1161019457806317fad7fc146103335780631c0f12b61461035257806321b57d531461037157806329b23fc1146103bc576101b6565b806301681a62146102bf57806302329a29146102e0578063074a6de9146102fa575b3480156101c1575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610202929190610a5d565b5f60405180830381855af49150503d805f811461023a576040519150601f19603f3d011682016040523d82523d5f602084013e61023f565b606091505b5091509150811561026357604051638bb0a34b60e01b815260040160405180910390fd5b5f61026d82610a6c565b90506001600160e01b03198116636e64089360e11b1461028f57815160208301fd5b8151600319810160048401908152926102b091810160200190602401610ad9565b80519650602001945050505050f35b3480156102ca575f80fd5b506102de6102d9366004610b98565b610609565b005b3480156102eb575f80fd5b506102de6102d9366004610bce565b348015610305575f80fd5b50610319610314366004610bf7565b610636565b604080519283526020830191909152015b60405180910390f35b34801561033e575f80fd5b506102de61034d366004610c8b565b61066a565b34801561035d575f80fd5b506102de61036c366004610d1a565b61069c565b34801561037c575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161032a565b3480156103c7575f80fd5b506103db6103d6366004610d5f565b6106cc565b60405190815260200161032a565b3480156103f4575f80fd5b506103db7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610427575f80fd5b506103db610436366004610db5565b6106ff565b348015610446575f80fd5b506102de610455366004610def565b61072f565b6103db610468366004610e0f565b61075d565b348015610478575f80fd5b506102de61036c366004610e6e565b348015610492575f80fd5b506102de6104a1366004610eb5565b610791565b6103db6104b4366004610bf7565b6107ba565b3480156104c4575f80fd5b506102de6104d3366004610ee8565b6107ec565b3480156104e3575f80fd5b506102de6104f2366004610f60565b610920565b348015610502575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b610319610538366004610d5f565b61094f565b348015610548575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b34801561057b575f80fd5b506102de61058a366004610f95565b610984565b34801561059a575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b3480156105cd575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b348015610600575f80fd5b506103db6109b5565b6106327f0000000000000000000000000000000000000000000000000000000000000000610a43565b5050565b5f806106617f0000000000000000000000000000000000000000000000000000000000000000610a43565b50935093915050565b6106937f0000000000000000000000000000000000000000000000000000000000000000610a43565b50505050505050565b6106c57f0000000000000000000000000000000000000000000000000000000000000000610a43565b5050505050565b5f6106f67f0000000000000000000000000000000000000000000000000000000000000000610a43565b50949350505050565b5f6107297f0000000000000000000000000000000000000000000000000000000000000000610a43565b50919050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610a43565b505050565b5f6107877f0000000000000000000000000000000000000000000000000000000000000000610a43565b5095945050505050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610a43565b5f6107e47f0000000000000000000000000000000000000000000000000000000000000000610a43565b509392505050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108206109b5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516108c99190610ff0565b5f60405180830381855af49150503d805f8114610901576040519150601f19603f3d011682016040523d82523d5f602084013e610906565b606091505b50915091508161091857805160208201fd5b805160208201f35b6109497f0000000000000000000000000000000000000000000000000000000000000000610a43565b50505050565b5f8061097a7f0000000000000000000000000000000000000000000000000000000000000000610a43565b5094509492505050565b6109ad7f0000000000000000000000000000000000000000000000000000000000000000610a43565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f366040516108c99291905b818382375f9101908152919050565b805160208201516001600160e01b03198082169291906004831015610a9b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015610ad1578181015183820152602001610ab9565b50505f910152565b5f60208284031215610ae9575f80fd5b815167ffffffffffffffff80821115610b00575f80fd5b818401915084601f830112610b13575f80fd5b815181811115610b2557610b25610aa3565b604051601f8201601f19908116603f01168101908382118183101715610b4d57610b4d610aa3565b81604052828152876020848701011115610b65575f80fd5b610b76836020830160208801610ab7565b979650505050505050565b6001600160a01b0381168114610b95575f80fd5b50565b5f60208284031215610ba8575f80fd5b8135610bb381610b81565b9392505050565b80358015158114610bc9575f80fd5b919050565b5f60208284031215610bde575f80fd5b610bb382610bba565b5f60608284031215610729575f80fd5b5f805f60608486031215610c09575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610c2d575f80fd5b610c3986828701610be7565b9150509250925092565b5f8083601f840112610c53575f80fd5b50813567ffffffffffffffff811115610c6a575f80fd5b6020830191508360208260051b8501011115610c84575f80fd5b9250929050565b5f805f805f8060808789031215610ca0575f80fd5b8635610cab81610b81565b95506020870135610cbb81610b81565b9450604087013567ffffffffffffffff80821115610cd7575f80fd5b610ce38a838b01610c43565b90965094506060890135915080821115610cfb575f80fd5b50610d0889828a01610c43565b979a9699509497509295939492505050565b5f805f8060808587031215610d2d575f80fd5b843593506020850135610d3f81610b81565b92506040850135610d4f81610b81565b9396929550929360600135925050565b5f805f8060808587031215610d72575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610d9d575f80fd5b610da987828801610be7565b91505092959194509250565b5f60208284031215610dc5575f80fd5b813567ffffffffffffffff811115610ddb575f80fd5b610de784828501610be7565b949350505050565b5f8060408385031215610e00575f80fd5b50508035926020909101359150565b5f805f805f60a08688031215610e23575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610e55575f80fd5b610e6188828901610be7565b9150509295509295909350565b5f805f8060808587031215610e81575f80fd5b843593506020850135610e9381610b81565b9250604085013591506060850135610eaa81610b81565b939692955090935050565b5f8060408385031215610ec6575f80fd5b8235610ed181610b81565b9150610edf60208401610bba565b90509250929050565b5f805f805f805f60e0888a031215610efe575f80fd5b8735610f0981610b81565b96506020880135610f1981610b81565b9550610f2760408901610bba565b945060608801359350608088013560ff81168114610f43575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215610f72575f80fd5b833592506020840135610f8481610b81565b929592945050506040919091013590565b5f805f805f60a08688031215610fa9575f80fd5b853594506020860135610fbb81610b81565b93506040860135610fcb81610b81565b9250606086013591506080860135610fe281610b81565b809150509295509295909350565b5f8251611001818460208701610ab7565b919091019291505056fea264697066735822122042e7f224b1c249ccfecf4f8cf6253bce8670e6c3ac8c5e95bdb1e14d5de87d4a64736f6c63430008160033a2646970667358221220ce500abdb26fd09504c7516bbbc5b524289c74c871bd57a6f434efa0595297be64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "deployHyperdrive(string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),address,bytes,address,address,address,address,address,bytes32)": "8cc23ce0"
} as const
};
