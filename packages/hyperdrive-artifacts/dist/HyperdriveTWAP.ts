export const HyperdriveTWAP = {
  abi: [
    {
      inputs: [],
      name: "BatchInputLengthMismatch",
      type: "error",
    },
    {
      inputs: [],
      name: "ExpiredDeadline",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidCheckpointDuration",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidERC20Bridge",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidFeeAmounts",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidMinimumShareReserves",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidPositionDuration",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidSignature",
      type: "error",
    },
    {
      inputs: [],
      name: "RestrictedZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "Unauthorized",
      type: "error",
    },
    {
      inputs: [],
      name: "UnexpectedSuccess",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lpAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
      ],
      name: "AddLiquidity",
      type: "event",
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
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "CloseLong",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "CloseShort",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newGovernance",
          type: "address",
        },
      ],
      name: "GovernanceUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lpAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "apr",
          type: "uint256",
        },
      ],
      name: "Initialize",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "OpenLong",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "trader",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bondAmount",
          type: "uint256",
        },
      ],
      name: "OpenShort",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newPauser",
          type: "address",
        },
      ],
      name: "PauserUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "withdrawalShareAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
      ],
      name: "RedeemWithdrawalShares",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "provider",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lpAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "baseAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "withdrawalShareAmount",
          type: "uint256",
        },
      ],
      name: "RemoveLiquidity",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
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
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TransferSingle",
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PERMIT_TYPEHASH",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
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
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "batchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_checkpointTime",
          type: "uint256",
        },
      ],
      name: "checkpoint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "asUnderlying",
          type: "bool",
        },
      ],
      name: "collectGovernanceFee",
      outputs: [
        {
          internalType: "uint256",
          name: "proceeds",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
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
        {
          internalType: "bool",
          name: "_approved",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "permitForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "setApproval",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "setApprovalBridge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "who",
          type: "address",
        },
      ],
      name: "setGovernance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "who",
          type: "address",
        },
        {
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "setPauser",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
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
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
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
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "transferFromBridge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: {
    object: "0x",
    sourceMap: "",
    linkReferences: {},
  },
  deployedBytecode: {
    object: "0x",
    sourceMap: "",
    linkReferences: {},
  },
  methodIdentifiers: {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "collectGovernanceFee(bool)": "2787d595",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)":
      "9032c726",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"BatchInputLengthMismatch","type":"error"},{"inputs":[],"name":"ExpiredDeadline","type":"error"},{"inputs":[],"name":"InvalidCheckpointDuration","type":"error"},{"inputs":[],"name":"InvalidERC20Bridge","type":"error"},{"inputs":[],"name":"InvalidFeeAmounts","type":"error"},{"inputs":[],"name":"InvalidMinimumShareReserves","type":"error"},{"inputs":[],"name":"InvalidPositionDuration","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"RestrictedZeroAddress","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"UnexpectedSuccess","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newGovernance","type":"address"}],"name":"GovernanceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"apr","type":"uint256"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newPauser","type":"address"}],"name":"PauserUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"RedeemWithdrawalShares","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"batchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_checkpointTime","type":"uint256"}],"name":"checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"asUnderlying","type":"bool"}],"name":"collectGovernanceFee","outputs":[{"internalType":"uint256","name":"proceeds","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permitForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"caller","type":"address"}],"name":"setApprovalBridge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setPauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"caller","type":"address"}],"name":"transferFromBridge","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"author":"DELV","custom:disclaimer":"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.","kind":"dev","methods":{"batchTransferFrom(address,address,uint256[],uint256[])":{"params":{"from":"the source account","ids":"The array of token ids of the asset to transfer","to":"the destination account","values":"The amount of each token to transfer"}},"checkpoint(uint256)":{"params":{"_checkpointTime":"The time of the checkpoint to create."}},"collectGovernanceFee(bool)":{"params":{"asUnderlying":"Indicates if the fees should be paid in underlying or yielding token"},"returns":{"proceeds":"The amount of base collected."}},"pause(bool)":{"params":{"status":"True to pause all deposits and false to unpause them"}},"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)":{"details":"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.","params":{"_approved":"a boolean of the approval status to set to","deadline":"the timestamp which the signature must be submitted by to be valid","owner":"the owner of the account which is having the new approval set","r":"The r component of the ECDSA signature","s":"The s component of the ECDSA signature","spender":"the address which will be allowed to spend owner\'s tokens","v":"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28"}},"setApproval(uint256,address,uint256)":{"params":{"amount":"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]","operator":"The address who will be able to use the tokens","tokenID":"The asset to approve the use of"}},"setApprovalBridge(uint256,address,uint256,address)":{"params":{"amount":"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]","caller":"The eth address which called the linking contract","operator":"The address who will be able to use the tokens","tokenID":"The asset to approve the use of"}},"setApprovalForAll(address,bool)":{"params":{"approved":"True to approve, false to remove approval","operator":"The eth address which can access the caller\'s assets"}},"setGovernance(address)":{"params":{"who":"The new governance address"}},"setPauser(address,bool)":{"params":{"status":"The new pauser status","who":"The address to change"}},"transferFrom(uint256,address,address,uint256)":{"params":{"amount":"The amount of token to move","from":"The address who\'s balance will be reduced","to":"The address who\'s balance will be increased","tokenID":"The token identifier"}},"transferFromBridge(uint256,address,address,uint256,address)":{"params":{"amount":"The amount of token to move","caller":"The msg.sender from the bridge","from":"The address who\'s balance will be reduced","to":"The address who\'s balance will be increased","tokenID":"The token identifier"}}},"title":"HyperdriveTWAP","version":1},"userdoc":{"errors":{"BatchInputLengthMismatch()":[{"notice":"###################### ### ERC20Forwarder ### ######################"}],"Unauthorized()":[{"notice":"############### ### Factory ### ###############"}]},"events":{"PauserUpdated(address)":{"notice":"Pause ///"}},"kind":"user","methods":{"batchTransferFrom(address,address,uint256[],uint256[])":{"notice":"Transfers several assets from one account to another"},"checkpoint(uint256)":{"notice":"Allows anyone to mint a new checkpoint."},"collectGovernanceFee(bool)":{"notice":"This function collects the governance fees accrued by the pool."},"pause(bool)":{"notice":"Allows an authorized address to pause this contract"},"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)":{"notice":"Allows a caller who is not the owner of an account to execute         the functionality of \'approve\' for all assets with the owners signature."},"setApproval(uint256,address,uint256)":{"notice":"Allows a user to set an approval for an individual asset with specific amount."},"setApprovalBridge(uint256,address,uint256,address)":{"notice":"Allows the compatibility linking contract to forward calls to set asset approvals"},"setApprovalForAll(address,bool)":{"notice":"Allows a user to approve an operator to use all of their assets"},"setGovernance(address)":{"notice":"Allows governance to change governance"},"setPauser(address,bool)":{"notice":"Allows governance to set the ability of an address to pause deposits"},"transferFrom(uint256,address,address,uint256)":{"notice":"Transfers an amount of assets from the source to the destination"},"transferFromBridge(uint256,address,address,uint256,address)":{"notice":"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge"}},"notice":"Adds an oracle which records data on an interval and then loads the         average price between intervals.","version":1}},"settings":{"compilationTarget":{"contracts/src/HyperdriveTWAP.sol":"HyperdriveTWAP"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/HyperdriveBase.sol":{"keccak256":"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95","license":"Apache-2.0","urls":["bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e","dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"]},"contracts/src/HyperdriveStorage.sol":{"keccak256":"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc","license":"Apache-2.0","urls":["bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a","dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"]},"contracts/src/HyperdriveTWAP.sol":{"keccak256":"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b","license":"Apache-2.0","urls":["bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc","dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"contracts/src/libraries/AssetId.sol":{"keccak256":"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384","license":"Apache-2.0","urls":["bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806","dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"]},"contracts/src/libraries/FixedPointMath.sol":{"keccak256":"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd","license":"Apache-2.0","urls":["bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b","dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"]},"contracts/src/libraries/HyperdriveMath.sol":{"keccak256":"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2","license":"Apache-2.0","urls":["bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75","dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"]},"contracts/src/libraries/SafeCast.sol":{"keccak256":"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f","license":"Apache-2.0","urls":["bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5","dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"]},"contracts/src/libraries/YieldSpaceMath.sol":{"keccak256":"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04","license":"Apache-2.0","urls":["bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef","dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"]},"contracts/src/token/MultiToken.sol":{"keccak256":"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19","license":"Apache-2.0","urls":["bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98","dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"]},"contracts/src/token/MultiTokenStorage.sol":{"keccak256":"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8","license":"Apache-2.0","urls":["bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6","dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"lib/solmate/src/utils/ReentrancyGuard.sol":{"keccak256":"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01","license":"AGPL-3.0-only","urls":["bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800","dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [],
          type: "error",
          name: "BatchInputLengthMismatch",
        },
        {
          inputs: [],
          type: "error",
          name: "ExpiredDeadline",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidCheckpointDuration",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidERC20Bridge",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidFeeAmounts",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidMinimumShareReserves",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidPositionDuration",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidSignature",
        },
        {
          inputs: [],
          type: "error",
          name: "RestrictedZeroAddress",
        },
        {
          inputs: [],
          type: "error",
          name: "Unauthorized",
        },
        {
          inputs: [],
          type: "error",
          name: "UnexpectedSuccess",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "lpAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "AddLiquidity",
          anonymous: false,
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
              name: "account",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
              indexed: true,
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "ApprovalForAll",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "CloseLong",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "CloseShort",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newGovernance",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "GovernanceUpdated",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "lpAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "apr",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Initialize",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "OpenLong",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "trader",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "bondAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "OpenShort",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newPauser",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "PauserUpdated",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "withdrawalShareAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "RedeemWithdrawalShares",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "provider",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "lpAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "baseAmount",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "withdrawalShareAmount",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "RemoveLiquidity",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
              indexed: true,
            },
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
              name: "id",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "TransferSingle",
          anonymous: false,
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "PERMIT_TYPEHASH",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
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
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "batchTransferFrom",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_checkpointTime",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "checkpoint",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "collectGovernanceFee",
          outputs: [
            {
              internalType: "uint256",
              name: "proceeds",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "pause",
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
            {
              internalType: "bool",
              name: "_approved",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "permitForAll",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "operator",
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
          name: "setApproval",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setApprovalBridge",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setApprovalForAll",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setGovernance",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setPauser",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
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
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
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
            {
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferFromBridge",
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            params: {
              from: "the source account",
              ids: "The array of token ids of the asset to transfer",
              to: "the destination account",
              values: "The amount of each token to transfer",
            },
          },
          "checkpoint(uint256)": {
            params: {
              _checkpointTime: "The time of the checkpoint to create.",
            },
          },
          "collectGovernanceFee(bool)": {
            params: {
              asUnderlying:
                "Indicates if the fees should be paid in underlying or yielding token",
            },
            returns: {
              proceeds: "The amount of base collected.",
            },
          },
          "pause(bool)": {
            params: {
              status: "True to pause all deposits and false to unpause them",
            },
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            details:
              "The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.",
            params: {
              _approved: "a boolean of the approval status to set to",
              deadline:
                "the timestamp which the signature must be submitted by to be valid",
              owner:
                "the owner of the account which is having the new approval set",
              r: "The r component of the ECDSA signature",
              s: "The s component of the ECDSA signature",
              spender:
                "the address which will be allowed to spend owner's tokens",
              v: "Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28",
            },
          },
          "setApproval(uint256,address,uint256)": {
            params: {
              amount:
                "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              operator: "The address who will be able to use the tokens",
              tokenID: "The asset to approve the use of",
            },
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            params: {
              amount:
                "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              caller: "The eth address which called the linking contract",
              operator: "The address who will be able to use the tokens",
              tokenID: "The asset to approve the use of",
            },
          },
          "setApprovalForAll(address,bool)": {
            params: {
              approved: "True to approve, false to remove approval",
              operator: "The eth address which can access the caller's assets",
            },
          },
          "setGovernance(address)": {
            params: {
              who: "The new governance address",
            },
          },
          "setPauser(address,bool)": {
            params: {
              status: "The new pauser status",
              who: "The address to change",
            },
          },
          "transferFrom(uint256,address,address,uint256)": {
            params: {
              amount: "The amount of token to move",
              from: "The address who's balance will be reduced",
              to: "The address who's balance will be increased",
              tokenID: "The token identifier",
            },
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            params: {
              amount: "The amount of token to move",
              caller: "The msg.sender from the bridge",
              from: "The address who's balance will be reduced",
              to: "The address who's balance will be increased",
              tokenID: "The token identifier",
            },
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            notice: "Transfers several assets from one account to another",
          },
          "checkpoint(uint256)": {
            notice: "Allows anyone to mint a new checkpoint.",
          },
          "collectGovernanceFee(bool)": {
            notice:
              "This function collects the governance fees accrued by the pool.",
          },
          "pause(bool)": {
            notice: "Allows an authorized address to pause this contract",
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            notice:
              "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.",
          },
          "setApproval(uint256,address,uint256)": {
            notice:
              "Allows a user to set an approval for an individual asset with specific amount.",
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            notice:
              "Allows the compatibility linking contract to forward calls to set asset approvals",
          },
          "setApprovalForAll(address,bool)": {
            notice:
              "Allows a user to approve an operator to use all of their assets",
          },
          "setGovernance(address)": {
            notice: "Allows governance to change governance",
          },
          "setPauser(address,bool)": {
            notice:
              "Allows governance to set the ability of an address to pause deposits",
          },
          "transferFrom(uint256,address,address,uint256)": {
            notice:
              "Transfers an amount of assets from the source to the destination",
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            notice:
              "Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge",
          },
        },
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
        "contracts/src/HyperdriveTWAP.sol": "HyperdriveTWAP",
      },
      libraries: {},
    },
    sources: {
      "contracts/src/DataProvider.sol": {
        keccak256:
          "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        urls: [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveBase.sol": {
        keccak256:
          "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        urls: [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveStorage.sol": {
        keccak256:
          "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        urls: [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/HyperdriveTWAP.sol": {
        keccak256:
          "0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b",
        urls: [
          "bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc",
          "dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IERC20.sol": {
        keccak256:
          "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        urls: [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w",
        ],
        license: "MIT",
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        keccak256:
          "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        urls: [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        keccak256:
          "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        urls: [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        keccak256:
          "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        urls: [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        keccak256:
          "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        urls: [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        keccak256:
          "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        urls: [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        keccak256:
          "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        urls: [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        keccak256:
          "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        urls: [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/AssetId.sol": {
        keccak256:
          "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        urls: [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        keccak256:
          "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        urls: [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        keccak256:
          "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        urls: [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/SafeCast.sol": {
        keccak256:
          "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        urls: [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        keccak256:
          "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        urls: [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiToken.sol": {
        keccak256:
          "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        urls: [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy",
        ],
        license: "Apache-2.0",
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        keccak256:
          "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        urls: [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj",
        ],
        license: "Apache-2.0",
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
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":
        {
          keccak256:
            "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
          urls: [
            "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
            "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        keccak256:
          "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        urls: [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        keccak256:
          "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        urls: [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD",
        ],
        license: "MIT",
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        keccak256:
          "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        urls: [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j",
        ],
        license: "AGPL-3.0-only",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "contracts/src/HyperdriveTWAP.sol",
    id: 5038,
    exportedSymbols: {
      FixedPointMath: [8486],
      HyperdriveBase: [1320],
      HyperdriveTWAP: [5037],
      IHyperdrive: [7103],
    },
    nodeType: "SourceUnit",
    src: "39:2336:8",
    nodes: [
      {
        id: 4906,
        nodeType: "PragmaDirective",
        src: "39:23:8",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 4908,
        nodeType: "ImportDirective",
        src: "64:54:8",
        nodes: [],
        absolutePath: "contracts/src/HyperdriveBase.sol",
        file: "./HyperdriveBase.sol",
        nameLocation: "-1:-1:-1",
        scope: 5038,
        sourceUnit: 1321,
        symbolAliases: [
          {
            foreign: {
              id: 4907,
              name: "HyperdriveBase",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 1320,
              src: "73:14:8",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 4910,
        nodeType: "ImportDirective",
        src: "119:59:8",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdrive.sol",
        file: "./interfaces/IHyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 5038,
        sourceUnit: 7104,
        symbolAliases: [
          {
            foreign: {
              id: 4909,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "128:11:8",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 4912,
        nodeType: "ImportDirective",
        src: "179:64:8",
        nodes: [],
        absolutePath: "contracts/src/libraries/FixedPointMath.sol",
        file: "./libraries/FixedPointMath.sol",
        nameLocation: "-1:-1:-1",
        scope: 5038,
        sourceUnit: 8487,
        symbolAliases: [
          {
            foreign: {
              id: 4911,
              name: "FixedPointMath",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 8486,
              src: "188:14:8",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 5037,
        nodeType: "ContractDefinition",
        src: "637:1737:8",
        nodes: [
          {
            id: 4918,
            nodeType: "UsingForDirective",
            src: "694:33:8",
            nodes: [],
            global: false,
            libraryName: {
              id: 4916,
              name: "FixedPointMath",
              nameLocations: ["700:14:8"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 8486,
              src: "700:14:8",
            },
            typeName: {
              id: 4917,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "719:7:8",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
          },
          {
            id: 5036,
            nodeType: "FunctionDefinition",
            src: "1112:1260:8",
            nodes: [],
            body: {
              id: 5035,
              nodeType: "Block",
              src: "1157:1215:8",
              nodes: [],
              statements: [
                {
                  assignments: [4925],
                  declarations: [
                    {
                      constant: false,
                      id: 4925,
                      mutability: "mutable",
                      name: "lastTimestamp",
                      nameLocation: "1175:13:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1167:21:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4924,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1167:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4931,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 4928,
                          name: "_oracle",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4618,
                          src: "1199:7:8",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_OracleState_$6971_storage",
                            typeString:
                              "struct IHyperdrive.OracleState storage ref",
                          },
                        },
                        id: 4929,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1207:13:8",
                        memberName: "lastTimestamp",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6970,
                        src: "1199:21:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      ],
                      id: 4927,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "1191:7:8",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_uint256_$",
                        typeString: "type(uint256)",
                      },
                      typeName: {
                        id: 4926,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1191:7:8",
                        typeDescriptions: {},
                      },
                    },
                    id: 4930,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1191:30:8",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1167:54:8",
                },
                {
                  assignments: [4933],
                  declarations: [
                    {
                      constant: false,
                      id: 4933,
                      mutability: "mutable",
                      name: "head",
                      nameLocation: "1239:4:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1231:12:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4932,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1231:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4939,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 4936,
                          name: "_oracle",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4618,
                          src: "1254:7:8",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_OracleState_$6971_storage",
                            typeString:
                              "struct IHyperdrive.OracleState storage ref",
                          },
                        },
                        id: 4937,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1262:4:8",
                        memberName: "head",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6967,
                        src: "1254:12:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      ],
                      id: 4935,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "1246:7:8",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_uint256_$",
                        typeString: "type(uint256)",
                      },
                      typeName: {
                        id: 4934,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1246:7:8",
                        typeDescriptions: {},
                      },
                    },
                    id: 4938,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1246:21:8",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1231:36:8",
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 4945,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 4942,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 4940,
                        name: "lastTimestamp",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4925,
                        src: "1332:13:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "+",
                      rightExpression: {
                        id: 4941,
                        name: "_updateGap",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4604,
                        src: "1348:10:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1332:26:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: ">",
                    rightExpression: {
                      expression: {
                        id: 4943,
                        name: "block",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -4,
                        src: "1361:5:8",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_block",
                          typeString: "block",
                        },
                      },
                      id: 4944,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1367:9:8",
                      memberName: "timestamp",
                      nodeType: "MemberAccess",
                      src: "1361:15:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1332:44:8",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 4948,
                  nodeType: "IfStatement",
                  src: "1328:81:8",
                  trueBody: {
                    id: 4947,
                    nodeType: "Block",
                    src: "1378:31:8",
                    statements: [
                      {
                        functionReturnParameters: 4923,
                        id: 4946,
                        nodeType: "Return",
                        src: "1392:7:8",
                      },
                    ],
                  },
                },
                {
                  assignments: [4951],
                  declarations: [
                    {
                      constant: false,
                      id: 4951,
                      mutability: "mutable",
                      name: "headData",
                      nameLocation: "1484:8:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1465:27:8",
                      stateVariable: false,
                      storageLocation: "storage",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_struct$_OracleData_$4609_storage_ptr",
                        typeString: "struct HyperdriveStorage.OracleData",
                      },
                      typeName: {
                        id: 4950,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 4949,
                          name: "OracleData",
                          nameLocations: ["1465:10:8"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 4609,
                          src: "1465:10:8",
                        },
                        referencedDeclaration: 4609,
                        src: "1465:10:8",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_OracleData_$4609_storage_ptr",
                          typeString: "struct HyperdriveStorage.OracleData",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4955,
                  initialValue: {
                    baseExpression: {
                      id: 4952,
                      name: "_buffer",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4614,
                      src: "1495:7:8",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
                        typeString:
                          "struct HyperdriveStorage.OracleData storage ref[] storage ref",
                      },
                    },
                    id: 4954,
                    indexExpression: {
                      id: 4953,
                      name: "head",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4933,
                      src: "1503:4:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "IndexAccess",
                    src: "1495:13:8",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_OracleData_$4609_storage",
                      typeString:
                        "struct HyperdriveStorage.OracleData storage ref",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1465:43:8",
                },
                {
                  assignments: [4957],
                  declarations: [
                    {
                      constant: false,
                      id: 4957,
                      mutability: "mutable",
                      name: "previousTime",
                      nameLocation: "1526:12:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1518:20:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4956,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1518:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4963,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 4960,
                          name: "headData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4951,
                          src: "1549:8:8",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_OracleData_$4609_storage_ptr",
                            typeString:
                              "struct HyperdriveStorage.OracleData storage pointer",
                          },
                        },
                        id: 4961,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1558:9:8",
                        memberName: "timestamp",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 4606,
                        src: "1549:18:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint32",
                          typeString: "uint32",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint32",
                          typeString: "uint32",
                        },
                      ],
                      id: 4959,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "1541:7:8",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_uint256_$",
                        typeString: "type(uint256)",
                      },
                      typeName: {
                        id: 4958,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1541:7:8",
                        typeDescriptions: {},
                      },
                    },
                    id: 4962,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1541:27:8",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1518:50:8",
                },
                {
                  assignments: [4965],
                  declarations: [
                    {
                      constant: false,
                      id: 4965,
                      mutability: "mutable",
                      name: "previousSum",
                      nameLocation: "1586:11:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1578:19:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4964,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1578:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4971,
                  initialValue: {
                    arguments: [
                      {
                        expression: {
                          id: 4968,
                          name: "headData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4951,
                          src: "1608:8:8",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_OracleData_$4609_storage_ptr",
                            typeString:
                              "struct HyperdriveStorage.OracleData storage pointer",
                          },
                        },
                        id: 4969,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1617:4:8",
                        memberName: "data",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 4608,
                        src: "1608:13:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint224",
                          typeString: "uint224",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint224",
                          typeString: "uint224",
                        },
                      ],
                      id: 4967,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "1600:7:8",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_uint256_$",
                        typeString: "type(uint256)",
                      },
                      typeName: {
                        id: 4966,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1600:7:8",
                        typeDescriptions: {},
                      },
                    },
                    id: 4970,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "typeConversion",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1600:22:8",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1578:44:8",
                },
                {
                  assignments: [4973],
                  declarations: [
                    {
                      constant: false,
                      id: 4973,
                      mutability: "mutable",
                      name: "delta",
                      nameLocation: "1666:5:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1658:13:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4972,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1658:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4978,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 4977,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        id: 4974,
                        name: "block",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -4,
                        src: "1674:5:8",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_block",
                          typeString: "block",
                        },
                      },
                      id: 4975,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1680:9:8",
                      memberName: "timestamp",
                      nodeType: "MemberAccess",
                      src: "1674:15:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "-",
                    rightExpression: {
                      id: 4976,
                      name: "previousTime",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4957,
                      src: "1692:12:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "1674:30:8",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1658:46:8",
                },
                {
                  assignments: [4980],
                  declarations: [
                    {
                      constant: false,
                      id: 4980,
                      mutability: "mutable",
                      name: "sum",
                      nameLocation: "1900:3:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "1892:11:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4979,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1892:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 4981,
                  nodeType: "VariableDeclarationStatement",
                  src: "1892:11:8",
                },
                {
                  id: 4990,
                  nodeType: "UncheckedBlock",
                  src: "1913:68:8",
                  statements: [
                    {
                      expression: {
                        id: 4988,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 4982,
                          name: "sum",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4980,
                          src: "1937:3:8",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 4987,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            id: 4985,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 4983,
                              name: "price",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4921,
                              src: "1943:5:8",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "*",
                            rightExpression: {
                              id: 4984,
                              name: "delta",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4973,
                              src: "1951:5:8",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            src: "1943:13:8",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "+",
                          rightExpression: {
                            id: 4986,
                            name: "previousSum",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4965,
                            src: "1959:11:8",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1943:27:8",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "1937:33:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 4989,
                      nodeType: "ExpressionStatement",
                      src: "1937:33:8",
                    },
                  ],
                },
                {
                  assignments: [4992],
                  declarations: [
                    {
                      constant: false,
                      id: 4992,
                      mutability: "mutable",
                      name: "toUpdate",
                      nameLocation: "2068:8:8",
                      nodeType: "VariableDeclaration",
                      scope: 5035,
                      src: "2060:16:8",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 4991,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "2060:7:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 5003,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 5002,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      components: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 4998,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            arguments: [
                              {
                                id: 4995,
                                name: "head",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4933,
                                src: "2088:4:8",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              ],
                              id: 4994,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: "ElementaryTypeNameExpression",
                              src: "2080:7:8",
                              typeDescriptions: {
                                typeIdentifier: "t_type$_t_uint256_$",
                                typeString: "type(uint256)",
                              },
                              typeName: {
                                id: 4993,
                                name: "uint256",
                                nodeType: "ElementaryTypeName",
                                src: "2080:7:8",
                                typeDescriptions: {},
                              },
                            },
                            id: 4996,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "typeConversion",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "2080:13:8",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "+",
                          rightExpression: {
                            hexValue: "31",
                            id: 4997,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "2096:1:8",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_1_by_1",
                              typeString: "int_const 1",
                            },
                            value: "1",
                          },
                          src: "2080:17:8",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      id: 4999,
                      isConstant: false,
                      isInlineArray: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "TupleExpression",
                      src: "2079:19:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "%",
                    rightExpression: {
                      expression: {
                        id: 5000,
                        name: "_buffer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4614,
                        src: "2101:7:8",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
                          typeString:
                            "struct HyperdriveStorage.OracleData storage ref[] storage ref",
                        },
                      },
                      id: 5001,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2109:6:8",
                      memberName: "length",
                      nodeType: "MemberAccess",
                      src: "2101:14:8",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "2079:36:8",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2060:55:8",
                },
                {
                  expression: {
                    id: 5018,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 5004,
                        name: "_buffer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4614,
                        src: "2174:7:8",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
                          typeString:
                            "struct HyperdriveStorage.OracleData storage ref[] storage ref",
                        },
                      },
                      id: 5006,
                      indexExpression: {
                        id: 5005,
                        name: "toUpdate",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4992,
                        src: "2182:8:8",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "2174:17:8",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_OracleData_$4609_storage",
                        typeString:
                          "struct HyperdriveStorage.OracleData storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          arguments: [
                            {
                              expression: {
                                id: 5010,
                                name: "block",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -4,
                                src: "2212:5:8",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_block",
                                  typeString: "block",
                                },
                              },
                              id: 5011,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberLocation: "2218:9:8",
                              memberName: "timestamp",
                              nodeType: "MemberAccess",
                              src: "2212:15:8",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            id: 5009,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "2205:6:8",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint32_$",
                              typeString: "type(uint32)",
                            },
                            typeName: {
                              id: 5008,
                              name: "uint32",
                              nodeType: "ElementaryTypeName",
                              src: "2205:6:8",
                              typeDescriptions: {},
                            },
                          },
                          id: 5012,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "2205:23:8",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint32",
                            typeString: "uint32",
                          },
                        },
                        {
                          arguments: [
                            {
                              id: 5015,
                              name: "sum",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4980,
                              src: "2238:3:8",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            id: 5014,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "2230:7:8",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint224_$",
                              typeString: "type(uint224)",
                            },
                            typeName: {
                              id: 5013,
                              name: "uint224",
                              nodeType: "ElementaryTypeName",
                              src: "2230:7:8",
                              typeDescriptions: {},
                            },
                          },
                          id: 5016,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "2230:12:8",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint224",
                            typeString: "uint224",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint32",
                            typeString: "uint32",
                          },
                          {
                            typeIdentifier: "t_uint224",
                            typeString: "uint224",
                          },
                        ],
                        id: 5007,
                        name: "OracleData",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4609,
                        src: "2194:10:8",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_OracleData_$4609_storage_ptr_$",
                          typeString:
                            "type(struct HyperdriveStorage.OracleData storage pointer)",
                        },
                      },
                      id: 5017,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2194:49:8",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_OracleData_$4609_memory_ptr",
                        typeString:
                          "struct HyperdriveStorage.OracleData memory",
                      },
                    },
                    src: "2174:69:8",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_OracleData_$4609_storage",
                      typeString:
                        "struct HyperdriveStorage.OracleData storage ref",
                    },
                  },
                  id: 5019,
                  nodeType: "ExpressionStatement",
                  src: "2174:69:8",
                },
                {
                  expression: {
                    id: 5033,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 5020,
                      name: "_oracle",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4618,
                      src: "2253:7:8",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_OracleState_$6971_storage",
                        typeString:
                          "struct IHyperdrive.OracleState storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          arguments: [
                            {
                              id: 5025,
                              name: "toUpdate",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4992,
                              src: "2308:8:8",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            id: 5024,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "2300:7:8",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint128_$",
                              typeString: "type(uint128)",
                            },
                            typeName: {
                              id: 5023,
                              name: "uint128",
                              nodeType: "ElementaryTypeName",
                              src: "2300:7:8",
                              typeDescriptions: {},
                            },
                          },
                          id: 5026,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "2300:17:8",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint128",
                            typeString: "uint128",
                          },
                        },
                        {
                          arguments: [
                            {
                              expression: {
                                id: 5029,
                                name: "block",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -4,
                                src: "2339:5:8",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_block",
                                  typeString: "block",
                                },
                              },
                              id: 5030,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberLocation: "2345:9:8",
                              memberName: "timestamp",
                              nodeType: "MemberAccess",
                              src: "2339:15:8",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            id: 5028,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "2331:7:8",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_uint128_$",
                              typeString: "type(uint128)",
                            },
                            typeName: {
                              id: 5027,
                              name: "uint128",
                              nodeType: "ElementaryTypeName",
                              src: "2331:7:8",
                              typeDescriptions: {},
                            },
                          },
                          id: 5031,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: "FunctionCall",
                          src: "2331:24:8",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint128",
                            typeString: "uint128",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_uint128",
                            typeString: "uint128",
                          },
                          {
                            typeIdentifier: "t_uint128",
                            typeString: "uint128",
                          },
                        ],
                        expression: {
                          id: 5021,
                          name: "IHyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 7103,
                          src: "2263:11:8",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_contract$_IHyperdrive_$7103_$",
                            typeString: "type(contract IHyperdrive)",
                          },
                        },
                        id: 5022,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2275:11:8",
                        memberName: "OracleState",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6971,
                        src: "2263:23:8",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_OracleState_$6971_storage_ptr_$",
                          typeString:
                            "type(struct IHyperdrive.OracleState storage pointer)",
                        },
                      },
                      id: 5032,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2263:102:8",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier:
                          "t_struct$_OracleState_$6971_memory_ptr",
                        typeString: "struct IHyperdrive.OracleState memory",
                      },
                    },
                    src: "2253:112:8",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_OracleState_$6971_storage",
                      typeString: "struct IHyperdrive.OracleState storage ref",
                    },
                  },
                  id: 5034,
                  nodeType: "ExpressionStatement",
                  src: "2253:112:8",
                },
              ],
            },
            documentation: {
              id: 4919,
              nodeType: "StructuredDocumentation",
              src: "733:374:8",
              text: "@notice Records data into a time weighted sum oracle entry. This function only writes to the oracle\n         if some amount of time has passed since the previous update.\n @param price This is the data to be recorded into the oracle. Warn - the data should be able to fit\n              into 2^224 after being summed and so should be relatively small.",
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "recordPrice",
            nameLocation: "1121:11:8",
            parameters: {
              id: 4922,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 4921,
                  mutability: "mutable",
                  name: "price",
                  nameLocation: "1141:5:8",
                  nodeType: "VariableDeclaration",
                  scope: 5036,
                  src: "1133:13:8",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 4920,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1133:7:8",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1132:15:8",
            },
            returnParameters: {
              id: 4923,
              nodeType: "ParameterList",
              parameters: [],
              src: "1157:0:8",
            },
            scope: 5037,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
        ],
        abstract: true,
        baseContracts: [
          {
            baseName: {
              id: 4914,
              name: "HyperdriveBase",
              nameLocations: ["673:14:8"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 1320,
              src: "673:14:8",
            },
            id: 4915,
            nodeType: "InheritanceSpecifier",
            src: "673:14:8",
          },
        ],
        canonicalName: "HyperdriveTWAP",
        contractDependencies: [],
        contractKind: "contract",
        documentation: {
          id: 4913,
          nodeType: "StructuredDocumentation",
          src: "245:392:8",
          text: "@author DELV\n @title HyperdriveTWAP\n @notice Adds an oracle which records data on an interval and then loads the\n         average price between intervals.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.",
        },
        fullyImplemented: false,
        linearizedBaseContracts: [
          5037, 1320, 4904, 12918, 7657, 13196, 63474, 72,
        ],
        name: "HyperdriveTWAP",
        nameLocation: "655:14:8",
        scope: 5038,
        usedErrors: [
          6988, 6994, 6996, 7000, 7044, 7047, 7060, 7062, 7064, 7066, 7068,
        ],
      },
    ],
    license: "Apache-2.0",
  },
  id: 8,
} as const;
