{
  "abi": [
    {
      "inputs": [],
      "name": "ApprovalFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxFeeTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NonPayableInitialization",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "hyperdrive",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "contract IERC20",
              "name": "baseToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
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
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "config",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "linkerFactory",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "linkerCodeHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32[]",
          "name": "extraData",
          "type": "bytes32[]"
        }
      ],
      "name": "Deployed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newFeeCollector",
          "type": "address"
        }
      ],
      "name": "FeeCollectorUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "governance",
          "type": "address"
        }
      ],
      "name": "GovernanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "hyperdriveGovernance",
          "type": "address"
        }
      ],
      "name": "HyperdriveGovernanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newDeployer",
          "type": "address"
        }
      ],
      "name": "ImplementationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newCodeHash",
          "type": "bytes32"
        }
      ],
      "name": "LinkerCodeHashUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newLinkerFactory",
          "type": "address"
        }
      ],
      "name": "LinkerFactoryUpdated",
      "type": "event"
    },
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
              "internalType": "uint256",
              "name": "initialSharePrice",
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
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "bytes32[]",
          "name": "_extraData",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
          "type": "uint256"
        }
      ],
      "name": "deployAndInitialize",
      "outputs": [
        {
          "internalType": "contract IHyperdrive",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeCollector",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fees",
      "outputs": [
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
          "name": "governance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDefaultPausers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "governance",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hyperdriveDeployer",
      "outputs": [
        {
          "internalType": "contract IHyperdriveDeployer",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hyperdriveGovernance",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instance",
          "type": "address"
        }
      ],
      "name": "isOfficial",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "linkerCodeHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "linkerFactory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_defaultPausers_",
          "type": "address[]"
        }
      ],
      "name": "updateDefaultPausers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_feeCollector",
          "type": "address"
        }
      ],
      "name": "updateFeeCollector",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
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
              "name": "governance",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.Fees",
          "name": "_fees",
          "type": "tuple"
        }
      ],
      "name": "updateFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_governance",
          "type": "address"
        }
      ],
      "name": "updateGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveGovernance",
          "type": "address"
        }
      ],
      "name": "updateHyperdriveGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IHyperdriveDeployer",
          "name": "newDeployer",
          "type": "address"
        }
      ],
      "name": "updateImplementation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_linkerCodeHash",
          "type": "bytes32"
        }
      ],
      "name": "updateLinkerCodeHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_linkerFactory",
          "type": "address"
        }
      ],
      "name": "updateLinkerFactory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "versionCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256)": "8927f4e9",
    "feeCollector()": "c415b95c",
    "fees()": "9af1d35a",
    "getDefaultPausers()": "7f7c5a7d",
    "governance()": "5aa6e675",
    "hyperdriveDeployer()": "03a5aa92",
    "hyperdriveGovernance()": "e3331555",
    "isOfficial(address)": "77b81aac",
    "linkerCodeHash()": "c905a4b5",
    "linkerFactory()": "99623bb1",
    "updateDefaultPausers(address[])": "9af25262",
    "updateFeeCollector(address)": "d2c35ce8",
    "updateFees((uint256,uint256,uint256))": "7613b08c",
    "updateGovernance(address)": "b2561263",
    "updateHyperdriveGovernance(address)": "dd2b8fbb",
    "updateImplementation(address)": "025b22bc",
    "updateLinkerCodeHash(bytes32)": "4fbfee77",
    "updateLinkerFactory(address)": "85229785",
    "versionCounter()": "dd6d30c1"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxFeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NonPayableInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32[]\",\"name\":\"extraData\",\"type\":\"bytes32[]\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"ImplementationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"bytes32[]\",\"name\":\"_extraData\",\"type\":\"bytes32[]\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"}],\"name\":\"deployAndInitialize\",\"outputs\":[{\"internalType\":\"contract IHyperdrive\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeCollector\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDefaultPausers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"hyperdriveDeployer\",\"outputs\":[{\"internalType\":\"contract IHyperdriveDeployer\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"hyperdriveGovernance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"instance\",\"type\":\"address\"}],\"name\":\"isOfficial\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerFactory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_defaultPausers_\",\"type\":\"address[]\"}],\"name\":\"updateDefaultPausers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeCollector\",\"type\":\"address\"}],\"name\":\"updateFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"_fees\",\"type\":\"tuple\"}],\"name\":\"updateFees\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"updateHyperdriveGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IHyperdriveDeployer\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"updateImplementation\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"updateLinkerCodeHash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"name\":\"updateLinkerFactory\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"versionCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_deployer\":\"The contract which holds the bytecode and deploys new versions.\",\"_factoryConfig\":\"Configuration of the Hyperdrive Factory.\",\"_linkerCodeHash\":\"The hash of the linker contract's constructor code.\",\"_linkerFactory\":\"The address of the linker factory.\"}},\"deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256)\":{\"details\":\"This function is declared as payable to allow payable overrides      to accept ether on initialization, but payability is not supported      by default.\",\"params\":{\"_apr\":\"The apr to call init with\",\"_config\":\"The configuration of the Hyperdrive pool.\",\"_contribution\":\"Base token to call init with\",\"_extraData\":\"The extra data is used by some factories\"},\"returns\":{\"_0\":\"The hyperdrive address deployed\"}},\"getDefaultPausers()\":{\"returns\":{\"_0\":\"The default pausers.\"}},\"updateDefaultPausers(address[])\":{\"params\":{\"_defaultPausers_\":\"The new list of default pausers.\"}},\"updateFeeCollector(address)\":{\"params\":{\"_feeCollector\":\"The new fee collector address.\"}},\"updateFees((uint256,uint256,uint256))\":{\"params\":{\"_fees\":\"The new defaults for the fee parameters.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}},\"updateHyperdriveGovernance(address)\":{\"params\":{\"_hyperdriveGovernance\":\"The new hyperdrive governance address.\"}},\"updateImplementation(address)\":{\"params\":{\"newDeployer\":\"The new deployment contract.\"}},\"updateLinkerCodeHash(bytes32)\":{\"params\":{\"_linkerCodeHash\":\"The new linker code hash.\"}},\"updateLinkerFactory(address)\":{\"params\":{\"_linkerFactory\":\"The new linker factory.\"}}},\"stateVariables\":{\"_defaultPausers\":{\"details\":\"The defaultPausers used when new instances are deployed.\"}},\"title\":\"HyperdriveFactory\",\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"events\":{\"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])\":{\"notice\":\"The event that is emitted when new instances are deployed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the Hyperdrive governance address is updated.\"},\"ImplementationUpdated(address)\":{\"notice\":\"Emitted when the Hyperdrive implementation is updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash is updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory is updated.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the factory.\"},\"deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256)\":{\"notice\":\"Deploys a Hyperdrive instance with the factory's configuration.\"},\"feeCollector()\":{\"notice\":\"The fee collector used when new instances are deployed.\"},\"fees()\":{\"notice\":\"The fee parameters used when new instances are deployed.\"},\"getDefaultPausers()\":{\"notice\":\"Gets the default pausers.\"},\"governance()\":{\"notice\":\"The governance address that updates the factory's configuration.\"},\"hyperdriveDeployer()\":{\"notice\":\"The contract used to deploy new instances.\"},\"hyperdriveGovernance()\":{\"notice\":\"The governance address used when new instances are deployed.\"},\"isOfficial(address)\":{\"notice\":\"A mapping from deployed Hyperdrive instances to the version         of the deployer that deployed them.\"},\"linkerCodeHash()\":{\"notice\":\"The linker code hash used when new instances are deployed.\"},\"linkerFactory()\":{\"notice\":\"The linker factory used when new instances are deployed.\"},\"updateDefaultPausers(address[])\":{\"notice\":\"Allows governance to change the default pausers.\"},\"updateFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector address.\"},\"updateFees((uint256,uint256,uint256))\":{\"notice\":\"Allows governance to update the default fee schedule that will         be used in new deployments.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"updateHyperdriveGovernance(address)\":{\"notice\":\"Allows governance to change the hyperdrive governance address\"},\"updateImplementation(address)\":{\"notice\":\"Allows governance to update the deployer contract.\"},\"updateLinkerCodeHash(bytes32)\":{\"notice\":\"Allows governance to change the linker code hash. This allows         governance to update the implementation of the ERC20Forwarder.\"},\"updateLinkerFactory(address)\":{\"notice\":\"Allows governance to change the linker factory.\"},\"versionCounter()\":{\"notice\":\"The number of times the factory's deployer has been updated.\"}},\"notice\":\"Deploys hyperdrive instances and initializes them. It also holds a         registry of all deployed hyperdrive instances.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveFactory.sol\":\"HyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5\",\"dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/factory/HyperdriveFactory.sol\":{\"keccak256\":\"0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1\",\"dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveDeployer.sol\":{\"keccak256\":\"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587\",\"dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef\",\"dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "ApprovalFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FeeTooHigh"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MaxFeeTooHigh"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NonPayableInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "version",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "hyperdrive",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
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
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "fees",
                  "type": "tuple",
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
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
                  "type": "uint256"
                }
              ],
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "linkerFactory",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "bytes32",
              "name": "linkerCodeHash",
              "type": "bytes32",
              "indexed": false
            },
            {
              "internalType": "bytes32[]",
              "name": "extraData",
              "type": "bytes32[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Deployed",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newFeeCollector",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "FeeCollectorUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "governance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "GovernanceUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "hyperdriveGovernance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "HyperdriveGovernanceUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newDeployer",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "ImplementationUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "newCodeHash",
              "type": "bytes32",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "LinkerCodeHashUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newLinkerFactory",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "LinkerFactoryUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "_config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
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
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "fees",
                  "type": "tuple",
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
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "bytes32[]",
              "name": "_extraData",
              "type": "bytes32[]"
            },
            {
              "internalType": "uint256",
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "deployAndInitialize",
          "outputs": [
            {
              "internalType": "contract IHyperdrive",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "feeCollector",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "fees",
          "outputs": [
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
              "name": "governance",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getDefaultPausers",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "governance",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "hyperdriveDeployer",
          "outputs": [
            {
              "internalType": "contract IHyperdriveDeployer",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "hyperdriveGovernance",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "instance",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isOfficial",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "version",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerCodeHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerFactory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_defaultPausers_",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateDefaultPausers"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeCollector",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateFeeCollector"
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Fees",
              "name": "_fees",
              "type": "tuple",
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
                  "name": "governance",
                  "type": "uint256"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateFees"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_governance",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveGovernance",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateHyperdriveGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "contract IHyperdriveDeployer",
              "name": "newDeployer",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateImplementation"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_linkerCodeHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateLinkerCodeHash"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_linkerFactory",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateLinkerFactory"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "versionCounter",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "params": {
              "_deployer": "The contract which holds the bytecode and deploys new versions.",
              "_factoryConfig": "Configuration of the Hyperdrive Factory.",
              "_linkerCodeHash": "The hash of the linker contract's constructor code.",
              "_linkerFactory": "The address of the linker factory."
            }
          },
          "deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256)": {
            "details": "This function is declared as payable to allow payable overrides      to accept ether on initialization, but payability is not supported      by default.",
            "params": {
              "_apr": "The apr to call init with",
              "_config": "The configuration of the Hyperdrive pool.",
              "_contribution": "Base token to call init with",
              "_extraData": "The extra data is used by some factories"
            },
            "returns": {
              "_0": "The hyperdrive address deployed"
            }
          },
          "getDefaultPausers()": {
            "returns": {
              "_0": "The default pausers."
            }
          },
          "updateDefaultPausers(address[])": {
            "params": {
              "_defaultPausers_": "The new list of default pausers."
            }
          },
          "updateFeeCollector(address)": {
            "params": {
              "_feeCollector": "The new fee collector address."
            }
          },
          "updateFees((uint256,uint256,uint256))": {
            "params": {
              "_fees": "The new defaults for the fee parameters."
            }
          },
          "updateGovernance(address)": {
            "params": {
              "_governance": "The new governance address."
            }
          },
          "updateHyperdriveGovernance(address)": {
            "params": {
              "_hyperdriveGovernance": "The new hyperdrive governance address."
            }
          },
          "updateImplementation(address)": {
            "params": {
              "newDeployer": "The new deployment contract."
            }
          },
          "updateLinkerCodeHash(bytes32)": {
            "params": {
              "_linkerCodeHash": "The new linker code hash."
            }
          },
          "updateLinkerFactory(address)": {
            "params": {
              "_linkerFactory": "The new linker factory."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "constructor": {
            "notice": "Initializes the factory."
          },
          "deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256)": {
            "notice": "Deploys a Hyperdrive instance with the factory's configuration."
          },
          "feeCollector()": {
            "notice": "The fee collector used when new instances are deployed."
          },
          "fees()": {
            "notice": "The fee parameters used when new instances are deployed."
          },
          "getDefaultPausers()": {
            "notice": "Gets the default pausers."
          },
          "governance()": {
            "notice": "The governance address that updates the factory's configuration."
          },
          "hyperdriveDeployer()": {
            "notice": "The contract used to deploy new instances."
          },
          "hyperdriveGovernance()": {
            "notice": "The governance address used when new instances are deployed."
          },
          "isOfficial(address)": {
            "notice": "A mapping from deployed Hyperdrive instances to the version         of the deployer that deployed them."
          },
          "linkerCodeHash()": {
            "notice": "The linker code hash used when new instances are deployed."
          },
          "linkerFactory()": {
            "notice": "The linker factory used when new instances are deployed."
          },
          "updateDefaultPausers(address[])": {
            "notice": "Allows governance to change the default pausers."
          },
          "updateFeeCollector(address)": {
            "notice": "Allows governance to change the fee collector address."
          },
          "updateFees((uint256,uint256,uint256))": {
            "notice": "Allows governance to update the default fee schedule that will         be used in new deployments."
          },
          "updateGovernance(address)": {
            "notice": "Allows governance to transfer the governance role."
          },
          "updateHyperdriveGovernance(address)": {
            "notice": "Allows governance to change the hyperdrive governance address"
          },
          "updateImplementation(address)": {
            "notice": "Allows governance to update the deployer contract."
          },
          "updateLinkerCodeHash(bytes32)": {
            "notice": "Allows governance to change the linker code hash. This allows         governance to update the implementation of the ERC20Forwarder."
          },
          "updateLinkerFactory(address)": {
            "notice": "Allows governance to change the linker factory."
          },
          "versionCounter()": {
            "notice": "The number of times the factory's deployer has been updated."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/factory/HyperdriveFactory.sol": "HyperdriveFactory"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/HyperdriveDataProvider.sol": {
        "keccak256": "0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d",
        "urls": [
          "bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5",
          "dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveStorage.sol": {
        "keccak256": "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        "urls": [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/factory/HyperdriveFactory.sol": {
        "keccak256": "0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde",
        "urls": [
          "bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1",
          "dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveDeployer.sol": {
        "keccak256": "0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0",
        "urls": [
          "bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587",
          "dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        "urls": [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f",
        "urls": [
          "bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef",
          "dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/factory/HyperdriveFactory.sol",
    "id": 5916,
    "exportedSymbols": {
      "FixedPointMath": [
        8486
      ],
      "HyperdriveDataProvider": [
        1778
      ],
      "HyperdriveFactory": [
        5915
      ],
      "IHyperdrive": [
        7103
      ],
      "IHyperdriveDeployer": [
        7127
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:13342:11",
    "nodes": [
      {
        "id": 5271,
        "nodeType": "PragmaDirective",
        "src": "39:23:11",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 5273,
        "nodeType": "ImportDirective",
        "src": "64:71:11",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveDataProvider.sol",
        "file": "../HyperdriveDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5916,
        "sourceUnit": 1779,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5272,
              "name": "HyperdriveDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1778,
              "src": "73:22:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5275,
        "nodeType": "ImportDirective",
        "src": "136:60:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5916,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5274,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "145:11:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5277,
        "nodeType": "ImportDirective",
        "src": "197:76:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveDeployer.sol",
        "file": "../interfaces/IHyperdriveDeployer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5916,
        "sourceUnit": 7128,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5276,
              "name": "IHyperdriveDeployer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7127,
              "src": "206:19:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5279,
        "nodeType": "ImportDirective",
        "src": "274:65:11",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5916,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5278,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "283:14:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5915,
        "nodeType": "ContractDefinition",
        "src": "749:12631:11",
        "nodes": [
          {
            "id": 5283,
            "nodeType": "UsingForDirective",
            "src": "791:33:11",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5281,
              "name": "FixedPointMath",
              "nameLocations": [
                "797:14:11"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "797:14:11"
            },
            "typeName": {
              "id": 5282,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "816:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 5288,
            "nodeType": "EventDefinition",
            "src": "886:52:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5284,
              "nodeType": "StructuredDocumentation",
              "src": "830:51:11",
              "text": "@notice Emitted when governance is transferred."
            },
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "892:17:11",
            "parameters": {
              "id": 5287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5286,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "governance",
                  "nameLocation": "926:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5288,
                  "src": "910:26:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5285,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "910:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "909:28:11"
            }
          },
          {
            "id": 5293,
            "nodeType": "EventDefinition",
            "src": "1015:57:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5289,
              "nodeType": "StructuredDocumentation",
              "src": "944:66:11",
              "text": "@notice Emitted when the Hyperdrive implementation is updated."
            },
            "eventSelector": "310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03",
            "name": "ImplementationUpdated",
            "nameLocation": "1021:21:11",
            "parameters": {
              "id": 5292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5291,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newDeployer",
                  "nameLocation": "1059:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5293,
                  "src": "1043:27:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1043:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1042:29:11"
            }
          },
          {
            "id": 5298,
            "nodeType": "EventDefinition",
            "src": "1153:72:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5294,
              "nodeType": "StructuredDocumentation",
              "src": "1078:70:11",
              "text": "@notice Emitted when the Hyperdrive governance address is updated."
            },
            "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
            "name": "HyperdriveGovernanceUpdated",
            "nameLocation": "1159:27:11",
            "parameters": {
              "id": 5297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5296,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "hyperdriveGovernance",
                  "nameLocation": "1203:20:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5298,
                  "src": "1187:36:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5295,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1187:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1186:38:11"
            }
          },
          {
            "id": 5303,
            "nodeType": "EventDefinition",
            "src": "1290:59:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5299,
              "nodeType": "StructuredDocumentation",
              "src": "1231:54:11",
              "text": "@notice Emitted when the fee collector is updated."
            },
            "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
            "name": "FeeCollectorUpdated",
            "nameLocation": "1296:19:11",
            "parameters": {
              "id": 5302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5301,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newFeeCollector",
                  "nameLocation": "1332:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5303,
                  "src": "1316:31:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1316:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1315:33:11"
            }
          },
          {
            "id": 5308,
            "nodeType": "EventDefinition",
            "src": "1415:61:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5304,
              "nodeType": "StructuredDocumentation",
              "src": "1355:55:11",
              "text": "@notice Emitted when the linker factory is updated."
            },
            "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
            "name": "LinkerFactoryUpdated",
            "nameLocation": "1421:20:11",
            "parameters": {
              "id": 5307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5306,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newLinkerFactory",
                  "nameLocation": "1458:16:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5308,
                  "src": "1442:32:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5305,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1442:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1441:34:11"
            }
          },
          {
            "id": 5313,
            "nodeType": "EventDefinition",
            "src": "1544:57:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5309,
              "nodeType": "StructuredDocumentation",
              "src": "1482:57:11",
              "text": "@notice Emitted when the linker code hash is updated."
            },
            "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
            "name": "LinkerCodeHashUpdated",
            "nameLocation": "1550:21:11",
            "parameters": {
              "id": 5312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5311,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newCodeHash",
                  "nameLocation": "1588:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5313,
                  "src": "1572:27:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5310,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1572:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1571:29:11"
            }
          },
          {
            "id": 5330,
            "nodeType": "EventDefinition",
            "src": "1682:213:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5314,
              "nodeType": "StructuredDocumentation",
              "src": "1607:70:11",
              "text": "@notice The event that is emitted when new instances are deployed."
            },
            "eventSelector": "c6f4867fb04085fae8d5bc8a6eb6bd83992441fe62b92acc3710f0cedf0e753a",
            "name": "Deployed",
            "nameLocation": "1688:8:11",
            "parameters": {
              "id": 5329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5316,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "1722:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5330,
                  "src": "1706:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1706:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5318,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "1747:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5330,
                  "src": "1739:18:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5317,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1739:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5321,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "config",
                  "nameLocation": "1790:6:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5330,
                  "src": "1767:29:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 5320,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5319,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1767:11:11",
                        "1779:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "1767:22:11"
                    },
                    "referencedDeclaration": 6924,
                    "src": "1767:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5323,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "linkerFactory",
                  "nameLocation": "1814:13:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5330,
                  "src": "1806:21:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1806:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5325,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "linkerCodeHash",
                  "nameLocation": "1845:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5330,
                  "src": "1837:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5324,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1837:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5328,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "extraData",
                  "nameLocation": "1879:9:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5330,
                  "src": "1869:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5326,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1869:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 5327,
                    "nodeType": "ArrayTypeName",
                    "src": "1869:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1696:198:11"
            }
          },
          {
            "id": 5333,
            "nodeType": "VariableDeclaration",
            "src": "1982:25:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5331,
              "nodeType": "StructuredDocumentation",
              "src": "1901:76:11",
              "text": "@notice The governance address that updates the factory's configuration."
            },
            "functionSelector": "5aa6e675",
            "mutability": "mutable",
            "name": "governance",
            "nameLocation": "1997:10:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5332,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "1982:7:11",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5337,
            "nodeType": "VariableDeclaration",
            "src": "2091:33:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5334,
              "nodeType": "StructuredDocumentation",
              "src": "2014:72:11",
              "text": "@notice The number of times the factory's deployer has been updated."
            },
            "functionSelector": "dd6d30c1",
            "mutability": "mutable",
            "name": "versionCounter",
            "nameLocation": "2106:14:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5335,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2091:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 5336,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2123:1:11",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "id": 5342,
            "nodeType": "VariableDeclaration",
            "src": "2259:62:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5338,
              "nodeType": "StructuredDocumentation",
              "src": "2131:123:11",
              "text": "@notice A mapping from deployed Hyperdrive instances to the version\n         of the deployer that deployed them."
            },
            "functionSelector": "77b81aac",
            "mutability": "mutable",
            "name": "isOfficial",
            "nameLocation": "2311:10:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 5341,
              "keyName": "instance",
              "keyNameLocation": "2275:8:11",
              "keyType": {
                "id": 5339,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "2267:7:11",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "2259:44:11",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "version",
              "valueNameLocation": "2295:7:11",
              "valueType": {
                "id": 5340,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2287:7:11",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 5346,
            "nodeType": "VariableDeclaration",
            "src": "2387:45:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5343,
              "nodeType": "StructuredDocumentation",
              "src": "2328:54:11",
              "text": "@notice The contract used to deploy new instances."
            },
            "functionSelector": "03a5aa92",
            "mutability": "mutable",
            "name": "hyperdriveDeployer",
            "nameLocation": "2414:18:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
              "typeString": "contract IHyperdriveDeployer"
            },
            "typeName": {
              "id": 5345,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5344,
                "name": "IHyperdriveDeployer",
                "nameLocations": [
                  "2387:19:11"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7127,
                "src": "2387:19:11"
              },
              "referencedDeclaration": 7127,
              "src": "2387:19:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                "typeString": "contract IHyperdriveDeployer"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5349,
            "nodeType": "VariableDeclaration",
            "src": "2516:35:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5347,
              "nodeType": "StructuredDocumentation",
              "src": "2439:72:11",
              "text": "@notice The governance address used when new instances are deployed."
            },
            "functionSelector": "e3331555",
            "mutability": "mutable",
            "name": "hyperdriveGovernance",
            "nameLocation": "2531:20:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5348,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2516:7:11",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5352,
            "nodeType": "VariableDeclaration",
            "src": "2631:28:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5350,
              "nodeType": "StructuredDocumentation",
              "src": "2558:68:11",
              "text": "@notice The linker factory used when new instances are deployed."
            },
            "functionSelector": "99623bb1",
            "mutability": "mutable",
            "name": "linkerFactory",
            "nameLocation": "2646:13:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5351,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2631:7:11",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5355,
            "nodeType": "VariableDeclaration",
            "src": "2741:29:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5353,
              "nodeType": "StructuredDocumentation",
              "src": "2666:70:11",
              "text": "@notice The linker code hash used when new instances are deployed."
            },
            "functionSelector": "c905a4b5",
            "mutability": "mutable",
            "name": "linkerCodeHash",
            "nameLocation": "2756:14:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 5354,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2741:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5359,
            "nodeType": "VariableDeclaration",
            "src": "2850:28:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5356,
              "nodeType": "StructuredDocumentation",
              "src": "2777:68:11",
              "text": "@notice The fee parameters used when new instances are deployed."
            },
            "functionSelector": "9af1d35a",
            "mutability": "mutable",
            "name": "fees",
            "nameLocation": "2874:4:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Fees_$6885_storage",
              "typeString": "struct IHyperdrive.Fees"
            },
            "typeName": {
              "id": 5358,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5357,
                "name": "IHyperdrive.Fees",
                "nameLocations": [
                  "2850:11:11",
                  "2862:4:11"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6885,
                "src": "2850:16:11"
              },
              "referencedDeclaration": 6885,
              "src": "2850:16:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Fees_$6885_storage_ptr",
                "typeString": "struct IHyperdrive.Fees"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5362,
            "nodeType": "VariableDeclaration",
            "src": "2957:27:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5360,
              "nodeType": "StructuredDocumentation",
              "src": "2885:67:11",
              "text": "@notice The fee collector used when new instances are deployed."
            },
            "functionSelector": "c415b95c",
            "mutability": "mutable",
            "name": "feeCollector",
            "nameLocation": "2972:12:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5361,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2957:7:11",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5364,
            "nodeType": "VariableDeclaration",
            "src": "3059:38:11",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "maxCurveFee",
            "nameLocation": "3086:11:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5363,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3059:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 5366,
            "nodeType": "VariableDeclaration",
            "src": "3171:37:11",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "maxFlatFee",
            "nameLocation": "3198:10:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5365,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3171:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 5368,
            "nodeType": "VariableDeclaration",
            "src": "3288:43:11",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "maxGovernanceFee",
            "nameLocation": "3315:16:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5367,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3288:7:11",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 5372,
            "nodeType": "VariableDeclaration",
            "src": "3408:34:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5369,
              "nodeType": "StructuredDocumentation",
              "src": "3338:65:11",
              "text": "@dev The defaultPausers used when new instances are deployed."
            },
            "mutability": "mutable",
            "name": "_defaultPausers",
            "nameLocation": "3427:15:11",
            "scope": 5915,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 5370,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3408:7:11",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 5371,
              "nodeType": "ArrayTypeName",
              "src": "3408:9:11",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 5394,
            "nodeType": "StructDefinition",
            "src": "3449:677:11",
            "nodes": [],
            "canonicalName": "HyperdriveFactory.FactoryConfig",
            "members": [
              {
                "constant": false,
                "id": 5375,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "3545:10:11",
                "nodeType": "VariableDeclaration",
                "scope": 5394,
                "src": "3537:18:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 5374,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3537:7:11",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5378,
                "mutability": "mutable",
                "name": "hyperdriveGovernance",
                "nameLocation": "3646:20:11",
                "nodeType": "VariableDeclaration",
                "scope": 5394,
                "src": "3638:28:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 5377,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3638:7:11",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5381,
                "mutability": "mutable",
                "name": "feeCollector",
                "nameLocation": "3774:12:11",
                "nodeType": "VariableDeclaration",
                "scope": 5394,
                "src": "3766:20:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 5380,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3766:7:11",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5385,
                "mutability": "mutable",
                "name": "fees",
                "nameLocation": "3873:4:11",
                "nodeType": "VariableDeclaration",
                "scope": 5394,
                "src": "3856:21:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$6885_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 5384,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 5383,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "3856:11:11",
                      "3868:4:11"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6885,
                    "src": "3856:16:11"
                  },
                  "referencedDeclaration": 6885,
                  "src": "3856:16:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$6885_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5389,
                "mutability": "mutable",
                "name": "maxFees",
                "nameLocation": "3996:7:11",
                "nodeType": "VariableDeclaration",
                "scope": 5394,
                "src": "3979:24:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$6885_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 5388,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 5387,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "3979:11:11",
                      "3991:4:11"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6885,
                    "src": "3979:16:11"
                  },
                  "referencedDeclaration": 6885,
                  "src": "3979:16:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$6885_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5393,
                "mutability": "mutable",
                "name": "defaultPausers",
                "nameLocation": "4105:14:11",
                "nodeType": "VariableDeclaration",
                "scope": 5394,
                "src": "4095:24:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 5391,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4095:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5392,
                  "nodeType": "ArrayTypeName",
                  "src": "4095:9:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FactoryConfig",
            "nameLocation": "3456:13:11",
            "scope": 5915,
            "visibility": "public"
          },
          {
            "id": 5509,
            "nodeType": "FunctionDefinition",
            "src": "4481:1428:11",
            "nodes": [],
            "body": {
              "id": 5508,
              "nodeType": "Block",
              "src": "4648:1261:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5408,
                      "name": "maxCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5364,
                      "src": "4833:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 5409,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5398,
                          "src": "4847:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 5410,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4862:7:11",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5389,
                        "src": "4847:22:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 5411,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4870:5:11",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6878,
                      "src": "4847:28:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4833:42:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5413,
                  "nodeType": "ExpressionStatement",
                  "src": "4833:42:11"
                },
                {
                  "expression": {
                    "id": 5418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5414,
                      "name": "maxFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5366,
                      "src": "4885:10:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 5415,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5398,
                          "src": "4898:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 5416,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4913:7:11",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5389,
                        "src": "4898:22:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 5417,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4921:4:11",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6881,
                      "src": "4898:27:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4885:40:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5419,
                  "nodeType": "ExpressionStatement",
                  "src": "4885:40:11"
                },
                {
                  "expression": {
                    "id": 5424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5420,
                      "name": "maxGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5368,
                      "src": "4935:16:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 5421,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5398,
                          "src": "4954:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 5422,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4969:7:11",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5389,
                        "src": "4954:22:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 5423,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4977:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6884,
                      "src": "4954:33:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4935:52:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5425,
                  "nodeType": "ExpressionStatement",
                  "src": "4935:52:11"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 5434,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5426,
                          "name": "maxCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5364,
                          "src": "5014:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 5427,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8486,
                            "src": "5028:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 5428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5043:6:11",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7745,
                          "src": "5028:21:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5014:35:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5430,
                          "name": "maxFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5366,
                          "src": "5065:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 5431,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8486,
                            "src": "5078:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 5432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5093:6:11",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7745,
                          "src": "5078:21:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5065:34:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5014:85:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5438,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 5435,
                        "name": "maxGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5368,
                        "src": "5115:16:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "expression": {
                          "id": 5436,
                          "name": "FixedPointMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8486,
                          "src": "5134:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                            "typeString": "type(library FixedPointMath)"
                          }
                        },
                        "id": 5437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "5149:6:11",
                        "memberName": "ONE_18",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7745,
                        "src": "5134:21:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5115:40:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5014:141:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5446,
                  "nodeType": "IfStatement",
                  "src": "4997:228:11",
                  "trueBody": {
                    "id": 5445,
                    "nodeType": "Block",
                    "src": "5166:59:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5440,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "5187:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5442,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5199:13:11",
                            "memberName": "MaxFeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7053,
                            "src": "5187:25:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5443,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5187:27:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5444,
                        "nodeType": "RevertStatement",
                        "src": "5180:34:11"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 5457,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5451,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 5447,
                              "name": "_factoryConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5398,
                              "src": "5251:14:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                                "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                              }
                            },
                            "id": 5448,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5266:4:11",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5385,
                            "src": "5251:19:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 5449,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5271:5:11",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6878,
                          "src": "5251:25:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5450,
                          "name": "maxCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5364,
                          "src": "5279:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5251:39:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5456,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 5452,
                              "name": "_factoryConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5398,
                              "src": "5306:14:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                                "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                              }
                            },
                            "id": 5453,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5321:4:11",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5385,
                            "src": "5306:19:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 5454,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5326:4:11",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6881,
                          "src": "5306:24:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5455,
                          "name": "maxFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5366,
                          "src": "5333:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5306:37:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5251:92:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5462,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 5458,
                            "name": "_factoryConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5398,
                            "src": "5359:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                              "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                            }
                          },
                          "id": 5459,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5374:4:11",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5385,
                          "src": "5359:19:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 5460,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5379:10:11",
                        "memberName": "governance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6884,
                        "src": "5359:30:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 5461,
                        "name": "maxGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5368,
                        "src": "5392:16:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5359:49:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5251:157:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5470,
                  "nodeType": "IfStatement",
                  "src": "5234:241:11",
                  "trueBody": {
                    "id": 5469,
                    "nodeType": "Block",
                    "src": "5419:56:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5464,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "5440:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5466,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5452:10:11",
                            "memberName": "FeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7055,
                            "src": "5440:22:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5440:24:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5468,
                        "nodeType": "RevertStatement",
                        "src": "5433:31:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5471,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5359,
                      "src": "5484:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$6885_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5472,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5398,
                        "src": "5491:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5473,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5506:4:11",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5385,
                      "src": "5491:19:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "src": "5484:26:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$6885_storage",
                      "typeString": "struct IHyperdrive.Fees storage ref"
                    }
                  },
                  "id": 5475,
                  "nodeType": "ExpressionStatement",
                  "src": "5484:26:11"
                },
                {
                  "expression": {
                    "id": 5479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5476,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5333,
                      "src": "5565:10:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5477,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5398,
                        "src": "5578:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5478,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5593:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5375,
                      "src": "5578:25:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5565:38:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5480,
                  "nodeType": "ExpressionStatement",
                  "src": "5565:38:11"
                },
                {
                  "expression": {
                    "id": 5484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5481,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5349,
                      "src": "5613:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5482,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5398,
                        "src": "5636:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5483,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5651:20:11",
                      "memberName": "hyperdriveGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5378,
                      "src": "5636:35:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5613:58:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5485,
                  "nodeType": "ExpressionStatement",
                  "src": "5613:58:11"
                },
                {
                  "expression": {
                    "id": 5489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5486,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5362,
                      "src": "5681:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5487,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5398,
                        "src": "5696:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5488,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5711:12:11",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5381,
                      "src": "5696:27:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5681:42:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5490,
                  "nodeType": "ExpressionStatement",
                  "src": "5681:42:11"
                },
                {
                  "expression": {
                    "id": 5494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5491,
                      "name": "_defaultPausers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5372,
                      "src": "5733:15:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5492,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5398,
                        "src": "5751:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5493,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5766:14:11",
                      "memberName": "defaultPausers",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5393,
                      "src": "5751:29:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "5733:47:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 5495,
                  "nodeType": "ExpressionStatement",
                  "src": "5733:47:11"
                },
                {
                  "expression": {
                    "id": 5498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5496,
                      "name": "hyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5346,
                      "src": "5790:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5497,
                      "name": "_deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5401,
                      "src": "5811:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "src": "5790:30:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "id": 5499,
                  "nodeType": "ExpressionStatement",
                  "src": "5790:30:11"
                },
                {
                  "expression": {
                    "id": 5502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5500,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5352,
                      "src": "5830:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5501,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5403,
                      "src": "5846:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5830:30:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5503,
                  "nodeType": "ExpressionStatement",
                  "src": "5830:30:11"
                },
                {
                  "expression": {
                    "id": 5506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5504,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5355,
                      "src": "5870:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5505,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5405,
                      "src": "5887:15:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5870:32:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 5507,
                  "nodeType": "ExpressionStatement",
                  "src": "5870:32:11"
                }
              ]
            },
            "documentation": {
              "id": 5395,
              "nodeType": "StructuredDocumentation",
              "src": "4132:344:11",
              "text": "@notice Initializes the factory.\n @param _factoryConfig Configuration of the Hyperdrive Factory.\n @param _deployer The contract which holds the bytecode and deploys new versions.\n @param _linkerFactory The address of the linker factory.\n @param _linkerCodeHash The hash of the linker contract's constructor code."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 5406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5398,
                  "mutability": "mutable",
                  "name": "_factoryConfig",
                  "nameLocation": "4523:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5509,
                  "src": "4502:35:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FactoryConfig_$5394_memory_ptr",
                    "typeString": "struct HyperdriveFactory.FactoryConfig"
                  },
                  "typeName": {
                    "id": 5397,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5396,
                      "name": "FactoryConfig",
                      "nameLocations": [
                        "4502:13:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 5394,
                      "src": "4502:13:11"
                    },
                    "referencedDeclaration": 5394,
                    "src": "4502:13:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FactoryConfig_$5394_storage_ptr",
                      "typeString": "struct HyperdriveFactory.FactoryConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5401,
                  "mutability": "mutable",
                  "name": "_deployer",
                  "nameLocation": "4567:9:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5509,
                  "src": "4547:29:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                    "typeString": "contract IHyperdriveDeployer"
                  },
                  "typeName": {
                    "id": 5400,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5399,
                      "name": "IHyperdriveDeployer",
                      "nameLocations": [
                        "4547:19:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7127,
                      "src": "4547:19:11"
                    },
                    "referencedDeclaration": 7127,
                    "src": "4547:19:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5403,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "4594:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5509,
                  "src": "4586:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5402,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4586:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5405,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "4626:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5509,
                  "src": "4618:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5404,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4618:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4492:155:11"
            },
            "returnParameters": {
              "id": 5407,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4648:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5524,
            "nodeType": "ModifierDefinition",
            "src": "5978:117:11",
            "nodes": [],
            "body": {
              "id": 5523,
              "nodeType": "Block",
              "src": "6004:91:11",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 5515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 5512,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "6018:3:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5513,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6022:6:11",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "6018:10:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 5514,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5333,
                      "src": "6032:10:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6018:24:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5521,
                  "nodeType": "IfStatement",
                  "src": "6014:63:11",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 5516,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "6051:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 5518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6063:12:11",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "6051:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 5519,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6051:26:11",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5520,
                    "nodeType": "RevertStatement",
                    "src": "6044:33:11"
                  }
                },
                {
                  "id": 5522,
                  "nodeType": "PlaceholderStatement",
                  "src": "6087:1:11"
                }
              ]
            },
            "documentation": {
              "id": 5510,
              "nodeType": "StructuredDocumentation",
              "src": "5915:58:11",
              "text": "@dev Ensure that the sender is the governance address."
            },
            "name": "onlyGovernance",
            "nameLocation": "5987:14:11",
            "parameters": {
              "id": 5511,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6001:2:11"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5561,
            "nodeType": "FunctionDefinition",
            "src": "6224:396:11",
            "nodes": [],
            "body": {
              "id": 5560,
              "nodeType": "Block",
              "src": "6325:295:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 5542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 5536,
                              "name": "newDeployer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5528,
                              "src": "6383:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                                "typeString": "contract IHyperdriveDeployer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                                "typeString": "contract IHyperdriveDeployer"
                              }
                            ],
                            "id": 5535,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6375:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5534,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6375:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6375:20:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 5540,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6407:1:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 5539,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6399:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5538,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6399:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5541,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6399:10:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "6375:34:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5533,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6367:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6367:43:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5544,
                  "nodeType": "ExpressionStatement",
                  "src": "6367:43:11"
                },
                {
                  "expression": {
                    "id": 5547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5545,
                      "name": "hyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5346,
                      "src": "6420:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5546,
                      "name": "newDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5528,
                      "src": "6441:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "src": "6420:32:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "id": 5548,
                  "nodeType": "ExpressionStatement",
                  "src": "6420:32:11"
                },
                {
                  "id": 5552,
                  "nodeType": "UncheckedBlock",
                  "src": "6504:51:11",
                  "statements": [
                    {
                      "expression": {
                        "id": 5550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "6528:16:11",
                        "subExpression": {
                          "id": 5549,
                          "name": "versionCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5337,
                          "src": "6530:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 5551,
                      "nodeType": "ExpressionStatement",
                      "src": "6528:16:11"
                    }
                  ]
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 5556,
                            "name": "newDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5528,
                            "src": "6600:11:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          ],
                          "id": 5555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6592:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5554,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6592:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5557,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6592:20:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5553,
                      "name": "ImplementationUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5293,
                      "src": "6570:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6570:43:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5559,
                  "nodeType": "EmitStatement",
                  "src": "6565:48:11"
                }
              ]
            },
            "documentation": {
              "id": 5525,
              "nodeType": "StructuredDocumentation",
              "src": "6101:118:11",
              "text": "@notice Allows governance to update the deployer contract.\n @param newDeployer The new deployment contract."
            },
            "functionSelector": "025b22bc",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5531,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5530,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "6310:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "6310:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "6310:14:11"
              }
            ],
            "name": "updateImplementation",
            "nameLocation": "6233:20:11",
            "parameters": {
              "id": 5529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5528,
                  "mutability": "mutable",
                  "name": "newDeployer",
                  "nameLocation": "6283:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5561,
                  "src": "6263:31:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                    "typeString": "contract IHyperdriveDeployer"
                  },
                  "typeName": {
                    "id": 5527,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5526,
                      "name": "IHyperdriveDeployer",
                      "nameLocations": [
                        "6263:19:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7127,
                      "src": "6263:19:11"
                    },
                    "referencedDeclaration": 7127,
                    "src": "6263:19:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6253:47:11"
            },
            "returnParameters": {
              "id": 5532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6325:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5578,
            "nodeType": "FunctionDefinition",
            "src": "6748:157:11",
            "nodes": [],
            "body": {
              "id": 5577,
              "nodeType": "Block",
              "src": "6819:86:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5571,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5569,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5333,
                      "src": "6829:10:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5570,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5564,
                      "src": "6842:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6829:24:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5572,
                  "nodeType": "ExpressionStatement",
                  "src": "6829:24:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5574,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5564,
                        "src": "6886:11:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5573,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5288,
                      "src": "6868:17:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5575,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6868:30:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5576,
                  "nodeType": "EmitStatement",
                  "src": "6863:35:11"
                }
              ]
            },
            "documentation": {
              "id": 5562,
              "nodeType": "StructuredDocumentation",
              "src": "6626:117:11",
              "text": "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address."
            },
            "functionSelector": "b2561263",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5567,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5566,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "6804:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "6804:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "6804:14:11"
              }
            ],
            "name": "updateGovernance",
            "nameLocation": "6757:16:11",
            "parameters": {
              "id": 5565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5564,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "6782:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5578,
                  "src": "6774:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5563,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6774:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6773:21:11"
            },
            "returnParameters": {
              "id": 5568,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6819:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5595,
            "nodeType": "FunctionDefinition",
            "src": "7065:231:11",
            "nodes": [],
            "body": {
              "id": 5594,
              "nodeType": "Block",
              "src": "7170:126:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5586,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5349,
                      "src": "7180:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5587,
                      "name": "_hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5581,
                      "src": "7203:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7180:44:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5589,
                  "nodeType": "ExpressionStatement",
                  "src": "7180:44:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5591,
                        "name": "_hyperdriveGovernance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5581,
                        "src": "7267:21:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5590,
                      "name": "HyperdriveGovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5298,
                      "src": "7239:27:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7239:50:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5593,
                  "nodeType": "EmitStatement",
                  "src": "7234:55:11"
                }
              ]
            },
            "documentation": {
              "id": 5579,
              "nodeType": "StructuredDocumentation",
              "src": "6911:149:11",
              "text": "@notice Allows governance to change the hyperdrive governance address\n @param _hyperdriveGovernance The new hyperdrive governance address."
            },
            "functionSelector": "dd2b8fbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5584,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5583,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7155:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "7155:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "7155:14:11"
              }
            ],
            "name": "updateHyperdriveGovernance",
            "nameLocation": "7074:26:11",
            "parameters": {
              "id": 5582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5581,
                  "mutability": "mutable",
                  "name": "_hyperdriveGovernance",
                  "nameLocation": "7118:21:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5595,
                  "src": "7110:29:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5580,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7110:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7100:45:11"
            },
            "returnParameters": {
              "id": 5585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7170:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5621,
            "nodeType": "FunctionDefinition",
            "src": "7420:236:11",
            "nodes": [],
            "body": {
              "id": 5620,
              "nodeType": "Block",
              "src": "7511:145:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 5609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5604,
                          "name": "_linkerFactory",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5598,
                          "src": "7529:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 5607,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7555:1:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 5606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7547:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5605,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "7547:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7547:10:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "7529:28:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5603,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "7521:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7521:37:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5611,
                  "nodeType": "ExpressionStatement",
                  "src": "7521:37:11"
                },
                {
                  "expression": {
                    "id": 5614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5612,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5352,
                      "src": "7568:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5613,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5598,
                      "src": "7584:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7568:30:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5615,
                  "nodeType": "ExpressionStatement",
                  "src": "7568:30:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5617,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5598,
                        "src": "7634:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5616,
                      "name": "LinkerFactoryUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5308,
                      "src": "7613:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7613:36:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5619,
                  "nodeType": "EmitStatement",
                  "src": "7608:41:11"
                }
              ]
            },
            "documentation": {
              "id": 5596,
              "nodeType": "StructuredDocumentation",
              "src": "7302:113:11",
              "text": "@notice Allows governance to change the linker factory.\n @param _linkerFactory The new linker factory."
            },
            "functionSelector": "85229785",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5601,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5600,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7496:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "7496:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "7496:14:11"
              }
            ],
            "name": "updateLinkerFactory",
            "nameLocation": "7429:19:11",
            "parameters": {
              "id": 5599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5598,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "7466:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5621,
                  "src": "7458:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7458:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7448:38:11"
            },
            "returnParameters": {
              "id": 5602,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7511:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5638,
            "nodeType": "FunctionDefinition",
            "src": "7876:195:11",
            "nodes": [],
            "body": {
              "id": 5637,
              "nodeType": "Block",
              "src": "7969:102:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5629,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5355,
                      "src": "7979:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5630,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5624,
                      "src": "7996:15:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7979:32:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 5632,
                  "nodeType": "ExpressionStatement",
                  "src": "7979:32:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5634,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5624,
                        "src": "8048:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 5633,
                      "name": "LinkerCodeHashUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5313,
                      "src": "8026:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 5635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8026:38:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5636,
                  "nodeType": "EmitStatement",
                  "src": "8021:43:11"
                }
              ]
            },
            "documentation": {
              "id": 5622,
              "nodeType": "StructuredDocumentation",
              "src": "7662:209:11",
              "text": "@notice Allows governance to change the linker code hash. This allows\n         governance to update the implementation of the ERC20Forwarder.\n @param _linkerCodeHash The new linker code hash."
            },
            "functionSelector": "4fbfee77",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5627,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5626,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7954:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "7954:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "7954:14:11"
              }
            ],
            "name": "updateLinkerCodeHash",
            "nameLocation": "7885:20:11",
            "parameters": {
              "id": 5625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5624,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "7923:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5638,
                  "src": "7915:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5623,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7915:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7905:39:11"
            },
            "returnParameters": {
              "id": 5628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7969:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5655,
            "nodeType": "FunctionDefinition",
            "src": "8208:169:11",
            "nodes": [],
            "body": {
              "id": 5654,
              "nodeType": "Block",
              "src": "8283:94:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5648,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5646,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5362,
                      "src": "8293:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5647,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5641,
                      "src": "8308:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8293:28:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5649,
                  "nodeType": "ExpressionStatement",
                  "src": "8293:28:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5651,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5641,
                        "src": "8356:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5650,
                      "name": "FeeCollectorUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5303,
                      "src": "8336:19:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8336:34:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5653,
                  "nodeType": "EmitStatement",
                  "src": "8331:39:11"
                }
              ]
            },
            "documentation": {
              "id": 5639,
              "nodeType": "StructuredDocumentation",
              "src": "8077:126:11",
              "text": "@notice Allows governance to change the fee collector address.\n @param _feeCollector The new fee collector address."
            },
            "functionSelector": "d2c35ce8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5644,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5643,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "8268:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "8268:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "8268:14:11"
              }
            ],
            "name": "updateFeeCollector",
            "nameLocation": "8217:18:11",
            "parameters": {
              "id": 5642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5641,
                  "mutability": "mutable",
                  "name": "_feeCollector",
                  "nameLocation": "8244:13:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5655,
                  "src": "8236:21:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8236:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8235:23:11"
            },
            "returnParameters": {
              "id": 5645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8283:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5690,
            "nodeType": "FunctionDefinition",
            "src": "8568:328:11",
            "nodes": [],
            "body": {
              "id": 5689,
              "nodeType": "Block",
              "src": "8659:237:11",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 5672,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 5664,
                            "name": "_fees",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5659,
                            "src": "8686:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$6885_calldata_ptr",
                              "typeString": "struct IHyperdrive.Fees calldata"
                            }
                          },
                          "id": 5665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8692:5:11",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6878,
                          "src": "8686:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5666,
                          "name": "maxCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5364,
                          "src": "8700:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8686:25:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5671,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 5668,
                            "name": "_fees",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5659,
                            "src": "8727:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$6885_calldata_ptr",
                              "typeString": "struct IHyperdrive.Fees calldata"
                            }
                          },
                          "id": 5669,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8733:4:11",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6881,
                          "src": "8727:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5670,
                          "name": "maxFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5366,
                          "src": "8740:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8727:23:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "8686:64:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5676,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 5673,
                          "name": "_fees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5659,
                          "src": "8766:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$6885_calldata_ptr",
                            "typeString": "struct IHyperdrive.Fees calldata"
                          }
                        },
                        "id": 5674,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8772:10:11",
                        "memberName": "governance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6884,
                        "src": "8766:16:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 5675,
                        "name": "maxGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5368,
                        "src": "8785:16:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "8766:35:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8686:115:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5684,
                  "nodeType": "IfStatement",
                  "src": "8669:199:11",
                  "trueBody": {
                    "id": 5683,
                    "nodeType": "Block",
                    "src": "8812:56:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5678,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "8833:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5680,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8845:10:11",
                            "memberName": "FeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7055,
                            "src": "8833:22:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5681,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8833:24:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5682,
                        "nodeType": "RevertStatement",
                        "src": "8826:31:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5685,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5359,
                      "src": "8877:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$6885_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5686,
                      "name": "_fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5659,
                      "src": "8884:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$6885_calldata_ptr",
                        "typeString": "struct IHyperdrive.Fees calldata"
                      }
                    },
                    "src": "8877:12:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$6885_storage",
                      "typeString": "struct IHyperdrive.Fees storage ref"
                    }
                  },
                  "id": 5688,
                  "nodeType": "ExpressionStatement",
                  "src": "8877:12:11"
                }
              ]
            },
            "documentation": {
              "id": 5656,
              "nodeType": "StructuredDocumentation",
              "src": "8383:180:11",
              "text": "@notice Allows governance to update the default fee schedule that will\n         be used in new deployments.\n @param _fees The new defaults for the fee parameters."
            },
            "functionSelector": "7613b08c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5662,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5661,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "8644:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "8644:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "8644:14:11"
              }
            ],
            "name": "updateFees",
            "nameLocation": "8577:10:11",
            "parameters": {
              "id": 5660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5659,
                  "mutability": "mutable",
                  "name": "_fees",
                  "nameLocation": "8623:5:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5690,
                  "src": "8597:31:11",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$6885_calldata_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  },
                  "typeName": {
                    "id": 5658,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5657,
                      "name": "IHyperdrive.Fees",
                      "nameLocations": [
                        "8597:11:11",
                        "8609:4:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6885,
                      "src": "8597:16:11"
                    },
                    "referencedDeclaration": 6885,
                    "src": "8597:16:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$6885_storage_ptr",
                      "typeString": "struct IHyperdrive.Fees"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8587:47:11"
            },
            "returnParameters": {
              "id": 5663,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8659:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5704,
            "nodeType": "FunctionDefinition",
            "src": "9032:203:11",
            "nodes": [],
            "body": {
              "id": 5703,
              "nodeType": "Block",
              "src": "9137:98:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5699,
                      "name": "_defaultPausers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5372,
                      "src": "9194:15:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5700,
                      "name": "_defaultPausers_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5694,
                      "src": "9212:16:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                        "typeString": "address[] calldata"
                      }
                    },
                    "src": "9194:34:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 5702,
                  "nodeType": "ExpressionStatement",
                  "src": "9194:34:11"
                }
              ]
            },
            "documentation": {
              "id": 5691,
              "nodeType": "StructuredDocumentation",
              "src": "8902:125:11",
              "text": "@notice Allows governance to change the default pausers.\n @param _defaultPausers_ The new list of default pausers."
            },
            "functionSelector": "9af25262",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5697,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5696,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "9122:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5524,
                  "src": "9122:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "9122:14:11"
              }
            ],
            "name": "updateDefaultPausers",
            "nameLocation": "9041:20:11",
            "parameters": {
              "id": 5695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5694,
                  "mutability": "mutable",
                  "name": "_defaultPausers_",
                  "nameLocation": "9090:16:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5704,
                  "src": "9071:35:11",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5692,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9071:7:11",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5693,
                    "nodeType": "ArrayTypeName",
                    "src": "9071:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9061:51:11"
            },
            "returnParameters": {
              "id": 5698,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9137:0:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5888,
            "nodeType": "FunctionDefinition",
            "src": "9787:2493:11",
            "nodes": [],
            "body": {
              "id": 5887,
              "nodeType": "Block",
              "src": "10004:2276:11",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5724,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 5721,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "10018:3:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5722,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10022:5:11",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "10018:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10030:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10018:13:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5731,
                  "nodeType": "IfStatement",
                  "src": "10014:89:11",
                  "trueBody": {
                    "id": 5730,
                    "nodeType": "Block",
                    "src": "10033:70:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5725,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "10054:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5727,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10066:24:11",
                            "memberName": "NonPayableInitialization",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7057,
                            "src": "10054:36:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10054:38:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5729,
                        "nodeType": "RevertStatement",
                        "src": "10047:45:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 5732,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5708,
                        "src": "10540:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 5734,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10548:12:11",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6913,
                      "src": "10540:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5735,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5362,
                      "src": "10563:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10540:35:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5737,
                  "nodeType": "ExpressionStatement",
                  "src": "10540:35:11"
                },
                {
                  "expression": {
                    "id": 5745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 5738,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5708,
                        "src": "10585:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 5740,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10593:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6910,
                      "src": "10585:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 5743,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "10614:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_HyperdriveFactory_$5915",
                            "typeString": "contract HyperdriveFactory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_HyperdriveFactory_$5915",
                            "typeString": "contract HyperdriveFactory"
                          }
                        ],
                        "id": 5742,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10606:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 5741,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10606:7:11",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 5744,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10606:13:11",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10585:34:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5746,
                  "nodeType": "ExpressionStatement",
                  "src": "10585:34:11"
                },
                {
                  "expression": {
                    "id": 5751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 5747,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5708,
                        "src": "10629:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 5749,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10637:4:11",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6917,
                      "src": "10629:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5750,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5359,
                      "src": "10644:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$6885_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "src": "10629:19:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                      "typeString": "struct IHyperdrive.Fees memory"
                    }
                  },
                  "id": 5752,
                  "nodeType": "ExpressionStatement",
                  "src": "10629:19:11"
                },
                {
                  "assignments": [
                    5754
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5754,
                      "mutability": "mutable",
                      "name": "_linkerCodeHash",
                      "nameLocation": "10666:15:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 5887,
                      "src": "10658:23:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 5753,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "10658:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5756,
                  "initialValue": {
                    "id": 5755,
                    "name": "linkerCodeHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5355,
                    "src": "10684:14:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10658:40:11"
                },
                {
                  "assignments": [
                    5758
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5758,
                      "mutability": "mutable",
                      "name": "_linkerFactory",
                      "nameLocation": "10716:14:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 5887,
                      "src": "10708:22:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 5757,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "10708:7:11",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5760,
                  "initialValue": {
                    "id": 5759,
                    "name": "linkerFactory",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5352,
                    "src": "10733:13:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10708:38:11"
                },
                {
                  "assignments": [
                    5762
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5762,
                      "mutability": "mutable",
                      "name": "dataProvider",
                      "nameLocation": "10764:12:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 5887,
                      "src": "10756:20:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 5761,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "10756:7:11",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5769,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 5764,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5708,
                        "src": "10811:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      {
                        "id": 5765,
                        "name": "_extraData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5711,
                        "src": "10832:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      {
                        "id": 5766,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5754,
                        "src": "10856:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 5767,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5758,
                        "src": "10885:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5763,
                      "name": "deployDataProvider",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5904,
                      "src": "10779:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_PoolConfig_$6924_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_address_$returns$_t_address_$",
                        "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes32[] memory,bytes32,address) returns (address)"
                      }
                    },
                    "id": 5768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10779:130:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10756:153:11"
                },
                {
                  "assignments": [
                    5772
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5772,
                      "mutability": "mutable",
                      "name": "hyperdrive",
                      "nameLocation": "10931:10:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 5887,
                      "src": "10919:22:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                        "typeString": "contract IHyperdrive"
                      },
                      "typeName": {
                        "id": 5771,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 5770,
                          "name": "IHyperdrive",
                          "nameLocations": [
                            "10919:11:11"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7103,
                          "src": "10919:11:11"
                        },
                        "referencedDeclaration": 7103,
                        "src": "10919:11:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5783,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 5776,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5708,
                            "src": "11012:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          {
                            "id": 5777,
                            "name": "dataProvider",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5762,
                            "src": "11037:12:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 5778,
                            "name": "_linkerCodeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5754,
                            "src": "11067:15:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 5779,
                            "name": "_linkerFactory",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5758,
                            "src": "11100:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 5780,
                            "name": "_extraData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5711,
                            "src": "11132:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "expression": {
                            "id": 5774,
                            "name": "hyperdriveDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5346,
                            "src": "10969:18:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7127",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          },
                          "id": 5775,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10988:6:11",
                          "memberName": "deploy",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7126,
                          "src": "10969:25:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$6924_memory_ptr_$_t_address_$_t_bytes32_$_t_address_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_address_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory,address,bytes32,address,bytes32[] memory) external returns (address)"
                          }
                        },
                        "id": 5781,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10969:187:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5773,
                      "name": "IHyperdrive",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7103,
                      "src": "10944:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                        "typeString": "type(contract IHyperdrive)"
                      }
                    },
                    "id": 5782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10944:222:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10919:247:11"
                },
                {
                  "expression": {
                    "id": 5791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 5784,
                        "name": "isOfficial",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5342,
                        "src": "11176:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5789,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 5787,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5772,
                            "src": "11195:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 5786,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11187:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5785,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11187:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5788,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11187:19:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "11176:31:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5790,
                      "name": "versionCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5337,
                      "src": "11210:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11176:48:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5792,
                  "nodeType": "ExpressionStatement",
                  "src": "11176:48:11"
                },
                {
                  "expression": {
                    "id": 5797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 5793,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5708,
                        "src": "11234:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 5795,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "11242:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6910,
                      "src": "11234:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5796,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5349,
                      "src": "11255:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11234:41:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5798,
                  "nodeType": "ExpressionStatement",
                  "src": "11234:41:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5800,
                        "name": "versionCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5337,
                        "src": "11312:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5803,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5772,
                            "src": "11348:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 5802,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11340:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5801,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11340:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5804,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11340:19:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5805,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5708,
                        "src": "11373:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      {
                        "id": 5806,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5758,
                        "src": "11394:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5807,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5754,
                        "src": "11422:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 5808,
                        "name": "_extraData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5711,
                        "src": "11451:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      ],
                      "id": 5799,
                      "name": "Deployed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5330,
                      "src": "11290:8:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_struct$_PoolConfig_$6924_memory_ptr_$_t_address_$_t_bytes32_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,address,struct IHyperdrive.PoolConfig memory,address,bytes32,bytes32[] memory)"
                      }
                    },
                    "id": 5809,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11290:181:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5810,
                  "nodeType": "EmitStatement",
                  "src": "11285:186:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5816,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "11573:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5817,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11577:6:11",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "11573:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5820,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "11605:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_HyperdriveFactory_$5915",
                              "typeString": "contract HyperdriveFactory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_HyperdriveFactory_$5915",
                              "typeString": "contract HyperdriveFactory"
                            }
                          ],
                          "id": 5819,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11597:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5818,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11597:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11597:13:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5822,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5713,
                        "src": "11624:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "id": 5811,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5708,
                          "src": "11529:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 5814,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11537:9:11",
                        "memberName": "baseToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6889,
                        "src": "11529:17:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6461",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5815,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11547:12:11",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6460,
                      "src": "11529:30:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11529:118:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5824,
                  "nodeType": "ExpressionStatement",
                  "src": "11529:118:11"
                },
                {
                  "condition": {
                    "id": 5838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11674:66:11",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 5830,
                              "name": "hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5772,
                              "src": "11709:10:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            ],
                            "id": 5829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11701:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 5828,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "11701:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11701:19:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 5834,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11727:7:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 5833,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11727:7:11",
                                  "typeDescriptions": {}
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                }
                              ],
                              "id": 5832,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "11722:4:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 5835,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11722:13:11",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_uint256",
                              "typeString": "type(uint256)"
                            }
                          },
                          "id": 5836,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11736:3:11",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "11722:17:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "expression": {
                            "id": 5825,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5708,
                            "src": "11675:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 5826,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11683:9:11",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6889,
                          "src": "11675:17:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 5827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11693:7:11",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6448,
                        "src": "11675:25:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 5837,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11675:65:11",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5845,
                  "nodeType": "IfStatement",
                  "src": "11657:154:11",
                  "trueBody": {
                    "id": 5844,
                    "nodeType": "Block",
                    "src": "11751:60:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5839,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "11772:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5841,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11784:14:11",
                            "memberName": "ApprovalFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6974,
                            "src": "11772:26:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5842,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11772:28:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5843,
                        "nodeType": "RevertStatement",
                        "src": "11765:35:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5849,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5713,
                        "src": "11842:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5850,
                        "name": "_apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5715,
                        "src": "11857:4:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 5851,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "11863:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11867:6:11",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "11863:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 5853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11875:4:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "id": 5846,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5772,
                        "src": "11820:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 5848,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11831:10:11",
                      "memberName": "initialize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7223,
                      "src": "11820:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_uint256_$_t_address_$_t_bool_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,address,bool) payable external returns (uint256)"
                      }
                    },
                    "id": 5854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11820:60:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5855,
                  "nodeType": "ExpressionStatement",
                  "src": "11820:60:11"
                },
                {
                  "body": {
                    "id": 5877,
                    "nodeType": "Block",
                    "src": "12060:130:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 5867,
                                "name": "_defaultPausers",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5372,
                                "src": "12095:15:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 5869,
                              "indexExpression": {
                                "id": 5868,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5857,
                                "src": "12111:1:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "12095:18:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 5870,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12115:4:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "expression": {
                              "id": 5864,
                              "name": "hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5772,
                              "src": "12074:10:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            },
                            "id": 5866,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12085:9:11",
                            "memberName": "setPauser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7205,
                            "src": "12074:20:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bool_$returns$__$",
                              "typeString": "function (address,bool) external"
                            }
                          },
                          "id": 5871,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12074:46:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5872,
                        "nodeType": "ExpressionStatement",
                        "src": "12074:46:11"
                      },
                      {
                        "id": 5876,
                        "nodeType": "UncheckedBlock",
                        "src": "12134:46:11",
                        "statements": [
                          {
                            "expression": {
                              "id": 5874,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "12162:3:11",
                              "subExpression": {
                                "id": 5873,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5857,
                                "src": "12164:1:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 5875,
                            "nodeType": "ExpressionStatement",
                            "src": "12162:3:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5860,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5857,
                      "src": "12030:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 5861,
                        "name": "_defaultPausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5372,
                        "src": "12034:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 5862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12050:6:11",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "12034:22:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12030:26:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5878,
                  "initializationExpression": {
                    "assignments": [
                      5857
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5857,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "12023:1:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 5878,
                        "src": "12015:9:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 5856,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12015:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 5859,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 5858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "12027:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "12015:13:11"
                  },
                  "nodeType": "ForStatement",
                  "src": "12010:180:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5882,
                        "name": "hyperdriveGovernance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5349,
                        "src": "12224:20:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 5879,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5772,
                        "src": "12199:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 5881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12210:13:11",
                      "memberName": "setGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7337,
                      "src": "12199:24:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 5883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12199:46:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5884,
                  "nodeType": "ExpressionStatement",
                  "src": "12199:46:11"
                },
                {
                  "expression": {
                    "id": 5885,
                    "name": "hyperdrive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5772,
                    "src": "12263:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "functionReturnParameters": 5720,
                  "id": 5886,
                  "nodeType": "Return",
                  "src": "12256:17:11"
                }
              ]
            },
            "documentation": {
              "id": 5705,
              "nodeType": "StructuredDocumentation",
              "src": "9241:541:11",
              "text": "@notice Deploys a Hyperdrive instance with the factory's configuration.\n @dev This function is declared as payable to allow payable overrides\n      to accept ether on initialization, but payability is not supported\n      by default.\n @param _config The configuration of the Hyperdrive pool.\n @param _extraData The extra data is used by some factories\n @param _contribution Base token to call init with\n @param _apr The apr to call init with\n @return The hyperdrive address deployed"
            },
            "functionSelector": "8927f4e9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployAndInitialize",
            "nameLocation": "9796:19:11",
            "parameters": {
              "id": 5716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5708,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "9855:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "9825:37:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 5707,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5706,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "9825:11:11",
                        "9837:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "9825:22:11"
                    },
                    "referencedDeclaration": 6924,
                    "src": "9825:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5711,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "9889:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "9872:27:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5709,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "9872:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 5710,
                    "nodeType": "ArrayTypeName",
                    "src": "9872:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5713,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "9917:13:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "9909:21:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9909:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5715,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "9948:4:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "9940:12:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9940:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9815:143:11"
            },
            "returnParameters": {
              "id": 5720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5719,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "9991:11:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 5718,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5717,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "9991:11:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "9991:11:11"
                    },
                    "referencedDeclaration": 7103,
                    "src": "9991:11:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9990:13:11"
            },
            "scope": 5915,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 5904,
            "nodeType": "FunctionDefinition",
            "src": "12966:218:11",
            "nodes": [],
            "documentation": {
              "id": 5889,
              "nodeType": "StructuredDocumentation",
              "src": "12481:480:11",
              "text": "@notice Deploys a Hyperdrive instance with the factory's configuration.\n @dev This should be overrided so that the data provider corresponding\n      to an individual instance is used.\n @param _config The configuration of the pool we are deploying\n @param _extraData The extra data from the pool deployment\n @param _linkerCodeHash The code hash from the multitoken deployer\n @param _linkerFactory The factory of the multitoken deployer"
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deployDataProvider",
            "nameLocation": "12975:18:11",
            "parameters": {
              "id": 5900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5892,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "13033:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5904,
                  "src": "13003:37:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 5891,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5890,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "13003:11:11",
                        "13015:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "13003:22:11"
                    },
                    "referencedDeclaration": 6924,
                    "src": "13003:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5895,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "13067:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5904,
                  "src": "13050:27:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5893,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "13050:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 5894,
                    "nodeType": "ArrayTypeName",
                    "src": "13050:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5897,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "13095:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5904,
                  "src": "13087:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5896,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13087:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5899,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "13128:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5904,
                  "src": "13120:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5898,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13120:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12993:155:11"
            },
            "returnParameters": {
              "id": 5903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5902,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5904,
                  "src": "13175:7:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5901,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13175:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13174:9:11"
            },
            "scope": 5915,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 5914,
            "nodeType": "FunctionDefinition",
            "src": "13269:109:11",
            "nodes": [],
            "body": {
              "id": 5913,
              "nodeType": "Block",
              "src": "13339:39:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5911,
                    "name": "_defaultPausers",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5372,
                    "src": "13356:15:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 5910,
                  "id": 5912,
                  "nodeType": "Return",
                  "src": "13349:22:11"
                }
              ]
            },
            "documentation": {
              "id": 5905,
              "nodeType": "StructuredDocumentation",
              "src": "13190:74:11",
              "text": "@notice Gets the default pausers.\n @return The default pausers."
            },
            "functionSelector": "7f7c5a7d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDefaultPausers",
            "nameLocation": "13278:17:11",
            "parameters": {
              "id": 5906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13295:2:11"
            },
            "returnParameters": {
              "id": 5910,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5909,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5914,
                  "src": "13321:16:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5907,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "13321:7:11",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5908,
                    "nodeType": "ArrayTypeName",
                    "src": "13321:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13320:18:11"
            },
            "scope": 5915,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "HyperdriveFactory",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 5280,
          "nodeType": "StructuredDocumentation",
          "src": "341:408:11",
          "text": "@author DELV\n @title HyperdriveFactory\n @notice Deploys hyperdrive instances and initializes them. It also holds a\n         registry of all deployed hyperdrive instances.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          5915
        ],
        "name": "HyperdriveFactory",
        "nameLocation": "767:17:11",
        "scope": 5916,
        "usedErrors": [
          6974,
          7047,
          7053,
          7055,
          7057
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 11
}