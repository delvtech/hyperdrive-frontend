export const HyperdriveFactory = 
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
        },
        {
          "internalType": "bytes",
          "name": "_initializeExtraData",
          "type": "bytes"
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
    "deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256,bytes)": "8ea20ee6",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxFeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NonPayableInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32[]\",\"name\":\"extraData\",\"type\":\"bytes32[]\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"ImplementationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"bytes32[]\",\"name\":\"_extraData\",\"type\":\"bytes32[]\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_initializeExtraData\",\"type\":\"bytes\"}],\"name\":\"deployAndInitialize\",\"outputs\":[{\"internalType\":\"contract IHyperdrive\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeCollector\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDefaultPausers\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"hyperdriveDeployer\",\"outputs\":[{\"internalType\":\"contract IHyperdriveDeployer\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"hyperdriveGovernance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"instance\",\"type\":\"address\"}],\"name\":\"isOfficial\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"version\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerFactory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_defaultPausers_\",\"type\":\"address[]\"}],\"name\":\"updateDefaultPausers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeCollector\",\"type\":\"address\"}],\"name\":\"updateFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"_fees\",\"type\":\"tuple\"}],\"name\":\"updateFees\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"updateHyperdriveGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IHyperdriveDeployer\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"updateImplementation\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"updateLinkerCodeHash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"}],\"name\":\"updateLinkerFactory\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"versionCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_deployer\":\"The contract which holds the bytecode and deploys new versions.\",\"_factoryConfig\":\"Configuration of the Hyperdrive Factory.\",\"_linkerCodeHash\":\"The hash of the linker contract's constructor code.\",\"_linkerFactory\":\"The address of the linker factory.\"}},\"deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256,bytes)\":{\"details\":\"This function is declared as payable to allow payable overrides      to accept ether on initialization, but payability is not supported      by default.\",\"params\":{\"_apr\":\"The apr to call init with\",\"_config\":\"The configuration of the Hyperdrive pool.\",\"_contribution\":\"Base token to call init with\",\"_extraData\":\"The extra data is used by some factories\",\"_initializeExtraData\":\"The extra data for the `initialize` call.\"},\"returns\":{\"_0\":\"The hyperdrive address deployed\"}},\"getDefaultPausers()\":{\"returns\":{\"_0\":\"The default pausers.\"}},\"updateDefaultPausers(address[])\":{\"params\":{\"_defaultPausers_\":\"The new list of default pausers.\"}},\"updateFeeCollector(address)\":{\"params\":{\"_feeCollector\":\"The new fee collector address.\"}},\"updateFees((uint256,uint256,uint256))\":{\"params\":{\"_fees\":\"The new defaults for the fee parameters.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}},\"updateHyperdriveGovernance(address)\":{\"params\":{\"_hyperdriveGovernance\":\"The new hyperdrive governance address.\"}},\"updateImplementation(address)\":{\"params\":{\"newDeployer\":\"The new deployment contract.\"}},\"updateLinkerCodeHash(bytes32)\":{\"params\":{\"_linkerCodeHash\":\"The new linker code hash.\"}},\"updateLinkerFactory(address)\":{\"params\":{\"_linkerFactory\":\"The new linker factory.\"}}},\"stateVariables\":{\"_defaultPausers\":{\"details\":\"The defaultPausers used when new instances are deployed.\"}},\"title\":\"HyperdriveFactory\",\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"events\":{\"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])\":{\"notice\":\"The event that is emitted when new instances are deployed.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveGovernanceUpdated(address)\":{\"notice\":\"Emitted when the Hyperdrive governance address is updated.\"},\"ImplementationUpdated(address)\":{\"notice\":\"Emitted when the Hyperdrive implementation is updated.\"},\"LinkerCodeHashUpdated(bytes32)\":{\"notice\":\"Emitted when the linker code hash is updated.\"},\"LinkerFactoryUpdated(address)\":{\"notice\":\"Emitted when the linker factory is updated.\"}},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the factory.\"},\"deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256,bytes)\":{\"notice\":\"Deploys a Hyperdrive instance with the factory's configuration.\"},\"feeCollector()\":{\"notice\":\"The fee collector used when new instances are deployed.\"},\"fees()\":{\"notice\":\"The fee parameters used when new instances are deployed.\"},\"getDefaultPausers()\":{\"notice\":\"Gets the default pausers.\"},\"governance()\":{\"notice\":\"The governance address that updates the factory's configuration.\"},\"hyperdriveDeployer()\":{\"notice\":\"The contract used to deploy new instances.\"},\"hyperdriveGovernance()\":{\"notice\":\"The governance address used when new instances are deployed.\"},\"isOfficial(address)\":{\"notice\":\"A mapping from deployed Hyperdrive instances to the version         of the deployer that deployed them.\"},\"linkerCodeHash()\":{\"notice\":\"The linker code hash used when new instances are deployed.\"},\"linkerFactory()\":{\"notice\":\"The linker factory used when new instances are deployed.\"},\"updateDefaultPausers(address[])\":{\"notice\":\"Allows governance to change the default pausers.\"},\"updateFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector address.\"},\"updateFees((uint256,uint256,uint256))\":{\"notice\":\"Allows governance to update the default fee schedule that will         be used in new deployments.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"updateHyperdriveGovernance(address)\":{\"notice\":\"Allows governance to change the hyperdrive governance address\"},\"updateImplementation(address)\":{\"notice\":\"Allows governance to update the deployer contract.\"},\"updateLinkerCodeHash(bytes32)\":{\"notice\":\"Allows governance to change the linker code hash. This allows         governance to update the implementation of the ERC20Forwarder.\"},\"updateLinkerFactory(address)\":{\"notice\":\"Allows governance to change the linker factory.\"},\"versionCounter()\":{\"notice\":\"The number of times the factory's deployer has been updated.\"}},\"notice\":\"Deploys hyperdrive instances and initializes them. It also holds a         registry of all deployed hyperdrive instances.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveFactory.sol\":\"HyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6\",\"dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/factory/HyperdriveFactory.sol\":{\"keccak256\":\"0x13e6d5551115a4a90e97bb36547093d8e1b7e13ce1ea88f398e105e5425c8f64\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6b07d242a96333f5c1e100b9c181dd5a0ef651b6f6faf294981fb35ad7510f85\",\"dweb:/ipfs/QmV4vfxMzFqFEYaJNgisWY4sdHSYuhnVkEW3Wn3ASoVdzN\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveDeployer.sol\":{\"keccak256\":\"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587\",\"dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0\",\"dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
            },
            {
              "internalType": "bytes",
              "name": "_initializeExtraData",
              "type": "bytes"
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
          "deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256,bytes)": {
            "details": "This function is declared as payable to allow payable overrides      to accept ether on initialization, but payability is not supported      by default.",
            "params": {
              "_apr": "The apr to call init with",
              "_config": "The configuration of the Hyperdrive pool.",
              "_contribution": "Base token to call init with",
              "_extraData": "The extra data is used by some factories",
              "_initializeExtraData": "The extra data for the `initialize` call."
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
          "deployAndInitialize((address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),bytes32[],uint256,uint256,bytes)": {
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
        "keccak256": "0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c",
        "urls": [
          "bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6",
          "dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG"
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
        "keccak256": "0x13e6d5551115a4a90e97bb36547093d8e1b7e13ce1ea88f398e105e5425c8f64",
        "urls": [
          "bzz-raw://6b07d242a96333f5c1e100b9c181dd5a0ef651b6f6faf294981fb35ad7510f85",
          "dweb:/ipfs/QmV4vfxMzFqFEYaJNgisWY4sdHSYuhnVkEW3Wn3ASoVdzN"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
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
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
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
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
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
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
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
        "keccak256": "0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed",
        "urls": [
          "bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6",
          "dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL"
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
        "keccak256": "0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f",
        "urls": [
          "bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe",
          "dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57",
        "urls": [
          "bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0",
          "dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs"
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
    "id": 6188,
    "exportedSymbols": {
      "FixedPointMath": [
        9066
      ],
      "HyperdriveDataProvider": [
        1927
      ],
      "HyperdriveFactory": [
        6187
      ],
      "IHyperdrive": [
        7431
      ],
      "IHyperdriveDeployer": [
        7455
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:13709:11",
    "nodes": [
      {
        "id": 5537,
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
        "id": 5539,
        "nodeType": "ImportDirective",
        "src": "64:71:11",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveDataProvider.sol",
        "file": "../HyperdriveDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6188,
        "sourceUnit": 1928,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5538,
              "name": "HyperdriveDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1927,
              "src": "73:22:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5541,
        "nodeType": "ImportDirective",
        "src": "136:60:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6188,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5540,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "145:11:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5543,
        "nodeType": "ImportDirective",
        "src": "197:76:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveDeployer.sol",
        "file": "../interfaces/IHyperdriveDeployer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6188,
        "sourceUnit": 7456,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5542,
              "name": "IHyperdriveDeployer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7455,
              "src": "206:19:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5545,
        "nodeType": "ImportDirective",
        "src": "274:65:11",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6188,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5544,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "283:14:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6187,
        "nodeType": "ContractDefinition",
        "src": "749:12998:11",
        "nodes": [
          {
            "id": 5549,
            "nodeType": "UsingForDirective",
            "src": "791:33:11",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5547,
              "name": "FixedPointMath",
              "nameLocations": [
                "797:14:11"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "797:14:11"
            },
            "typeName": {
              "id": 5548,
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
            "id": 5554,
            "nodeType": "EventDefinition",
            "src": "886:52:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5550,
              "nodeType": "StructuredDocumentation",
              "src": "830:51:11",
              "text": "@notice Emitted when governance is transferred."
            },
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "892:17:11",
            "parameters": {
              "id": 5553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5552,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "governance",
                  "nameLocation": "926:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5554,
                  "src": "910:26:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5551,
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
            "id": 5559,
            "nodeType": "EventDefinition",
            "src": "1015:57:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5555,
              "nodeType": "StructuredDocumentation",
              "src": "944:66:11",
              "text": "@notice Emitted when the Hyperdrive implementation is updated."
            },
            "eventSelector": "310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03",
            "name": "ImplementationUpdated",
            "nameLocation": "1021:21:11",
            "parameters": {
              "id": 5558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5557,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newDeployer",
                  "nameLocation": "1059:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5559,
                  "src": "1043:27:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5556,
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
            "id": 5564,
            "nodeType": "EventDefinition",
            "src": "1153:72:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5560,
              "nodeType": "StructuredDocumentation",
              "src": "1078:70:11",
              "text": "@notice Emitted when the Hyperdrive governance address is updated."
            },
            "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
            "name": "HyperdriveGovernanceUpdated",
            "nameLocation": "1159:27:11",
            "parameters": {
              "id": 5563,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5562,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "hyperdriveGovernance",
                  "nameLocation": "1203:20:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5564,
                  "src": "1187:36:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5561,
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
            "id": 5569,
            "nodeType": "EventDefinition",
            "src": "1290:59:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5565,
              "nodeType": "StructuredDocumentation",
              "src": "1231:54:11",
              "text": "@notice Emitted when the fee collector is updated."
            },
            "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
            "name": "FeeCollectorUpdated",
            "nameLocation": "1296:19:11",
            "parameters": {
              "id": 5568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5567,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newFeeCollector",
                  "nameLocation": "1332:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5569,
                  "src": "1316:31:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5566,
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
            "id": 5574,
            "nodeType": "EventDefinition",
            "src": "1415:61:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5570,
              "nodeType": "StructuredDocumentation",
              "src": "1355:55:11",
              "text": "@notice Emitted when the linker factory is updated."
            },
            "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
            "name": "LinkerFactoryUpdated",
            "nameLocation": "1421:20:11",
            "parameters": {
              "id": 5573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5572,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newLinkerFactory",
                  "nameLocation": "1458:16:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "1442:32:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5571,
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
            "id": 5579,
            "nodeType": "EventDefinition",
            "src": "1544:57:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5575,
              "nodeType": "StructuredDocumentation",
              "src": "1482:57:11",
              "text": "@notice Emitted when the linker code hash is updated."
            },
            "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
            "name": "LinkerCodeHashUpdated",
            "nameLocation": "1550:21:11",
            "parameters": {
              "id": 5578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5577,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newCodeHash",
                  "nameLocation": "1588:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5579,
                  "src": "1572:27:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5576,
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
            "id": 5596,
            "nodeType": "EventDefinition",
            "src": "1682:213:11",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 5580,
              "nodeType": "StructuredDocumentation",
              "src": "1607:70:11",
              "text": "@notice The event that is emitted when new instances are deployed."
            },
            "eventSelector": "c6f4867fb04085fae8d5bc8a6eb6bd83992441fe62b92acc3710f0cedf0e753a",
            "name": "Deployed",
            "nameLocation": "1688:8:11",
            "parameters": {
              "id": 5595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5582,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "1722:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "1706:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5581,
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
                  "id": 5584,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "1747:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "1739:18:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5583,
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
                  "id": 5587,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "config",
                  "nameLocation": "1790:6:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "1767:29:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 5586,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5585,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1767:11:11",
                        "1779:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "1767:22:11"
                    },
                    "referencedDeclaration": 7245,
                    "src": "1767:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5589,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "linkerFactory",
                  "nameLocation": "1814:13:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "1806:21:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5588,
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
                  "id": 5591,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "linkerCodeHash",
                  "nameLocation": "1845:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "1837:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5590,
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
                  "id": 5594,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "extraData",
                  "nameLocation": "1879:9:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5596,
                  "src": "1869:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5592,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1869:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 5593,
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
            "id": 5599,
            "nodeType": "VariableDeclaration",
            "src": "1982:25:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5597,
              "nodeType": "StructuredDocumentation",
              "src": "1901:76:11",
              "text": "@notice The governance address that updates the factory's configuration."
            },
            "functionSelector": "5aa6e675",
            "mutability": "mutable",
            "name": "governance",
            "nameLocation": "1997:10:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5598,
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
            "id": 5603,
            "nodeType": "VariableDeclaration",
            "src": "2091:33:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5600,
              "nodeType": "StructuredDocumentation",
              "src": "2014:72:11",
              "text": "@notice The number of times the factory's deployer has been updated."
            },
            "functionSelector": "dd6d30c1",
            "mutability": "mutable",
            "name": "versionCounter",
            "nameLocation": "2106:14:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5601,
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
              "id": 5602,
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
            "id": 5608,
            "nodeType": "VariableDeclaration",
            "src": "2259:62:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5604,
              "nodeType": "StructuredDocumentation",
              "src": "2131:123:11",
              "text": "@notice A mapping from deployed Hyperdrive instances to the version\n         of the deployer that deployed them."
            },
            "functionSelector": "77b81aac",
            "mutability": "mutable",
            "name": "isOfficial",
            "nameLocation": "2311:10:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 5607,
              "keyName": "instance",
              "keyNameLocation": "2275:8:11",
              "keyType": {
                "id": 5605,
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
                "id": 5606,
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
            "id": 5612,
            "nodeType": "VariableDeclaration",
            "src": "2387:45:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5609,
              "nodeType": "StructuredDocumentation",
              "src": "2328:54:11",
              "text": "@notice The contract used to deploy new instances."
            },
            "functionSelector": "03a5aa92",
            "mutability": "mutable",
            "name": "hyperdriveDeployer",
            "nameLocation": "2414:18:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
              "typeString": "contract IHyperdriveDeployer"
            },
            "typeName": {
              "id": 5611,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5610,
                "name": "IHyperdriveDeployer",
                "nameLocations": [
                  "2387:19:11"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7455,
                "src": "2387:19:11"
              },
              "referencedDeclaration": 7455,
              "src": "2387:19:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                "typeString": "contract IHyperdriveDeployer"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5615,
            "nodeType": "VariableDeclaration",
            "src": "2516:35:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5613,
              "nodeType": "StructuredDocumentation",
              "src": "2439:72:11",
              "text": "@notice The governance address used when new instances are deployed."
            },
            "functionSelector": "e3331555",
            "mutability": "mutable",
            "name": "hyperdriveGovernance",
            "nameLocation": "2531:20:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5614,
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
            "id": 5618,
            "nodeType": "VariableDeclaration",
            "src": "2631:28:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5616,
              "nodeType": "StructuredDocumentation",
              "src": "2558:68:11",
              "text": "@notice The linker factory used when new instances are deployed."
            },
            "functionSelector": "99623bb1",
            "mutability": "mutable",
            "name": "linkerFactory",
            "nameLocation": "2646:13:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5617,
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
            "id": 5621,
            "nodeType": "VariableDeclaration",
            "src": "2741:29:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5619,
              "nodeType": "StructuredDocumentation",
              "src": "2666:70:11",
              "text": "@notice The linker code hash used when new instances are deployed."
            },
            "functionSelector": "c905a4b5",
            "mutability": "mutable",
            "name": "linkerCodeHash",
            "nameLocation": "2756:14:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 5620,
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
            "id": 5625,
            "nodeType": "VariableDeclaration",
            "src": "2850:28:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5622,
              "nodeType": "StructuredDocumentation",
              "src": "2777:68:11",
              "text": "@notice The fee parameters used when new instances are deployed."
            },
            "functionSelector": "9af1d35a",
            "mutability": "mutable",
            "name": "fees",
            "nameLocation": "2874:4:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Fees_$7199_storage",
              "typeString": "struct IHyperdrive.Fees"
            },
            "typeName": {
              "id": 5624,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5623,
                "name": "IHyperdrive.Fees",
                "nameLocations": [
                  "2850:11:11",
                  "2862:4:11"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7199,
                "src": "2850:16:11"
              },
              "referencedDeclaration": 7199,
              "src": "2850:16:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                "typeString": "struct IHyperdrive.Fees"
              }
            },
            "visibility": "public"
          },
          {
            "id": 5628,
            "nodeType": "VariableDeclaration",
            "src": "2957:27:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5626,
              "nodeType": "StructuredDocumentation",
              "src": "2885:67:11",
              "text": "@notice The fee collector used when new instances are deployed."
            },
            "functionSelector": "c415b95c",
            "mutability": "mutable",
            "name": "feeCollector",
            "nameLocation": "2972:12:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5627,
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
            "id": 5630,
            "nodeType": "VariableDeclaration",
            "src": "3059:38:11",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "maxCurveFee",
            "nameLocation": "3086:11:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5629,
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
            "id": 5632,
            "nodeType": "VariableDeclaration",
            "src": "3171:37:11",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "maxFlatFee",
            "nameLocation": "3198:10:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5631,
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
            "id": 5634,
            "nodeType": "VariableDeclaration",
            "src": "3288:43:11",
            "nodes": [],
            "constant": false,
            "mutability": "immutable",
            "name": "maxGovernanceFee",
            "nameLocation": "3315:16:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5633,
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
            "id": 5638,
            "nodeType": "VariableDeclaration",
            "src": "3408:34:11",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5635,
              "nodeType": "StructuredDocumentation",
              "src": "3338:65:11",
              "text": "@dev The defaultPausers used when new instances are deployed."
            },
            "mutability": "mutable",
            "name": "_defaultPausers",
            "nameLocation": "3427:15:11",
            "scope": 6187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 5636,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3408:7:11",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 5637,
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
            "id": 5660,
            "nodeType": "StructDefinition",
            "src": "3449:677:11",
            "nodes": [],
            "canonicalName": "HyperdriveFactory.FactoryConfig",
            "members": [
              {
                "constant": false,
                "id": 5641,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "3545:10:11",
                "nodeType": "VariableDeclaration",
                "scope": 5660,
                "src": "3537:18:11",
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
                "id": 5644,
                "mutability": "mutable",
                "name": "hyperdriveGovernance",
                "nameLocation": "3646:20:11",
                "nodeType": "VariableDeclaration",
                "scope": 5660,
                "src": "3638:28:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 5643,
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
                "id": 5647,
                "mutability": "mutable",
                "name": "feeCollector",
                "nameLocation": "3774:12:11",
                "nodeType": "VariableDeclaration",
                "scope": 5660,
                "src": "3766:20:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 5646,
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
                "id": 5651,
                "mutability": "mutable",
                "name": "fees",
                "nameLocation": "3873:4:11",
                "nodeType": "VariableDeclaration",
                "scope": 5660,
                "src": "3856:21:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 5650,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 5649,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "3856:11:11",
                      "3868:4:11"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 7199,
                    "src": "3856:16:11"
                  },
                  "referencedDeclaration": 7199,
                  "src": "3856:16:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5655,
                "mutability": "mutable",
                "name": "maxFees",
                "nameLocation": "3996:7:11",
                "nodeType": "VariableDeclaration",
                "scope": 5660,
                "src": "3979:24:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 5654,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 5653,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "3979:11:11",
                      "3991:4:11"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 7199,
                    "src": "3979:16:11"
                  },
                  "referencedDeclaration": 7199,
                  "src": "3979:16:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5659,
                "mutability": "mutable",
                "name": "defaultPausers",
                "nameLocation": "4105:14:11",
                "nodeType": "VariableDeclaration",
                "scope": 5660,
                "src": "4095:24:11",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 5657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4095:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5658,
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
            "scope": 6187,
            "visibility": "public"
          },
          {
            "id": 5775,
            "nodeType": "FunctionDefinition",
            "src": "4481:1428:11",
            "nodes": [],
            "body": {
              "id": 5774,
              "nodeType": "Block",
              "src": "4648:1261:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5674,
                      "name": "maxCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5630,
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
                          "id": 5675,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5664,
                          "src": "4847:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 5676,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4862:7:11",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5655,
                        "src": "4847:22:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 5677,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4870:5:11",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7192,
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
                  "id": 5679,
                  "nodeType": "ExpressionStatement",
                  "src": "4833:42:11"
                },
                {
                  "expression": {
                    "id": 5684,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5680,
                      "name": "maxFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5632,
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
                          "id": 5681,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5664,
                          "src": "4898:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 5682,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4913:7:11",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5655,
                        "src": "4898:22:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 5683,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4921:4:11",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7195,
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
                  "id": 5685,
                  "nodeType": "ExpressionStatement",
                  "src": "4885:40:11"
                },
                {
                  "expression": {
                    "id": 5690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5686,
                      "name": "maxGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5634,
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
                          "id": 5687,
                          "name": "_factoryConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5664,
                          "src": "4954:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                            "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                          }
                        },
                        "id": 5688,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4969:7:11",
                        "memberName": "maxFees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5655,
                        "src": "4954:22:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 5689,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4977:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7198,
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
                  "id": 5691,
                  "nodeType": "ExpressionStatement",
                  "src": "4935:52:11"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 5700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5695,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5692,
                          "name": "maxCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5630,
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
                            "id": 5693,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9066,
                            "src": "5028:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 5694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5043:6:11",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8325,
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
                        "id": 5699,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5696,
                          "name": "maxFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5632,
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
                            "id": 5697,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9066,
                            "src": "5078:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 5698,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5093:6:11",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8325,
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
                      "id": 5704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 5701,
                        "name": "maxGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5634,
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
                          "id": 5702,
                          "name": "FixedPointMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9066,
                          "src": "5134:14:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                            "typeString": "type(library FixedPointMath)"
                          }
                        },
                        "id": 5703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "5149:6:11",
                        "memberName": "ONE_18",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8325,
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
                  "id": 5712,
                  "nodeType": "IfStatement",
                  "src": "4997:228:11",
                  "trueBody": {
                    "id": 5711,
                    "nodeType": "Block",
                    "src": "5166:59:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5706,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "5187:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5708,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5199:13:11",
                            "memberName": "MaxFeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7379,
                            "src": "5187:25:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5709,
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
                        "id": 5710,
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
                    "id": 5729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 5723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5717,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 5713,
                              "name": "_factoryConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5664,
                              "src": "5251:14:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                                "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                              }
                            },
                            "id": 5714,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5266:4:11",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5651,
                            "src": "5251:19:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 5715,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5271:5:11",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7192,
                          "src": "5251:25:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5716,
                          "name": "maxCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5630,
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
                        "id": 5722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 5718,
                              "name": "_factoryConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5664,
                              "src": "5306:14:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                                "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                              }
                            },
                            "id": 5719,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5321:4:11",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5651,
                            "src": "5306:19:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 5720,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5326:4:11",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7195,
                          "src": "5306:24:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5721,
                          "name": "maxFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5632,
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
                      "id": 5728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 5724,
                            "name": "_factoryConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5664,
                            "src": "5359:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                              "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                            }
                          },
                          "id": 5725,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5374:4:11",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5651,
                          "src": "5359:19:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 5726,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5379:10:11",
                        "memberName": "governance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7198,
                        "src": "5359:30:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 5727,
                        "name": "maxGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5634,
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
                  "id": 5736,
                  "nodeType": "IfStatement",
                  "src": "5234:241:11",
                  "trueBody": {
                    "id": 5735,
                    "nodeType": "Block",
                    "src": "5419:56:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5730,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "5440:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5732,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5452:10:11",
                            "memberName": "FeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7381,
                            "src": "5440:22:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5733,
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
                        "id": 5734,
                        "nodeType": "RevertStatement",
                        "src": "5433:31:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5737,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5625,
                      "src": "5484:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7199_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 5738,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5664,
                        "src": "5491:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5739,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5506:4:11",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5651,
                      "src": "5491:19:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "src": "5484:26:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7199_storage",
                      "typeString": "struct IHyperdrive.Fees storage ref"
                    }
                  },
                  "id": 5741,
                  "nodeType": "ExpressionStatement",
                  "src": "5484:26:11"
                },
                {
                  "expression": {
                    "id": 5745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5742,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5599,
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
                        "id": 5743,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5664,
                        "src": "5578:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5744,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5593:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5641,
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
                  "id": 5746,
                  "nodeType": "ExpressionStatement",
                  "src": "5565:38:11"
                },
                {
                  "expression": {
                    "id": 5750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5747,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5615,
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
                        "id": 5748,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5664,
                        "src": "5636:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5749,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5651:20:11",
                      "memberName": "hyperdriveGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5644,
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
                  "id": 5751,
                  "nodeType": "ExpressionStatement",
                  "src": "5613:58:11"
                },
                {
                  "expression": {
                    "id": 5755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5752,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5628,
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
                        "id": 5753,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5664,
                        "src": "5696:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5754,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5711:12:11",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5647,
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
                  "id": 5756,
                  "nodeType": "ExpressionStatement",
                  "src": "5681:42:11"
                },
                {
                  "expression": {
                    "id": 5760,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5757,
                      "name": "_defaultPausers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5638,
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
                        "id": 5758,
                        "name": "_factoryConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5664,
                        "src": "5751:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                          "typeString": "struct HyperdriveFactory.FactoryConfig memory"
                        }
                      },
                      "id": 5759,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5766:14:11",
                      "memberName": "defaultPausers",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5659,
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
                  "id": 5761,
                  "nodeType": "ExpressionStatement",
                  "src": "5733:47:11"
                },
                {
                  "expression": {
                    "id": 5764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5762,
                      "name": "hyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5612,
                      "src": "5790:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5763,
                      "name": "_deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5667,
                      "src": "5811:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "src": "5790:30:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "id": 5765,
                  "nodeType": "ExpressionStatement",
                  "src": "5790:30:11"
                },
                {
                  "expression": {
                    "id": 5768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5766,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5618,
                      "src": "5830:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5767,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5669,
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
                  "id": 5769,
                  "nodeType": "ExpressionStatement",
                  "src": "5830:30:11"
                },
                {
                  "expression": {
                    "id": 5772,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5770,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5621,
                      "src": "5870:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5771,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5671,
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
                  "id": 5773,
                  "nodeType": "ExpressionStatement",
                  "src": "5870:32:11"
                }
              ]
            },
            "documentation": {
              "id": 5661,
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
              "id": 5672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5664,
                  "mutability": "mutable",
                  "name": "_factoryConfig",
                  "nameLocation": "4523:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "4502:35:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FactoryConfig_$5660_memory_ptr",
                    "typeString": "struct HyperdriveFactory.FactoryConfig"
                  },
                  "typeName": {
                    "id": 5663,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5662,
                      "name": "FactoryConfig",
                      "nameLocations": [
                        "4502:13:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 5660,
                      "src": "4502:13:11"
                    },
                    "referencedDeclaration": 5660,
                    "src": "4502:13:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FactoryConfig_$5660_storage_ptr",
                      "typeString": "struct HyperdriveFactory.FactoryConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5667,
                  "mutability": "mutable",
                  "name": "_deployer",
                  "nameLocation": "4567:9:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "4547:29:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                    "typeString": "contract IHyperdriveDeployer"
                  },
                  "typeName": {
                    "id": 5666,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5665,
                      "name": "IHyperdriveDeployer",
                      "nameLocations": [
                        "4547:19:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7455,
                      "src": "4547:19:11"
                    },
                    "referencedDeclaration": 7455,
                    "src": "4547:19:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5669,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "4594:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "4586:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5668,
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
                  "id": 5671,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "4626:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "4618:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5670,
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
              "id": 5673,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4648:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5790,
            "nodeType": "ModifierDefinition",
            "src": "5978:117:11",
            "nodes": [],
            "body": {
              "id": 5789,
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
                    "id": 5781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 5778,
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
                      "id": 5779,
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
                      "id": 5780,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5599,
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
                  "id": 5787,
                  "nodeType": "IfStatement",
                  "src": "6014:63:11",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 5782,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "6051:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 5784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6063:12:11",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7373,
                        "src": "6051:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 5785,
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
                    "id": 5786,
                    "nodeType": "RevertStatement",
                    "src": "6044:33:11"
                  }
                },
                {
                  "id": 5788,
                  "nodeType": "PlaceholderStatement",
                  "src": "6087:1:11"
                }
              ]
            },
            "documentation": {
              "id": 5776,
              "nodeType": "StructuredDocumentation",
              "src": "5915:58:11",
              "text": "@dev Ensure that the sender is the governance address."
            },
            "name": "onlyGovernance",
            "nameLocation": "5987:14:11",
            "parameters": {
              "id": 5777,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6001:2:11"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5827,
            "nodeType": "FunctionDefinition",
            "src": "6224:396:11",
            "nodes": [],
            "body": {
              "id": 5826,
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
                        "id": 5808,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 5802,
                              "name": "newDeployer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5794,
                              "src": "6383:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                                "typeString": "contract IHyperdriveDeployer"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                                "typeString": "contract IHyperdriveDeployer"
                              }
                            ],
                            "id": 5801,
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
                              "id": 5800,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6375:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5803,
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
                              "id": 5806,
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
                            "id": 5805,
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
                              "id": 5804,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "6399:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5807,
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
                      "id": 5799,
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
                    "id": 5809,
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
                  "id": 5810,
                  "nodeType": "ExpressionStatement",
                  "src": "6367:43:11"
                },
                {
                  "expression": {
                    "id": 5813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5811,
                      "name": "hyperdriveDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5612,
                      "src": "6420:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5812,
                      "name": "newDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5794,
                      "src": "6441:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                        "typeString": "contract IHyperdriveDeployer"
                      }
                    },
                    "src": "6420:32:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "id": 5814,
                  "nodeType": "ExpressionStatement",
                  "src": "6420:32:11"
                },
                {
                  "id": 5818,
                  "nodeType": "UncheckedBlock",
                  "src": "6504:51:11",
                  "statements": [
                    {
                      "expression": {
                        "id": 5816,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "6528:16:11",
                        "subExpression": {
                          "id": 5815,
                          "name": "versionCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5603,
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
                      "id": 5817,
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
                            "id": 5822,
                            "name": "newDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5794,
                            "src": "6600:11:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          ],
                          "id": 5821,
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
                            "id": 5820,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6592:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5823,
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
                      "id": 5819,
                      "name": "ImplementationUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5559,
                      "src": "6570:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5824,
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
                  "id": 5825,
                  "nodeType": "EmitStatement",
                  "src": "6565:48:11"
                }
              ]
            },
            "documentation": {
              "id": 5791,
              "nodeType": "StructuredDocumentation",
              "src": "6101:118:11",
              "text": "@notice Allows governance to update the deployer contract.\n @param newDeployer The new deployment contract."
            },
            "functionSelector": "025b22bc",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5797,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5796,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "6310:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "6310:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "6310:14:11"
              }
            ],
            "name": "updateImplementation",
            "nameLocation": "6233:20:11",
            "parameters": {
              "id": 5795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5794,
                  "mutability": "mutable",
                  "name": "newDeployer",
                  "nameLocation": "6283:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5827,
                  "src": "6263:31:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                    "typeString": "contract IHyperdriveDeployer"
                  },
                  "typeName": {
                    "id": 5793,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5792,
                      "name": "IHyperdriveDeployer",
                      "nameLocations": [
                        "6263:19:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7455,
                      "src": "6263:19:11"
                    },
                    "referencedDeclaration": 7455,
                    "src": "6263:19:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                      "typeString": "contract IHyperdriveDeployer"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6253:47:11"
            },
            "returnParameters": {
              "id": 5798,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6325:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5844,
            "nodeType": "FunctionDefinition",
            "src": "6748:157:11",
            "nodes": [],
            "body": {
              "id": 5843,
              "nodeType": "Block",
              "src": "6819:86:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5835,
                      "name": "governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5599,
                      "src": "6829:10:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5836,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5830,
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
                  "id": 5838,
                  "nodeType": "ExpressionStatement",
                  "src": "6829:24:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5840,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5830,
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
                      "id": 5839,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5554,
                      "src": "6868:17:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5841,
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
                  "id": 5842,
                  "nodeType": "EmitStatement",
                  "src": "6863:35:11"
                }
              ]
            },
            "documentation": {
              "id": 5828,
              "nodeType": "StructuredDocumentation",
              "src": "6626:117:11",
              "text": "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address."
            },
            "functionSelector": "b2561263",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5833,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5832,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "6804:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "6804:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "6804:14:11"
              }
            ],
            "name": "updateGovernance",
            "nameLocation": "6757:16:11",
            "parameters": {
              "id": 5831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5830,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "6782:11:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5844,
                  "src": "6774:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5829,
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
              "id": 5834,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6819:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5861,
            "nodeType": "FunctionDefinition",
            "src": "7065:231:11",
            "nodes": [],
            "body": {
              "id": 5860,
              "nodeType": "Block",
              "src": "7170:126:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5852,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5615,
                      "src": "7180:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5853,
                      "name": "_hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5847,
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
                  "id": 5855,
                  "nodeType": "ExpressionStatement",
                  "src": "7180:44:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5857,
                        "name": "_hyperdriveGovernance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5847,
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
                      "id": 5856,
                      "name": "HyperdriveGovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5564,
                      "src": "7239:27:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5858,
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
                  "id": 5859,
                  "nodeType": "EmitStatement",
                  "src": "7234:55:11"
                }
              ]
            },
            "documentation": {
              "id": 5845,
              "nodeType": "StructuredDocumentation",
              "src": "6911:149:11",
              "text": "@notice Allows governance to change the hyperdrive governance address\n @param _hyperdriveGovernance The new hyperdrive governance address."
            },
            "functionSelector": "dd2b8fbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5850,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5849,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7155:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "7155:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "7155:14:11"
              }
            ],
            "name": "updateHyperdriveGovernance",
            "nameLocation": "7074:26:11",
            "parameters": {
              "id": 5848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5847,
                  "mutability": "mutable",
                  "name": "_hyperdriveGovernance",
                  "nameLocation": "7118:21:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5861,
                  "src": "7110:29:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5846,
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
              "id": 5851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7170:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5887,
            "nodeType": "FunctionDefinition",
            "src": "7420:236:11",
            "nodes": [],
            "body": {
              "id": 5886,
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
                        "id": 5875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5870,
                          "name": "_linkerFactory",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5864,
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
                              "id": 5873,
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
                            "id": 5872,
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
                              "id": 5871,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "7547:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5874,
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
                      "id": 5869,
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
                    "id": 5876,
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
                  "id": 5877,
                  "nodeType": "ExpressionStatement",
                  "src": "7521:37:11"
                },
                {
                  "expression": {
                    "id": 5880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5878,
                      "name": "linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5618,
                      "src": "7568:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5879,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5864,
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
                  "id": 5881,
                  "nodeType": "ExpressionStatement",
                  "src": "7568:30:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5883,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5864,
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
                      "id": 5882,
                      "name": "LinkerFactoryUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5574,
                      "src": "7613:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5884,
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
                  "id": 5885,
                  "nodeType": "EmitStatement",
                  "src": "7608:41:11"
                }
              ]
            },
            "documentation": {
              "id": 5862,
              "nodeType": "StructuredDocumentation",
              "src": "7302:113:11",
              "text": "@notice Allows governance to change the linker factory.\n @param _linkerFactory The new linker factory."
            },
            "functionSelector": "85229785",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5867,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5866,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7496:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "7496:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "7496:14:11"
              }
            ],
            "name": "updateLinkerFactory",
            "nameLocation": "7429:19:11",
            "parameters": {
              "id": 5865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5864,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "7466:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5887,
                  "src": "7458:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5863,
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
              "id": 5868,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7511:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5904,
            "nodeType": "FunctionDefinition",
            "src": "7876:195:11",
            "nodes": [],
            "body": {
              "id": 5903,
              "nodeType": "Block",
              "src": "7969:102:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5895,
                      "name": "linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5621,
                      "src": "7979:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5896,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5890,
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
                  "id": 5898,
                  "nodeType": "ExpressionStatement",
                  "src": "7979:32:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5900,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5890,
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
                      "id": 5899,
                      "name": "LinkerCodeHashUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5579,
                      "src": "8026:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 5901,
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
                  "id": 5902,
                  "nodeType": "EmitStatement",
                  "src": "8021:43:11"
                }
              ]
            },
            "documentation": {
              "id": 5888,
              "nodeType": "StructuredDocumentation",
              "src": "7662:209:11",
              "text": "@notice Allows governance to change the linker code hash. This allows\n         governance to update the implementation of the ERC20Forwarder.\n @param _linkerCodeHash The new linker code hash."
            },
            "functionSelector": "4fbfee77",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5893,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5892,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "7954:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "7954:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "7954:14:11"
              }
            ],
            "name": "updateLinkerCodeHash",
            "nameLocation": "7885:20:11",
            "parameters": {
              "id": 5891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5890,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "7923:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5904,
                  "src": "7915:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5889,
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
              "id": 5894,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7969:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5921,
            "nodeType": "FunctionDefinition",
            "src": "8208:169:11",
            "nodes": [],
            "body": {
              "id": 5920,
              "nodeType": "Block",
              "src": "8283:94:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5912,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5628,
                      "src": "8293:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5913,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5907,
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
                  "id": 5915,
                  "nodeType": "ExpressionStatement",
                  "src": "8293:28:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5917,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5907,
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
                      "id": 5916,
                      "name": "FeeCollectorUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5569,
                      "src": "8336:19:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5918,
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
                  "id": 5919,
                  "nodeType": "EmitStatement",
                  "src": "8331:39:11"
                }
              ]
            },
            "documentation": {
              "id": 5905,
              "nodeType": "StructuredDocumentation",
              "src": "8077:126:11",
              "text": "@notice Allows governance to change the fee collector address.\n @param _feeCollector The new fee collector address."
            },
            "functionSelector": "d2c35ce8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5910,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5909,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "8268:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "8268:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "8268:14:11"
              }
            ],
            "name": "updateFeeCollector",
            "nameLocation": "8217:18:11",
            "parameters": {
              "id": 5908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5907,
                  "mutability": "mutable",
                  "name": "_feeCollector",
                  "nameLocation": "8244:13:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "8236:21:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5906,
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
              "id": 5911,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8283:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5956,
            "nodeType": "FunctionDefinition",
            "src": "8568:328:11",
            "nodes": [],
            "body": {
              "id": 5955,
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
                    "id": 5943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 5938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5933,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 5930,
                            "name": "_fees",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5925,
                            "src": "8686:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$7199_calldata_ptr",
                              "typeString": "struct IHyperdrive.Fees calldata"
                            }
                          },
                          "id": 5931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8692:5:11",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7192,
                          "src": "8686:11:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5932,
                          "name": "maxCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5630,
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
                        "id": 5937,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 5934,
                            "name": "_fees",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5925,
                            "src": "8727:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$7199_calldata_ptr",
                              "typeString": "struct IHyperdrive.Fees calldata"
                            }
                          },
                          "id": 5935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8733:4:11",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7195,
                          "src": "8727:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5936,
                          "name": "maxFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5632,
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
                      "id": 5942,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 5939,
                          "name": "_fees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5925,
                          "src": "8766:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$7199_calldata_ptr",
                            "typeString": "struct IHyperdrive.Fees calldata"
                          }
                        },
                        "id": 5940,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8772:10:11",
                        "memberName": "governance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7198,
                        "src": "8766:16:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 5941,
                        "name": "maxGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5634,
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
                  "id": 5950,
                  "nodeType": "IfStatement",
                  "src": "8669:199:11",
                  "trueBody": {
                    "id": 5949,
                    "nodeType": "Block",
                    "src": "8812:56:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5944,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "8833:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5946,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8845:10:11",
                            "memberName": "FeeTooHigh",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7381,
                            "src": "8833:22:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5947,
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
                        "id": 5948,
                        "nodeType": "RevertStatement",
                        "src": "8826:31:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5951,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5625,
                      "src": "8877:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7199_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5952,
                      "name": "_fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5925,
                      "src": "8884:5:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7199_calldata_ptr",
                        "typeString": "struct IHyperdrive.Fees calldata"
                      }
                    },
                    "src": "8877:12:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7199_storage",
                      "typeString": "struct IHyperdrive.Fees storage ref"
                    }
                  },
                  "id": 5954,
                  "nodeType": "ExpressionStatement",
                  "src": "8877:12:11"
                }
              ]
            },
            "documentation": {
              "id": 5922,
              "nodeType": "StructuredDocumentation",
              "src": "8383:180:11",
              "text": "@notice Allows governance to update the default fee schedule that will\n         be used in new deployments.\n @param _fees The new defaults for the fee parameters."
            },
            "functionSelector": "7613b08c",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5928,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5927,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "8644:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "8644:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "8644:14:11"
              }
            ],
            "name": "updateFees",
            "nameLocation": "8577:10:11",
            "parameters": {
              "id": 5926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5925,
                  "mutability": "mutable",
                  "name": "_fees",
                  "nameLocation": "8623:5:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5956,
                  "src": "8597:31:11",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$7199_calldata_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  },
                  "typeName": {
                    "id": 5924,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5923,
                      "name": "IHyperdrive.Fees",
                      "nameLocations": [
                        "8597:11:11",
                        "8609:4:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7199,
                      "src": "8597:16:11"
                    },
                    "referencedDeclaration": 7199,
                    "src": "8597:16:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7199_storage_ptr",
                      "typeString": "struct IHyperdrive.Fees"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8587:47:11"
            },
            "returnParameters": {
              "id": 5929,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8659:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 5970,
            "nodeType": "FunctionDefinition",
            "src": "9032:203:11",
            "nodes": [],
            "body": {
              "id": 5969,
              "nodeType": "Block",
              "src": "9137:98:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5965,
                      "name": "_defaultPausers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5638,
                      "src": "9194:15:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5966,
                      "name": "_defaultPausers_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5960,
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
                  "id": 5968,
                  "nodeType": "ExpressionStatement",
                  "src": "9194:34:11"
                }
              ]
            },
            "documentation": {
              "id": 5957,
              "nodeType": "StructuredDocumentation",
              "src": "8902:125:11",
              "text": "@notice Allows governance to change the default pausers.\n @param _defaultPausers_ The new list of default pausers."
            },
            "functionSelector": "9af25262",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 5963,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 5962,
                  "name": "onlyGovernance",
                  "nameLocations": [
                    "9122:14:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5790,
                  "src": "9122:14:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "9122:14:11"
              }
            ],
            "name": "updateDefaultPausers",
            "nameLocation": "9041:20:11",
            "parameters": {
              "id": 5961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5960,
                  "mutability": "mutable",
                  "name": "_defaultPausers_",
                  "nameLocation": "9090:16:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 5970,
                  "src": "9071:35:11",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5958,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9071:7:11",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5959,
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
              "id": 5964,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9137:0:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6160,
            "nodeType": "FunctionDefinition",
            "src": "9865:2782:11",
            "nodes": [],
            "body": {
              "id": 6159,
              "nodeType": "Block",
              "src": "10186:2461:11",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 5989,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "10200:3:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10204:5:11",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "10200:9:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5991,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "10212:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "10200:13:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5999,
                  "nodeType": "IfStatement",
                  "src": "10196:89:11",
                  "trueBody": {
                    "id": 5998,
                    "nodeType": "Block",
                    "src": "10215:70:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5993,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "10236:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10248:24:11",
                            "memberName": "NonPayableInitialization",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7383,
                            "src": "10236:36:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5996,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10236:38:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5997,
                        "nodeType": "RevertStatement",
                        "src": "10229:45:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 6004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6000,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5974,
                        "src": "10722:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 6002,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10730:12:11",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7234,
                      "src": "10722:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6003,
                      "name": "feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5628,
                      "src": "10745:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10722:35:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6005,
                  "nodeType": "ExpressionStatement",
                  "src": "10722:35:11"
                },
                {
                  "expression": {
                    "id": 6013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6006,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5974,
                        "src": "10767:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 6008,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10775:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7231,
                      "src": "10767:18:11",
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
                          "id": 6011,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "10796:4:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_HyperdriveFactory_$6187",
                            "typeString": "contract HyperdriveFactory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_HyperdriveFactory_$6187",
                            "typeString": "contract HyperdriveFactory"
                          }
                        ],
                        "id": 6010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10788:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 6009,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10788:7:11",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 6012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10788:13:11",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10767:34:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6014,
                  "nodeType": "ExpressionStatement",
                  "src": "10767:34:11"
                },
                {
                  "expression": {
                    "id": 6019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6015,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5974,
                        "src": "10811:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 6017,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10819:4:11",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7238,
                      "src": "10811:12:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6018,
                      "name": "fees",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5625,
                      "src": "10826:4:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7199_storage",
                        "typeString": "struct IHyperdrive.Fees storage ref"
                      }
                    },
                    "src": "10811:19:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                      "typeString": "struct IHyperdrive.Fees memory"
                    }
                  },
                  "id": 6020,
                  "nodeType": "ExpressionStatement",
                  "src": "10811:19:11"
                },
                {
                  "assignments": [
                    6022
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6022,
                      "mutability": "mutable",
                      "name": "_linkerCodeHash",
                      "nameLocation": "10848:15:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 6159,
                      "src": "10840:23:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 6021,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "10840:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6024,
                  "initialValue": {
                    "id": 6023,
                    "name": "linkerCodeHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5621,
                    "src": "10866:14:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10840:40:11"
                },
                {
                  "assignments": [
                    6026
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6026,
                      "mutability": "mutable",
                      "name": "_linkerFactory",
                      "nameLocation": "10898:14:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 6159,
                      "src": "10890:22:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 6025,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "10890:7:11",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6028,
                  "initialValue": {
                    "id": 6027,
                    "name": "linkerFactory",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5618,
                    "src": "10915:13:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10890:38:11"
                },
                {
                  "assignments": [
                    6030
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6030,
                      "mutability": "mutable",
                      "name": "dataProvider",
                      "nameLocation": "10946:12:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 6159,
                      "src": "10938:20:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 6029,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "10938:7:11",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6037,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 6032,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5974,
                        "src": "10993:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      {
                        "id": 6033,
                        "name": "_extraData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5977,
                        "src": "11014:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      {
                        "id": 6034,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6022,
                        "src": "11038:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 6035,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6026,
                        "src": "11067:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
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
                      "id": 6031,
                      "name": "deployDataProvider",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6176,
                      "src": "10961:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_PoolConfig_$7245_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_address_$returns$_t_address_$",
                        "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes32[] memory,bytes32,address) returns (address)"
                      }
                    },
                    "id": 6036,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10961:130:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10938:153:11"
                },
                {
                  "assignments": [
                    6040
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6040,
                      "mutability": "mutable",
                      "name": "hyperdrive",
                      "nameLocation": "11113:10:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 6159,
                      "src": "11101:22:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                        "typeString": "contract IHyperdrive"
                      },
                      "typeName": {
                        "id": 6039,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 6038,
                          "name": "IHyperdrive",
                          "nameLocations": [
                            "11101:11:11"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7431,
                          "src": "11101:11:11"
                        },
                        "referencedDeclaration": 7431,
                        "src": "11101:11:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6051,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 6044,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5974,
                            "src": "11194:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          {
                            "id": 6045,
                            "name": "dataProvider",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6030,
                            "src": "11219:12:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 6046,
                            "name": "_linkerCodeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6022,
                            "src": "11249:15:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 6047,
                            "name": "_linkerFactory",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6026,
                            "src": "11282:14:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 6048,
                            "name": "_extraData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5977,
                            "src": "11314:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
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
                            "id": 6042,
                            "name": "hyperdriveDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5612,
                            "src": "11151:18:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdriveDeployer_$7455",
                              "typeString": "contract IHyperdriveDeployer"
                            }
                          },
                          "id": 6043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11170:6:11",
                          "memberName": "deploy",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7454,
                          "src": "11151:25:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7245_memory_ptr_$_t_address_$_t_bytes32_$_t_address_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_address_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory,address,bytes32,address,bytes32[] memory) external returns (address)"
                          }
                        },
                        "id": 6049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11151:187:11",
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
                      "id": 6041,
                      "name": "IHyperdrive",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7431,
                      "src": "11126:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                        "typeString": "type(contract IHyperdrive)"
                      }
                    },
                    "id": 6050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11126:222:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11101:247:11"
                },
                {
                  "expression": {
                    "id": 6059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 6052,
                        "name": "isOfficial",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5608,
                        "src": "11358:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6057,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 6055,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6040,
                            "src": "11377:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 6054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11369:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6053,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11369:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11369:19:11",
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
                      "src": "11358:31:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6058,
                      "name": "versionCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5603,
                      "src": "11392:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11358:48:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6060,
                  "nodeType": "ExpressionStatement",
                  "src": "11358:48:11"
                },
                {
                  "expression": {
                    "id": 6065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 6061,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5974,
                        "src": "11416:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 6063,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "11424:10:11",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7231,
                      "src": "11416:18:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6064,
                      "name": "hyperdriveGovernance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5615,
                      "src": "11437:20:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11416:41:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6066,
                  "nodeType": "ExpressionStatement",
                  "src": "11416:41:11"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 6068,
                        "name": "versionCounter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5603,
                        "src": "11494:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 6071,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6040,
                            "src": "11530:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 6070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11522:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6069,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11522:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6072,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11522:19:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6073,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5974,
                        "src": "11555:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      {
                        "id": 6074,
                        "name": "_linkerFactory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6026,
                        "src": "11576:14:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6075,
                        "name": "_linkerCodeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6022,
                        "src": "11604:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 6076,
                        "name": "_extraData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5977,
                        "src": "11633:10:11",
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
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
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
                      "id": 6067,
                      "name": "Deployed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5596,
                      "src": "11472:8:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_struct$_PoolConfig_$7245_memory_ptr_$_t_address_$_t_bytes32_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,address,struct IHyperdrive.PoolConfig memory,address,bytes32,bytes32[] memory)"
                      }
                    },
                    "id": 6077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11472:181:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6078,
                  "nodeType": "EmitStatement",
                  "src": "11467:186:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6084,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "11755:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6085,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11759:6:11",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "11755:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 6088,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "11787:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_HyperdriveFactory_$6187",
                              "typeString": "contract HyperdriveFactory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_HyperdriveFactory_$6187",
                              "typeString": "contract HyperdriveFactory"
                            }
                          ],
                          "id": 6087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11779:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6086,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11779:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11779:13:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6090,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5979,
                        "src": "11806:13:11",
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
                          "id": 6079,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5974,
                          "src": "11711:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 6082,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11719:9:11",
                        "memberName": "baseToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7210,
                        "src": "11711:17:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6731",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 6083,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11729:12:11",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6730,
                      "src": "11711:30:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 6091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11711:118:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6092,
                  "nodeType": "ExpressionStatement",
                  "src": "11711:118:11"
                },
                {
                  "condition": {
                    "id": 6106,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11856:66:11",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 6098,
                              "name": "hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6040,
                              "src": "11891:10:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                "typeString": "contract IHyperdrive"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                "typeString": "contract IHyperdrive"
                              }
                            ],
                            "id": 6097,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11883:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 6096,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "11883:7:11",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 6099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11883:19:11",
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
                                "id": 6102,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11909:7:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 6101,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11909:7:11",
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
                              "id": 6100,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "11904:4:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 6103,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11904:13:11",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_uint256",
                              "typeString": "type(uint256)"
                            }
                          },
                          "id": 6104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11918:3:11",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "11904:17:11",
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
                            "id": 6093,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5974,
                            "src": "11857:7:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 6094,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11865:9:11",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7210,
                          "src": "11857:17:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6731",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 6095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11875:7:11",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6718,
                        "src": "11857:25:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 6105,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11857:65:11",
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
                  "id": 6113,
                  "nodeType": "IfStatement",
                  "src": "11839:154:11",
                  "trueBody": {
                    "id": 6112,
                    "nodeType": "Block",
                    "src": "11933:60:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6107,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "11954:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11966:14:11",
                            "memberName": "ApprovalFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7298,
                            "src": "11954:26:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11954:28:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6111,
                        "nodeType": "RevertStatement",
                        "src": "11947:35:11"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6117,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5979,
                        "src": "12037:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6118,
                        "name": "_apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5981,
                        "src": "12064:4:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 6121,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "12133:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 6122,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12137:6:11",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "12133:10:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "hexValue": "74727565",
                            "id": 6123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12169:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "id": 6124,
                            "name": "_initializeExtraData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5983,
                            "src": "12202:20:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
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
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "expression": {
                            "id": 6119,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7431,
                            "src": "12082:11:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                              "typeString": "type(contract IHyperdrive)"
                            }
                          },
                          "id": 6120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12094:7:11",
                          "memberName": "Options",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7295,
                          "src": "12082:19:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Options_$7295_storage_ptr_$",
                            "typeString": "type(struct IHyperdrive.Options storage pointer)"
                          }
                        },
                        "id": 6125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "12120:11:11",
                          "12161:6:11",
                          "12191:9:11"
                        ],
                        "names": [
                          "destination",
                          "asBase",
                          "extraData"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "12082:155:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_memory_ptr",
                          "typeString": "struct IHyperdrive.Options memory"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$7295_memory_ptr",
                          "typeString": "struct IHyperdrive.Options memory"
                        }
                      ],
                      "expression": {
                        "id": 6114,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6040,
                        "src": "12002:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 6116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12013:10:11",
                      "memberName": "initialize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7552,
                      "src": "12002:21:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$7295_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)"
                      }
                    },
                    "id": 6126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12002:245:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6127,
                  "nodeType": "ExpressionStatement",
                  "src": "12002:245:11"
                },
                {
                  "body": {
                    "id": 6149,
                    "nodeType": "Block",
                    "src": "12427:130:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 6139,
                                "name": "_defaultPausers",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5638,
                                "src": "12462:15:11",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                  "typeString": "address[] storage ref"
                                }
                              },
                              "id": 6141,
                              "indexExpression": {
                                "id": 6140,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6129,
                                "src": "12478:1:11",
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
                              "src": "12462:18:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 6142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "12482:4:11",
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
                              "id": 6136,
                              "name": "hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6040,
                              "src": "12441:10:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                                "typeString": "contract IHyperdrive"
                              }
                            },
                            "id": 6138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12452:9:11",
                            "memberName": "setPauser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7535,
                            "src": "12441:20:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bool_$returns$__$",
                              "typeString": "function (address,bool) external"
                            }
                          },
                          "id": 6143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12441:46:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6144,
                        "nodeType": "ExpressionStatement",
                        "src": "12441:46:11"
                      },
                      {
                        "id": 6148,
                        "nodeType": "UncheckedBlock",
                        "src": "12501:46:11",
                        "statements": [
                          {
                            "expression": {
                              "id": 6146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "12529:3:11",
                              "subExpression": {
                                "id": 6145,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6129,
                                "src": "12531:1:11",
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
                            "id": 6147,
                            "nodeType": "ExpressionStatement",
                            "src": "12529:3:11"
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
                    "id": 6135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6132,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6129,
                      "src": "12397:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 6133,
                        "name": "_defaultPausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5638,
                        "src": "12401:15:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12417:6:11",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "12401:22:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12397:26:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6150,
                  "initializationExpression": {
                    "assignments": [
                      6129
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6129,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "12390:1:11",
                        "nodeType": "VariableDeclaration",
                        "scope": 6150,
                        "src": "12382:9:11",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6128,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12382:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 6131,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 6130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "12394:1:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "12382:13:11"
                  },
                  "nodeType": "ForStatement",
                  "src": "12377:180:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6154,
                        "name": "hyperdriveGovernance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5615,
                        "src": "12591:20:11",
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
                        "id": 6151,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6040,
                        "src": "12566:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 6153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12577:13:11",
                      "memberName": "setGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7659,
                      "src": "12566:24:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 6155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12566:46:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6156,
                  "nodeType": "ExpressionStatement",
                  "src": "12566:46:11"
                },
                {
                  "expression": {
                    "id": 6157,
                    "name": "hyperdrive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6040,
                    "src": "12630:10:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "functionReturnParameters": 5988,
                  "id": 6158,
                  "nodeType": "Return",
                  "src": "12623:17:11"
                }
              ]
            },
            "documentation": {
              "id": 5971,
              "nodeType": "StructuredDocumentation",
              "src": "9241:619:11",
              "text": "@notice Deploys a Hyperdrive instance with the factory's configuration.\n @dev This function is declared as payable to allow payable overrides\n      to accept ether on initialization, but payability is not supported\n      by default.\n @param _config The configuration of the Hyperdrive pool.\n @param _extraData The extra data is used by some factories\n @param _contribution Base token to call init with\n @param _apr The apr to call init with\n @param _initializeExtraData The extra data for the `initialize` call.\n @return The hyperdrive address deployed"
            },
            "functionSelector": "8ea20ee6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployAndInitialize",
            "nameLocation": "9874:19:11",
            "parameters": {
              "id": 5984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5974,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "9933:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6160,
                  "src": "9903:37:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 5973,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5972,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "9903:11:11",
                        "9915:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "9903:22:11"
                    },
                    "referencedDeclaration": 7245,
                    "src": "9903:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5977,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "10028:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6160,
                  "src": "10011:27:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5975,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "10011:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 5976,
                    "nodeType": "ArrayTypeName",
                    "src": "10011:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5979,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "10056:13:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6160,
                  "src": "10048:21:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5978,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10048:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5981,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "10087:4:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6160,
                  "src": "10079:12:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10079:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5983,
                  "mutability": "mutable",
                  "name": "_initializeExtraData",
                  "nameLocation": "10114:20:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6160,
                  "src": "10101:33:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5982,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "10101:5:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9893:247:11"
            },
            "returnParameters": {
              "id": 5988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5987,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6160,
                  "src": "10173:11:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 5986,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5985,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "10173:11:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7431,
                      "src": "10173:11:11"
                    },
                    "referencedDeclaration": 7431,
                    "src": "10173:11:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7431",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10172:13:11"
            },
            "scope": 6187,
            "stateMutability": "payable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 6176,
            "nodeType": "FunctionDefinition",
            "src": "13333:218:11",
            "nodes": [],
            "documentation": {
              "id": 6161,
              "nodeType": "StructuredDocumentation",
              "src": "12848:480:11",
              "text": "@notice Deploys a Hyperdrive instance with the factory's configuration.\n @dev This should be overrided so that the data provider corresponding\n      to an individual instance is used.\n @param _config The configuration of the pool we are deploying\n @param _extraData The extra data from the pool deployment\n @param _linkerCodeHash The code hash from the multitoken deployer\n @param _linkerFactory The factory of the multitoken deployer"
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deployDataProvider",
            "nameLocation": "13342:18:11",
            "parameters": {
              "id": 6172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6164,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "13400:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6176,
                  "src": "13370:37:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 6163,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6162,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "13370:11:11",
                        "13382:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "13370:22:11"
                    },
                    "referencedDeclaration": 7245,
                    "src": "13370:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6167,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "13434:10:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6176,
                  "src": "13417:27:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6165,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "13417:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 6166,
                    "nodeType": "ArrayTypeName",
                    "src": "13417:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6169,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "13462:15:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6176,
                  "src": "13454:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6168,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13454:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6171,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "13495:14:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 6176,
                  "src": "13487:22:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6170,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13487:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13360:155:11"
            },
            "returnParameters": {
              "id": 6175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6174,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6176,
                  "src": "13542:7:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13542:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13541:9:11"
            },
            "scope": 6187,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 6186,
            "nodeType": "FunctionDefinition",
            "src": "13636:109:11",
            "nodes": [],
            "body": {
              "id": 6185,
              "nodeType": "Block",
              "src": "13706:39:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 6183,
                    "name": "_defaultPausers",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5638,
                    "src": "13723:15:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 6182,
                  "id": 6184,
                  "nodeType": "Return",
                  "src": "13716:22:11"
                }
              ]
            },
            "documentation": {
              "id": 6177,
              "nodeType": "StructuredDocumentation",
              "src": "13557:74:11",
              "text": "@notice Gets the default pausers.\n @return The default pausers."
            },
            "functionSelector": "7f7c5a7d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDefaultPausers",
            "nameLocation": "13645:17:11",
            "parameters": {
              "id": 6178,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13662:2:11"
            },
            "returnParameters": {
              "id": 6182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6181,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6186,
                  "src": "13688:16:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6179,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "13688:7:11",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6180,
                    "nodeType": "ArrayTypeName",
                    "src": "13688:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13687:18:11"
            },
            "scope": 6187,
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
          "id": 5546,
          "nodeType": "StructuredDocumentation",
          "src": "341:408:11",
          "text": "@author DELV\n @title HyperdriveFactory\n @notice Deploys hyperdrive instances and initializes them. It also holds a\n         registry of all deployed hyperdrive instances.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6187
        ],
        "name": "HyperdriveFactory",
        "nameLocation": "767:17:11",
        "scope": 6188,
        "usedErrors": [
          7298,
          7373,
          7379,
          7381,
          7383
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 11
} as const;
