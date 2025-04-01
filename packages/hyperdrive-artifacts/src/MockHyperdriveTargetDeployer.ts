export const MockHyperdriveTargetDeployer = {
  abi: [
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "contract IERC20",
            "name": "baseToken",
            "type": "address"
          },
          {
            "internalType": "contract IERC20",
            "name": "vaultSharesToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "linkerFactory",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "linkerCodeHash",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "initialVaultSharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumShareReserves",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumTransactionAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "circuitBreakerDelta",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "positionDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpointDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeStretch",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "governance",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "feeCollector",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "sweepCollector",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "curve",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "flat",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "governanceLP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "governanceZombie",
                "type": "uint256"
              }
            ],
            "internalType": "struct IHyperdrive.Fees",
            "name": "fees",
            "type": "tuple"
          }
        ],
        "internalType": "struct IHyperdrive.PoolConfig",
        "name": "",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "deployTarget",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const,
  bytecode: '0x608060405234801561001057600080fd5b5061031e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063847c08a514610030575b600080fd5b61004761003e3660046101b2565b60009392505050565b6040516001600160a01b03909116815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff8111828210171561009d5761009d610063565b60405290565b80356001600160a01b03811681146100ba57600080fd5b919050565b6000608082840312156100d157600080fd5b6040516080810181811067ffffffffffffffff821117156100f4576100f4610063565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f83011261013657600080fd5b813567ffffffffffffffff8082111561015157610151610063565b604051601f8301601f19908116603f0116810190828211818310171561017957610179610063565b8160405283815286602085880101111561019257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008385036102808112156101c957600080fd5b610240808212156101d957600080fd5b6101e1610079565b91506101ec866100a3565b82526101fa602087016100a3565b602083015261020b604087016100a3565b6040830152606086013560608301526080860135608083015260a086013560a083015260c086013560c083015260e086013560e08301526101008087013581840152506101208087013581840152506101408087013581840152506101606102748188016100a3565b908301526101806102868782016100a3565b908301526101a06102988782016100a3565b908301526101c06102ab888883016100bf565b9083015290935084013567ffffffffffffffff8111156102ca57600080fd5b6102d686828701610125565b9250506102608401359050925092509256fea264697066735822122025f9f594c7ccc65b28c45cd4a7ba4648fedaaa22f6821245f16874d71e092cde64736f6c63430008140033' as `0x${string}`,
  methodIdentifiers: {
  "deployTarget((address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "847c08a5"
} as const
};
