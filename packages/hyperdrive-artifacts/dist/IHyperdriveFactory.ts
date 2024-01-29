export const IHyperdriveFactory = 
{
  "abi": [
    {
      "inputs": [],
      "name": "DeployerCoordinatorAlreadyAdded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DeployerCoordinatorIndexMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DeployerCoordinatorNotAdded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EndIndexTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDurationResolution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDeployConfig",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDeployerCoordinator",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFees",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFixedAPR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidIndexes",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaxCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaxFees",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaxFixedAPR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaxPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaxTimeStretchAPR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinFees",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinFixedAPR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinTimeStretchAPR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTimeStretchAPR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFailed",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "newCheckpointDurationResolution",
          "type": "uint256"
        }
      ],
      "name": "CheckpointDurationResolutionUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "newDefaultPausers",
          "type": "address[]"
        }
      ],
      "name": "DefaultPausersUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "deployerCoordinator",
          "type": "address"
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
          "indexed": false,
          "internalType": "struct IHyperdrive.PoolDeployConfig",
          "name": "config",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "extraData",
          "type": "bytes"
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
          "name": "deployerCoordinator",
          "type": "address"
        }
      ],
      "name": "DeployerCoordinatorAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "deployerCoordinator",
          "type": "address"
        }
      ],
      "name": "DeployerCoordinatorRemoved",
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
          "name": "newLinkerCodeHash",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMaxCheckpointDuration",
          "type": "uint256"
        }
      ],
      "name": "MaxCheckpointDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
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
              "name": "governanceLP",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceZombie",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IHyperdrive.Fees",
          "name": "newMaxFees",
          "type": "tuple"
        }
      ],
      "name": "MaxFeesUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMaxFixedAPR",
          "type": "uint256"
        }
      ],
      "name": "MaxFixedAPRUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMaxPositionDuration",
          "type": "uint256"
        }
      ],
      "name": "MaxPositionDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMaxTimeStretchAPR",
          "type": "uint256"
        }
      ],
      "name": "MaxTimeStretchAPRUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinCheckpointDuration",
          "type": "uint256"
        }
      ],
      "name": "MinCheckpointDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
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
              "name": "governanceLP",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceZombie",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IHyperdrive.Fees",
          "name": "newMinFees",
          "type": "tuple"
        }
      ],
      "name": "MinFeesUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinFixedAPR",
          "type": "uint256"
        }
      ],
      "name": "MinFixedAPRUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinPositionDuration",
          "type": "uint256"
        }
      ],
      "name": "MinPositionDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinTimeStretchAPR",
          "type": "uint256"
        }
      ],
      "name": "MinTimeStretchAPRUpdated",
      "type": "event"
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"ImplementationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Errors ///\"}]},\"events\":{\"Deployed(address,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Events ///\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0x1a694017176d5a5857a4c7382779666f789e98d93ee87ebbb1f2bfaa4b3bcc8d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://19cd7d505c0a9a864f5cd16f05f8cf7c40883de57b273466d5ae41741bdeccea\",\"dweb:/ipfs/Qmf3g6qBTS7LQPAh3z86EnVdTAahYfmJ15xW4CFnDrMfvv\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "DeployerCoordinatorAlreadyAdded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "DeployerCoordinatorIndexMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "DeployerCoordinatorNotAdded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "EndIndexTooLarge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDurationResolution"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidDeployConfig"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidDeployerCoordinator"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFees"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFixedAPR"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidIndexes"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaxCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaxFees"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaxFixedAPR"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaxPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaxTimeStretchAPR"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinFees"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinFixedAPR"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinTimeStretchAPR"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimeStretchAPR"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFailed"
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
              "name": "newCheckpointDurationResolution",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CheckpointDurationResolutionUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "newDefaultPausers",
              "type": "address[]",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "DefaultPausersUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "deployerCoordinator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "hyperdrive",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "struct IHyperdrive.PoolDeployConfig",
              "name": "config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
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
                      "name": "governanceLP",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governanceZombie",
                      "type": "uint256"
                    }
                  ]
                }
              ],
              "indexed": false
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes",
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
              "name": "deployerCoordinator",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "DeployerCoordinatorAdded",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "deployerCoordinator",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "DeployerCoordinatorRemoved",
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
              "name": "newLinkerCodeHash",
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
              "internalType": "uint256",
              "name": "newMaxCheckpointDuration",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MaxCheckpointDurationUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Fees",
              "name": "newMaxFees",
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
                  "name": "governanceLP",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceZombie",
                  "type": "uint256"
                }
              ],
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MaxFeesUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMaxFixedAPR",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MaxFixedAPRUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMaxPositionDuration",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MaxPositionDurationUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMaxTimeStretchAPR",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MaxTimeStretchAPRUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMinCheckpointDuration",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MinCheckpointDurationUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Fees",
              "name": "newMinFees",
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
                  "name": "governanceLP",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceZombie",
                  "type": "uint256"
                }
              ],
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MinFeesUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMinFixedAPR",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MinFixedAPRUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMinPositionDuration",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MinPositionDurationUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newMinTimeStretchAPR",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MinTimeStretchAPRUpdated",
          "anonymous": false
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/interfaces/IHyperdriveFactory.sol": "IHyperdriveFactory"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveFactory.sol": {
        "keccak256": "0x1a694017176d5a5857a4c7382779666f789e98d93ee87ebbb1f2bfaa4b3bcc8d",
        "urls": [
          "bzz-raw://19cd7d505c0a9a864f5cd16f05f8cf7c40883de57b273466d5ae41741bdeccea",
          "dweb:/ipfs/Qmf3g6qBTS7LQPAh3z86EnVdTAahYfmJ15xW4CFnDrMfvv"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
        "urls": [
          "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
          "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveFactory.sol",
    "id": 7966,
    "exportedSymbols": {
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveFactory": [
        7965
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2597:49",
    "nodes": [
      {
        "id": 7816,
        "nodeType": "PragmaDirective",
        "src": "39:23:49",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 7818,
        "nodeType": "ImportDirective",
        "src": "64:48:49",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7966,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7817,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "73:11:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7965,
        "nodeType": "ContractDefinition",
        "src": "114:2521:49",
        "nodes": [
          {
            "id": 7830,
            "nodeType": "EventDefinition",
            "src": "169:164:49",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 7819,
              "nodeType": "StructuredDocumentation",
              "src": "149:15:49",
              "text": "Events ///"
            },
            "eventSelector": "2b2f18d6a5803b503bcb3d887ccd7a77aa7e1e644a4c99effef843bf3e307157",
            "name": "Deployed",
            "nameLocation": "175:8:49",
            "parameters": {
              "id": 7829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7821,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "deployerCoordinator",
                  "nameLocation": "209:19:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7830,
                  "src": "193:35:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:49",
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
                  "id": 7823,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "246:10:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7830,
                  "src": "238:18:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:49",
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
                  "id": 7826,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "config",
                  "nameLocation": "295:6:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7830,
                  "src": "266:35:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 7825,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7824,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "266:11:49",
                        "278:16:49"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "266:28:49"
                    },
                    "referencedDeclaration": 7176,
                    "src": "266:28:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7828,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "extraData",
                  "nameLocation": "317:9:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7830,
                  "src": "311:15:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 7827,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "311:5:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "183:149:49"
            }
          },
          {
            "id": 7834,
            "nodeType": "EventDefinition",
            "src": "339:68:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3",
            "name": "DeployerCoordinatorAdded",
            "nameLocation": "345:24:49",
            "parameters": {
              "id": 7833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7832,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "deployerCoordinator",
                  "nameLocation": "386:19:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7834,
                  "src": "370:35:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7831,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "370:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "369:37:49"
            }
          },
          {
            "id": 7838,
            "nodeType": "EventDefinition",
            "src": "413:70:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0",
            "name": "DeployerCoordinatorRemoved",
            "nameLocation": "419:26:49",
            "parameters": {
              "id": 7837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7836,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "deployerCoordinator",
                  "nameLocation": "462:19:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7838,
                  "src": "446:35:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7835,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "446:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "445:37:49"
            }
          },
          {
            "id": 7843,
            "nodeType": "EventDefinition",
            "src": "489:57:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38",
            "name": "DefaultPausersUpdated",
            "nameLocation": "495:21:49",
            "parameters": {
              "id": 7842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7841,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newDefaultPausers",
                  "nameLocation": "527:17:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7843,
                  "src": "517:27:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7839,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "517:7:49",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 7840,
                    "nodeType": "ArrayTypeName",
                    "src": "517:9:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "516:29:49"
            }
          },
          {
            "id": 7847,
            "nodeType": "EventDefinition",
            "src": "552:59:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
            "name": "FeeCollectorUpdated",
            "nameLocation": "558:19:49",
            "parameters": {
              "id": 7846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7845,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newFeeCollector",
                  "nameLocation": "594:15:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7847,
                  "src": "578:31:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7844,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "578:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "577:33:49"
            }
          },
          {
            "id": 7851,
            "nodeType": "EventDefinition",
            "src": "617:52:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "623:17:49",
            "parameters": {
              "id": 7850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7849,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "governance",
                  "nameLocation": "657:10:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7851,
                  "src": "641:26:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7848,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "640:28:49"
            }
          },
          {
            "id": 7855,
            "nodeType": "EventDefinition",
            "src": "675:72:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8",
            "name": "HyperdriveGovernanceUpdated",
            "nameLocation": "681:27:49",
            "parameters": {
              "id": 7854,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7853,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "hyperdriveGovernance",
                  "nameLocation": "725:20:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7855,
                  "src": "709:36:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7852,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "708:38:49"
            }
          },
          {
            "id": 7859,
            "nodeType": "EventDefinition",
            "src": "753:57:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03",
            "name": "ImplementationUpdated",
            "nameLocation": "759:21:49",
            "parameters": {
              "id": 7858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7857,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newDeployer",
                  "nameLocation": "797:11:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7859,
                  "src": "781:27:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:49"
            }
          },
          {
            "id": 7863,
            "nodeType": "EventDefinition",
            "src": "816:61:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418",
            "name": "LinkerFactoryUpdated",
            "nameLocation": "822:20:49",
            "parameters": {
              "id": 7862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7861,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newLinkerFactory",
                  "nameLocation": "859:16:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7863,
                  "src": "843:32:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7860,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:7:49",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "842:34:49"
            }
          },
          {
            "id": 7867,
            "nodeType": "EventDefinition",
            "src": "883:63:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0",
            "name": "LinkerCodeHashUpdated",
            "nameLocation": "889:21:49",
            "parameters": {
              "id": 7866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7865,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newLinkerCodeHash",
                  "nameLocation": "927:17:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7867,
                  "src": "911:33:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7864,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "911:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "910:35:49"
            }
          },
          {
            "id": 7871,
            "nodeType": "EventDefinition",
            "src": "952:97:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a",
            "name": "CheckpointDurationResolutionUpdated",
            "nameLocation": "958:35:49",
            "parameters": {
              "id": 7870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7869,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newCheckpointDurationResolution",
                  "nameLocation": "1011:31:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7871,
                  "src": "1003:39:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7868,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "993:55:49"
            }
          },
          {
            "id": 7875,
            "nodeType": "EventDefinition",
            "src": "1055:69:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2",
            "name": "MaxCheckpointDurationUpdated",
            "nameLocation": "1061:28:49",
            "parameters": {
              "id": 7874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7873,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMaxCheckpointDuration",
                  "nameLocation": "1098:24:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7875,
                  "src": "1090:32:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1090:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1089:34:49"
            }
          },
          {
            "id": 7879,
            "nodeType": "EventDefinition",
            "src": "1130:69:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631",
            "name": "MinCheckpointDurationUpdated",
            "nameLocation": "1136:28:49",
            "parameters": {
              "id": 7878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7877,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMinCheckpointDuration",
                  "nameLocation": "1173:24:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7879,
                  "src": "1165:32:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7876,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1165:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1164:34:49"
            }
          },
          {
            "id": 7883,
            "nodeType": "EventDefinition",
            "src": "1205:65:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b",
            "name": "MaxPositionDurationUpdated",
            "nameLocation": "1211:26:49",
            "parameters": {
              "id": 7882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7881,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMaxPositionDuration",
                  "nameLocation": "1246:22:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7883,
                  "src": "1238:30:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7880,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1237:32:49"
            }
          },
          {
            "id": 7887,
            "nodeType": "EventDefinition",
            "src": "1276:65:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178",
            "name": "MinPositionDurationUpdated",
            "nameLocation": "1282:26:49",
            "parameters": {
              "id": 7886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7885,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMinPositionDuration",
                  "nameLocation": "1317:22:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7887,
                  "src": "1309:30:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7884,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1308:32:49"
            }
          },
          {
            "id": 7891,
            "nodeType": "EventDefinition",
            "src": "1347:49:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978",
            "name": "MaxFixedAPRUpdated",
            "nameLocation": "1353:18:49",
            "parameters": {
              "id": 7890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7889,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMaxFixedAPR",
                  "nameLocation": "1380:14:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7891,
                  "src": "1372:22:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1372:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1371:24:49"
            }
          },
          {
            "id": 7895,
            "nodeType": "EventDefinition",
            "src": "1402:49:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191",
            "name": "MinFixedAPRUpdated",
            "nameLocation": "1408:18:49",
            "parameters": {
              "id": 7894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7893,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMinFixedAPR",
                  "nameLocation": "1435:14:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7895,
                  "src": "1427:22:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7892,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1427:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1426:24:49"
            }
          },
          {
            "id": 7899,
            "nodeType": "EventDefinition",
            "src": "1457:61:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e",
            "name": "MaxTimeStretchAPRUpdated",
            "nameLocation": "1463:24:49",
            "parameters": {
              "id": 7898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7897,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMaxTimeStretchAPR",
                  "nameLocation": "1496:20:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7899,
                  "src": "1488:28:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7896,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1488:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1487:30:49"
            }
          },
          {
            "id": 7903,
            "nodeType": "EventDefinition",
            "src": "1524:61:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46",
            "name": "MinTimeStretchAPRUpdated",
            "nameLocation": "1530:24:49",
            "parameters": {
              "id": 7902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7901,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMinTimeStretchAPR",
                  "nameLocation": "1563:20:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7903,
                  "src": "1555:28:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7900,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1555:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1554:30:49"
            }
          },
          {
            "id": 7908,
            "nodeType": "EventDefinition",
            "src": "1591:50:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7",
            "name": "MaxFeesUpdated",
            "nameLocation": "1597:14:49",
            "parameters": {
              "id": 7907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7906,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMaxFees",
                  "nameLocation": "1629:10:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7908,
                  "src": "1612:27:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  },
                  "typeName": {
                    "id": 7905,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7904,
                      "name": "IHyperdrive.Fees",
                      "nameLocations": [
                        "1612:11:49",
                        "1624:4:49"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7140,
                      "src": "1612:16:49"
                    },
                    "referencedDeclaration": 7140,
                    "src": "1612:16:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7140_storage_ptr",
                      "typeString": "struct IHyperdrive.Fees"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1611:29:49"
            }
          },
          {
            "id": 7913,
            "nodeType": "EventDefinition",
            "src": "1647:50:49",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421",
            "name": "MinFeesUpdated",
            "nameLocation": "1653:14:49",
            "parameters": {
              "id": 7912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7911,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newMinFees",
                  "nameLocation": "1685:10:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 7913,
                  "src": "1668:27:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  },
                  "typeName": {
                    "id": 7910,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7909,
                      "name": "IHyperdrive.Fees",
                      "nameLocations": [
                        "1668:11:49",
                        "1680:4:49"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7140,
                      "src": "1668:16:49"
                    },
                    "referencedDeclaration": 7140,
                    "src": "1668:16:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7140_storage_ptr",
                      "typeString": "struct IHyperdrive.Fees"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1667:29:49"
            }
          },
          {
            "id": 7916,
            "nodeType": "ErrorDefinition",
            "src": "1723:40:49",
            "nodes": [],
            "documentation": {
              "id": 7914,
              "nodeType": "StructuredDocumentation",
              "src": "1703:15:49",
              "text": "Errors ///"
            },
            "errorSelector": "bd34634f",
            "name": "DeployerCoordinatorAlreadyAdded",
            "nameLocation": "1729:31:49",
            "parameters": {
              "id": 7915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1760:2:49"
            }
          },
          {
            "id": 7918,
            "nodeType": "ErrorDefinition",
            "src": "1769:36:49",
            "nodes": [],
            "errorSelector": "4bf121ab",
            "name": "DeployerCoordinatorNotAdded",
            "nameLocation": "1775:27:49",
            "parameters": {
              "id": 7917,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1802:2:49"
            }
          },
          {
            "id": 7920,
            "nodeType": "ErrorDefinition",
            "src": "1811:41:49",
            "nodes": [],
            "errorSelector": "3c9c032c",
            "name": "DeployerCoordinatorIndexMismatch",
            "nameLocation": "1817:32:49",
            "parameters": {
              "id": 7919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1849:2:49"
            }
          },
          {
            "id": 7922,
            "nodeType": "ErrorDefinition",
            "src": "1858:25:49",
            "nodes": [],
            "errorSelector": "e0f7becb",
            "name": "EndIndexTooLarge",
            "nameLocation": "1864:16:49",
            "parameters": {
              "id": 7921,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1880:2:49"
            }
          },
          {
            "id": 7924,
            "nodeType": "ErrorDefinition",
            "src": "1889:34:49",
            "nodes": [],
            "errorSelector": "5428734d",
            "name": "InvalidCheckpointDuration",
            "nameLocation": "1895:25:49",
            "parameters": {
              "id": 7923,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1920:2:49"
            }
          },
          {
            "id": 7926,
            "nodeType": "ErrorDefinition",
            "src": "1929:44:49",
            "nodes": [],
            "errorSelector": "8dbae0a8",
            "name": "InvalidCheckpointDurationResolution",
            "nameLocation": "1935:35:49",
            "parameters": {
              "id": 7925,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1970:2:49"
            }
          },
          {
            "id": 7928,
            "nodeType": "ErrorDefinition",
            "src": "1979:28:49",
            "nodes": [],
            "errorSelector": "e8c02dd7",
            "name": "InvalidDeployConfig",
            "nameLocation": "1985:19:49",
            "parameters": {
              "id": 7927,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2004:2:49"
            }
          },
          {
            "id": 7930,
            "nodeType": "ErrorDefinition",
            "src": "2013:35:49",
            "nodes": [],
            "errorSelector": "6e623f0f",
            "name": "InvalidDeployerCoordinator",
            "nameLocation": "2019:26:49",
            "parameters": {
              "id": 7929,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2045:2:49"
            }
          },
          {
            "id": 7932,
            "nodeType": "ErrorDefinition",
            "src": "2054:20:49",
            "nodes": [],
            "errorSelector": "2d8768f9",
            "name": "InvalidFees",
            "nameLocation": "2060:11:49",
            "parameters": {
              "id": 7931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2071:2:49"
            }
          },
          {
            "id": 7934,
            "nodeType": "ErrorDefinition",
            "src": "2080:23:49",
            "nodes": [],
            "errorSelector": "764e6b56",
            "name": "InvalidIndexes",
            "nameLocation": "2086:14:49",
            "parameters": {
              "id": 7933,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2100:2:49"
            }
          },
          {
            "id": 7936,
            "nodeType": "ErrorDefinition",
            "src": "2109:23:49",
            "nodes": [],
            "errorSelector": "2c20e3f6",
            "name": "InvalidMaxFees",
            "nameLocation": "2115:14:49",
            "parameters": {
              "id": 7935,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2129:2:49"
            }
          },
          {
            "id": 7938,
            "nodeType": "ErrorDefinition",
            "src": "2138:23:49",
            "nodes": [],
            "errorSelector": "15b05a8f",
            "name": "InvalidMinFees",
            "nameLocation": "2144:14:49",
            "parameters": {
              "id": 7937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2158:2:49"
            }
          },
          {
            "id": 7940,
            "nodeType": "ErrorDefinition",
            "src": "2167:37:49",
            "nodes": [],
            "errorSelector": "f9c0959d",
            "name": "InvalidMaxCheckpointDuration",
            "nameLocation": "2173:28:49",
            "parameters": {
              "id": 7939,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2201:2:49"
            }
          },
          {
            "id": 7942,
            "nodeType": "ErrorDefinition",
            "src": "2210:37:49",
            "nodes": [],
            "errorSelector": "0433acc6",
            "name": "InvalidMinCheckpointDuration",
            "nameLocation": "2216:28:49",
            "parameters": {
              "id": 7941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2244:2:49"
            }
          },
          {
            "id": 7944,
            "nodeType": "ErrorDefinition",
            "src": "2253:35:49",
            "nodes": [],
            "errorSelector": "cfb699cb",
            "name": "InvalidMaxPositionDuration",
            "nameLocation": "2259:26:49",
            "parameters": {
              "id": 7943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2285:2:49"
            }
          },
          {
            "id": 7946,
            "nodeType": "ErrorDefinition",
            "src": "2294:35:49",
            "nodes": [],
            "errorSelector": "600f5a02",
            "name": "InvalidMinPositionDuration",
            "nameLocation": "2300:26:49",
            "parameters": {
              "id": 7945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2326:2:49"
            }
          },
          {
            "id": 7948,
            "nodeType": "ErrorDefinition",
            "src": "2335:32:49",
            "nodes": [],
            "errorSelector": "4a7fff9e",
            "name": "InvalidPositionDuration",
            "nameLocation": "2341:23:49",
            "parameters": {
              "id": 7947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2364:2:49"
            }
          },
          {
            "id": 7950,
            "nodeType": "ErrorDefinition",
            "src": "2373:27:49",
            "nodes": [],
            "errorSelector": "673edec0",
            "name": "InvalidMaxFixedAPR",
            "nameLocation": "2379:18:49",
            "parameters": {
              "id": 7949,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2397:2:49"
            }
          },
          {
            "id": 7952,
            "nodeType": "ErrorDefinition",
            "src": "2406:27:49",
            "nodes": [],
            "errorSelector": "1670f797",
            "name": "InvalidMinFixedAPR",
            "nameLocation": "2412:18:49",
            "parameters": {
              "id": 7951,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2430:2:49"
            }
          },
          {
            "id": 7954,
            "nodeType": "ErrorDefinition",
            "src": "2439:24:49",
            "nodes": [],
            "errorSelector": "30554de1",
            "name": "InvalidFixedAPR",
            "nameLocation": "2445:15:49",
            "parameters": {
              "id": 7953,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2460:2:49"
            }
          },
          {
            "id": 7956,
            "nodeType": "ErrorDefinition",
            "src": "2469:33:49",
            "nodes": [],
            "errorSelector": "a35539d0",
            "name": "InvalidMaxTimeStretchAPR",
            "nameLocation": "2475:24:49",
            "parameters": {
              "id": 7955,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2499:2:49"
            }
          },
          {
            "id": 7958,
            "nodeType": "ErrorDefinition",
            "src": "2508:33:49",
            "nodes": [],
            "errorSelector": "5a8f6557",
            "name": "InvalidMinTimeStretchAPR",
            "nameLocation": "2514:24:49",
            "parameters": {
              "id": 7957,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2538:2:49"
            }
          },
          {
            "id": 7960,
            "nodeType": "ErrorDefinition",
            "src": "2547:30:49",
            "nodes": [],
            "errorSelector": "83ebdfb7",
            "name": "InvalidTimeStretchAPR",
            "nameLocation": "2553:21:49",
            "parameters": {
              "id": 7959,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2574:2:49"
            }
          },
          {
            "id": 7962,
            "nodeType": "ErrorDefinition",
            "src": "2583:23:49",
            "nodes": [],
            "errorSelector": "90b8ec18",
            "name": "TransferFailed",
            "nameLocation": "2589:14:49",
            "parameters": {
              "id": 7961,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2603:2:49"
            }
          },
          {
            "id": 7964,
            "nodeType": "ErrorDefinition",
            "src": "2612:21:49",
            "nodes": [],
            "errorSelector": "82b42900",
            "name": "Unauthorized",
            "nameLocation": "2618:12:49",
            "parameters": {
              "id": 7963,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2630:2:49"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IHyperdriveFactory",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          7965
        ],
        "name": "IHyperdriveFactory",
        "nameLocation": "124:18:49",
        "scope": 7966,
        "usedErrors": [
          7916,
          7918,
          7920,
          7922,
          7924,
          7926,
          7928,
          7930,
          7932,
          7934,
          7936,
          7938,
          7940,
          7942,
          7944,
          7946,
          7948,
          7950,
          7952,
          7954,
          7956,
          7958,
          7960,
          7962,
          7964
        ],
        "usedEvents": [
          7830,
          7834,
          7838,
          7843,
          7847,
          7851,
          7855,
          7859,
          7863,
          7867,
          7871,
          7875,
          7879,
          7883,
          7887,
          7891,
          7895,
          7899,
          7903,
          7908,
          7913
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 49
} as const;
