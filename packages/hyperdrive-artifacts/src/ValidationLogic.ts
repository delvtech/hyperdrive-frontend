export const ValidationLogic = {
  name: 'ValidationLogic' as const,
  abi: [
  {
    "type": "function",
    "name": "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
    "name": "ISOLATED_COLLATERAL_SUPPLIER_ROLE",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
    "name": "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x60e6610034600b8282823980515f1a60731461002857634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106050575f3560e01c80632b0139fa146054578063561cbec914608c578063abfcc86a14609a578063c3525c281460a2575b5f80fd5b607a7fd1d2cf869016112a9af1107bcf43c3759daf22cf734aad47d0c9c726e33bc78281565b60405190815260200160405180910390f35b607a670d2f13f7789f000081565b607a61232881565b607a670de0b6b3a76400008156fea264697066735822122038dabb7fdd3c0dd70d047b3422215b12687e25da61ede72715a236c6c255b81564736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "HEALTH_FACTOR_LIQUIDATION_THRESHOLD()": "c3525c28",
  "ISOLATED_COLLATERAL_SUPPLIER_ROLE()": "2b0139fa",
  "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD()": "561cbec9",
  "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()": "abfcc86a"
} as const
};
