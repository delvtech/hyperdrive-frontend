export const HyperdriveDeployerCoordinator = 
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
      "inputs": [],
      "name": "coreDeployer",
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
          "name": "_deployConfig",
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
          "name": "_deployConfig",
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
          "name": "target",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_deployer",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_deploymentId",
          "type": "bytes32"
        }
      ],
      "name": "deployments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "configHash",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "extraDataHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "hyperdrive",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target1",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target2",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target3",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target4",
              "type": "address"
            }
          ],
          "internalType": "struct HyperdriveDeployerCoordinator.Deployment",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target0Deployer",
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
      "name": "target1Deployer",
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
      "name": "target2Deployer",
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
      "name": "target3Deployer",
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
      "name": "target4Deployer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
    "coreDeployer()": "c83e1f51",
    "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "c47e90c4",
    "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "7cc39092",
    "deployments(address,bytes32)": "20503b3f",
    "target0Deployer()": "ab71905f",
    "target1Deployer()": "a085fa30",
    "target2Deployer()": "b6cb1118",
    "target3Deployer()": "aa8cd6c4",
    "target4Deployer()": "966ecd1c"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed ERC4626Hyperdrive Instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xd66a53192300bd9ea8bec7161b75e261ec7602da46aa0335e58c73796ac9d8b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2f42ba33be4605580eaa2d1409b651751c898fe06d1ea256778e1c267d5f324e\",\"dweb:/ipfs/QmWL1Adbkk6xBzbGCdcJsLwR4e1AEMDKidzFKE6yo2AdSb\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0xa2c8fb3fbe929450758642a88fe1076e64c480ca7583d5f10f9a916a4dfbb3fb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://edd0a39abeedf46c20295fae53d7b41a21b6ca88dbf5a9ace0075cfb37ea2c1a\",\"dweb:/ipfs/QmedBMesHL8VfhThvdzCTMFwZA1TATz8K2R1VhHsM2CtfK\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x07b5c27304387f7fc0ca70e0e93dd233810b50536b902eade119d7166a90a13e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0ca7fb16084139214fc7ac866cc0222ef2958b895298a944c442bdb99fcb2f65\",\"dweb:/ipfs/QmX44bxd2c82k32Z4fgnv2kJHZBVqVqwuFhUvrUsgBZ8Vc\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0xd8d3188dd4ceaa7510a658880ac3e6b90d030b1611f87a3911e876d7638d9dc7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d2f1dca6f5ace4e89ce0e78fd26cdc0dd52ed1216a08e66cfc57e832571cfdb7\",\"dweb:/ipfs/QmeHqkzAnLZSCLtWY4rqdcJMrsraZ66kMBvygojsVQZe8U\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "coreDeployer",
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
              "name": "_deployConfig",
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
              "name": "_deployConfig",
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
              "name": "target",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_deployer",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "_deploymentId",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "deployments",
          "outputs": [
            {
              "internalType": "struct HyperdriveDeployerCoordinator.Deployment",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "configHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "extraDataHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "hyperdrive",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "target0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "target1",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "target2",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "target3",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "target4",
                  "type": "address"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target0Deployer",
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
          "name": "target1Deployer",
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
          "name": "target2Deployer",
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
          "name": "target3Deployer",
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
          "name": "target4Deployer",
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
        "methods": {
          "constructor": {
            "params": {
              "_coreDeployer": "The core deployer.",
              "_target0Deployer": "The target0 deployer.",
              "_target1Deployer": "The target1 deployer.",
              "_target2Deployer": "The target2 deployer.",
              "_target4Deployer": "The target4 deployer."
            }
          },
          "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
            "params": {
              "_deployConfig": "The deploy configuration of the Hyperdrive pool.",
              "_deploymentId": "The ID of the deployment.",
              "_extraData": "The extra data that contains the pool and sweep targets.",
              "_salt": "The create2 salt used to deploy Hyperdrive."
            },
            "returns": {
              "_0": "The address of the newly deployed ERC4626Hyperdrive Instance."
            }
          },
          "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
            "details": "As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.",
            "params": {
              "_deployConfig": "The deploy configuration of the Hyperdrive pool.",
              "_deploymentId": "The ID of the deployment.",
              "_extraData": "The extra data that contains the pool and sweep targets.",
              "_salt": "The create2 salt used to deploy the target.",
              "_targetIndex": "The index of the target to deploy."
            },
            "returns": {
              "target": "The address of the newly deployed target instance."
            }
          },
          "deployments(address,bytes32)": {
            "params": {
              "_deployer": "The deployer.",
              "_deploymentId": "The deployment ID."
            },
            "returns": {
              "_0": "The deployment."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "constructor": {
            "notice": "Instantiates the deployer coordinator."
          },
          "coreDeployer()": {
            "notice": "The contract used to deploy new instances of Hyperdrive."
          },
          "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
            "notice": "Deploys a Hyperdrive instance with the given parameters."
          },
          "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
            "notice": "Deploys a Hyperdrive target instance with the given parameters."
          },
          "deployments(address,bytes32)": {
            "notice": "Gets the deployment specified by the deployer and deployment ID."
          },
          "target0Deployer()": {
            "notice": "The contract used to deploy new instances of HyperdriveTarget0."
          },
          "target1Deployer()": {
            "notice": "The contract used to deploy new instances of HyperdriveTarget1."
          },
          "target2Deployer()": {
            "notice": "The contract used to deploy new instances of HyperdriveTarget2."
          },
          "target3Deployer()": {
            "notice": "The contract used to deploy new instances of HyperdriveTarget3."
          },
          "target4Deployer()": {
            "notice": "The contract used to deploy new instances of HyperdriveTarget4."
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
        "contracts/src/deployers/HyperdriveDeployerCoordinator.sol": "HyperdriveDeployerCoordinator"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/deployers/HyperdriveDeployerCoordinator.sol": {
        "keccak256": "0xd66a53192300bd9ea8bec7161b75e261ec7602da46aa0335e58c73796ac9d8b3",
        "urls": [
          "bzz-raw://2f42ba33be4605580eaa2d1409b651751c898fe06d1ea256778e1c267d5f324e",
          "dweb:/ipfs/QmWL1Adbkk6xBzbGCdcJsLwR4e1AEMDKidzFKE6yo2AdSb"
        ],
        "license": "Apache-2.0"
      },
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
      "contracts/src/interfaces/IHyperdriveCoreDeployer.sol": {
        "keccak256": "0xa2c8fb3fbe929450758642a88fe1076e64c480ca7583d5f10f9a916a4dfbb3fb",
        "urls": [
          "bzz-raw://edd0a39abeedf46c20295fae53d7b41a21b6ca88dbf5a9ace0075cfb37ea2c1a",
          "dweb:/ipfs/QmedBMesHL8VfhThvdzCTMFwZA1TATz8K2R1VhHsM2CtfK"
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
      "contracts/src/interfaces/IHyperdriveTargetDeployer.sol": {
        "keccak256": "0xd8d3188dd4ceaa7510a658880ac3e6b90d030b1611f87a3911e876d7638d9dc7",
        "urls": [
          "bzz-raw://d2f1dca6f5ace4e89ce0e78fd26cdc0dd52ed1216a08e66cfc57e832571cfdb7",
          "dweb:/ipfs/QmeHqkzAnLZSCLtWY4rqdcJMrsraZ66kMBvygojsVQZe8U"
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
    "absolutePath": "contracts/src/deployers/HyperdriveDeployerCoordinator.sol",
    "id": 891,
    "exportedSymbols": {
      "HyperdriveDeployerCoordinator": [
        890
      ],
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveCoreDeployer": [
        7598
      ],
      "IHyperdriveDeployerCoordinator": [
        7673
      ],
      "IHyperdriveTargetDeployer": [
        8099
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:16817:0",
    "nodes": [
      {
        "id": 1,
        "nodeType": "PragmaDirective",
        "src": "39:23:0",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 3,
        "nodeType": "ImportDirective",
        "src": "64:60:0",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 891,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "73:11:0",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5,
        "nodeType": "ImportDirective",
        "src": "125:84:0",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveCoreDeployer.sol",
        "file": "../interfaces/IHyperdriveCoreDeployer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 891,
        "sourceUnit": 7599,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4,
              "name": "IHyperdriveCoreDeployer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7598,
              "src": "134:23:0",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7,
        "nodeType": "ImportDirective",
        "src": "210:98:0",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol",
        "file": "../interfaces/IHyperdriveDeployerCoordinator.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 891,
        "sourceUnit": 7674,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6,
              "name": "IHyperdriveDeployerCoordinator",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7673,
              "src": "219:30:0",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9,
        "nodeType": "ImportDirective",
        "src": "309:88:0",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveTargetDeployer.sol",
        "file": "../interfaces/IHyperdriveTargetDeployer.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 891,
        "sourceUnit": 8100,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8,
              "name": "IHyperdriveTargetDeployer",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8099,
              "src": "318:25:0",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 890,
        "nodeType": "ContractDefinition",
        "src": "891:15964:0",
        "nodes": [
          {
            "id": 40,
            "nodeType": "StructDefinition",
            "src": "983:1258:0",
            "nodes": [],
            "canonicalName": "HyperdriveDeployerCoordinator.Deployment",
            "members": [
              {
                "constant": false,
                "id": 15,
                "mutability": "mutable",
                "name": "configHash",
                "nameLocation": "1206:10:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "1198:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 14,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1198:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 18,
                "mutability": "mutable",
                "name": "extraDataHash",
                "nameLocation": "1435:13:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "1427:21:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 17,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1427:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21,
                "mutability": "mutable",
                "name": "initialSharePrice",
                "nameLocation": "1685:17:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "1677:25:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1677:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 24,
                "mutability": "mutable",
                "name": "hyperdrive",
                "nameLocation": "1779:10:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "1771:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 23,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1771:7:0",
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
                "id": 27,
                "mutability": "mutable",
                "name": "target0",
                "nameLocation": "1871:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "1863:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 26,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1863:7:0",
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
                "id": 30,
                "mutability": "mutable",
                "name": "target1",
                "nameLocation": "1960:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "1952:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 29,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1952:7:0",
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
                "id": 33,
                "mutability": "mutable",
                "name": "target2",
                "nameLocation": "2049:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "2041:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 32,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2041:7:0",
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
                "id": 36,
                "mutability": "mutable",
                "name": "target3",
                "nameLocation": "2138:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "2130:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 35,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2130:7:0",
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
                "id": 39,
                "mutability": "mutable",
                "name": "target4",
                "nameLocation": "2227:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 40,
                "src": "2219:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 38,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2219:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Deployment",
            "nameLocation": "990:10:0",
            "scope": 890,
            "visibility": "public"
          },
          {
            "id": 43,
            "nodeType": "VariableDeclaration",
            "src": "2320:37:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 41,
              "nodeType": "StructuredDocumentation",
              "src": "2247:68:0",
              "text": "@notice The contract used to deploy new instances of Hyperdrive."
            },
            "functionSelector": "c83e1f51",
            "mutability": "immutable",
            "name": "coreDeployer",
            "nameLocation": "2345:12:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 42,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2320:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 46,
            "nodeType": "VariableDeclaration",
            "src": "2444:40:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 44,
              "nodeType": "StructuredDocumentation",
              "src": "2364:75:0",
              "text": "@notice The contract used to deploy new instances of HyperdriveTarget0."
            },
            "functionSelector": "ab71905f",
            "mutability": "immutable",
            "name": "target0Deployer",
            "nameLocation": "2469:15:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 45,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2444:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 49,
            "nodeType": "VariableDeclaration",
            "src": "2571:40:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 47,
              "nodeType": "StructuredDocumentation",
              "src": "2491:75:0",
              "text": "@notice The contract used to deploy new instances of HyperdriveTarget1."
            },
            "functionSelector": "a085fa30",
            "mutability": "immutable",
            "name": "target1Deployer",
            "nameLocation": "2596:15:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 48,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2571:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 52,
            "nodeType": "VariableDeclaration",
            "src": "2698:40:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 50,
              "nodeType": "StructuredDocumentation",
              "src": "2618:75:0",
              "text": "@notice The contract used to deploy new instances of HyperdriveTarget2."
            },
            "functionSelector": "b6cb1118",
            "mutability": "immutable",
            "name": "target2Deployer",
            "nameLocation": "2723:15:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 51,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2698:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 55,
            "nodeType": "VariableDeclaration",
            "src": "2825:40:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 53,
              "nodeType": "StructuredDocumentation",
              "src": "2745:75:0",
              "text": "@notice The contract used to deploy new instances of HyperdriveTarget3."
            },
            "functionSelector": "aa8cd6c4",
            "mutability": "immutable",
            "name": "target3Deployer",
            "nameLocation": "2850:15:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2825:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 58,
            "nodeType": "VariableDeclaration",
            "src": "2952:40:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 56,
              "nodeType": "StructuredDocumentation",
              "src": "2872:75:0",
              "text": "@notice The contract used to deploy new instances of HyperdriveTarget4."
            },
            "functionSelector": "966ecd1c",
            "mutability": "immutable",
            "name": "target4Deployer",
            "nameLocation": "2977:15:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 57,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2952:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 66,
            "nodeType": "VariableDeclaration",
            "src": "3071:72:0",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "2999:67:0",
              "text": "@notice A mapping from deployer to deployment ID to deployment."
            },
            "mutability": "mutable",
            "name": "_deployments",
            "nameLocation": "3131:12:0",
            "scope": 890,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
              "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))"
            },
            "typeName": {
              "id": 65,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 60,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3079:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3071:50:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 64,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 61,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "3098:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "3090:30:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 63,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 62,
                    "name": "Deployment",
                    "nameLocations": [
                      "3109:10:0"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 40,
                    "src": "3109:10:0"
                  },
                  "referencedDeclaration": 40,
                  "src": "3109:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Deployment_$40_storage_ptr",
                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 107,
            "nodeType": "FunctionDefinition",
            "src": "3469:484:0",
            "nodes": [],
            "body": {
              "id": 106,
              "nodeType": "Block",
              "src": "3688:265:0",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 82,
                      "name": "coreDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43,
                      "src": "3698:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 83,
                      "name": "_coreDeployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 69,
                      "src": "3713:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3698:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "3698:28:0"
                },
                {
                  "expression": {
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 86,
                      "name": "target0Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "3736:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 87,
                      "name": "_target0Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "3754:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3736:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "3736:34:0"
                },
                {
                  "expression": {
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 90,
                      "name": "target1Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49,
                      "src": "3780:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 91,
                      "name": "_target1Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "3798:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3780:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 93,
                  "nodeType": "ExpressionStatement",
                  "src": "3780:34:0"
                },
                {
                  "expression": {
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 94,
                      "name": "target2Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "3824:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 95,
                      "name": "_target2Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "3842:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3824:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 97,
                  "nodeType": "ExpressionStatement",
                  "src": "3824:34:0"
                },
                {
                  "expression": {
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 98,
                      "name": "target3Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55,
                      "src": "3868:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 99,
                      "name": "_target3Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77,
                      "src": "3886:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3868:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "3868:34:0"
                },
                {
                  "expression": {
                    "id": 104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 102,
                      "name": "target4Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58,
                      "src": "3912:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 103,
                      "name": "_target4Deployer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "3930:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3912:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 105,
                  "nodeType": "ExpressionStatement",
                  "src": "3912:34:0"
                }
              ]
            },
            "documentation": {
              "id": 67,
              "nodeType": "StructuredDocumentation",
              "src": "3150:314:0",
              "text": "@notice Instantiates the deployer coordinator.\n @param _coreDeployer The core deployer.\n @param _target0Deployer The target0 deployer.\n @param _target1Deployer The target1 deployer.\n @param _target2Deployer The target2 deployer.\n @param _target4Deployer The target4 deployer."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "mutability": "mutable",
                  "name": "_coreDeployer",
                  "nameLocation": "3498:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "3490:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3490:7:0",
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
                  "id": 71,
                  "mutability": "mutable",
                  "name": "_target0Deployer",
                  "nameLocation": "3529:16:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "3521:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3521:7:0",
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
                  "id": 73,
                  "mutability": "mutable",
                  "name": "_target1Deployer",
                  "nameLocation": "3563:16:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "3555:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3555:7:0",
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
                  "id": 75,
                  "mutability": "mutable",
                  "name": "_target2Deployer",
                  "nameLocation": "3597:16:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "3589:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3589:7:0",
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
                  "id": 77,
                  "mutability": "mutable",
                  "name": "_target3Deployer",
                  "nameLocation": "3631:16:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "3623:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:7:0",
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
                  "id": 79,
                  "mutability": "mutable",
                  "name": "_target4Deployer",
                  "nameLocation": "3665:16:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "3657:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3657:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3480:207:0"
            },
            "returnParameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3688:0:0"
            },
            "scope": 890,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 289,
            "nodeType": "FunctionDefinition",
            "src": "4391:2690:0",
            "nodes": [],
            "body": {
              "id": 288,
              "nodeType": "Block",
              "src": "4586:2495:0",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    124
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 124,
                      "mutability": "mutable",
                      "name": "deployment",
                      "nameLocation": "4694:10:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 288,
                      "src": "4676:28:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                      },
                      "typeName": {
                        "id": 123,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 122,
                          "name": "Deployment",
                          "nameLocations": [
                            "4676:10:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 40,
                          "src": "4676:10:0"
                        },
                        "referencedDeclaration": 40,
                        "src": "4676:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_storage_ptr",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 131,
                  "initialValue": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 125,
                        "name": "_deployments",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "4707:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                          "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                        }
                      },
                      "id": 128,
                      "indexExpression": {
                        "expression": {
                          "id": 126,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4720:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4724:6:0",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4720:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "4707:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                      }
                    },
                    "id": 130,
                    "indexExpression": {
                      "id": 129,
                      "name": "_deploymentId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "4732:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4707:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Deployment_$40_storage",
                      "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4676:70:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 138,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 132,
                        "name": "deployment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "4760:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                        }
                      },
                      "id": 133,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4771:10:0",
                      "memberName": "hyperdrive",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24,
                      "src": "4760:21:0",
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
                          "id": 136,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4793:1:0",
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
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4785:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 134,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4785:7:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4785:10:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4760:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145,
                  "nodeType": "IfStatement",
                  "src": "4756:131:0",
                  "trueBody": {
                    "id": 144,
                    "nodeType": "Block",
                    "src": "4797:90:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 139,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "4818:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4849:25:0",
                            "memberName": "HyperdriveAlreadyDeployed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7614,
                            "src": "4818:56:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4818:58:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 143,
                        "nodeType": "RevertStatement",
                        "src": "4811:65:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 146,
                        "name": "deployment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "5036:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                        }
                      },
                      "id": 147,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5047:10:0",
                      "memberName": "configHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15,
                      "src": "5036:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5069:1:0",
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
                        "id": 149,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5061:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        },
                        "typeName": {
                          "id": 148,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "5061:7:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5061:10:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5036:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 159,
                  "nodeType": "IfStatement",
                  "src": "5032:128:0",
                  "trueBody": {
                    "id": 158,
                    "nodeType": "Block",
                    "src": "5073:87:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 153,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "5094:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5125:22:0",
                            "memberName": "DeploymentDoesNotExist",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7608,
                            "src": "5094:53:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5094:55:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 157,
                        "nodeType": "RevertStatement",
                        "src": "5087:62:0"
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
                    "id": 198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 190,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 166,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 160,
                                "name": "deployment",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 124,
                                "src": "5249:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                                  "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                }
                              },
                              "id": 161,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5260:7:0",
                              "memberName": "target0",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 27,
                              "src": "5249:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 164,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5279:1:0",
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
                                "id": 163,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5271:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 162,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5271:7:0",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 165,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5271:10:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "5249:32:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 167,
                                "name": "deployment",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 124,
                                "src": "5297:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                                  "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                }
                              },
                              "id": 168,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5308:7:0",
                              "memberName": "target1",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 30,
                              "src": "5297:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 171,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5327:1:0",
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
                                "id": 170,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5319:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 169,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5319:7:0",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5319:10:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "5297:32:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5249:80:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 175,
                              "name": "deployment",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 124,
                              "src": "5345:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                              }
                            },
                            "id": 176,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5356:7:0",
                            "memberName": "target2",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 33,
                            "src": "5345:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 179,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5375:1:0",
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
                              "id": 178,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5367:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 177,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5367:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5367:10:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5345:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5249:128:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 183,
                            "name": "deployment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124,
                            "src": "5393:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                              "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                            }
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5404:7:0",
                          "memberName": "target3",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 36,
                          "src": "5393:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 187,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5423:1:0",
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
                            "id": 186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5415:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 185,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "5415:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 188,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5415:10:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5393:32:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "5249:176:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 191,
                          "name": "deployment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "5441:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                          }
                        },
                        "id": 192,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5452:7:0",
                        "memberName": "target4",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 39,
                        "src": "5441:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5471:1:0",
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
                          "id": 194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5463:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 193,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5463:7:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5463:10:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "5441:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5249:224:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 205,
                  "nodeType": "IfStatement",
                  "src": "5232:337:0",
                  "trueBody": {
                    "id": 204,
                    "nodeType": "Block",
                    "src": "5484:85:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 199,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "5505:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5536:20:0",
                            "memberName": "IncompleteDeployment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7611,
                            "src": "5505:51:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5505:53:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 203,
                        "nodeType": "RevertStatement",
                        "src": "5498:60:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 214,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 209,
                              "name": "_deployConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 113,
                              "src": "5672:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            ],
                            "expression": {
                              "id": 207,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "5661:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "5665:6:0",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "5661:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5661:25:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 206,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "5651:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5651:36:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 212,
                        "name": "deployment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "5691:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                        }
                      },
                      "id": 213,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5702:10:0",
                      "memberName": "configHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15,
                      "src": "5691:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5651:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 221,
                  "nodeType": "IfStatement",
                  "src": "5647:148:0",
                  "trueBody": {
                    "id": 220,
                    "nodeType": "Block",
                    "src": "5714:81:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 215,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "5735:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5766:16:0",
                            "memberName": "MismatchedConfig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7635,
                            "src": "5735:47:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5735:49:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 219,
                        "nodeType": "RevertStatement",
                        "src": "5728:56:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 223,
                          "name": "_extraData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "5895:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 222,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "5885:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5885:21:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 225,
                        "name": "deployment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "5910:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                        }
                      },
                      "id": 226,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5921:13:0",
                      "memberName": "extraDataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18,
                      "src": "5910:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5885:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 234,
                  "nodeType": "IfStatement",
                  "src": "5881:139:0",
                  "trueBody": {
                    "id": 233,
                    "nodeType": "Block",
                    "src": "5936:84:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 228,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "5957:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 230,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5988:19:0",
                            "memberName": "MismatchedExtraData",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7638,
                            "src": "5957:50:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5957:52:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 232,
                        "nodeType": "RevertStatement",
                        "src": "5950:59:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 236,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "6313:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      ],
                      "id": 235,
                      "name": "_checkPoolConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 793,
                      "src": "6296:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$__$",
                        "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                      }
                    },
                    "id": 237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6296:31:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 238,
                  "nodeType": "ExpressionStatement",
                  "src": "6296:31:0"
                },
                {
                  "assignments": [
                    243
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 243,
                      "mutability": "mutable",
                      "name": "config",
                      "nameLocation": "6476:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 288,
                      "src": "6446:36:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 242,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 241,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "6446:11:0",
                            "6458:10:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7215,
                          "src": "6446:22:0"
                        },
                        "referencedDeclaration": 7215,
                        "src": "6446:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 247,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 245,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "6501:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      ],
                      "id": 244,
                      "name": "_copyPoolConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 889,
                      "src": "6485:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$_t_struct$_PoolConfig_$7215_memory_ptr_$",
                        "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6485:30:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6446:69:0"
                },
                {
                  "expression": {
                    "id": 253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 248,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 243,
                        "src": "6525:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 250,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6532:22:0",
                      "memberName": "initialVaultSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7189,
                      "src": "6525:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 251,
                        "name": "deployment",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "6557:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                        }
                      },
                      "id": 252,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6568:17:0",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 21,
                      "src": "6557:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6525:60:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 254,
                  "nodeType": "ExpressionStatement",
                  "src": "6525:60:0"
                },
                {
                  "assignments": [
                    256
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 256,
                      "mutability": "mutable",
                      "name": "hyperdrive",
                      "nameLocation": "6683:10:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 288,
                      "src": "6675:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 255,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6675:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 275,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 261,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 243,
                        "src": "6754:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      {
                        "id": 262,
                        "name": "_extraData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "6774:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 263,
                          "name": "deployment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "6798:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                          }
                        },
                        "id": 264,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6809:7:0",
                        "memberName": "target0",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 27,
                        "src": "6798:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 265,
                          "name": "deployment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "6830:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                          }
                        },
                        "id": 266,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6841:7:0",
                        "memberName": "target1",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 30,
                        "src": "6830:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 267,
                          "name": "deployment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "6862:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                          }
                        },
                        "id": 268,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6873:7:0",
                        "memberName": "target2",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33,
                        "src": "6862:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 269,
                          "name": "deployment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "6894:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                          }
                        },
                        "id": 270,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6905:7:0",
                        "memberName": "target3",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 36,
                        "src": "6894:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 271,
                          "name": "deployment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "6926:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                          }
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6937:7:0",
                        "memberName": "target4",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 39,
                        "src": "6926:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 273,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "6958:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 258,
                            "name": "coreDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43,
                            "src": "6720:12:0",
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
                          "id": 257,
                          "name": "IHyperdriveCoreDeployer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7598,
                          "src": "6696:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveCoreDeployer_$7598_$",
                            "typeString": "type(contract IHyperdriveCoreDeployer)"
                          }
                        },
                        "id": 259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6696:37:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdriveCoreDeployer_$7598",
                          "typeString": "contract IHyperdriveCoreDeployer"
                        }
                      },
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6734:6:0",
                      "memberName": "deploy",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7597,
                      "src": "6696:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,address,address,address,address,address,bytes32) external returns (address)"
                      }
                    },
                    "id": 274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6696:277:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6675:298:0"
                },
                {
                  "expression": {
                    "id": 284,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 276,
                            "name": "_deployments",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66,
                            "src": "6983:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                              "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                            }
                          },
                          "id": 280,
                          "indexExpression": {
                            "expression": {
                              "id": 277,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "6996:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7000:6:0",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "6996:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6983:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                          }
                        },
                        "id": 281,
                        "indexExpression": {
                          "id": 279,
                          "name": "_deploymentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 110,
                          "src": "7008:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6983:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_storage",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                        }
                      },
                      "id": 282,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7023:10:0",
                      "memberName": "hyperdrive",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24,
                      "src": "6983:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 283,
                      "name": "hyperdrive",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 256,
                      "src": "7036:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6983:63:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 285,
                  "nodeType": "ExpressionStatement",
                  "src": "6983:63:0"
                },
                {
                  "expression": {
                    "id": 286,
                    "name": "hyperdrive",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 256,
                    "src": "7064:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 121,
                  "id": 287,
                  "nodeType": "Return",
                  "src": "7057:17:0"
                }
              ]
            },
            "baseFunctions": [
              7656
            ],
            "documentation": {
              "id": 108,
              "nodeType": "StructuredDocumentation",
              "src": "3959:427:0",
              "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed ERC4626Hyperdrive Instance."
            },
            "functionSelector": "c47e90c4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deploy",
            "nameLocation": "4400:6:0",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 110,
                  "mutability": "mutable",
                  "name": "_deploymentId",
                  "nameLocation": "4424:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "4416:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 109,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4416:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 113,
                  "mutability": "mutable",
                  "name": "_deployConfig",
                  "nameLocation": "4483:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "4447:49:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 112,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 111,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "4447:11:0",
                        "4459:16:0"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "4447:28:0"
                    },
                    "referencedDeclaration": 7176,
                    "src": "4447:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 115,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "4519:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "4506:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 117,
                  "mutability": "mutable",
                  "name": "_salt",
                  "nameLocation": "4547:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "4539:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4539:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4406:152:0"
            },
            "returnParameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "4577:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4577:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4576:9:0"
            },
            "scope": 890,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 695,
            "nodeType": "FunctionDefinition",
            "src": "7714:5917:0",
            "nodes": [],
            "body": {
              "id": 694,
              "nodeType": "Block",
              "src": "7952:5679:0",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 306,
                      "name": "_targetIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 299,
                      "src": "8207:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 307,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8223:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8207:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 422,
                  "nodeType": "IfStatement",
                  "src": "8203:1789:0",
                  "trueBody": {
                    "id": 421,
                    "nodeType": "Block",
                    "src": "8226:1766:0",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 309,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "8404:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 312,
                                "indexExpression": {
                                  "expression": {
                                    "id": 310,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "8417:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 311,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8421:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "8417:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8404:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 314,
                              "indexExpression": {
                                "id": 313,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "8429:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8404:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 315,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8444:10:0",
                            "memberName": "configHash",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 15,
                            "src": "8404:50:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "arguments": [
                              {
                                "hexValue": "30",
                                "id": 318,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "8466:1:0",
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
                              "id": 317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8458:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 316,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "8458:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8458:10:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "8404:64:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 327,
                        "nodeType": "IfStatement",
                        "src": "8383:196:0",
                        "trueBody": {
                          "id": 326,
                          "nodeType": "Block",
                          "src": "8483:96:0",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 321,
                                    "name": "IHyperdriveDeployerCoordinator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7673,
                                    "src": "8508:30:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                      "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                    }
                                  },
                                  "id": 323,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8539:23:0",
                                  "memberName": "DeploymentAlreadyExists",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7605,
                                  "src": "8508:54:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 324,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8508:56:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 325,
                              "nodeType": "RevertStatement",
                              "src": "8501:63:0"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 329,
                              "name": "_deployConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 295,
                              "src": "8730:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            ],
                            "id": 328,
                            "name": "_checkPoolConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 793,
                            "src": "8713:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$__$",
                              "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                            }
                          },
                          "id": 330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8713:31:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 331,
                        "nodeType": "ExpressionStatement",
                        "src": "8713:31:0"
                      },
                      {
                        "assignments": [
                          333
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 333,
                            "mutability": "mutable",
                            "name": "initialSharePrice",
                            "nameLocation": "8870:17:0",
                            "nodeType": "VariableDeclaration",
                            "scope": 421,
                            "src": "8862:25:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 332,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8862:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 337,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 335,
                              "name": "_extraData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 297,
                              "src": "8917:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 334,
                            "name": "_getInitialVaultSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 801,
                            "src": "8890:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_bytes_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (bytes memory) view returns (uint256)"
                            }
                          },
                          "id": 336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8890:38:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8862:66:0"
                      },
                      {
                        "assignments": [
                          339
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 339,
                            "mutability": "mutable",
                            "name": "configHash",
                            "nameLocation": "8950:10:0",
                            "nodeType": "VariableDeclaration",
                            "scope": 421,
                            "src": "8942:18:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 338,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "8942:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 346,
                        "initialValue": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 343,
                                  "name": "_deployConfig",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 295,
                                  "src": "8984:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                  }
                                ],
                                "expression": {
                                  "id": 341,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "8973:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 342,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "8977:6:0",
                                "memberName": "encode",
                                "nodeType": "MemberAccess",
                                "src": "8973:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 344,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8973:25:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 340,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "8963:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8963:36:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8942:57:0"
                      },
                      {
                        "assignments": [
                          348
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 348,
                            "mutability": "mutable",
                            "name": "extraDataHash",
                            "nameLocation": "9021:13:0",
                            "nodeType": "VariableDeclaration",
                            "scope": 421,
                            "src": "9013:21:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 347,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "9013:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 352,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 350,
                              "name": "_extraData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 297,
                              "src": "9047:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 349,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "9037:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9037:21:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9013:45:0"
                      },
                      {
                        "assignments": [
                          357
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 357,
                            "mutability": "mutable",
                            "name": "config_",
                            "nameLocation": "9219:7:0",
                            "nodeType": "VariableDeclaration",
                            "scope": 421,
                            "src": "9189:37:0",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig"
                            },
                            "typeName": {
                              "id": 356,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 355,
                                "name": "IHyperdrive.PoolConfig",
                                "nameLocations": [
                                  "9189:11:0",
                                  "9201:10:0"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 7215,
                                "src": "9189:22:0"
                              },
                              "referencedDeclaration": 7215,
                              "src": "9189:22:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 361,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 359,
                              "name": "_deployConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 295,
                              "src": "9262:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            ],
                            "id": 358,
                            "name": "_copyPoolConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 889,
                            "src": "9229:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$_t_struct$_PoolConfig_$7215_memory_ptr_$",
                              "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                            }
                          },
                          "id": 360,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9229:60:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9189:100:0"
                      },
                      {
                        "expression": {
                          "id": 366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 362,
                              "name": "config_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 357,
                              "src": "9303:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 364,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "9311:22:0",
                            "memberName": "initialVaultSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7189,
                            "src": "9303:30:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 365,
                            "name": "initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "9336:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9303:50:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 367,
                        "nodeType": "ExpressionStatement",
                        "src": "9303:50:0"
                      },
                      {
                        "expression": {
                          "id": 377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 368,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "9412:6:0",
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
                                "id": 373,
                                "name": "config_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 357,
                                "src": "9488:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              {
                                "id": 374,
                                "name": "_extraData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 297,
                                "src": "9513:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              {
                                "id": 375,
                                "name": "_salt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 301,
                                "src": "9541:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 370,
                                    "name": "target0Deployer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46,
                                    "src": "9447:15:0",
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
                                  "id": 369,
                                  "name": "IHyperdriveTargetDeployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8099,
                                  "src": "9421:25:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$",
                                    "typeString": "type(contract IHyperdriveTargetDeployer)"
                                  }
                                },
                                "id": 371,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9421:42:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8099",
                                  "typeString": "contract IHyperdriveTargetDeployer"
                                }
                              },
                              "id": 372,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9464:6:0",
                              "memberName": "deploy",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8098,
                              "src": "9421:49:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                              }
                            },
                            "id": 376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9421:139:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9412:148:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 378,
                        "nodeType": "ExpressionStatement",
                        "src": "9412:148:0"
                      },
                      {
                        "expression": {
                          "id": 387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 379,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "9612:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 383,
                                "indexExpression": {
                                  "expression": {
                                    "id": 380,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "9625:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 381,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "9629:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "9625:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9612:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 384,
                              "indexExpression": {
                                "id": 382,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "9637:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9612:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 385,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "9652:10:0",
                            "memberName": "configHash",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 15,
                            "src": "9612:50:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 386,
                            "name": "configHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "9665:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "9612:63:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 388,
                        "nodeType": "ExpressionStatement",
                        "src": "9612:63:0"
                      },
                      {
                        "expression": {
                          "id": 397,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 389,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "9689:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 393,
                                "indexExpression": {
                                  "expression": {
                                    "id": 390,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "9702:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 391,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "9706:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "9702:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9689:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 394,
                              "indexExpression": {
                                "id": 392,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "9714:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9689:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 395,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "9746:13:0",
                            "memberName": "extraDataHash",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 18,
                            "src": "9689:70:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 396,
                            "name": "extraDataHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 348,
                            "src": "9762:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "9689:86:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 398,
                        "nodeType": "ExpressionStatement",
                        "src": "9689:86:0"
                      },
                      {
                        "expression": {
                          "id": 407,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 399,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "9789:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 403,
                                "indexExpression": {
                                  "expression": {
                                    "id": 400,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "9802:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 401,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "9806:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "9802:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9789:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 404,
                              "indexExpression": {
                                "id": 402,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "9814:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9789:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 405,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "9846:17:0",
                            "memberName": "initialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 21,
                            "src": "9789:74:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 406,
                            "name": "initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "9866:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9789:94:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 408,
                        "nodeType": "ExpressionStatement",
                        "src": "9789:94:0"
                      },
                      {
                        "expression": {
                          "id": 417,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 409,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "9897:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 413,
                                "indexExpression": {
                                  "expression": {
                                    "id": 410,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "9910:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 411,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "9914:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "9910:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9897:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 414,
                              "indexExpression": {
                                "id": 412,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "9922:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9897:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 415,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "9937:7:0",
                            "memberName": "target0",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 27,
                            "src": "9897:47:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 416,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "9947:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9897:56:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 418,
                        "nodeType": "ExpressionStatement",
                        "src": "9897:56:0"
                      },
                      {
                        "expression": {
                          "id": 419,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 304,
                          "src": "9975:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "functionReturnParameters": 305,
                        "id": 420,
                        "nodeType": "Return",
                        "src": "9968:13:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 423,
                            "name": "_deployments",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66,
                            "src": "10141:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                              "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                            }
                          },
                          "id": 426,
                          "indexExpression": {
                            "expression": {
                              "id": 424,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "10154:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 425,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10158:6:0",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "10154:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "10141:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                          }
                        },
                        "id": 428,
                        "indexExpression": {
                          "id": 427,
                          "name": "_deploymentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "10166:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10141:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_storage",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                        }
                      },
                      "id": 429,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10181:10:0",
                      "memberName": "configHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15,
                      "src": "10141:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10203:1:0",
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
                        "id": 431,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10195:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes32_$",
                          "typeString": "type(bytes32)"
                        },
                        "typeName": {
                          "id": 430,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "10195:7:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 433,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10195:10:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10141:64:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 441,
                  "nodeType": "IfStatement",
                  "src": "10137:157:0",
                  "trueBody": {
                    "id": 440,
                    "nodeType": "Block",
                    "src": "10207:87:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 435,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "10228:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 437,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10259:22:0",
                            "memberName": "DeploymentDoesNotExist",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7608,
                            "src": "10228:53:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10228:55:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 439,
                        "nodeType": "RevertStatement",
                        "src": "10221:62:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 445,
                              "name": "_deployConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 295,
                              "src": "10410:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            ],
                            "expression": {
                              "id": 443,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "10399:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 444,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "10403:6:0",
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "src": "10399:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10399:25:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 442,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "10389:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10389:36:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 448,
                            "name": "_deployments",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66,
                            "src": "10441:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                              "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                            }
                          },
                          "id": 451,
                          "indexExpression": {
                            "expression": {
                              "id": 449,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "10454:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 450,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10458:6:0",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "10454:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "10441:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                          }
                        },
                        "id": 453,
                        "indexExpression": {
                          "id": 452,
                          "name": "_deploymentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "10466:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10441:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_storage",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                        }
                      },
                      "id": 454,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10481:10:0",
                      "memberName": "configHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15,
                      "src": "10441:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10389:102:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 462,
                  "nodeType": "IfStatement",
                  "src": "10372:211:0",
                  "trueBody": {
                    "id": 461,
                    "nodeType": "Block",
                    "src": "10502:81:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 456,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "10523:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10554:16:0",
                            "memberName": "MismatchedConfig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7635,
                            "src": "10523:47:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10523:49:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 460,
                        "nodeType": "RevertStatement",
                        "src": "10516:56:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 464,
                          "name": "_extraData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 297,
                          "src": "10696:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 463,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "10686:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10686:21:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 466,
                            "name": "_deployments",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66,
                            "src": "10723:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                              "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                            }
                          },
                          "id": 469,
                          "indexExpression": {
                            "expression": {
                              "id": 467,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "10736:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10740:6:0",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "10736:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "10723:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                          }
                        },
                        "id": 471,
                        "indexExpression": {
                          "id": 470,
                          "name": "_deploymentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "10748:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10723:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_storage",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                        }
                      },
                      "id": 472,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10763:13:0",
                      "memberName": "extraDataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18,
                      "src": "10723:53:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "10686:90:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 480,
                  "nodeType": "IfStatement",
                  "src": "10669:202:0",
                  "trueBody": {
                    "id": 479,
                    "nodeType": "Block",
                    "src": "10787:84:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 474,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "10808:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 476,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10839:19:0",
                            "memberName": "MismatchedExtraData",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7638,
                            "src": "10808:50:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10808:52:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 478,
                        "nodeType": "RevertStatement",
                        "src": "10801:59:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 482,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 295,
                        "src": "11164:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      ],
                      "id": 481,
                      "name": "_checkPoolConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 793,
                      "src": "11147:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$__$",
                        "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11147:31:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "11147:31:0"
                },
                {
                  "assignments": [
                    489
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 489,
                      "mutability": "mutable",
                      "name": "config",
                      "nameLocation": "11327:6:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 694,
                      "src": "11297:36:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 488,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 487,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "11297:11:0",
                            "11309:10:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7215,
                          "src": "11297:22:0"
                        },
                        "referencedDeclaration": 7215,
                        "src": "11297:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 493,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 491,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 295,
                        "src": "11352:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      ],
                      "id": 490,
                      "name": "_copyPoolConfig",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 889,
                      "src": "11336:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$_t_struct$_PoolConfig_$7215_memory_ptr_$",
                        "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11336:30:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11297:69:0"
                },
                {
                  "expression": {
                    "id": 504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 494,
                        "name": "config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 489,
                        "src": "11376:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 496,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "11383:22:0",
                      "memberName": "initialVaultSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7189,
                      "src": "11376:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 497,
                            "name": "_deployments",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 66,
                            "src": "11408:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                              "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                            }
                          },
                          "id": 500,
                          "indexExpression": {
                            "expression": {
                              "id": 498,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "11421:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11425:6:0",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "11421:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "11408:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                          }
                        },
                        "id": 502,
                        "indexExpression": {
                          "id": 501,
                          "name": "_deploymentId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "11433:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "11408:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Deployment_$40_storage",
                          "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                        }
                      },
                      "id": 503,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11461:17:0",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 21,
                      "src": "11408:70:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11376:102:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 505,
                  "nodeType": "ExpressionStatement",
                  "src": "11376:102:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 506,
                      "name": "_targetIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 299,
                      "src": "11742:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11758:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "11742:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 552,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 550,
                        "name": "_targetIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 299,
                        "src": "12187:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 551,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12203:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "12187:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 594,
                          "name": "_targetIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 299,
                          "src": "12632:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 595,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12648:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "12632:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 640,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 638,
                            "name": "_targetIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 299,
                            "src": "13077:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 639,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "13093:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "13077:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 687,
                          "nodeType": "Block",
                          "src": "13518:83:0",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 682,
                                    "name": "IHyperdriveDeployerCoordinator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7673,
                                    "src": "13539:30:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                      "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                    }
                                  },
                                  "id": 684,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "13570:18:0",
                                  "memberName": "InvalidTargetIndex",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7632,
                                  "src": "13539:49:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 685,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13539:51:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 686,
                              "nodeType": "RevertStatement",
                              "src": "13532:58:0"
                            }
                          ]
                        },
                        "id": 688,
                        "nodeType": "IfStatement",
                        "src": "13073:528:0",
                        "trueBody": {
                          "id": 681,
                          "nodeType": "Block",
                          "src": "13096:416:0",
                          "statements": [
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "baseExpression": {
                                      "baseExpression": {
                                        "id": 641,
                                        "name": "_deployments",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 66,
                                        "src": "13114:12:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                          "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                        }
                                      },
                                      "id": 644,
                                      "indexExpression": {
                                        "expression": {
                                          "id": 642,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -15,
                                          "src": "13127:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 643,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13131:6:0",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "13127:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "13114:24:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                      }
                                    },
                                    "id": 646,
                                    "indexExpression": {
                                      "id": 645,
                                      "name": "_deploymentId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 292,
                                      "src": "13139:13:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "13114:39:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                      "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                    }
                                  },
                                  "id": 647,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "13154:7:0",
                                  "memberName": "target4",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 39,
                                  "src": "13114:47:0",
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
                                      "id": 650,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "13173:1:0",
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
                                    "id": 649,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "13165:7:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 648,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "13165:7:0",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 651,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13165:10:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "13114:61:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 659,
                              "nodeType": "IfStatement",
                              "src": "13110:161:0",
                              "trueBody": {
                                "id": 658,
                                "nodeType": "Block",
                                "src": "13177:94:0",
                                "statements": [
                                  {
                                    "errorCall": {
                                      "arguments": [],
                                      "expression": {
                                        "argumentTypes": [],
                                        "expression": {
                                          "id": 653,
                                          "name": "IHyperdriveDeployerCoordinator",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 7673,
                                          "src": "13202:30:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                          }
                                        },
                                        "id": 655,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13233:21:0",
                                        "memberName": "TargetAlreadyDeployed",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7641,
                                        "src": "13202:52:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                          "typeString": "function () pure"
                                        }
                                      },
                                      "id": 656,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13202:54:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 657,
                                    "nodeType": "RevertStatement",
                                    "src": "13195:61:0"
                                  }
                                ]
                              }
                            },
                            {
                              "expression": {
                                "id": 669,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 660,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 304,
                                  "src": "13284:6:0",
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
                                      "id": 665,
                                      "name": "config",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 489,
                                      "src": "13360:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                      }
                                    },
                                    {
                                      "id": 666,
                                      "name": "_extraData",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 297,
                                      "src": "13384:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    },
                                    {
                                      "id": 667,
                                      "name": "_salt",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 301,
                                      "src": "13412:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "arguments": [
                                        {
                                          "id": 662,
                                          "name": "target4Deployer",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 58,
                                          "src": "13319:15:0",
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
                                        "id": 661,
                                        "name": "IHyperdriveTargetDeployer",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8099,
                                        "src": "13293:25:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$",
                                          "typeString": "type(contract IHyperdriveTargetDeployer)"
                                        }
                                      },
                                      "id": 663,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13293:42:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8099",
                                        "typeString": "contract IHyperdriveTargetDeployer"
                                      }
                                    },
                                    "id": 664,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "13336:6:0",
                                    "memberName": "deploy",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 8098,
                                    "src": "13293:49:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                      "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                    }
                                  },
                                  "id": 668,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13293:138:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "13284:147:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 670,
                              "nodeType": "ExpressionStatement",
                              "src": "13284:147:0"
                            },
                            {
                              "expression": {
                                "id": 679,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "baseExpression": {
                                      "baseExpression": {
                                        "id": 671,
                                        "name": "_deployments",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 66,
                                        "src": "13445:12:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                          "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                        }
                                      },
                                      "id": 675,
                                      "indexExpression": {
                                        "expression": {
                                          "id": 672,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": -15,
                                          "src": "13458:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 673,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13462:6:0",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "13458:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "13445:24:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                      }
                                    },
                                    "id": 676,
                                    "indexExpression": {
                                      "id": 674,
                                      "name": "_deploymentId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 292,
                                      "src": "13470:13:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "13445:39:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                      "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                    }
                                  },
                                  "id": 677,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "13485:7:0",
                                  "memberName": "target4",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 39,
                                  "src": "13445:47:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 678,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 304,
                                  "src": "13495:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "13445:56:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 680,
                              "nodeType": "ExpressionStatement",
                              "src": "13445:56:0"
                            }
                          ]
                        }
                      },
                      "id": 689,
                      "nodeType": "IfStatement",
                      "src": "12628:973:0",
                      "trueBody": {
                        "id": 637,
                        "nodeType": "Block",
                        "src": "12651:416:0",
                        "statements": [
                          {
                            "condition": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "id": 608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "id": 597,
                                      "name": "_deployments",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 66,
                                      "src": "12669:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                      }
                                    },
                                    "id": 600,
                                    "indexExpression": {
                                      "expression": {
                                        "id": 598,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -15,
                                        "src": "12682:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 599,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "12686:6:0",
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "src": "12682:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "12669:24:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                      "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                    }
                                  },
                                  "id": 602,
                                  "indexExpression": {
                                    "id": 601,
                                    "name": "_deploymentId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 292,
                                    "src": "12694:13:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "12669:39:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                  }
                                },
                                "id": 603,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "12709:7:0",
                                "memberName": "target3",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 36,
                                "src": "12669:47:0",
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
                                    "id": 606,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "12728:1:0",
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
                                  "id": 605,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "12720:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 604,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "12720:7:0",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 607,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12720:10:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "12669:61:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 615,
                            "nodeType": "IfStatement",
                            "src": "12665:161:0",
                            "trueBody": {
                              "id": 614,
                              "nodeType": "Block",
                              "src": "12732:94:0",
                              "statements": [
                                {
                                  "errorCall": {
                                    "arguments": [],
                                    "expression": {
                                      "argumentTypes": [],
                                      "expression": {
                                        "id": 609,
                                        "name": "IHyperdriveDeployerCoordinator",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7673,
                                        "src": "12757:30:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                          "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                        }
                                      },
                                      "id": 611,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "12788:21:0",
                                      "memberName": "TargetAlreadyDeployed",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7641,
                                      "src": "12757:52:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                        "typeString": "function () pure"
                                      }
                                    },
                                    "id": 612,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "12757:54:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 613,
                                  "nodeType": "RevertStatement",
                                  "src": "12750:61:0"
                                }
                              ]
                            }
                          },
                          {
                            "expression": {
                              "id": 625,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 616,
                                "name": "target",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 304,
                                "src": "12839:6:0",
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
                                    "id": 621,
                                    "name": "config",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 489,
                                    "src": "12915:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                      "typeString": "struct IHyperdrive.PoolConfig memory"
                                    }
                                  },
                                  {
                                    "id": 622,
                                    "name": "_extraData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 297,
                                    "src": "12939:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  {
                                    "id": 623,
                                    "name": "_salt",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 301,
                                    "src": "12967:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                      "typeString": "struct IHyperdrive.PoolConfig memory"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "id": 618,
                                        "name": "target3Deployer",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 55,
                                        "src": "12874:15:0",
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
                                      "id": 617,
                                      "name": "IHyperdriveTargetDeployer",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 8099,
                                      "src": "12848:25:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$",
                                        "typeString": "type(contract IHyperdriveTargetDeployer)"
                                      }
                                    },
                                    "id": 619,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "12848:42:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8099",
                                      "typeString": "contract IHyperdriveTargetDeployer"
                                    }
                                  },
                                  "id": 620,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "12891:6:0",
                                  "memberName": "deploy",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 8098,
                                  "src": "12848:49:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                    "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                  }
                                },
                                "id": 624,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12848:138:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "12839:147:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 626,
                            "nodeType": "ExpressionStatement",
                            "src": "12839:147:0"
                          },
                          {
                            "expression": {
                              "id": 635,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "expression": {
                                  "baseExpression": {
                                    "baseExpression": {
                                      "id": 627,
                                      "name": "_deployments",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 66,
                                      "src": "13000:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                      }
                                    },
                                    "id": 631,
                                    "indexExpression": {
                                      "expression": {
                                        "id": 628,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -15,
                                        "src": "13013:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 629,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "13017:6:0",
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "src": "13013:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "13000:24:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                      "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                    }
                                  },
                                  "id": 632,
                                  "indexExpression": {
                                    "id": 630,
                                    "name": "_deploymentId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 292,
                                    "src": "13025:13:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "13000:39:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                  }
                                },
                                "id": 633,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "memberLocation": "13040:7:0",
                                "memberName": "target3",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 36,
                                "src": "13000:47:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "id": 634,
                                "name": "target",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 304,
                                "src": "13050:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "13000:56:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 636,
                            "nodeType": "ExpressionStatement",
                            "src": "13000:56:0"
                          }
                        ]
                      }
                    },
                    "id": 690,
                    "nodeType": "IfStatement",
                    "src": "12183:1418:0",
                    "trueBody": {
                      "id": 593,
                      "nodeType": "Block",
                      "src": "12206:416:0",
                      "statements": [
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 564,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "id": 553,
                                    "name": "_deployments",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66,
                                    "src": "12224:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                      "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                    }
                                  },
                                  "id": 556,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 554,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -15,
                                      "src": "12237:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 555,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "12241:6:0",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "12237:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "12224:24:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                  }
                                },
                                "id": 558,
                                "indexExpression": {
                                  "id": 557,
                                  "name": "_deploymentId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 292,
                                  "src": "12249:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "12224:39:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                  "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                }
                              },
                              "id": 559,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "12264:7:0",
                              "memberName": "target2",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 33,
                              "src": "12224:47:0",
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
                                  "id": 562,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12283:1:0",
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
                                "id": 561,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "12275:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 560,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "12275:7:0",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12275:10:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "12224:61:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 571,
                          "nodeType": "IfStatement",
                          "src": "12220:161:0",
                          "trueBody": {
                            "id": 570,
                            "nodeType": "Block",
                            "src": "12287:94:0",
                            "statements": [
                              {
                                "errorCall": {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "expression": {
                                      "id": 565,
                                      "name": "IHyperdriveDeployerCoordinator",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7673,
                                      "src": "12312:30:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                        "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                      }
                                    },
                                    "id": 567,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "12343:21:0",
                                    "memberName": "TargetAlreadyDeployed",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 7641,
                                    "src": "12312:52:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                      "typeString": "function () pure"
                                    }
                                  },
                                  "id": 568,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "12312:54:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 569,
                                "nodeType": "RevertStatement",
                                "src": "12305:61:0"
                              }
                            ]
                          }
                        },
                        {
                          "expression": {
                            "id": 581,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 572,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "12394:6:0",
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
                                  "id": 577,
                                  "name": "config",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 489,
                                  "src": "12470:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                {
                                  "id": 578,
                                  "name": "_extraData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 297,
                                  "src": "12494:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                },
                                {
                                  "id": 579,
                                  "name": "_salt",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 301,
                                  "src": "12522:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 574,
                                      "name": "target2Deployer",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 52,
                                      "src": "12429:15:0",
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
                                    "id": 573,
                                    "name": "IHyperdriveTargetDeployer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 8099,
                                    "src": "12403:25:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$",
                                      "typeString": "type(contract IHyperdriveTargetDeployer)"
                                    }
                                  },
                                  "id": 575,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "12403:42:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8099",
                                    "typeString": "contract IHyperdriveTargetDeployer"
                                  }
                                },
                                "id": 576,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "12446:6:0",
                                "memberName": "deploy",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8098,
                                "src": "12403:49:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                  "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                }
                              },
                              "id": 580,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12403:138:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "12394:147:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 582,
                          "nodeType": "ExpressionStatement",
                          "src": "12394:147:0"
                        },
                        {
                          "expression": {
                            "id": 591,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "expression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "id": 583,
                                    "name": "_deployments",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 66,
                                    "src": "12555:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                      "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                    }
                                  },
                                  "id": 587,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 584,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -15,
                                      "src": "12568:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 585,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "12572:6:0",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "12568:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "12555:24:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                  }
                                },
                                "id": 588,
                                "indexExpression": {
                                  "id": 586,
                                  "name": "_deploymentId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 292,
                                  "src": "12580:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "12555:39:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                  "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                }
                              },
                              "id": 589,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "memberLocation": "12595:7:0",
                              "memberName": "target2",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 33,
                              "src": "12555:47:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 590,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "12605:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "12555:56:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 592,
                          "nodeType": "ExpressionStatement",
                          "src": "12555:56:0"
                        }
                      ]
                    }
                  },
                  "id": 691,
                  "nodeType": "IfStatement",
                  "src": "11738:1863:0",
                  "trueBody": {
                    "id": 549,
                    "nodeType": "Block",
                    "src": "11761:416:0",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 520,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 509,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "11779:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 512,
                                "indexExpression": {
                                  "expression": {
                                    "id": 510,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "11792:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 511,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11796:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "11792:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "11779:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 514,
                              "indexExpression": {
                                "id": 513,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "11804:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "11779:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 515,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11819:7:0",
                            "memberName": "target1",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 30,
                            "src": "11779:47:0",
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
                                "id": 518,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "11838:1:0",
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
                              "id": 517,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "11830:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 516,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "11830:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 519,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11830:10:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "11779:61:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 527,
                        "nodeType": "IfStatement",
                        "src": "11775:161:0",
                        "trueBody": {
                          "id": 526,
                          "nodeType": "Block",
                          "src": "11842:94:0",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 521,
                                    "name": "IHyperdriveDeployerCoordinator",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7673,
                                    "src": "11867:30:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                      "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                    }
                                  },
                                  "id": 523,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11898:21:0",
                                  "memberName": "TargetAlreadyDeployed",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7641,
                                  "src": "11867:52:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 524,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11867:54:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 525,
                              "nodeType": "RevertStatement",
                              "src": "11860:61:0"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 528,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "11949:6:0",
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
                                "id": 533,
                                "name": "config",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 489,
                                "src": "12025:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              {
                                "id": 534,
                                "name": "_extraData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 297,
                                "src": "12049:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              {
                                "id": 535,
                                "name": "_salt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 301,
                                "src": "12077:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 530,
                                    "name": "target1Deployer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 49,
                                    "src": "11984:15:0",
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
                                  "id": 529,
                                  "name": "IHyperdriveTargetDeployer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8099,
                                  "src": "11958:25:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$",
                                    "typeString": "type(contract IHyperdriveTargetDeployer)"
                                  }
                                },
                                "id": 531,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11958:42:0",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8099",
                                  "typeString": "contract IHyperdriveTargetDeployer"
                                }
                              },
                              "id": 532,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "12001:6:0",
                              "memberName": "deploy",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8098,
                              "src": "11958:49:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                              }
                            },
                            "id": 536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11958:138:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "11949:147:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 538,
                        "nodeType": "ExpressionStatement",
                        "src": "11949:147:0"
                      },
                      {
                        "expression": {
                          "id": 547,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 539,
                                  "name": "_deployments",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 66,
                                  "src": "12110:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                  }
                                },
                                "id": 543,
                                "indexExpression": {
                                  "expression": {
                                    "id": 540,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "12123:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 541,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "12127:6:0",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "12123:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "12110:24:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                                  "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                }
                              },
                              "id": 544,
                              "indexExpression": {
                                "id": 542,
                                "name": "_deploymentId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 292,
                                "src": "12135:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "12110:39:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                              }
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "12150:7:0",
                            "memberName": "target1",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 30,
                            "src": "12110:47:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 546,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "12160:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "12110:56:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 548,
                        "nodeType": "ExpressionStatement",
                        "src": "12110:56:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 692,
                    "name": "target",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 304,
                    "src": "13618:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 305,
                  "id": 693,
                  "nodeType": "Return",
                  "src": "13611:13:0"
                }
              ]
            },
            "baseFunctions": [
              7672
            ],
            "documentation": {
              "id": 290,
              "nodeType": "StructuredDocumentation",
              "src": "7087:622:0",
              "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
            },
            "functionSelector": "7cc39092",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployTarget",
            "nameLocation": "7723:12:0",
            "parameters": {
              "id": 302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 292,
                  "mutability": "mutable",
                  "name": "_deploymentId",
                  "nameLocation": "7753:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 695,
                  "src": "7745:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 291,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7745:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 295,
                  "mutability": "mutable",
                  "name": "_deployConfig",
                  "nameLocation": "7812:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 695,
                  "src": "7776:49:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 294,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 293,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "7776:11:0",
                        "7788:16:0"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "7776:28:0"
                    },
                    "referencedDeclaration": 7176,
                    "src": "7776:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 297,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "7848:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 695,
                  "src": "7835:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 296,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7835:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 299,
                  "mutability": "mutable",
                  "name": "_targetIndex",
                  "nameLocation": "7876:12:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 695,
                  "src": "7868:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7868:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 301,
                  "mutability": "mutable",
                  "name": "_salt",
                  "nameLocation": "7906:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 695,
                  "src": "7898:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7898:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7735:182:0"
            },
            "returnParameters": {
              "id": 305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 304,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "7944:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 695,
                  "src": "7936:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 303,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7936:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7935:16:0"
            },
            "scope": 890,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 713,
            "nodeType": "FunctionDefinition",
            "src": "13837:189:0",
            "nodes": [],
            "body": {
              "id": 712,
              "nodeType": "Block",
              "src": "13964:62:0",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 706,
                        "name": "_deployments",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "13981:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$",
                          "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                        }
                      },
                      "id": 708,
                      "indexExpression": {
                        "id": 707,
                        "name": "_deployer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 698,
                        "src": "13994:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "13981:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$",
                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                      }
                    },
                    "id": 710,
                    "indexExpression": {
                      "id": 709,
                      "name": "_deploymentId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 700,
                      "src": "14005:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "13981:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Deployment_$40_storage",
                      "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                    }
                  },
                  "functionReturnParameters": 705,
                  "id": 711,
                  "nodeType": "Return",
                  "src": "13974:45:0"
                }
              ]
            },
            "documentation": {
              "id": 696,
              "nodeType": "StructuredDocumentation",
              "src": "13637:195:0",
              "text": "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment."
            },
            "functionSelector": "20503b3f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deployments",
            "nameLocation": "13846:11:0",
            "parameters": {
              "id": 701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "mutability": "mutable",
                  "name": "_deployer",
                  "nameLocation": "13875:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 713,
                  "src": "13867:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13867:7:0",
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
                  "id": 700,
                  "mutability": "mutable",
                  "name": "_deploymentId",
                  "nameLocation": "13902:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 713,
                  "src": "13894:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13894:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13857:64:0"
            },
            "returnParameters": {
              "id": 705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 704,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 713,
                  "src": "13945:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Deployment_$40_memory_ptr",
                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                  },
                  "typeName": {
                    "id": 703,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 702,
                      "name": "Deployment",
                      "nameLocations": [
                        "13945:10:0"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 40,
                      "src": "13945:10:0"
                    },
                    "referencedDeclaration": 40,
                    "src": "13945:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Deployment_$40_storage_ptr",
                      "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13944:19:0"
            },
            "scope": 890,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 793,
            "nodeType": "FunctionDefinition",
            "src": "14181:1195:0",
            "nodes": [],
            "body": {
              "id": 792,
              "nodeType": "Block",
              "src": "14294:1082:0",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 720,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 717,
                        "src": "14445:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 721,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14459:20:0",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7153,
                      "src": "14445:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "316533",
                      "id": 722,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "14482:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000_by_1",
                        "typeString": "int_const 1000"
                      },
                      "value": "1e3"
                    },
                    "src": "14445:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 730,
                  "nodeType": "IfStatement",
                  "src": "14441:138:0",
                  "trueBody": {
                    "id": 729,
                    "nodeType": "Block",
                    "src": "14487:92:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 724,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "14508:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 726,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14539:27:0",
                            "memberName": "InvalidMinimumShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7623,
                            "src": "14508:58:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 727,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14508:60:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 728,
                        "nodeType": "RevertStatement",
                        "src": "14501:67:0"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 731,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 717,
                        "src": "14593:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 732,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14607:18:0",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7162,
                      "src": "14593:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 733,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "14629:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "14593:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 741,
                  "nodeType": "IfStatement",
                  "src": "14589:133:0",
                  "trueBody": {
                    "id": 740,
                    "nodeType": "Block",
                    "src": "14632:90:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 735,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "14653:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 737,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14684:25:0",
                            "memberName": "InvalidCheckpointDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7617,
                            "src": "14653:56:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 738,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14653:58:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 739,
                        "nodeType": "RevertStatement",
                        "src": "14646:65:0"
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
                    "id": 754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 746,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 742,
                          "name": "_deployConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 717,
                          "src": "14748:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                          }
                        },
                        "id": 743,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14762:16:0",
                        "memberName": "positionDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7159,
                        "src": "14748:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 744,
                          "name": "_deployConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 717,
                          "src": "14781:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                          }
                        },
                        "id": 745,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14795:18:0",
                        "memberName": "checkpointDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7162,
                        "src": "14781:32:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14748:65:0",
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
                      "id": 753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 747,
                            "name": "_deployConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 717,
                            "src": "14829:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                            }
                          },
                          "id": 748,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14843:16:0",
                          "memberName": "positionDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7159,
                          "src": "14829:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "expression": {
                            "id": 749,
                            "name": "_deployConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 717,
                            "src": "14862:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                            }
                          },
                          "id": 750,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14876:18:0",
                          "memberName": "checkpointDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7162,
                          "src": "14862:32:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "14829:65:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14910:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "14829:82:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "14748:163:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 761,
                  "nodeType": "IfStatement",
                  "src": "14731:279:0",
                  "trueBody": {
                    "id": 760,
                    "nodeType": "Block",
                    "src": "14922:88:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 755,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "14943:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 757,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14974:23:0",
                            "memberName": "InvalidPositionDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7629,
                            "src": "14943:54:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 758,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14943:56:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 759,
                        "nodeType": "RevertStatement",
                        "src": "14936:63:0"
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
                    "id": 784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 778,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 772,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 766,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 762,
                                "name": "_deployConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 717,
                                "src": "15088:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                }
                              },
                              "id": 763,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "15102:4:0",
                              "memberName": "fees",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7175,
                              "src": "15088:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                                "typeString": "struct IHyperdrive.Fees memory"
                              }
                            },
                            "id": 764,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15107:5:0",
                            "memberName": "curve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7130,
                            "src": "15088:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "31653138",
                            "id": 765,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15115:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          "src": "15088:31:0",
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
                          "id": 771,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "expression": {
                                "id": 767,
                                "name": "_deployConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 717,
                                "src": "15135:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                }
                              },
                              "id": 768,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "15149:4:0",
                              "memberName": "fees",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7175,
                              "src": "15135:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                                "typeString": "struct IHyperdrive.Fees memory"
                              }
                            },
                            "id": 769,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15154:4:0",
                            "memberName": "flat",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7133,
                            "src": "15135:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "31653138",
                            "id": 770,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "15161:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          "src": "15135:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "15088:77:0",
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
                        "id": 777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 773,
                              "name": "_deployConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 717,
                              "src": "15181:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                              }
                            },
                            "id": 774,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15195:4:0",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7175,
                            "src": "15181:18:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 775,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15200:12:0",
                          "memberName": "governanceLP",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7136,
                          "src": "15181:31:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "15215:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "15181:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "15088:131:0",
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
                      "id": 783,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 779,
                            "name": "_deployConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 717,
                            "src": "15235:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                            }
                          },
                          "id": 780,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15249:4:0",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7175,
                          "src": "15235:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 781,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15254:16:0",
                        "memberName": "governanceZombie",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7139,
                        "src": "15235:35:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 782,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15273:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "15235:42:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "15088:189:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 791,
                  "nodeType": "IfStatement",
                  "src": "15071:299:0",
                  "trueBody": {
                    "id": 790,
                    "nodeType": "Block",
                    "src": "15288:82:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 785,
                              "name": "IHyperdriveDeployerCoordinator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7673,
                              "src": "15309:30:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$",
                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                              }
                            },
                            "id": 787,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15340:17:0",
                            "memberName": "InvalidFeeAmounts",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7620,
                            "src": "15309:48:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15309:50:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 789,
                        "nodeType": "RevertStatement",
                        "src": "15302:57:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 714,
              "nodeType": "StructuredDocumentation",
              "src": "14032:144:0",
              "text": "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkPoolConfig",
            "nameLocation": "14190:16:0",
            "parameters": {
              "id": 718,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 717,
                  "mutability": "mutable",
                  "name": "_deployConfig",
                  "nameLocation": "14252:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 793,
                  "src": "14216:49:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 716,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 715,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "14216:11:0",
                        "14228:16:0"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "14216:28:0"
                    },
                    "referencedDeclaration": 7176,
                    "src": "14216:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14206:65:0"
            },
            "returnParameters": {
              "id": 719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14294:0:0"
            },
            "scope": 890,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 801,
            "nodeType": "FunctionDefinition",
            "src": "15596:115:0",
            "nodes": [],
            "documentation": {
              "id": 794,
              "nodeType": "StructuredDocumentation",
              "src": "15382:209:0",
              "text": "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_getInitialVaultSharePrice",
            "nameLocation": "15605:26:0",
            "parameters": {
              "id": 797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 796,
                  "mutability": "mutable",
                  "name": "_extraData",
                  "nameLocation": "15654:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "15641:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 795,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15641:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15631:39:0"
            },
            "returnParameters": {
              "id": 800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 799,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 801,
                  "src": "15702:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15702:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15701:9:0"
            },
            "scope": 890,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 889,
            "nodeType": "FunctionDefinition",
            "src": "15927:926:0",
            "nodes": [],
            "body": {
              "id": 888,
              "nodeType": "Block",
              "src": "16079:774:0",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 811,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16156:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 813,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16164:9:0",
                      "memberName": "baseToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7180,
                      "src": "16156:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$6740",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 814,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16176:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 815,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16190:9:0",
                      "memberName": "baseToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7144,
                      "src": "16176:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$6740",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "16156:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$6740",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 817,
                  "nodeType": "ExpressionStatement",
                  "src": "16156:43:0"
                },
                {
                  "expression": {
                    "id": 823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 818,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16209:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 820,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16217:13:0",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7183,
                      "src": "16209:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 821,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16233:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 822,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16247:13:0",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "16233:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "16209:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 824,
                  "nodeType": "ExpressionStatement",
                  "src": "16209:51:0"
                },
                {
                  "expression": {
                    "id": 830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 825,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16270:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 827,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16278:14:0",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7186,
                      "src": "16270:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 828,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16295:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 829,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16309:14:0",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7150,
                      "src": "16295:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "16270:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 831,
                  "nodeType": "ExpressionStatement",
                  "src": "16270:53:0"
                },
                {
                  "expression": {
                    "id": 837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 832,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16333:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 834,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16341:20:0",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7192,
                      "src": "16333:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 835,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16364:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 836,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16378:20:0",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7153,
                      "src": "16364:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16333:65:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 838,
                  "nodeType": "ExpressionStatement",
                  "src": "16333:65:0"
                },
                {
                  "expression": {
                    "id": 844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 839,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16408:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 841,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16416:24:0",
                      "memberName": "minimumTransactionAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7195,
                      "src": "16408:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 842,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16443:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 843,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16470:24:0",
                      "memberName": "minimumTransactionAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7156,
                      "src": "16443:51:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16408:86:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 845,
                  "nodeType": "ExpressionStatement",
                  "src": "16408:86:0"
                },
                {
                  "expression": {
                    "id": 851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 846,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16504:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 848,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16512:16:0",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7198,
                      "src": "16504:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 849,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16531:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 850,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16545:16:0",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7159,
                      "src": "16531:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16504:57:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 852,
                  "nodeType": "ExpressionStatement",
                  "src": "16504:57:0"
                },
                {
                  "expression": {
                    "id": 858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 853,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16571:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 855,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16579:18:0",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7201,
                      "src": "16571:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 856,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16600:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 857,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16614:18:0",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7162,
                      "src": "16600:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16571:61:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 859,
                  "nodeType": "ExpressionStatement",
                  "src": "16571:61:0"
                },
                {
                  "expression": {
                    "id": 865,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 860,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16642:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 862,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16650:11:0",
                      "memberName": "timeStretch",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7204,
                      "src": "16642:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 863,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16664:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 864,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16678:11:0",
                      "memberName": "timeStretch",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7165,
                      "src": "16664:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16642:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 866,
                  "nodeType": "ExpressionStatement",
                  "src": "16642:47:0"
                },
                {
                  "expression": {
                    "id": 872,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 867,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16699:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 869,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16707:10:0",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7207,
                      "src": "16699:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 870,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16720:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 871,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16734:10:0",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7168,
                      "src": "16720:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "16699:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 873,
                  "nodeType": "ExpressionStatement",
                  "src": "16699:45:0"
                },
                {
                  "expression": {
                    "id": 879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 874,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16754:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 876,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16762:12:0",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7210,
                      "src": "16754:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 877,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16777:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 878,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16791:12:0",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7171,
                      "src": "16777:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "16754:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 880,
                  "nodeType": "ExpressionStatement",
                  "src": "16754:49:0"
                },
                {
                  "expression": {
                    "id": 886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 881,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 809,
                        "src": "16813:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 883,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "16821:4:0",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7214,
                      "src": "16813:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 884,
                        "name": "_deployConfig",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 805,
                        "src": "16828:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                        }
                      },
                      "id": 885,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16842:4:0",
                      "memberName": "fees",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7175,
                      "src": "16828:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                        "typeString": "struct IHyperdrive.Fees memory"
                      }
                    },
                    "src": "16813:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                      "typeString": "struct IHyperdrive.Fees memory"
                    }
                  },
                  "id": 887,
                  "nodeType": "ExpressionStatement",
                  "src": "16813:33:0"
                }
              ]
            },
            "documentation": {
              "id": 802,
              "nodeType": "StructuredDocumentation",
              "src": "15717:205:0",
              "text": "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_copyPoolConfig",
            "nameLocation": "15936:15:0",
            "parameters": {
              "id": 806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 805,
                  "mutability": "mutable",
                  "name": "_deployConfig",
                  "nameLocation": "15997:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "15961:49:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolDeployConfig"
                  },
                  "typeName": {
                    "id": 804,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 803,
                      "name": "IHyperdrive.PoolDeployConfig",
                      "nameLocations": [
                        "15961:11:0",
                        "15973:16:0"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7176,
                      "src": "15961:28:0"
                    },
                    "referencedDeclaration": 7176,
                    "src": "15961:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolDeployConfig_$7176_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolDeployConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15951:65:0"
            },
            "returnParameters": {
              "id": 810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 809,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "16070:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "16040:37:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 808,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 807,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "16040:11:0",
                        "16052:10:0"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "16040:22:0"
                    },
                    "referencedDeclaration": 7215,
                    "src": "16040:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16039:39:0"
            },
            "scope": 890,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 11,
              "name": "IHyperdriveDeployerCoordinator",
              "nameLocations": [
                "946:30:0"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7673,
              "src": "946:30:0"
            },
            "id": 12,
            "nodeType": "InheritanceSpecifier",
            "src": "946:30:0"
          }
        ],
        "canonicalName": "HyperdriveDeployerCoordinator",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 10,
          "nodeType": "StructuredDocumentation",
          "src": "399:492:0",
          "text": "@author DELV\n @title HyperdriveDeployerCoordinator\n @notice This Hyperdrive deployer coordinates the process of deploying the\n         Hyperdrive system utilizing several child deployers.\n @dev We use multiple deployers to avoid the maximum code size.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          890,
          7673
        ],
        "name": "HyperdriveDeployerCoordinator",
        "nameLocation": "909:29:0",
        "scope": 891,
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
  "id": 0
} as const;
