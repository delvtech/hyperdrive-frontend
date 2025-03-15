export const EzETHLineaHyperdriveCoreDeployer = {
  name: 'EzETHLineaHyperdriveCoreDeployer' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_xRenzoDeposit",
        "type": "address",
        "internalType": "contract IXRenzoDeposit"
      }
    ],
    "stateMutability": "nonpayable"
  },
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
  },
  {
    "type": "function",
    "name": "xRenzoDeposit",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IXRenzoDeposit"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x60a060405234801561000f575f80fd5b50604051611ea1380380611ea183398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f80fd5b81516001600160a01b0381168114610065575f80fd5b9392505050565b608051611e186100895f395f81816042015260c60152611e185ff3fe608060405234801562000010575f80fd5b506004361062000038575f3560e01c806312ae5e67146200003c5780638cc23ce01462000080575b5f80fd5b620000647f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6200006462000091366004620003ad565b604080513360208201529081018290525f90606001604051602081830303815290604052805190602001208b8b8b8a8a8a8a8a7f0000000000000000000000000000000000000000000000000000000000000000604051620000f39062000137565b6200010799989796959493929190620005c5565b8190604051809103905ff590508015801562000125573d5f803e3d5ffd5b5090505b9a9950505050505050505050565b611746806200069d83390190565b634e487b7160e01b5f52604160045260245ffd5b604051610200810167ffffffffffffffff8111828210171562000180576200018062000145565b60405290565b5f82601f83011262000196575f80fd5b813567ffffffffffffffff80821115620001b457620001b462000145565b604051601f8301601f19908116603f01168101908282118183101715620001df57620001df62000145565b81604052838152866020858801011115620001f8575f80fd5b836020870160208301375f602085830101528094505050505092915050565b80356001600160a01b03811681146200022e575f80fd5b919050565b5f6080828403121562000244575f80fd5b6040516080810181811067ffffffffffffffff821117156200026a576200026a62000145565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b5f6102608284031215620002ad575f80fd5b620002b762000159565b9050620002c48262000217565b8152620002d46020830162000217565b6020820152620002e76040830162000217565b6040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101606200035281840162000217565b908201526101806200036683820162000217565b908201526101a06200037a83820162000217565b908201526101c06200038e83820162000217565b908201526101e0620003a38484830162000233565b9082015292915050565b5f805f805f805f805f806103808b8d031215620003c8575f80fd5b8a3567ffffffffffffffff80821115620003e0575f80fd5b620003ee8e838f0162000186565b9b50620003ff8e60208f016200029b565b9a50620004106102808e0162000217565b99506102a08d013591508082111562000427575f80fd5b50620004368d828e0162000186565b975050620004486102c08c0162000217565b9550620004596102e08c0162000217565b94506200046a6103008c0162000217565b93506200047b6103208c0162000217565b92506200048c6103408c0162000217565b91506103608b013590509295989b9194979a5092959850565b80516001600160a01b031682526020810151620004cd60208401826001600160a01b03169052565b506040810151620004e960408401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201518184015250610160808201516200055c828501826001600160a01b03169052565b5050610180818101516001600160a01b03908116918401919091526101a0808301518216908401526101c080830151909116908301526101e090810151805191830191909152602081015161020083015260408101516102208301526060015161024090910152565b5f6103608083528b5180828501525f91505b80821015620005fb576020828e0101516103808386010152602082019150620005d7565b61038091505f82828601015281601f19601f8301168501019250505062000626602083018b620004a5565b6001600160a01b0389166102808301526001600160a01b0388166102a08301526001600160a01b0387166102c08301526001600160a01b0386166102e08301526001600160a01b0385166103008301526001600160a01b0384166103208301526001600160a01b0383166103408301526200012956fe61034060405234801562000011575f80fd5b506040516200174638038062001746833981016040819052620000349162000349565b60015f81905588516001600160a01b0390811660809081526020808c0151831660a0908152918c01516101a052908b01516101c05260c0808c01516101e090815260e0808e015161020052610120808f0151909352610100808f0151909152610140808f0151909152908d01805151909252815190920151909152805160409081015161016052905160609081015161018052908b01518216610240528a01516102605288166102205281908a908a908a908a908a908a908a908a90620000fc89826200051b565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e052811661030052939093166103205250620005e79a5050505050505050505050565b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b03811182821017156200017b576200017b62000141565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001ac57620001ac62000141565b604052919050565b80516001600160a01b0381168114620001cb575f80fd5b919050565b5f60808284031215620001e1575f80fd5b604051608081016001600160401b038111828210171562000206576200020662000141565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f610260828403121562000249575f80fd5b6200025362000155565b90506200026082620001b4565b81526200027060208301620001b4565b60208201526200028360408301620001b4565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100808301518183015250610120808301518183015250610140808301518183015250610160620002ee818401620001b4565b9082015261018062000302838201620001b4565b908201526101a062000316838201620001b4565b908201526101c06200032a838201620001b4565b908201526101e06200033f84848301620001d0565b9082015292915050565b5f805f805f805f805f6103608a8c03121562000363575f80fd5b89516001600160401b03808211156200037a575f80fd5b818c0191508c601f8301126200038e575f80fd5b815181811115620003a357620003a362000141565b60209150620003bb601f8201601f1916830162000181565b8181528e83838601011115620003cf575f80fd5b5f5b82811015620003ee578481018401518282018501528301620003d1565b505f838383010152809c505050620004098d828e0162000237565b995050506200041c6102808b01620001b4565b96506200042d6102a08b01620001b4565b95506200043e6102c08b01620001b4565b94506200044f6102e08b01620001b4565b9350620004606103008b01620001b4565b9250620004716103208b01620001b4565b9150620004826103408b01620001b4565b90509295985092959850929598565b600181811c90821680620004a657607f821691505b602082108103620004c557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200051657805f5260205f20601f840160051c81016020851015620004f25750805b601f840160051c820191505b8181101562000513575f8155600101620004fe565b50505b505050565b81516001600160401b0381111562000537576200053762000141565b6200054f8162000548845462000491565b84620004cb565b602080601f83116001811462000585575f84156200056d5750858301515b5f19600386901b1c1916600185901b178555620005df565b5f85815260208120601f198616915b82811015620005b55788860151825594840194600190910190840162000594565b5085821015620005d357878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e0516103005161032051611041620007055f395f50505f81816105d30152818161063d015261073401525f818161054e0152818161076301526107c001525f8181610508015261095601525f81816105a001526106d201525f81816101ca015281816103820152818161060e0152818161066f015281816106a10152818161070501528181610796015281816107f001528181610925015261098901525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50506110415ff3fe6080604052600436106101b6575f3560e01c80639032c726116100eb578063d899e11211610089578063e44808bc11610063578063e44808bc14610570578063eac3e7991461058f578063f3f70707146105c2578063f698da25146105f5576101b6565b8063d899e1121461053d578063dbbe80701461052a578063ded06231146103bc576101b6565b8063a6e8a859116100c5578063a6e8a859146104f7578063ab033ea9146102bf578063cba2e58d1461052a578063cbc13434146102fa576101b6565b80639032c726146104b95780639cd241af146104d8578063a22cb46514610487576101b6565b806330adf81f116101585780634c2ac1d9116101325780634c2ac1d91461045a5780634ed2d6ac1461046d5780637180c8ca1461048757806377d05ff4146104a6576101b6565b806330adf81f146103e95780633e691db91461041c578063414f826d1461043b576101b6565b806317fad7fc1161019457806317fad7fc146103335780631c0f12b61461035257806321b57d531461037157806329b23fc1146103bc576101b6565b806301681a62146102bf57806302329a29146102e0578063074a6de9146102fa575b3480156101c1575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610202929190610a5d565b5f60405180830381855af49150503d805f811461023a576040519150601f19603f3d011682016040523d82523d5f602084013e61023f565b606091505b5091509150811561026357604051638bb0a34b60e01b815260040160405180910390fd5b5f61026d82610a6c565b90506001600160e01b03198116636e64089360e11b1461028f57815160208301fd5b8151600319810160048401908152926102b091810160200190602401610ad9565b80519650602001945050505050f35b3480156102ca575f80fd5b506102de6102d9366004610b98565b610609565b005b3480156102eb575f80fd5b506102de6102d9366004610bce565b348015610305575f80fd5b50610319610314366004610bf7565b610636565b604080519283526020830191909152015b60405180910390f35b34801561033e575f80fd5b506102de61034d366004610c8b565b61066a565b34801561035d575f80fd5b506102de61036c366004610d1a565b61069c565b34801561037c575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161032a565b3480156103c7575f80fd5b506103db6103d6366004610d5f565b6106cc565b60405190815260200161032a565b3480156103f4575f80fd5b506103db7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610427575f80fd5b506103db610436366004610db5565b6106ff565b348015610446575f80fd5b506102de610455366004610def565b61072f565b6103db610468366004610e0f565b61075d565b348015610478575f80fd5b506102de61036c366004610e6e565b348015610492575f80fd5b506102de6104a1366004610eb5565b610791565b6103db6104b4366004610bf7565b6107ba565b3480156104c4575f80fd5b506102de6104d3366004610ee8565b6107ec565b3480156104e3575f80fd5b506102de6104f2366004610f60565b610920565b348015610502575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b610319610538366004610d5f565b61094f565b348015610548575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b34801561057b575f80fd5b506102de61058a366004610f95565b610984565b34801561059a575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b3480156105cd575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b348015610600575f80fd5b506103db6109b5565b6106327f0000000000000000000000000000000000000000000000000000000000000000610a43565b5050565b5f806106617f0000000000000000000000000000000000000000000000000000000000000000610a43565b50935093915050565b6106937f0000000000000000000000000000000000000000000000000000000000000000610a43565b50505050505050565b6106c57f0000000000000000000000000000000000000000000000000000000000000000610a43565b5050505050565b5f6106f67f0000000000000000000000000000000000000000000000000000000000000000610a43565b50949350505050565b5f6107297f0000000000000000000000000000000000000000000000000000000000000000610a43565b50919050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610a43565b505050565b5f6107877f0000000000000000000000000000000000000000000000000000000000000000610a43565b5095945050505050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610a43565b5f6107e47f0000000000000000000000000000000000000000000000000000000000000000610a43565b509392505050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108206109b5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516108c99190610ff0565b5f60405180830381855af49150503d805f8114610901576040519150601f19603f3d011682016040523d82523d5f602084013e610906565b606091505b50915091508161091857805160208201fd5b805160208201f35b6109497f0000000000000000000000000000000000000000000000000000000000000000610a43565b50505050565b5f8061097a7f0000000000000000000000000000000000000000000000000000000000000000610a43565b5094509492505050565b6109ad7f0000000000000000000000000000000000000000000000000000000000000000610a43565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f366040516108c99291905b818382375f9101908152919050565b805160208201516001600160e01b03198082169291906004831015610a9b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015610ad1578181015183820152602001610ab9565b50505f910152565b5f60208284031215610ae9575f80fd5b815167ffffffffffffffff80821115610b00575f80fd5b818401915084601f830112610b13575f80fd5b815181811115610b2557610b25610aa3565b604051601f8201601f19908116603f01168101908382118183101715610b4d57610b4d610aa3565b81604052828152876020848701011115610b65575f80fd5b610b76836020830160208801610ab7565b979650505050505050565b6001600160a01b0381168114610b95575f80fd5b50565b5f60208284031215610ba8575f80fd5b8135610bb381610b81565b9392505050565b80358015158114610bc9575f80fd5b919050565b5f60208284031215610bde575f80fd5b610bb382610bba565b5f60608284031215610729575f80fd5b5f805f60608486031215610c09575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610c2d575f80fd5b610c3986828701610be7565b9150509250925092565b5f8083601f840112610c53575f80fd5b50813567ffffffffffffffff811115610c6a575f80fd5b6020830191508360208260051b8501011115610c84575f80fd5b9250929050565b5f805f805f8060808789031215610ca0575f80fd5b8635610cab81610b81565b95506020870135610cbb81610b81565b9450604087013567ffffffffffffffff80821115610cd7575f80fd5b610ce38a838b01610c43565b90965094506060890135915080821115610cfb575f80fd5b50610d0889828a01610c43565b979a9699509497509295939492505050565b5f805f8060808587031215610d2d575f80fd5b843593506020850135610d3f81610b81565b92506040850135610d4f81610b81565b9396929550929360600135925050565b5f805f8060808587031215610d72575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610d9d575f80fd5b610da987828801610be7565b91505092959194509250565b5f60208284031215610dc5575f80fd5b813567ffffffffffffffff811115610ddb575f80fd5b610de784828501610be7565b949350505050565b5f8060408385031215610e00575f80fd5b50508035926020909101359150565b5f805f805f60a08688031215610e23575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610e55575f80fd5b610e6188828901610be7565b9150509295509295909350565b5f805f8060808587031215610e81575f80fd5b843593506020850135610e9381610b81565b9250604085013591506060850135610eaa81610b81565b939692955090935050565b5f8060408385031215610ec6575f80fd5b8235610ed181610b81565b9150610edf60208401610bba565b90509250929050565b5f805f805f805f60e0888a031215610efe575f80fd5b8735610f0981610b81565b96506020880135610f1981610b81565b9550610f2760408901610bba565b945060608801359350608088013560ff81168114610f43575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215610f72575f80fd5b833592506020840135610f8481610b81565b929592945050506040919091013590565b5f805f805f60a08688031215610fa9575f80fd5b853594506020860135610fbb81610b81565b93506040860135610fcb81610b81565b9250606086013591506080860135610fe281610b81565b809150509295509295909350565b5f8251611001818460208701610ab7565b919091019291505056fea2646970667358221220f43369c771b298943b2ca32c2ef059ddd101fd6f1eba3c63d5f506d7fdf1e1cd64736f6c63430008160033a2646970667358221220bc33a3244939269e39b725e0a7a6c69ccb69b66ee235df69a13cf49c27db1e0a64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "deployHyperdrive(string,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,(uint256,uint256,uint256,uint256)),address,bytes,address,address,address,address,address,bytes32)": "8cc23ce0",
  "xRenzoDeposit()": "12ae5e67"
} as const
};
