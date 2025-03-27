export const RETHHyperdriveCoreDeployer = {
  name: 'RETHHyperdriveCoreDeployer' as const,
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
  bytecode: '0x608060405234801561000f575f80fd5b50611dca8061001d5f395ff3fe608060405234801562000010575f80fd5b50600436106200002c575f3560e01c80638cc23ce01462000030575b5f80fd5b62000047620000413660046200035e565b62000063565b6040516001600160a01b03909116815260200160405180910390f35b604080513360208201529081018290525f908190606001604051602081830303815290604052805190602001208c8c8c8b8b8b8b8b604051620000a690620000e8565b620000b998979695949392919062000576565b8190604051809103905ff5905080158015620000d7573d5f803e3d5ffd5b509c9b505050505050505050505050565b611776806200061f83390190565b634e487b7160e01b5f52604160045260245ffd5b604051610200810167ffffffffffffffff81118282101715620001315762000131620000f6565b60405290565b5f82601f83011262000147575f80fd5b813567ffffffffffffffff80821115620001655762000165620000f6565b604051601f8301601f19908116603f01168101908282118183101715620001905762000190620000f6565b81604052838152866020858801011115620001a9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b80356001600160a01b0381168114620001df575f80fd5b919050565b5f60808284031215620001f5575f80fd5b6040516080810181811067ffffffffffffffff821117156200021b576200021b620000f6565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f61026082840312156200025e575f80fd5b620002686200010a565b90506200027582620001c8565b81526200028560208301620001c8565b60208201526200029860408301620001c8565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525061016062000303818401620001c8565b9082015261018062000317838201620001c8565b908201526101a06200032b838201620001c8565b908201526101c06200033f838201620001c8565b908201526101e06200035484848301620001e4565b9082015292915050565b5f805f805f805f805f806103808b8d03121562000379575f80fd5b8a3567ffffffffffffffff8082111562000391575f80fd5b6200039f8e838f0162000137565b9b50620003b08e60208f016200024c565b9a50620003c16102808e01620001c8565b99506102a08d0135915080821115620003d8575f80fd5b50620003e78d828e0162000137565b975050620003f96102c08c01620001c8565b95506200040a6102e08c01620001c8565b94506200041b6103008c01620001c8565b93506200042c6103208c01620001c8565b92506200043d6103408c01620001c8565b91506103608b013590509295989b9194979a5092959850565b80516001600160a01b0316825260208101516200047e60208401826001600160a01b03169052565b5060408101516200049a60408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516200050d828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b5f6103408083528a5180828501525f91505b80821015620005ac576020828d010151610360838601015260208201915062000588565b61036091505f82828601015281601f19601f83011685010192505050620005d7602083018a62000456565b6001600160a01b039788166102808301529587166102a08201529386166102c08501529185166102e08401528416610300830152909216610320909201919091529291505056fe61032060405234801562000011575f80fd5b50604051620017763803806200177683398101604081905262000034916200033d565b60015f81905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a01518216610240528901516102605287166102205288908890889088908890889088908890620000fa8982620004fd565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e052166103005250620005c99950505050505050505050565b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b03811182821017156200016f576200016f62000135565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001a057620001a062000135565b604052919050565b80516001600160a01b0381168114620001bf575f80fd5b919050565b5f60808284031215620001d5575f80fd5b604051608081016001600160401b0381118282101715620001fa57620001fa62000135565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f61026082840312156200023d575f80fd5b6200024762000149565b90506200025482620001a8565b81526200026460208301620001a8565b60208201526200027760408301620001a8565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120808301518183015250610140808301518183015250610160620002e2818401620001a8565b90820152610180620002f6838201620001a8565b908201526101a06200030a838201620001a8565b908201526101c06200031e838201620001a8565b908201526101e06200033384848301620001c4565b9082015292915050565b5f805f805f805f80610340898b03121562000356575f80fd5b88516001600160401b03808211156200036d575f80fd5b818b0191508b601f83011262000381575f80fd5b81518181111562000396576200039662000135565b60209150620003ae601f8201601f1916830162000175565b8181528d83838601011115620003c2575f80fd5b5f5b82811015620003e1578481018401518282018501528301620003c4565b505f838383010152809b505050620003fc8c828d016200022b565b985050506200040f6102808a01620001a8565b9550620004206102a08a01620001a8565b9450620004316102c08a01620001a8565b9350620004426102e08a01620001a8565b9250620004536103008a01620001a8565b9150620004646103208a01620001a8565b90509295985092959890939650565b600181811c908216806200048857607f821691505b602082108103620004a757634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620004f857805f5260205f20601f840160051c81016020851015620004d45750805b601f840160051c820191505b81811015620004f5575f8155600101620004e0565b50505b505050565b81516001600160401b0381111562000519576200051962000135565b62000531816200052a845462000473565b84620004ad565b602080601f83116001811462000567575f84156200054f5750858301515b5f19600386901b1c1916600185901b178555620005c1565b5f85815260208120601f198616915b82811015620005975788860151825594840194600190910190840162000576565b5085821015620005b557878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051611093620006e35f395f81816106250152818161068f015261078601525f81816105a0015281816107b5015261081201525f818161055a01526109a801525f81816105f2015261072401525f818161021e015281816103d401528181610660015281816106c1015281816106f301528181610757015281816107e8015281816108420152818161097701526109db01525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f6101ca01525f50506110935ff3fe6080604052600436106101ba575f3560e01c80639032c726116100eb578063d899e11211610089578063e44808bc11610063578063e44808bc146105c2578063eac3e799146105e1578063f3f7070714610614578063f698da25146106475761020a565b8063d899e1121461058f578063dbbe80701461057c578063ded062311461040e5761020a565b8063a6e8a859116100c5578063a6e8a85914610549578063ab033ea914610313578063cba2e58d1461057c578063cbc134341461034c5761020a565b80639032c7261461050b5780639cd241af1461052a578063a22cb465146104d95761020a565b806330adf81f116101585780634c2ac1d9116101325780634c2ac1d9146104ac5780634ed2d6ac146104bf5780637180c8ca146104d957806377d05ff4146104f85761020a565b806330adf81f1461043b5780633e691db91461046e578063414f826d1461048d5761020a565b806317fad7fc1161019457806317fad7fc146103855780631c0f12b6146103a457806321b57d53146103c357806329b23fc11461040e5761020a565b806301681a621461031357806302329a2914610332578063074a6de91461034c5761020a565b3661020a57336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610208576040516312171d8360e31b815260040160405180910390fd5b005b348015610215575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610256929190610aaf565b5f60405180830381855af49150503d805f811461028e576040519150601f19603f3d011682016040523d82523d5f602084013e610293565b606091505b509150915081156102b757604051638bb0a34b60e01b815260040160405180910390fd5b5f6102c182610abe565b90506001600160e01b03198116636e64089360e11b146102e357815160208301fd5b81516003198101600484019081529261030491810160200190602401610b2b565b80519650602001945050505050f35b34801561031e575f80fd5b5061020861032d366004610bea565b61065b565b34801561033d575f80fd5b5061020861032d366004610c20565b348015610357575f80fd5b5061036b610366366004610c49565b610688565b604080519283526020830191909152015b60405180910390f35b348015610390575f80fd5b5061020861039f366004610cdd565b6106bc565b3480156103af575f80fd5b506102086103be366004610d6c565b6106ee565b3480156103ce575f80fd5b506103f67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161037c565b348015610419575f80fd5b5061042d610428366004610db1565b61071e565b60405190815260200161037c565b348015610446575f80fd5b5061042d7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610479575f80fd5b5061042d610488366004610e07565b610751565b348015610498575f80fd5b506102086104a7366004610e41565b610781565b61042d6104ba366004610e61565b6107af565b3480156104ca575f80fd5b506102086103be366004610ec0565b3480156104e4575f80fd5b506102086104f3366004610f07565b6107e3565b61042d610506366004610c49565b61080c565b348015610516575f80fd5b50610208610525366004610f3a565b61083e565b348015610535575f80fd5b50610208610544366004610fb2565b610972565b348015610554575f80fd5b506103f67f000000000000000000000000000000000000000000000000000000000000000081565b61036b61058a366004610db1565b6109a1565b34801561059a575f80fd5b506103f67f000000000000000000000000000000000000000000000000000000000000000081565b3480156105cd575f80fd5b506102086105dc366004610fe7565b6109d6565b3480156105ec575f80fd5b506103f67f000000000000000000000000000000000000000000000000000000000000000081565b34801561061f575f80fd5b506103f67f000000000000000000000000000000000000000000000000000000000000000081565b348015610652575f80fd5b5061042d610a07565b6106847f0000000000000000000000000000000000000000000000000000000000000000610a95565b5050565b5f806106b37f0000000000000000000000000000000000000000000000000000000000000000610a95565b50935093915050565b6106e57f0000000000000000000000000000000000000000000000000000000000000000610a95565b50505050505050565b6107177f0000000000000000000000000000000000000000000000000000000000000000610a95565b5050505050565b5f6107487f0000000000000000000000000000000000000000000000000000000000000000610a95565b50949350505050565b5f61077b7f0000000000000000000000000000000000000000000000000000000000000000610a95565b50919050565b6107aa7f0000000000000000000000000000000000000000000000000000000000000000610a95565b505050565b5f6107d97f0000000000000000000000000000000000000000000000000000000000000000610a95565b5095945050505050565b6107aa7f0000000000000000000000000000000000000000000000000000000000000000610a95565b5f6108367f0000000000000000000000000000000000000000000000000000000000000000610a95565b509392505050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610872610a07565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161091b9190611042565b5f60405180830381855af49150503d805f8114610953576040519150601f19603f3d011682016040523d82523d5f602084013e610958565b606091505b50915091508161096a57805160208201fd5b805160208201f35b61099b7f0000000000000000000000000000000000000000000000000000000000000000610a95565b50505050565b5f806109cc7f0000000000000000000000000000000000000000000000000000000000000000610a95565b5094509492505050565b6109ff7f0000000000000000000000000000000000000000000000000000000000000000610a95565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f3660405161091b9291905b818382375f9101908152919050565b805160208201516001600160e01b03198082169291906004831015610aed5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015610b23578181015183820152602001610b0b565b50505f910152565b5f60208284031215610b3b575f80fd5b815167ffffffffffffffff80821115610b52575f80fd5b818401915084601f830112610b65575f80fd5b815181811115610b7757610b77610af5565b604051601f8201601f19908116603f01168101908382118183101715610b9f57610b9f610af5565b81604052828152876020848701011115610bb7575f80fd5b610bc8836020830160208801610b09565b979650505050505050565b6001600160a01b0381168114610be7575f80fd5b50565b5f60208284031215610bfa575f80fd5b8135610c0581610bd3565b9392505050565b80358015158114610c1b575f80fd5b919050565b5f60208284031215610c30575f80fd5b610c0582610c0c565b5f6060828403121561077b575f80fd5b5f805f60608486031215610c5b575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610c7f575f80fd5b610c8b86828701610c39565b9150509250925092565b5f8083601f840112610ca5575f80fd5b50813567ffffffffffffffff811115610cbc575f80fd5b6020830191508360208260051b8501011115610cd6575f80fd5b9250929050565b5f805f805f8060808789031215610cf2575f80fd5b8635610cfd81610bd3565b95506020870135610d0d81610bd3565b9450604087013567ffffffffffffffff80821115610d29575f80fd5b610d358a838b01610c95565b90965094506060890135915080821115610d4d575f80fd5b50610d5a89828a01610c95565b979a9699509497509295939492505050565b5f805f8060808587031215610d7f575f80fd5b843593506020850135610d9181610bd3565b92506040850135610da181610bd3565b9396929550929360600135925050565b5f805f8060808587031215610dc4575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610def575f80fd5b610dfb87828801610c39565b91505092959194509250565b5f60208284031215610e17575f80fd5b813567ffffffffffffffff811115610e2d575f80fd5b610e3984828501610c39565b949350505050565b5f8060408385031215610e52575f80fd5b50508035926020909101359150565b5f805f805f60a08688031215610e75575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610ea7575f80fd5b610eb388828901610c39565b9150509295509295909350565b5f805f8060808587031215610ed3575f80fd5b843593506020850135610ee581610bd3565b9250604085013591506060850135610efc81610bd3565b939692955090935050565b5f8060408385031215610f18575f80fd5b8235610f2381610bd3565b9150610f3160208401610c0c565b90509250929050565b5f805f805f805f60e0888a031215610f50575f80fd5b8735610f5b81610bd3565b96506020880135610f6b81610bd3565b9550610f7960408901610c0c565b945060608801359350608088013560ff81168114610f95575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215610fc4575f80fd5b833592506020840135610fd681610bd3565b929592945050506040919091013590565b5f805f805f60a08688031215610ffb575f80fd5b85359450602086013561100d81610bd3565b9350604086013561101d81610bd3565b925060608601359150608086013561103481610bd3565b809150509295509295909350565b5f8251611053818460208701610b09565b919091019291505056fea2646970667358221220a5dab6235340bb3a7807a8f7bea5be6cd7c396c95685fe5b43fef9d6a0c09fdd64736f6c63430008160033a264697066735822122096884f212e90667c88bf5b0579182f56913f972a5baf71c76ca3fcbde68773b964736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "deployHyperdrive(string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),address,bytes,address,address,address,address,address,bytes32)": "8cc23ce0"
} as const
};
