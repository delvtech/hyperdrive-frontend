export const MockYieldSpaceMath = {
  name: 'MockYieldSpaceMath' as const,
  abi: [
  {
    "type": "function",
    "name": "calculateBondsOutGivenSharesInDown",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dz",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateMaxBuyBondsOutSafe",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateMaxBuySharesInSafe",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateMaxSellBondsInSafe",
    "inputs": [
      {
        "name": "z",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "zeta",
        "type": "int256",
        "internalType": "int256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "zMin",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateSharesInGivenBondsOutDown",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dy",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateSharesInGivenBondsOutUp",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dy",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateSharesOutGivenBondsInDown",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dy",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateSharesOutGivenBondsInDownSafe",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "dy",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "kDown",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "kUp",
    "inputs": [
      {
        "name": "ze",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "y",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "c",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mu",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "error",
    "name": "ExpInvalidExponent",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientLiquidity",
    "inputs": []
  },
  {
    "type": "error",
    "name": "LnInvalidInput",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToInt256",
    "inputs": []
  }
] as const,
  bytecode: '0x608060405234801561000f575f80fd5b50610f628061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061009b575f3560e01c806386c85e101161006357806386c85e1014610126578063a4a6f9d914610139578063a9afa3731461014c578063bc50ebe61461015f578063d79d083514610172575f80fd5b80630aea75631461009f57806327d0e265146100c55780632e74108c146100d85780633ee4114a146100eb5780635880b9fd14610113575b5f80fd5b6100b26100ad366004610dd0565b610185565b6040519081526020015b60405180910390f35b6100b26100d3366004610e07565b61019f565b6100b26100e6366004610e07565b6101bb565b6100fe6100f9366004610e07565b6101cb565b604080519283529015156020830152016100bc565b6100fe610121366004610dd0565b6101f0565b6100b2610134366004610e07565b610213565b6100b2610147366004610e07565b610223565b6100fe61015a366004610dd0565b610233565b6100fe61016d366004610e46565b610244565b6100b2610180366004610dd0565b61026b565b5f80610194878787878761027a565b979650505050505050565b5f806101af8888888888886102b8565b98975050505050505050565b5f806101af8888888888886102e5565b5f805f806101dd8a8a8a8a8a8a6102f5565b909450925050505b965096945050505050565b5f805f8061020189898989896103b8565b909450925050505b9550959350505050565b5f806101af88888888888861046a565b5f806101af88888888888861047a565b5f805f80610201898989898961053a565b5f805f806102578b8b8b8b8b8b8b6105df565b909450925050505b97509795505050505050565b5f8061019487878787876106d9565b5f61028585856106fd565b6102a461029c86610296868b61076e565b906106fd565b859085610789565b6102ae9190610ea1565b9695505050505050565b5f806102c88888888888886102f5565b9092509050806102da576102da6107ac565b509695505050505050565b5f806102c88888888888886107c5565b5f805f610305898988888861027a565b905061031586610296898b610ea1565b97508781101561032b575f8092509250506101e5565b878103610339818688610789565b9050670de0b6b3a7640000811061036d5761036661035f670de0b6b3a764000089610897565b82906106fd565b9050610385565b61038261035f670de0b6b3a7640000896108ab565b90505b61038f8186610897565b9050808a10156103a6575f809350935050506101e5565b90980398600198509650505050505050565b5f805f6103c888888888886106d9565b90505f6103f2670de0b6b3a76400006103e18888610897565b6103eb9190610ea1565b83906108ab565b9050670de0b6b3a7640000811061041f5761041861035f670de0b6b3a7640000896108ab565b9050610437565b61043461035f670de0b6b3a764000089610897565b90505b61044181866108ab565b905088811015610458575f80935093505050610209565b97909703976001975095505050505050565b5f806102c88888888888886108bf565b5f8061048988888787876106d9565b90508587101561049b5761049b6107ac565b95859003956104aa87866106fd565b9650868110156104bc576104bc6107ac565b8681036104ca818587610979565b9050670de0b6b3a764000081106104f7576104f061035f670de0b6b3a7640000886108ab565b905061050f565b61050c61035f670de0b6b3a764000088610897565b90505b61051981856108ab565b90508881101561052b5761052b6107ac565b97909703979650505050505050565b5f805f61054a888888888861027a565b90505f610574670de0b6b3a764000061056388886108ab565b61056d9190610ea1565b8390610897565b9050670de0b6b3a764000081106105a15761059a61035f670de0b6b3a764000089610897565b90506105b9565b6105b661035f670de0b6b3a7640000896108ab565b90505b808810156105ce575f80935093505050610209565b909603976001975095505050505050565b5f805f8812156105ff576105f288610eb4565b6105fc9087610ea1565b95505b5f8061060b8b8b610994565b9150915080610621575f8093509350505061025f565b5f61062f838b8a8a8a6106d9565b90505f61064b6106438a6102968a8e61076e565b899089610789565b905080821015610664575f80955095505050505061025f565b808203670de0b6b3a764000081106106925761068b61035f670de0b6b3a76400008c6108ab565b90506106aa565b6106a761035f670de0b6b3a76400008c610897565b90505b8b8110156106c2575f8096509650505050505061025f565b9a909a039c60019c509a5050505050505050505050565b5f6106e485856106fd565b6102a46106f586610296868b6109cf565b859085610979565b5f815f036107145750670de0b6b3a7640000610768565b825f0361072257505f610768565b5f61072c836109e3565b90505f61074061073b866109e3565b610a10565b9050818102610757670de0b6b3a764000082610ece565b905061076281610c3e565b93505050505b92915050565b5f6107828383670de0b6b3a7640000610789565b9392505050565b5f825f19048411830215820261079d575f80fd5b50910281810615159190040190565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f6107d5898988888861027a565b9050868810156107eb575f8092509250506101e5565b96869003966107fa88876106fd565b975087811015610810575f8092509250506101e5565b87810361081e818688610789565b9050670de0b6b3a7640000811061084b5761084461035f670de0b6b3a764000089610897565b9050610863565b61086061035f670de0b6b3a7640000896108ab565b90505b61086d8186610897565b905089811015610884575f809350935050506101e5565b9890980398600198509650505050505050565b5f61078283670de0b6b3a764000084610789565b5f61078283670de0b6b3a764000084610979565b5f805f6108cf898988888861027a565b90506108e9866102966108e28a8d610ea1565b87906109cf565b98506108f6858a86610979565b98508881101561090c575f8092509250506101e5565b888103670de0b6b3a7640000811061093a5761093361035f670de0b6b3a764000089610897565b9050610952565b61094f61035f670de0b6b3a7640000896108ab565b90505b80891015610967575f809350935050506101e5565b90970398600198509650505050505050565b5f825f19048411830215820261098d575f80fd5b5091020490565b5f805f836109a1866109e3565b6109ab9190610f06565b90505f8112156109c1575f8092509250506109c8565b9150600190505b9250929050565b5f6107828383670de0b6b3a7640000610979565b5f6001600160ff1b03821115610a0c5760405163396ea70160e11b815260040160405180910390fd5b5090565b5f808213610a315760405163e61b497560e01b815260040160405180910390fd5b506fffffffffffffffffffffffffffffffff811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190610abd9084901c6109e3565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e198213610c5757505f919050565b680755bf798b4a1bf1e58212610c80576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906102ae74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6109e3565b5f805f805f60a08688031215610de4575f80fd5b505083359560208501359550604085013594606081013594506080013592509050565b5f805f805f8060c08789031215610e1c575f80fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b5f805f805f805f60e0888a031215610e5c575f80fd5b505085359760208701359750604087013596606081013596506080810135955060a0810135945060c0013592509050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561076857610768610e8d565b5f600160ff1b8201610ec857610ec8610e8d565b505f0390565b5f82610ee857634e487b7160e01b5f52601260045260245ffd5b600160ff1b82145f1984141615610f0157610f01610e8d565b500590565b8181035f831280158383131683831282161715610f2557610f25610e8d565b509291505056fea26469706673582212201b6ebf319b478060656bdde40834bcafbec7f2ca884537c9804844fd7d27f4a564736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "calculateBondsOutGivenSharesInDown(uint256,uint256,uint256,uint256,uint256,uint256)": "86c85e10",
  "calculateMaxBuyBondsOutSafe(uint256,uint256,uint256,uint256,uint256)": "a9afa373",
  "calculateMaxBuySharesInSafe(uint256,uint256,uint256,uint256,uint256)": "5880b9fd",
  "calculateMaxSellBondsInSafe(uint256,int256,uint256,uint256,uint256,uint256,uint256)": "bc50ebe6",
  "calculateSharesInGivenBondsOutDown(uint256,uint256,uint256,uint256,uint256,uint256)": "a4a6f9d9",
  "calculateSharesInGivenBondsOutUp(uint256,uint256,uint256,uint256,uint256,uint256)": "2e74108c",
  "calculateSharesOutGivenBondsInDown(uint256,uint256,uint256,uint256,uint256,uint256)": "27d0e265",
  "calculateSharesOutGivenBondsInDownSafe(uint256,uint256,uint256,uint256,uint256,uint256)": "3ee4114a",
  "kDown(uint256,uint256,uint256,uint256,uint256)": "d79d0835",
  "kUp(uint256,uint256,uint256,uint256,uint256)": "0aea7563"
} as const
};
