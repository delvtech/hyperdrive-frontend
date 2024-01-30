export const IHyperdriveDeployerCoordinator = 
{
  "abi": [
    {
      "inputs": [],
      "name": "DeploymentAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DeploymentDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveAlreadyDeployed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "IncompleteDeployment",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumTransactionAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTargetIndex",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MismatchedConfig",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MismatchedExtraData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TargetAlreadyDeployed",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_deploymentId",
          "type": "bytes32"
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
          "internalType": "struct IHyperdrive.PoolDeployConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "_extraData",
          "type": "bytes"
        },
        {
          "internalType": "bytes32",
          "name": "_salt",
          "type": "bytes32"
        }
      ],
      "name": "deploy",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_deploymentId",
          "type": "bytes32"
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
          "internalType": "struct IHyperdrive.PoolDeployConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "_extraData",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_targetIndex",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_salt",
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
      "stateMutability": "nonpayable",
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
    "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "c47e90c4",
    "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "7cc39092"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Functions ///\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":\"IHyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x07b5c27304387f7fc0ca70e0e93dd233810b50536b902eade119d7166a90a13e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0ca7fb16084139214fc7ac866cc0222ef2958b895298a944c442bdb99fcb2f65\",\"dweb:/ipfs/QmX44bxd2c82k32Z4fgnv2kJHZBVqVqwuFhUvrUsgBZ8Vc\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}",
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
          "name": "DeploymentAlreadyExists"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "DeploymentDoesNotExist"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveAlreadyDeployed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "IncompleteDeployment"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumTransactionAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTargetIndex"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MismatchedConfig"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MismatchedExtraData"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TargetAlreadyDeployed"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_deploymentId",
              "type": "bytes32"
            },
            {
              "internalType": "struct IHyperdrive.PoolDeployConfig",
              "name": "_config",
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
              ]
            },
            {
              "internalType": "bytes",
              "name": "_extraData",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "_salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deploy",
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
              "internalType": "bytes32",
              "name": "_deploymentId",
              "type": "bytes32"
            },
            {
              "internalType": "struct IHyperdrive.PoolDeployConfig",
              "name": "_config",
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
              ]
            },
            {
              "internalType": "bytes",
              "name": "_extraData",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "_targetIndex",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "_salt",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deployTarget",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
            "notice": "Functions ///"
          }
        },
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
        "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": "IHyperdriveDeployerCoordinator"
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
      "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
        "keccak256": "0x07b5c27304387f7fc0ca70e0e93dd233810b50536b902eade119d7166a90a13e",
        "urls": [
          "bzz-raw://0ca7fb16084139214fc7ac866cc0222ef2958b895298a944c442bdb99fcb2f65",
          "dweb:/ipfs/QmX44bxd2c82k32Z4fgnv2kJHZBVqVqwuFhUvrUsgBZ8Vc"
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
    "absolutePath": "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol",
    "id": 7674,
    "exportedSymbols": {
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveDeployerCoordinator": [
        7673
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2938:47",
    "nodes": [
      {
        "id": 7600,
        "nodeType": "PragmaDirective",
        "src": "39:23:47",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 7602,
        "nodeType": "ImportDirective",
        "src": "64:48:47",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7674,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7601,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "73:11:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7673,
        "nodeType": "ContractDefinition",
        "src": "114:2862:47",
        "nodes": [
          {
            "id": 7605,
            "nodeType": "ErrorDefinition",
            "src": "300:32:47",
            "nodes": [],
            "documentation": {
              "id": 7603,
              "nodeType": "StructuredDocumentation",
              "src": "181:114:47",
              "text": "@notice Thrown when a user attempts to deploy target0 the deployment has\n         already been created."
            },
            "errorSelector": "77c3669a",
            "name": "DeploymentAlreadyExists",
            "nameLocation": "306:23:47",
            "parameters": {
              "id": 7604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "329:2:47"
            }
          },
          {
            "id": 7608,
            "nodeType": "ErrorDefinition",
            "src": "496:31:47",
            "nodes": [],
            "documentation": {
              "id": 7606,
              "nodeType": "StructuredDocumentation",
              "src": "338:153:47",
              "text": "@notice Thrown when a user attempts to deploy a contract that requires\n         the deployment to be created and the deployment doesn't exist."
            },
            "errorSelector": "e62c7024",
            "name": "DeploymentDoesNotExist",
            "nameLocation": "502:22:47",
            "parameters": {
              "id": 7607,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "524:2:47"
            }
          },
          {
            "id": 7611,
            "nodeType": "ErrorDefinition",
            "src": "673:29:47",
            "nodes": [],
            "documentation": {
              "id": 7609,
              "nodeType": "StructuredDocumentation",
              "src": "533:135:47",
              "text": "@notice Thrown when a user attempts to deploy a Hyperdrive entrypoint\n         without first deploying the required targets."
            },
            "errorSelector": "e97cc2bf",
            "name": "IncompleteDeployment",
            "nameLocation": "679:20:47",
            "parameters": {
              "id": 7610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "699:2:47"
            }
          },
          {
            "id": 7614,
            "nodeType": "ErrorDefinition",
            "src": "836:34:47",
            "nodes": [],
            "documentation": {
              "id": 7612,
              "nodeType": "StructuredDocumentation",
              "src": "708:123:47",
              "text": "@notice Thrown when a user attempts to deploy a hyperdrive contract\n         after it has already been deployed."
            },
            "errorSelector": "2c95caeb",
            "name": "HyperdriveAlreadyDeployed",
            "nameLocation": "842:25:47",
            "parameters": {
              "id": 7613,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "867:2:47"
            }
          },
          {
            "id": 7617,
            "nodeType": "ErrorDefinition",
            "src": "947:34:47",
            "nodes": [],
            "documentation": {
              "id": 7615,
              "nodeType": "StructuredDocumentation",
              "src": "876:66:47",
              "text": "@notice Thrown when the checkpoint duration specified is zero."
            },
            "errorSelector": "5428734d",
            "name": "InvalidCheckpointDuration",
            "nameLocation": "953:25:47",
            "parameters": {
              "id": 7616,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "978:2:47"
            }
          },
          {
            "id": 7620,
            "nodeType": "ErrorDefinition",
            "src": "1122:26:47",
            "nodes": [],
            "documentation": {
              "id": 7618,
              "nodeType": "StructuredDocumentation",
              "src": "987:130:47",
              "text": "@notice Thrown when the curve fee, flat fee, governance LP fee, or\n         governance zombie fee is greater than 100%."
            },
            "errorSelector": "45ee5986",
            "name": "InvalidFeeAmounts",
            "nameLocation": "1128:17:47",
            "parameters": {
              "id": 7619,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:2:47"
            }
          },
          {
            "id": 7623,
            "nodeType": "ErrorDefinition",
            "src": "1402:36:47",
            "nodes": [],
            "documentation": {
              "id": 7621,
              "nodeType": "StructuredDocumentation",
              "src": "1154:243:47",
              "text": "@notice Thrown when the minimum share reserves is too small. The\n         absolute smallest allowable minimum share reserves is 1e3;\n         however, yield sources may require a larger minimum share\n         reserves."
            },
            "errorSelector": "49db44f5",
            "name": "InvalidMinimumShareReserves",
            "nameLocation": "1408:27:47",
            "parameters": {
              "id": 7622,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1435:2:47"
            }
          },
          {
            "id": 7626,
            "nodeType": "ErrorDefinition",
            "src": "1517:40:47",
            "nodes": [],
            "documentation": {
              "id": 7624,
              "nodeType": "StructuredDocumentation",
              "src": "1444:68:47",
              "text": "@notice Thrown when the minimum transaction amount is too small."
            },
            "errorSelector": "3192a446",
            "name": "InvalidMinimumTransactionAmount",
            "nameLocation": "1523:31:47",
            "parameters": {
              "id": 7625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1554:2:47"
            }
          },
          {
            "id": 7629,
            "nodeType": "ErrorDefinition",
            "src": "1718:32:47",
            "nodes": [],
            "documentation": {
              "id": 7627,
              "nodeType": "StructuredDocumentation",
              "src": "1563:150:47",
              "text": "@notice Thrown when the position duration is smaller than the checkpoint\n         duration or is not a multiple of the checkpoint duration."
            },
            "errorSelector": "4a7fff9e",
            "name": "InvalidPositionDuration",
            "nameLocation": "1724:23:47",
            "parameters": {
              "id": 7628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1747:2:47"
            }
          },
          {
            "id": 7632,
            "nodeType": "ErrorDefinition",
            "src": "1895:27:47",
            "nodes": [],
            "documentation": {
              "id": 7630,
              "nodeType": "StructuredDocumentation",
              "src": "1756:134:47",
              "text": "@notice Thrown when a user attempts to deploy a target using a target\n         index that is outside of the accepted range."
            },
            "errorSelector": "3b3f02b2",
            "name": "InvalidTargetIndex",
            "nameLocation": "1901:18:47",
            "parameters": {
              "id": 7631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1919:2:47"
            }
          },
          {
            "id": 7635,
            "nodeType": "ErrorDefinition",
            "src": "2114:25:47",
            "nodes": [],
            "documentation": {
              "id": 7633,
              "nodeType": "StructuredDocumentation",
              "src": "1928:181:47",
              "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with a config that doesn't match the deployment's\n         config hash."
            },
            "errorSelector": "332ee11f",
            "name": "MismatchedConfig",
            "nameLocation": "2120:16:47",
            "parameters": {
              "id": 7634,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2136:2:47"
            }
          },
          {
            "id": 7638,
            "nodeType": "ErrorDefinition",
            "src": "2337:28:47",
            "nodes": [],
            "documentation": {
              "id": 7636,
              "nodeType": "StructuredDocumentation",
              "src": "2145:187:47",
              "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with extra data that doesn't match the deployment's\n         extra data hash."
            },
            "errorSelector": "d1939688",
            "name": "MismatchedExtraData",
            "nameLocation": "2343:19:47",
            "parameters": {
              "id": 7637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2362:2:47"
            }
          },
          {
            "id": 7641,
            "nodeType": "ErrorDefinition",
            "src": "2495:30:47",
            "nodes": [],
            "documentation": {
              "id": 7639,
              "nodeType": "StructuredDocumentation",
              "src": "2371:119:47",
              "text": "@notice Thrown when a user attempts to deploy a target contract after\n         it has already been deployed."
            },
            "errorSelector": "0744b578",
            "name": "TargetAlreadyDeployed",
            "nameLocation": "2501:21:47",
            "parameters": {
              "id": 7640,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2522:2:47"
            }
          },
          {
            "id": 7656,
            "nodeType": "FunctionDefinition",
            "src": "2554:189:47",
            "nodes": [],
            "documentation": {
              "id": 7642,
              "nodeType": "StructuredDocumentation",
              "src": "2531:18:47",
              "text": "Functions ///"
            },
            "functionSelector": "c47e90c4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deploy",
            "nameLocation": "2563:6:47",
            "parameters": {
              "id": 7652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7644,
                  "mutability": "mutable",
                  "name": "_deploymentId",
                  "nameLocation": "2587:13:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "2579:21:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7643,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2579:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7647,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "2646:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "2610:43:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 7646,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7645,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "2610:11:47",
                        "2622:16:47"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "2610:28:47"
                    },
                    "referencedDeclaration": 7176,
                    "src": "2610:28:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7649,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "2676:10:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "2663:23:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 7648,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2663:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7651,
                  "mutability": "mutable",
                  "name": "_salt",
                  "nameLocation": "2704:5:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "2696:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2696:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2569:146:47"
            },
            "returnParameters": {
              "id": 7655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7654,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7656,
                  "src": "2734:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2734:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2733:9:47"
            },
            "scope": 7673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7672,
            "nodeType": "FunctionDefinition",
            "src": "2749:225:47",
            "nodes": [],
            "functionSelector": "7cc39092",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deployTarget",
            "nameLocation": "2758:12:47",
            "parameters": {
              "id": 7668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7658,
                  "mutability": "mutable",
                  "name": "_deploymentId",
                  "nameLocation": "2788:13:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7672,
                  "src": "2780:21:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7657,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2780:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7661,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "2847:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7672,
                  "src": "2811:43:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 7660,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 7659,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "2811:11:47",
                        "2823:16:47"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "2811:28:47"
                    },
                    "referencedDeclaration": 7176,
                    "src": "2811:28:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7663,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "2877:10:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7672,
                  "src": "2864:23:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 7662,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2864:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7665,
                  "mutability": "mutable",
                  "name": "_targetIndex",
                  "nameLocation": "2905:12:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7672,
                  "src": "2897:20:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7664,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2897:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7667,
                  "mutability": "mutable",
                  "name": "_salt",
                  "nameLocation": "2935:5:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 7672,
                  "src": "2927:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7666,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2927:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2770:176:47"
            },
            "returnParameters": {
              "id": 7671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7670,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7672,
                  "src": "2965:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2965:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2964:9:47"
            },
            "scope": 7673,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IHyperdriveDeployerCoordinator",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          7673
        ],
        "name": "IHyperdriveDeployerCoordinator",
        "nameLocation": "124:30:47",
        "scope": 7674,
        "usedErrors": [
          7605,
          7608,
          7611,
          7614,
          7617,
          7620,
          7623,
          7626,
          7629,
          7632,
          7635,
          7638,
          7641
        ],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 47
} as const;
