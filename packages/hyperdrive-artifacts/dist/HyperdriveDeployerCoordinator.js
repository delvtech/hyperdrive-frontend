export const HyperdriveDeployerCoordinator = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x43e1779b4fd0634f56574752b969b9aeadf9fe4b5633aa417654027928c3d88e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d758145e49d0a9fa61ac8d04263b093f0f95034c04eb08512092593b0775677e\",\"dweb:/ipfs/QmVfeof8yPxG7DoSJt7jGodQ7YALhQ2zuLabKuQLGCSBbj\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x7d0e883b5d68892df654212a0f4448839358fe66d88728dc2535414edcfb4bdc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d0290659a7ef8ceb30f33617a696b1410d7fd110061eee77419ccce580f5a586\",\"dweb:/ipfs/QmXg2p6zmomxS2B3huDMtgUMSHpstWh3wMYdxt2czs45en\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}",
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
                            "_0": "The address of the newly deployed Hyperdrive instance."
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
                "keccak256": "0x43e1779b4fd0634f56574752b969b9aeadf9fe4b5633aa417654027928c3d88e",
                "urls": [
                    "bzz-raw://d758145e49d0a9fa61ac8d04263b093f0f95034c04eb08512092593b0775677e",
                    "dweb:/ipfs/QmVfeof8yPxG7DoSJt7jGodQ7YALhQ2zuLabKuQLGCSBbj"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCoreDeployer.sol": {
                "keccak256": "0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761",
                "urls": [
                    "bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b",
                    "dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                "keccak256": "0x7d0e883b5d68892df654212a0f4448839358fe66d88728dc2535414edcfb4bdc",
                "urls": [
                    "bzz-raw://d0290659a7ef8ceb30f33617a696b1410d7fd110061eee77419ccce580f5a586",
                    "dweb:/ipfs/QmXg2p6zmomxS2B3huDMtgUMSHpstWh3wMYdxt2czs45en"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveTargetDeployer.sol": {
                "keccak256": "0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205",
                "urls": [
                    "bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed",
                    "dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss"
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
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/deployers/HyperdriveDeployerCoordinator.sol",
        "id": 915,
        "exportedSymbols": {
            "HyperdriveDeployerCoordinator": [
                914
            ],
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveCoreDeployer": [
                7812
            ],
            "IHyperdriveDeployerCoordinator": [
                7888
            ],
            "IHyperdriveTargetDeployer": [
                8400
            ],
            "ONE": [
                14151
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:17336:0",
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
                "scope": 915,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
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
                "scope": 915,
                "sourceUnit": 7813,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4,
                            "name": "IHyperdriveCoreDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7812,
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
                "scope": 915,
                "sourceUnit": 7889,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6,
                            "name": "IHyperdriveDeployerCoordinator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7888,
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
                "scope": 915,
                "sourceUnit": 8401,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8,
                            "name": "IHyperdriveTargetDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8400,
                            "src": "318:25:0",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11,
                "nodeType": "ImportDirective",
                "src": "398:54:0",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 915,
                "sourceUnit": 14918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14151,
                            "src": "407:3:0",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 914,
                "nodeType": "ContractDefinition",
                "src": "946:16428:0",
                "nodes": [
                    {
                        "id": 42,
                        "nodeType": "StructDefinition",
                        "src": "1038:1258:0",
                        "nodes": [],
                        "canonicalName": "HyperdriveDeployerCoordinator.Deployment",
                        "members": [
                            {
                                "constant": false,
                                "id": 17,
                                "mutability": "mutable",
                                "name": "configHash",
                                "nameLocation": "1261:10:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "1253:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                },
                                "typeName": {
                                    "id": 16,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1253:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 20,
                                "mutability": "mutable",
                                "name": "extraDataHash",
                                "nameLocation": "1490:13:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "1482:21:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                },
                                "typeName": {
                                    "id": 19,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1482:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 23,
                                "mutability": "mutable",
                                "name": "initialSharePrice",
                                "nameLocation": "1740:17:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "1732:25:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 22,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1732:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26,
                                "mutability": "mutable",
                                "name": "hyperdrive",
                                "nameLocation": "1834:10:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "1826:18:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 25,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1826:7:0",
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
                                "id": 29,
                                "mutability": "mutable",
                                "name": "target0",
                                "nameLocation": "1926:7:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "1918:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 28,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1918:7:0",
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
                                "id": 32,
                                "mutability": "mutable",
                                "name": "target1",
                                "nameLocation": "2015:7:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "2007:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 31,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2007:7:0",
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
                                "id": 35,
                                "mutability": "mutable",
                                "name": "target2",
                                "nameLocation": "2104:7:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "2096:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 34,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2096:7:0",
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
                                "id": 38,
                                "mutability": "mutable",
                                "name": "target3",
                                "nameLocation": "2193:7:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "2185:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 37,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2185:7:0",
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
                                "id": 41,
                                "mutability": "mutable",
                                "name": "target4",
                                "nameLocation": "2282:7:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 42,
                                "src": "2274:15:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 40,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2274:7:0",
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
                        "nameLocation": "1045:10:0",
                        "scope": 914,
                        "visibility": "public"
                    },
                    {
                        "id": 45,
                        "nodeType": "VariableDeclaration",
                        "src": "2375:37:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 43,
                            "nodeType": "StructuredDocumentation",
                            "src": "2302:68:0",
                            "text": "@notice The contract used to deploy new instances of Hyperdrive."
                        },
                        "functionSelector": "c83e1f51",
                        "mutability": "immutable",
                        "name": "coreDeployer",
                        "nameLocation": "2400:12:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 44,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2375:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 48,
                        "nodeType": "VariableDeclaration",
                        "src": "2499:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 46,
                            "nodeType": "StructuredDocumentation",
                            "src": "2419:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget0."
                        },
                        "functionSelector": "ab71905f",
                        "mutability": "immutable",
                        "name": "target0Deployer",
                        "nameLocation": "2524:15:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 47,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2499:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 51,
                        "nodeType": "VariableDeclaration",
                        "src": "2626:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 49,
                            "nodeType": "StructuredDocumentation",
                            "src": "2546:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget1."
                        },
                        "functionSelector": "a085fa30",
                        "mutability": "immutable",
                        "name": "target1Deployer",
                        "nameLocation": "2651:15:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 50,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2626:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 54,
                        "nodeType": "VariableDeclaration",
                        "src": "2753:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 52,
                            "nodeType": "StructuredDocumentation",
                            "src": "2673:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget2."
                        },
                        "functionSelector": "b6cb1118",
                        "mutability": "immutable",
                        "name": "target2Deployer",
                        "nameLocation": "2778:15:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 53,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2753:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 57,
                        "nodeType": "VariableDeclaration",
                        "src": "2880:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 55,
                            "nodeType": "StructuredDocumentation",
                            "src": "2800:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget3."
                        },
                        "functionSelector": "aa8cd6c4",
                        "mutability": "immutable",
                        "name": "target3Deployer",
                        "nameLocation": "2905:15:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 56,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2880:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 60,
                        "nodeType": "VariableDeclaration",
                        "src": "3007:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 58,
                            "nodeType": "StructuredDocumentation",
                            "src": "2927:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget4."
                        },
                        "functionSelector": "966ecd1c",
                        "mutability": "immutable",
                        "name": "target4Deployer",
                        "nameLocation": "3032:15:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 59,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3007:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 68,
                        "nodeType": "VariableDeclaration",
                        "src": "3126:72:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 61,
                            "nodeType": "StructuredDocumentation",
                            "src": "3054:67:0",
                            "text": "@notice A mapping from deployer to deployment ID to deployment."
                        },
                        "mutability": "mutable",
                        "name": "_deployments",
                        "nameLocation": "3186:12:0",
                        "scope": 914,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                            "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))"
                        },
                        "typeName": {
                            "id": 67,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 62,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3134:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3126:50:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 66,
                                "keyName": "",
                                "keyNameLocation": "-1:-1:-1",
                                "keyType": {
                                    "id": 63,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3153:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "3145:30:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 65,
                                    "nodeType": "UserDefinedTypeName",
                                    "pathNode": {
                                        "id": 64,
                                        "name": "Deployment",
                                        "nameLocations": [
                                            "3164:10:0"
                                        ],
                                        "nodeType": "IdentifierPath",
                                        "referencedDeclaration": 42,
                                        "src": "3164:10:0"
                                    },
                                    "referencedDeclaration": 42,
                                    "src": "3164:10:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                    }
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 109,
                        "nodeType": "FunctionDefinition",
                        "src": "3524:484:0",
                        "nodes": [],
                        "body": {
                            "id": 108,
                            "nodeType": "Block",
                            "src": "3743:265:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 86,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 84,
                                            "name": "coreDeployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 45,
                                            "src": "3753:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 85,
                                            "name": "_coreDeployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71,
                                            "src": "3768:13:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3753:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 87,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3753:28:0"
                                },
                                {
                                    "expression": {
                                        "id": 90,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 88,
                                            "name": "target0Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 48,
                                            "src": "3791:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 89,
                                            "name": "_target0Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73,
                                            "src": "3809:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3791:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 91,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3791:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 94,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 92,
                                            "name": "target1Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 51,
                                            "src": "3835:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 93,
                                            "name": "_target1Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 75,
                                            "src": "3853:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3835:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 95,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3835:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 98,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 96,
                                            "name": "target2Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54,
                                            "src": "3879:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 97,
                                            "name": "_target2Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 77,
                                            "src": "3897:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3879:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 99,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3879:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 102,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 100,
                                            "name": "target3Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 57,
                                            "src": "3923:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 101,
                                            "name": "_target3Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 79,
                                            "src": "3941:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3923:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 103,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3923:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 106,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 104,
                                            "name": "target4Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60,
                                            "src": "3967:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 105,
                                            "name": "_target4Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 81,
                                            "src": "3985:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3967:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 107,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3967:34:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 69,
                            "nodeType": "StructuredDocumentation",
                            "src": "3205:314:0",
                            "text": "@notice Instantiates the deployer coordinator.\n @param _coreDeployer The core deployer.\n @param _target0Deployer The target0 deployer.\n @param _target1Deployer The target1 deployer.\n @param _target2Deployer The target2 deployer.\n @param _target4Deployer The target4 deployer."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 82,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71,
                                    "mutability": "mutable",
                                    "name": "_coreDeployer",
                                    "nameLocation": "3553:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 109,
                                    "src": "3545:21:0",
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
                                        "src": "3545:7:0",
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
                                    "name": "_target0Deployer",
                                    "nameLocation": "3584:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 109,
                                    "src": "3576:24:0",
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
                                        "src": "3576:7:0",
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
                                    "name": "_target1Deployer",
                                    "nameLocation": "3618:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 109,
                                    "src": "3610:24:0",
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
                                        "src": "3610:7:0",
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
                                    "name": "_target2Deployer",
                                    "nameLocation": "3652:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 109,
                                    "src": "3644:24:0",
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
                                        "src": "3644:7:0",
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
                                    "name": "_target3Deployer",
                                    "nameLocation": "3686:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 109,
                                    "src": "3678:24:0",
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
                                        "src": "3678:7:0",
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
                                    "id": 81,
                                    "mutability": "mutable",
                                    "name": "_target4Deployer",
                                    "nameLocation": "3720:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 109,
                                    "src": "3712:24:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 80,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3712:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3535:207:0"
                        },
                        "returnParameters": {
                            "id": 83,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3743:0:0"
                        },
                        "scope": 914,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 307,
                        "nodeType": "FunctionDefinition",
                        "src": "4439:3006:0",
                        "nodes": [],
                        "body": {
                            "id": 306,
                            "nodeType": "Block",
                            "src": "4634:2811:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        126
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 126,
                                            "mutability": "mutable",
                                            "name": "deployment",
                                            "nameLocation": "4742:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 306,
                                            "src": "4724:28:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                            },
                                            "typeName": {
                                                "id": 125,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 124,
                                                    "name": "Deployment",
                                                    "nameLocations": [
                                                        "4724:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 42,
                                                    "src": "4724:10:0"
                                                },
                                                "referencedDeclaration": 42,
                                                "src": "4724:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 133,
                                    "initialValue": {
                                        "baseExpression": {
                                            "baseExpression": {
                                                "id": 127,
                                                "name": "_deployments",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "4755:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                }
                                            },
                                            "id": 130,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 128,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "4768:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 129,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4772:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "4768:10:0",
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
                                            "src": "4755:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                            }
                                        },
                                        "id": 132,
                                        "indexExpression": {
                                            "id": 131,
                                            "name": "_deploymentId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 112,
                                            "src": "4780:13:0",
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
                                        "src": "4755:39:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4724:70:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 134,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "4808:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 135,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4819:10:0",
                                            "memberName": "hyperdrive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26,
                                            "src": "4808:21:0",
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
                                                    "id": 138,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4841:1:0",
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
                                                "id": 137,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4833:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 136,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4833:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 139,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4833:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4808:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 147,
                                    "nodeType": "IfStatement",
                                    "src": "4804:131:0",
                                    "trueBody": {
                                        "id": 146,
                                        "nodeType": "Block",
                                        "src": "4845:90:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 141,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "4866:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 143,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4897:25:0",
                                                        "memberName": "HyperdriveAlreadyDeployed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7828,
                                                        "src": "4866:56:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 144,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4866:58:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 145,
                                                "nodeType": "RevertStatement",
                                                "src": "4859:65:0"
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
                                        "id": 154,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 148,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "5084:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 149,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5095:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17,
                                            "src": "5084:21:0",
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
                                                    "id": 152,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5117:1:0",
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
                                                "id": 151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5109:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                    "typeString": "type(bytes32)"
                                                },
                                                "typeName": {
                                                    "id": 150,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5109:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 153,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5109:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5084:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161,
                                    "nodeType": "IfStatement",
                                    "src": "5080:128:0",
                                    "trueBody": {
                                        "id": 160,
                                        "nodeType": "Block",
                                        "src": "5121:87:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 155,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "5142:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 157,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5173:22:0",
                                                        "memberName": "DeploymentDoesNotExist",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7822,
                                                        "src": "5142:53:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 158,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5142:55:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 159,
                                                "nodeType": "RevertStatement",
                                                "src": "5135:62:0"
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
                                        "id": 200,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 192,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 184,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 176,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 168,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 162,
                                                                "name": "deployment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 126,
                                                                "src": "5297:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                                }
                                                            },
                                                            "id": 163,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5308:7:0",
                                                            "memberName": "target0",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 29,
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
                                                                    "id": 166,
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
                                                                "id": 165,
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
                                                                    "id": 164,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5319:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 167,
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
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "||",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 175,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 169,
                                                                "name": "deployment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 126,
                                                                "src": "5345:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                                }
                                                            },
                                                            "id": 170,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5356:7:0",
                                                            "memberName": "target1",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 32,
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
                                                                    "id": 173,
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
                                                                "id": 172,
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
                                                                    "id": 171,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5367:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 174,
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
                                                    "src": "5297:80:0",
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
                                                    "id": 183,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 177,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 126,
                                                            "src": "5393:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                            }
                                                        },
                                                        "id": 178,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5404:7:0",
                                                        "memberName": "target2",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 35,
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
                                                                "id": 181,
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
                                                            "id": 180,
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
                                                                "id": 179,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5415:7:0",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 182,
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
                                                "src": "5297:128:0",
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
                                                "id": 191,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 185,
                                                        "name": "deployment",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 126,
                                                        "src": "5441:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                        }
                                                    },
                                                    "id": 186,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5452:7:0",
                                                    "memberName": "target3",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 38,
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
                                                            "id": 189,
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
                                                        "id": 188,
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
                                                            "id": 187,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5463:7:0",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 190,
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
                                            "src": "5297:176:0",
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
                                            "id": 199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 193,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "5489:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 194,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5500:7:0",
                                                "memberName": "target4",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 41,
                                                "src": "5489:18:0",
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
                                                        "id": 197,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5519:1:0",
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
                                                    "id": 196,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "5511:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 195,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5511:7:0",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 198,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5511:10:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "5489:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5297:224:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 207,
                                    "nodeType": "IfStatement",
                                    "src": "5280:337:0",
                                    "trueBody": {
                                        "id": 206,
                                        "nodeType": "Block",
                                        "src": "5532:85:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 201,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "5553:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 203,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5584:20:0",
                                                        "memberName": "IncompleteDeployment",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7825,
                                                        "src": "5553:51:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 204,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5553:53:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 205,
                                                "nodeType": "RevertStatement",
                                                "src": "5546:60:0"
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
                                        "id": 216,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 211,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 115,
                                                            "src": "5720:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 209,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "5709:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 210,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5713:6:0",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5709:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 212,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5709:25:0",
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
                                                "id": 208,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "5699:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 213,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5699:36:0",
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
                                                "id": 214,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "5739:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 215,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5750:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17,
                                            "src": "5739:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5699:61:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 223,
                                    "nodeType": "IfStatement",
                                    "src": "5695:148:0",
                                    "trueBody": {
                                        "id": 222,
                                        "nodeType": "Block",
                                        "src": "5762:81:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 217,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "5783:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 219,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5814:16:0",
                                                        "memberName": "MismatchedConfig",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7849,
                                                        "src": "5783:47:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 220,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5783:49:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 221,
                                                "nodeType": "RevertStatement",
                                                "src": "5776:56:0"
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
                                        "id": 229,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 225,
                                                    "name": "_extraData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 117,
                                                    "src": "5943:10:0",
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
                                                "id": 224,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "5933:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 226,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5933:21:0",
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
                                                "id": 227,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "5958:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 228,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5969:13:0",
                                            "memberName": "extraDataHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20,
                                            "src": "5958:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5933:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 236,
                                    "nodeType": "IfStatement",
                                    "src": "5929:139:0",
                                    "trueBody": {
                                        "id": 235,
                                        "nodeType": "Block",
                                        "src": "5984:84:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 230,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "6005:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 232,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6036:19:0",
                                                        "memberName": "MismatchedExtraData",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7852,
                                                        "src": "6005:50:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 233,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6005:52:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 234,
                                                "nodeType": "RevertStatement",
                                                "src": "5998:59:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 238,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "6361:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 237,
                                            "name": "_checkPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 817,
                                            "src": "6344:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                                            }
                                        },
                                        "id": 239,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6344:31:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 240,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6344:31:0"
                                },
                                {
                                    "assignments": [
                                        245
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 245,
                                            "mutability": "mutable",
                                            "name": "config",
                                            "nameLocation": "6524:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 306,
                                            "src": "6494:36:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 244,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 243,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "6494:11:0",
                                                        "6506:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 7407,
                                                    "src": "6494:22:0"
                                                },
                                                "referencedDeclaration": 7407,
                                                "src": "6494:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 249,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 247,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "6549:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 246,
                                            "name": "_copyPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 913,
                                            "src": "6533:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$_t_struct$_PoolConfig_$7407_memory_ptr_$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                                            }
                                        },
                                        "id": 248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6533:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6494:69:0"
                                },
                                {
                                    "expression": {
                                        "id": 255,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 250,
                                                "name": "config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 245,
                                                "src": "6573:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 252,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6580:22:0",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7381,
                                            "src": "6573:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 253,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "6605:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 254,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6616:17:0",
                                            "memberName": "initialSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 23,
                                            "src": "6605:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6573:60:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 256,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6573:60:0"
                                },
                                {
                                    "assignments": [
                                        258
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 258,
                                            "mutability": "mutable",
                                            "name": "deploymentId",
                                            "nameLocation": "6731:12:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 306,
                                            "src": "6723:20:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 257,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6723:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 260,
                                    "initialValue": {
                                        "id": 259,
                                        "name": "_deploymentId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 112,
                                        "src": "6746:13:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6723:36:0"
                                },
                                {
                                    "assignments": [
                                        262
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 262,
                                            "mutability": "mutable",
                                            "name": "salt",
                                            "nameLocation": "6807:4:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 306,
                                            "src": "6799:12:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 261,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6799:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 264,
                                    "initialValue": {
                                        "id": 263,
                                        "name": "_salt",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 119,
                                        "src": "6814:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6799:20:0"
                                },
                                {
                                    "assignments": [
                                        266
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 266,
                                            "mutability": "mutable",
                                            "name": "hyperdrive",
                                            "nameLocation": "6867:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 306,
                                            "src": "6859:18:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 265,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6859:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 293,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 271,
                                                "name": "config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 245,
                                                "src": "6938:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            {
                                                "id": 272,
                                                "name": "_extraData",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 117,
                                                "src": "6958:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 273,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "6982:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 274,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6993:7:0",
                                                "memberName": "target0",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 29,
                                                "src": "6982:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 275,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "7014:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 276,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7025:7:0",
                                                "memberName": "target1",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 32,
                                                "src": "7014:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 277,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "7046:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 278,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7057:7:0",
                                                "memberName": "target2",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 35,
                                                "src": "7046:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 279,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "7078:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 280,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7089:7:0",
                                                "memberName": "target3",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 38,
                                                "src": "7078:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 281,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 126,
                                                    "src": "7110:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 282,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7121:7:0",
                                                "memberName": "target4",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 41,
                                                "src": "7110:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 286,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "7295:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 287,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "7299:6:0",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "7295:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 288,
                                                                "name": "deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 258,
                                                                "src": "7307:12:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 289,
                                                                "name": "salt",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 262,
                                                                "src": "7321:4:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
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
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 284,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "7284:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 285,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7288:6:0",
                                                            "memberName": "encode",
                                                            "nodeType": "MemberAccess",
                                                            "src": "7284:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 290,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7284:42:0",
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
                                                    "id": 283,
                                                    "name": "keccak256",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -8,
                                                    "src": "7274:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                    }
                                                },
                                                "id": 291,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7274:53:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
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
                                                        "id": 268,
                                                        "name": "coreDeployer",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 45,
                                                        "src": "6904:12:0",
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
                                                    "id": 267,
                                                    "name": "IHyperdriveCoreDeployer",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 7812,
                                                    "src": "6880:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveCoreDeployer_$7812_$",
                                                        "typeString": "type(contract IHyperdriveCoreDeployer)"
                                                    }
                                                },
                                                "id": 269,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6880:37:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdriveCoreDeployer_$7812",
                                                    "typeString": "contract IHyperdriveCoreDeployer"
                                                }
                                            },
                                            "id": 270,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6918:6:0",
                                            "memberName": "deploy",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7811,
                                            "src": "6880:44:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$",
                                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,address,address,address,address,address,bytes32) external returns (address)"
                                            }
                                        },
                                        "id": 292,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6880:457:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6859:478:0"
                                },
                                {
                                    "expression": {
                                        "id": 302,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "baseExpression": {
                                                    "baseExpression": {
                                                        "id": 294,
                                                        "name": "_deployments",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 68,
                                                        "src": "7347:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                            "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                        }
                                                    },
                                                    "id": 298,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 295,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "7360:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 296,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7364:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7360:10:0",
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
                                                    "src": "7347:24:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                    }
                                                },
                                                "id": 299,
                                                "indexExpression": {
                                                    "id": 297,
                                                    "name": "_deploymentId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 112,
                                                    "src": "7372:13:0",
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
                                                "src": "7347:39:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                }
                                            },
                                            "id": 300,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7387:10:0",
                                            "memberName": "hyperdrive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26,
                                            "src": "7347:50:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 301,
                                            "name": "hyperdrive",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 266,
                                            "src": "7400:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7347:63:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 303,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7347:63:0"
                                },
                                {
                                    "expression": {
                                        "id": 304,
                                        "name": "hyperdrive",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 266,
                                        "src": "7428:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 123,
                                    "id": 305,
                                    "nodeType": "Return",
                                    "src": "7421:17:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7870
                        ],
                        "documentation": {
                            "id": 110,
                            "nodeType": "StructuredDocumentation",
                            "src": "4014:420:0",
                            "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance."
                        },
                        "functionSelector": "c47e90c4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "4448:6:0",
                        "parameters": {
                            "id": 120,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 112,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "4472:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 307,
                                    "src": "4464:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 111,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4464:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 115,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "4531:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 307,
                                    "src": "4495:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 114,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 113,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "4495:11:0",
                                                "4507:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7368,
                                            "src": "4495:28:0"
                                        },
                                        "referencedDeclaration": 7368,
                                        "src": "4495:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 117,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "4567:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 307,
                                    "src": "4554:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 116,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4554:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 119,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "4595:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 307,
                                    "src": "4587:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 118,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4587:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4454:152:0"
                        },
                        "returnParameters": {
                            "id": 123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 122,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 307,
                                    "src": "4625:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 121,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4625:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4624:9:0"
                        },
                        "scope": 914,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 719,
                        "nodeType": "FunctionDefinition",
                        "src": "8078:6076:0",
                        "nodes": [],
                        "body": {
                            "id": 718,
                            "nodeType": "Block",
                            "src": "8316:5838:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 326,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 324,
                                            "name": "_targetIndex",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 317,
                                            "src": "8571:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 325,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "8587:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "8571:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 448,
                                    "nodeType": "IfStatement",
                                    "src": "8567:1981:0",
                                    "trueBody": {
                                        "id": 447,
                                        "nodeType": "Block",
                                        "src": "8590:1958:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 338,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 327,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "8768:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 330,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 328,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "8781:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 329,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "8785:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "8781:10:0",
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
                                                                "src": "8768:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 332,
                                                            "indexExpression": {
                                                                "id": 331,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "8793:13:0",
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
                                                            "src": "8768:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 333,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8808:10:0",
                                                        "memberName": "configHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17,
                                                        "src": "8768:50:0",
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
                                                                "id": 336,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "8830:1:0",
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
                                                            "id": 335,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "8822:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes32_$",
                                                                "typeString": "type(bytes32)"
                                                            },
                                                            "typeName": {
                                                                "id": 334,
                                                                "name": "bytes32",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "8822:7:0",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 337,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8822:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "8768:64:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 345,
                                                "nodeType": "IfStatement",
                                                "src": "8747:196:0",
                                                "trueBody": {
                                                    "id": 344,
                                                    "nodeType": "Block",
                                                    "src": "8847:96:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 339,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 7888,
                                                                        "src": "8872:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 341,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "8903:23:0",
                                                                    "memberName": "DeploymentAlreadyExists",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7819,
                                                                    "src": "8872:54:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 342,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8872:56:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 343,
                                                            "nodeType": "RevertStatement",
                                                            "src": "8865:63:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 347,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 313,
                                                            "src": "9094:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "id": 346,
                                                        "name": "_checkPoolConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 817,
                                                        "src": "9077:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$__$",
                                                            "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                                                        }
                                                    },
                                                    "id": 348,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9077:31:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 349,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9077:31:0"
                                            },
                                            {
                                                "assignments": [
                                                    351
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 351,
                                                        "mutability": "mutable",
                                                        "name": "initialSharePrice",
                                                        "nameLocation": "9234:17:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 447,
                                                        "src": "9226:25:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 350,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9226:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 355,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 353,
                                                            "name": "_extraData",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 315,
                                                            "src": "9281:10:0",
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
                                                        "id": 352,
                                                        "name": "_getInitialVaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 825,
                                                        "src": "9254:26:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_bytes_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (bytes memory) view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 354,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9254:38:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9226:66:0"
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
                                                        "name": "configHash_",
                                                        "nameLocation": "9314:11:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 447,
                                                        "src": "9306:19:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 356,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9306:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 364,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 361,
                                                                    "name": "_deployConfig",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 313,
                                                                    "src": "9349:13:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 359,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "9338:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 360,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "9342:6:0",
                                                                "memberName": "encode",
                                                                "nodeType": "MemberAccess",
                                                                "src": "9338:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 362,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "9338:25:0",
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
                                                        "id": 358,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "9328:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 363,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9328:36:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9306:58:0"
                                            },
                                            {
                                                "assignments": [
                                                    366
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 366,
                                                        "mutability": "mutable",
                                                        "name": "extraDataHash",
                                                        "nameLocation": "9386:13:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 447,
                                                        "src": "9378:21:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 365,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9378:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 370,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 368,
                                                            "name": "_extraData",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 315,
                                                            "src": "9412:10:0",
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
                                                        "id": 367,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "9402:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 369,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9402:21:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9378:45:0"
                                            },
                                            {
                                                "assignments": [
                                                    375
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 375,
                                                        "mutability": "mutable",
                                                        "name": "config_",
                                                        "nameLocation": "9584:7:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 447,
                                                        "src": "9554:37:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "memory",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig"
                                                        },
                                                        "typeName": {
                                                            "id": 374,
                                                            "nodeType": "UserDefinedTypeName",
                                                            "pathNode": {
                                                                "id": 373,
                                                                "name": "IHyperdrive.PoolConfig",
                                                                "nameLocations": [
                                                                    "9554:11:0",
                                                                    "9566:10:0"
                                                                ],
                                                                "nodeType": "IdentifierPath",
                                                                "referencedDeclaration": 7407,
                                                                "src": "9554:22:0"
                                                            },
                                                            "referencedDeclaration": 7407,
                                                            "src": "9554:22:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 379,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 377,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 313,
                                                            "src": "9627:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "id": 376,
                                                        "name": "_copyPoolConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 913,
                                                        "src": "9594:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$_t_struct$_PoolConfig_$7407_memory_ptr_$",
                                                            "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                                                        }
                                                    },
                                                    "id": 378,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9594:60:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9554:100:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 384,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 380,
                                                            "name": "config_",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 375,
                                                            "src": "9668:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        },
                                                        "id": 382,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "9676:22:0",
                                                        "memberName": "initialVaultSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7381,
                                                        "src": "9668:30:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 383,
                                                        "name": "initialSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 351,
                                                        "src": "9701:17:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9668:50:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 385,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9668:50:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 403,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 386,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 322,
                                                        "src": "9777:6:0",
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
                                                                "id": 391,
                                                                "name": "config_",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 375,
                                                                "src": "9853:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 392,
                                                                "name": "_extraData",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 315,
                                                                "src": "9878:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 396,
                                                                                    "name": "msg",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -15,
                                                                                    "src": "10067:3:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_message",
                                                                                        "typeString": "msg"
                                                                                    }
                                                                                },
                                                                                "id": 397,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "10071:6:0",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "10067:10:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 398,
                                                                                "name": "_deploymentId",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 310,
                                                                                "src": "10079:13:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 399,
                                                                                "name": "_salt",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 319,
                                                                                "src": "10094:5:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
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
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                },
                                                                                {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            ],
                                                                            "expression": {
                                                                                "id": 394,
                                                                                "name": "abi",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -1,
                                                                                "src": "10056:3:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                    "typeString": "abi"
                                                                                }
                                                                            },
                                                                            "id": 395,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "10060:6:0",
                                                                            "memberName": "encode",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "10056:10:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                "typeString": "function () pure returns (bytes memory)"
                                                                            }
                                                                        },
                                                                        "id": 400,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "10056:44:0",
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
                                                                    "id": 393,
                                                                    "name": "keccak256",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -8,
                                                                    "src": "10046:9:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                    }
                                                                },
                                                                "id": 401,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10046:55:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
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
                                                                        "id": 388,
                                                                        "name": "target0Deployer",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 48,
                                                                        "src": "9812:15:0",
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
                                                                    "id": 387,
                                                                    "name": "IHyperdriveTargetDeployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 8400,
                                                                    "src": "9786:25:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$",
                                                                        "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                    }
                                                                },
                                                                "id": 389,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9786:42:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8400",
                                                                    "typeString": "contract IHyperdriveTargetDeployer"
                                                                }
                                                            },
                                                            "id": 390,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9829:6:0",
                                                            "memberName": "deploy",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 8399,
                                                            "src": "9786:49:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                            }
                                                        },
                                                        "id": 402,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9786:329:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "9777:338:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 404,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9777:338:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 413,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 405,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "10167:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 409,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 406,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "10180:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 407,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "10184:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "10180:10:0",
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
                                                                "src": "10167:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 410,
                                                            "indexExpression": {
                                                                "id": 408,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "10192:13:0",
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
                                                            "src": "10167:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 411,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10207:10:0",
                                                        "memberName": "configHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17,
                                                        "src": "10167:50:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 412,
                                                        "name": "configHash_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 357,
                                                        "src": "10220:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "10167:64:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 414,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10167:64:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 423,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 415,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "10245:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 419,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 416,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "10258:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 417,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "10262:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "10258:10:0",
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
                                                                "src": "10245:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 420,
                                                            "indexExpression": {
                                                                "id": 418,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "10270:13:0",
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
                                                            "src": "10245:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 421,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10302:13:0",
                                                        "memberName": "extraDataHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 20,
                                                        "src": "10245:70:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 422,
                                                        "name": "extraDataHash",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 366,
                                                        "src": "10318:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "10245:86:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 424,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10245:86:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 433,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 425,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "10345:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 429,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 426,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "10358:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 427,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "10362:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "10358:10:0",
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
                                                                "src": "10345:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 430,
                                                            "indexExpression": {
                                                                "id": 428,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "10370:13:0",
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
                                                            "src": "10345:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 431,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10402:17:0",
                                                        "memberName": "initialSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 23,
                                                        "src": "10345:74:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 432,
                                                        "name": "initialSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 351,
                                                        "src": "10422:17:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "10345:94:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 434,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10345:94:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 443,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 435,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "10453:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 439,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 436,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "10466:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 437,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "10470:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "10466:10:0",
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
                                                                "src": "10453:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 440,
                                                            "indexExpression": {
                                                                "id": 438,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "10478:13:0",
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
                                                            "src": "10453:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 441,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10493:7:0",
                                                        "memberName": "target0",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 29,
                                                        "src": "10453:47:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 442,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 322,
                                                        "src": "10503:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "10453:56:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 444,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10453:56:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 445,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 322,
                                                    "src": "10531:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "functionReturnParameters": 323,
                                                "id": 446,
                                                "nodeType": "Return",
                                                "src": "10524:13:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        450
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 450,
                                            "mutability": "mutable",
                                            "name": "configHash",
                                            "nameLocation": "10701:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 718,
                                            "src": "10693:18:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 449,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10693:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 458,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 451,
                                                    "name": "_deployments",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 68,
                                                    "src": "10714:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                    }
                                                },
                                                "id": 454,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 452,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "10727:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 453,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10731:6:0",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "10727:10:0",
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
                                                "src": "10714:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                }
                                            },
                                            "id": 456,
                                            "indexExpression": {
                                                "id": 455,
                                                "name": "_deploymentId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 310,
                                                "src": "10739:13:0",
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
                                            "src": "10714:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                            }
                                        },
                                        "id": 457,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "10754:10:0",
                                        "memberName": "configHash",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 17,
                                        "src": "10714:50:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10693:71:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 459,
                                            "name": "configHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 450,
                                            "src": "10778:10:0",
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
                                                    "id": 462,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "10800:1:0",
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
                                                "id": 461,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "10792:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                    "typeString": "type(bytes32)"
                                                },
                                                "typeName": {
                                                    "id": 460,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "10792:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 463,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "10792:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "10778:24:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 471,
                                    "nodeType": "IfStatement",
                                    "src": "10774:117:0",
                                    "trueBody": {
                                        "id": 470,
                                        "nodeType": "Block",
                                        "src": "10804:87:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 465,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "10825:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 467,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10856:22:0",
                                                        "memberName": "DeploymentDoesNotExist",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7822,
                                                        "src": "10825:53:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 468,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10825:55:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 469,
                                                "nodeType": "RevertStatement",
                                                "src": "10818:62:0"
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
                                        "id": 479,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 475,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 313,
                                                            "src": "10994:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 473,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "10983:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 474,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10987:6:0",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "10983:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 476,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10983:25:0",
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
                                                "id": 472,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "10973:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
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
                                            "src": "10973:36:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 478,
                                            "name": "configHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 450,
                                            "src": "11013:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "10973:50:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 486,
                                    "nodeType": "IfStatement",
                                    "src": "10969:137:0",
                                    "trueBody": {
                                        "id": 485,
                                        "nodeType": "Block",
                                        "src": "11025:81:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 480,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "11046:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 482,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11077:16:0",
                                                        "memberName": "MismatchedConfig",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7849,
                                                        "src": "11046:47:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
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
                                                    "src": "11046:49:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 484,
                                                "nodeType": "RevertStatement",
                                                "src": "11039:56:0"
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
                                        "id": 497,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 488,
                                                    "name": "_extraData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 315,
                                                    "src": "11219:10:0",
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
                                                "id": 487,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "11209:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 489,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11209:21:0",
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
                                                        "id": 490,
                                                        "name": "_deployments",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 68,
                                                        "src": "11246:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                            "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                        }
                                                    },
                                                    "id": 493,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 491,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "11259:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 492,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11263:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "11259:10:0",
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
                                                    "src": "11246:24:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                    }
                                                },
                                                "id": 495,
                                                "indexExpression": {
                                                    "id": 494,
                                                    "name": "_deploymentId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 310,
                                                    "src": "11271:13:0",
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
                                                "src": "11246:39:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                }
                                            },
                                            "id": 496,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "11286:13:0",
                                            "memberName": "extraDataHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20,
                                            "src": "11246:53:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "11209:90:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 504,
                                    "nodeType": "IfStatement",
                                    "src": "11192:202:0",
                                    "trueBody": {
                                        "id": 503,
                                        "nodeType": "Block",
                                        "src": "11310:84:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 498,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "11331:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 500,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11362:19:0",
                                                        "memberName": "MismatchedExtraData",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7852,
                                                        "src": "11331:50:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 501,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11331:52:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 502,
                                                "nodeType": "RevertStatement",
                                                "src": "11324:59:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 506,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 313,
                                                "src": "11687:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 505,
                                            "name": "_checkPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 817,
                                            "src": "11670:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                                            }
                                        },
                                        "id": 507,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11670:31:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 508,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11670:31:0"
                                },
                                {
                                    "assignments": [
                                        513
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 513,
                                            "mutability": "mutable",
                                            "name": "config",
                                            "nameLocation": "11850:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 718,
                                            "src": "11820:36:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 512,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 511,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "11820:11:0",
                                                        "11832:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 7407,
                                                    "src": "11820:22:0"
                                                },
                                                "referencedDeclaration": 7407,
                                                "src": "11820:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 517,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 515,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 313,
                                                "src": "11875:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 514,
                                            "name": "_copyPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 913,
                                            "src": "11859:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$_t_struct$_PoolConfig_$7407_memory_ptr_$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                                            }
                                        },
                                        "id": 516,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11859:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11820:69:0"
                                },
                                {
                                    "expression": {
                                        "id": 528,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 518,
                                                "name": "config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 513,
                                                "src": "11899:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 520,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "11906:22:0",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7381,
                                            "src": "11899:29:0",
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
                                                        "id": 521,
                                                        "name": "_deployments",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 68,
                                                        "src": "11931:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                            "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                        }
                                                    },
                                                    "id": 524,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 522,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "11944:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 523,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11948:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "11944:10:0",
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
                                                    "src": "11931:24:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                    }
                                                },
                                                "id": 526,
                                                "indexExpression": {
                                                    "id": 525,
                                                    "name": "_deploymentId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 310,
                                                    "src": "11956:13:0",
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
                                                "src": "11931:39:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                }
                                            },
                                            "id": 527,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "11984:17:0",
                                            "memberName": "initialSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 23,
                                            "src": "11931:70:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "11899:102:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 529,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11899:102:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 532,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 530,
                                            "name": "_targetIndex",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 317,
                                            "src": "12265:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 531,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "12281:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "12265:17:0",
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
                                            "id": 576,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 574,
                                                "name": "_targetIndex",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 317,
                                                "src": "12710:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "32",
                                                "id": 575,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "12726:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_2_by_1",
                                                    "typeString": "int_const 2"
                                                },
                                                "value": "2"
                                            },
                                            "src": "12710:17:0",
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
                                                "id": 620,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 618,
                                                    "name": "_targetIndex",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 317,
                                                    "src": "13155:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "hexValue": "33",
                                                    "id": 619,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "13171:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_3_by_1",
                                                        "typeString": "int_const 3"
                                                    },
                                                    "value": "3"
                                                },
                                                "src": "13155:17:0",
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
                                                    "id": 664,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 662,
                                                        "name": "_targetIndex",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 317,
                                                        "src": "13600:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "34",
                                                        "id": 663,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "13616:1:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_4_by_1",
                                                            "typeString": "int_const 4"
                                                        },
                                                        "value": "4"
                                                    },
                                                    "src": "13600:17:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 711,
                                                    "nodeType": "Block",
                                                    "src": "14041:83:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 706,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 7888,
                                                                        "src": "14062:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 708,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "14093:18:0",
                                                                    "memberName": "InvalidTargetIndex",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7846,
                                                                    "src": "14062:49:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 709,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "14062:51:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 710,
                                                            "nodeType": "RevertStatement",
                                                            "src": "14055:58:0"
                                                        }
                                                    ]
                                                },
                                                "id": 712,
                                                "nodeType": "IfStatement",
                                                "src": "13596:528:0",
                                                "trueBody": {
                                                    "id": 705,
                                                    "nodeType": "Block",
                                                    "src": "13619:416:0",
                                                    "statements": [
                                                        {
                                                            "condition": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                "id": 676,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "expression": {
                                                                        "baseExpression": {
                                                                            "baseExpression": {
                                                                                "id": 665,
                                                                                "name": "_deployments",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 68,
                                                                                "src": "13637:12:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                                }
                                                                            },
                                                                            "id": 668,
                                                                            "indexExpression": {
                                                                                "expression": {
                                                                                    "id": 666,
                                                                                    "name": "msg",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -15,
                                                                                    "src": "13650:3:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_message",
                                                                                        "typeString": "msg"
                                                                                    }
                                                                                },
                                                                                "id": 667,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13654:6:0",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "13650:10:0",
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
                                                                            "src": "13637:24:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                            }
                                                                        },
                                                                        "id": 670,
                                                                        "indexExpression": {
                                                                            "id": 669,
                                                                            "name": "_deploymentId",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 310,
                                                                            "src": "13662:13:0",
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
                                                                        "src": "13637:39:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                                        }
                                                                    },
                                                                    "id": 671,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "13677:7:0",
                                                                    "memberName": "target4",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 41,
                                                                    "src": "13637:47:0",
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
                                                                            "id": 674,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "13696:1:0",
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
                                                                        "id": 673,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "13688:7:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 672,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "13688:7:0",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 675,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "13688:10:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13637:61:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 683,
                                                            "nodeType": "IfStatement",
                                                            "src": "13633:161:0",
                                                            "trueBody": {
                                                                "id": 682,
                                                                "nodeType": "Block",
                                                                "src": "13700:94:0",
                                                                "statements": [
                                                                    {
                                                                        "errorCall": {
                                                                            "arguments": [],
                                                                            "expression": {
                                                                                "argumentTypes": [],
                                                                                "expression": {
                                                                                    "id": 677,
                                                                                    "name": "IHyperdriveDeployerCoordinator",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 7888,
                                                                                    "src": "13725:30:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                                        "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                                    }
                                                                                },
                                                                                "id": 679,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13756:21:0",
                                                                                "memberName": "TargetAlreadyDeployed",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 7855,
                                                                                "src": "13725:52:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                                    "typeString": "function () pure"
                                                                                }
                                                                            },
                                                                            "id": 680,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "13725:54:0",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_tuple$__$",
                                                                                "typeString": "tuple()"
                                                                            }
                                                                        },
                                                                        "id": 681,
                                                                        "nodeType": "RevertStatement",
                                                                        "src": "13718:61:0"
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 693,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 684,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 322,
                                                                    "src": "13807:6:0",
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
                                                                            "id": 689,
                                                                            "name": "config",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 513,
                                                                            "src": "13883:6:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": 690,
                                                                            "name": "_extraData",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 315,
                                                                            "src": "13907:10:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                                "typeString": "bytes memory"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": 691,
                                                                            "name": "_salt",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 319,
                                                                            "src": "13935:5:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
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
                                                                                    "id": 686,
                                                                                    "name": "target4Deployer",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 60,
                                                                                    "src": "13842:15:0",
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
                                                                                "id": 685,
                                                                                "name": "IHyperdriveTargetDeployer",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 8400,
                                                                                "src": "13816:25:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$",
                                                                                    "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                                }
                                                                            },
                                                                            "id": 687,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "13816:42:0",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8400",
                                                                                "typeString": "contract IHyperdriveTargetDeployer"
                                                                            }
                                                                        },
                                                                        "id": 688,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "13859:6:0",
                                                                        "memberName": "deploy",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 8399,
                                                                        "src": "13816:49:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                            "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                                        }
                                                                    },
                                                                    "id": 692,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "13816:138:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13807:147:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "id": 694,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "13807:147:0"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 703,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "expression": {
                                                                        "baseExpression": {
                                                                            "baseExpression": {
                                                                                "id": 695,
                                                                                "name": "_deployments",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 68,
                                                                                "src": "13968:12:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                                }
                                                                            },
                                                                            "id": 699,
                                                                            "indexExpression": {
                                                                                "expression": {
                                                                                    "id": 696,
                                                                                    "name": "msg",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -15,
                                                                                    "src": "13981:3:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_message",
                                                                                        "typeString": "msg"
                                                                                    }
                                                                                },
                                                                                "id": 697,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13985:6:0",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "13981:10:0",
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
                                                                            "src": "13968:24:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                            }
                                                                        },
                                                                        "id": 700,
                                                                        "indexExpression": {
                                                                            "id": 698,
                                                                            "name": "_deploymentId",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 310,
                                                                            "src": "13993:13:0",
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
                                                                        "src": "13968:39:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                                        }
                                                                    },
                                                                    "id": 701,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "memberLocation": "14008:7:0",
                                                                    "memberName": "target4",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 41,
                                                                    "src": "13968:47:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "id": 702,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 322,
                                                                    "src": "14018:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13968:56:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "id": 704,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "13968:56:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            "id": 713,
                                            "nodeType": "IfStatement",
                                            "src": "13151:973:0",
                                            "trueBody": {
                                                "id": 661,
                                                "nodeType": "Block",
                                                "src": "13174:416:0",
                                                "statements": [
                                                    {
                                                        "condition": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "id": 632,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "baseExpression": {
                                                                        "baseExpression": {
                                                                            "id": 621,
                                                                            "name": "_deployments",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 68,
                                                                            "src": "13192:12:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                                "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                            }
                                                                        },
                                                                        "id": 624,
                                                                        "indexExpression": {
                                                                            "expression": {
                                                                                "id": 622,
                                                                                "name": "msg",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -15,
                                                                                "src": "13205:3:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_message",
                                                                                    "typeString": "msg"
                                                                                }
                                                                            },
                                                                            "id": 623,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "13209:6:0",
                                                                            "memberName": "sender",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "13205:10:0",
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
                                                                        "src": "13192:24:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 626,
                                                                    "indexExpression": {
                                                                        "id": 625,
                                                                        "name": "_deploymentId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 310,
                                                                        "src": "13217:13:0",
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
                                                                    "src": "13192:39:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                                    }
                                                                },
                                                                "id": 627,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "13232:7:0",
                                                                "memberName": "target3",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 38,
                                                                "src": "13192:47:0",
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
                                                                        "id": 630,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "13251:1:0",
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
                                                                    "id": 629,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "13243:7:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 628,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "13243:7:0",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 631,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "13243:10:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "13192:61:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "id": 639,
                                                        "nodeType": "IfStatement",
                                                        "src": "13188:161:0",
                                                        "trueBody": {
                                                            "id": 638,
                                                            "nodeType": "Block",
                                                            "src": "13255:94:0",
                                                            "statements": [
                                                                {
                                                                    "errorCall": {
                                                                        "arguments": [],
                                                                        "expression": {
                                                                            "argumentTypes": [],
                                                                            "expression": {
                                                                                "id": 633,
                                                                                "name": "IHyperdriveDeployerCoordinator",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 7888,
                                                                                "src": "13280:30:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                                    "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                                }
                                                                            },
                                                                            "id": 635,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "13311:21:0",
                                                                            "memberName": "TargetAlreadyDeployed",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": 7855,
                                                                            "src": "13280:52:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                                "typeString": "function () pure"
                                                                            }
                                                                        },
                                                                        "id": 636,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "13280:54:0",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_tuple$__$",
                                                                            "typeString": "tuple()"
                                                                        }
                                                                    },
                                                                    "id": 637,
                                                                    "nodeType": "RevertStatement",
                                                                    "src": "13273:61:0"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 649,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "id": 640,
                                                                "name": "target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 322,
                                                                "src": "13362:6:0",
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
                                                                        "id": 645,
                                                                        "name": "config",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 513,
                                                                        "src": "13438:6:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 646,
                                                                        "name": "_extraData",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 315,
                                                                        "src": "13462:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 647,
                                                                        "name": "_salt",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 319,
                                                                        "src": "13490:5:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
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
                                                                                "id": 642,
                                                                                "name": "target3Deployer",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 57,
                                                                                "src": "13397:15:0",
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
                                                                            "id": 641,
                                                                            "name": "IHyperdriveTargetDeployer",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 8400,
                                                                            "src": "13371:25:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$",
                                                                                "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                            }
                                                                        },
                                                                        "id": 643,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "13371:42:0",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8400",
                                                                            "typeString": "contract IHyperdriveTargetDeployer"
                                                                        }
                                                                    },
                                                                    "id": 644,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "13414:6:0",
                                                                    "memberName": "deploy",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 8399,
                                                                    "src": "13371:49:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                                    }
                                                                },
                                                                "id": 648,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "13371:138:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "13362:147:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 650,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "13362:147:0"
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 659,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "expression": {
                                                                    "baseExpression": {
                                                                        "baseExpression": {
                                                                            "id": 651,
                                                                            "name": "_deployments",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 68,
                                                                            "src": "13523:12:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                                "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                            }
                                                                        },
                                                                        "id": 655,
                                                                        "indexExpression": {
                                                                            "expression": {
                                                                                "id": 652,
                                                                                "name": "msg",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -15,
                                                                                "src": "13536:3:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_message",
                                                                                    "typeString": "msg"
                                                                                }
                                                                            },
                                                                            "id": 653,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "13540:6:0",
                                                                            "memberName": "sender",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "13536:10:0",
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
                                                                        "src": "13523:24:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 656,
                                                                    "indexExpression": {
                                                                        "id": 654,
                                                                        "name": "_deploymentId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 310,
                                                                        "src": "13548:13:0",
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
                                                                    "src": "13523:39:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                                    }
                                                                },
                                                                "id": 657,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": true,
                                                                "memberLocation": "13563:7:0",
                                                                "memberName": "target3",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 38,
                                                                "src": "13523:47:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "nodeType": "Assignment",
                                                            "operator": "=",
                                                            "rightHandSide": {
                                                                "id": 658,
                                                                "name": "target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 322,
                                                                "src": "13573:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "13523:56:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 660,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "13523:56:0"
                                                    }
                                                ]
                                            }
                                        },
                                        "id": 714,
                                        "nodeType": "IfStatement",
                                        "src": "12706:1418:0",
                                        "trueBody": {
                                            "id": 617,
                                            "nodeType": "Block",
                                            "src": "12729:416:0",
                                            "statements": [
                                                {
                                                    "condition": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 588,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "baseExpression": {
                                                                        "id": 577,
                                                                        "name": "_deployments",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 68,
                                                                        "src": "12747:12:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                            "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                        }
                                                                    },
                                                                    "id": 580,
                                                                    "indexExpression": {
                                                                        "expression": {
                                                                            "id": 578,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -15,
                                                                            "src": "12760:3:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 579,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "12764:6:0",
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "12760:10:0",
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
                                                                    "src": "12747:24:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                    }
                                                                },
                                                                "id": 582,
                                                                "indexExpression": {
                                                                    "id": 581,
                                                                    "name": "_deploymentId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 310,
                                                                    "src": "12772:13:0",
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
                                                                "src": "12747:39:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                                }
                                                            },
                                                            "id": 583,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "12787:7:0",
                                                            "memberName": "target2",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 35,
                                                            "src": "12747:47:0",
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
                                                                    "id": 586,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "12806:1:0",
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
                                                                "id": 585,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "12798:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 584,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "12798:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 587,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "12798:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "12747:61:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 595,
                                                    "nodeType": "IfStatement",
                                                    "src": "12743:161:0",
                                                    "trueBody": {
                                                        "id": 594,
                                                        "nodeType": "Block",
                                                        "src": "12810:94:0",
                                                        "statements": [
                                                            {
                                                                "errorCall": {
                                                                    "arguments": [],
                                                                    "expression": {
                                                                        "argumentTypes": [],
                                                                        "expression": {
                                                                            "id": 589,
                                                                            "name": "IHyperdriveDeployerCoordinator",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 7888,
                                                                            "src": "12835:30:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                            }
                                                                        },
                                                                        "id": 591,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "12866:21:0",
                                                                        "memberName": "TargetAlreadyDeployed",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 7855,
                                                                        "src": "12835:52:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 592,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "12835:54:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_tuple$__$",
                                                                        "typeString": "tuple()"
                                                                    }
                                                                },
                                                                "id": 593,
                                                                "nodeType": "RevertStatement",
                                                                "src": "12828:61:0"
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 605,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "id": 596,
                                                            "name": "target",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 322,
                                                            "src": "12917:6:0",
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
                                                                    "id": 601,
                                                                    "name": "config",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 513,
                                                                    "src": "12993:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 602,
                                                                    "name": "_extraData",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 315,
                                                                    "src": "13017:10:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes memory"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 603,
                                                                    "name": "_salt",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 319,
                                                                    "src": "13045:5:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
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
                                                                            "id": 598,
                                                                            "name": "target2Deployer",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 54,
                                                                            "src": "12952:15:0",
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
                                                                        "id": 597,
                                                                        "name": "IHyperdriveTargetDeployer",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 8400,
                                                                        "src": "12926:25:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$",
                                                                            "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                        }
                                                                    },
                                                                    "id": 599,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "12926:42:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8400",
                                                                        "typeString": "contract IHyperdriveTargetDeployer"
                                                                    }
                                                                },
                                                                "id": 600,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "12969:6:0",
                                                                "memberName": "deploy",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 8399,
                                                                "src": "12926:49:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                    "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                                }
                                                            },
                                                            "id": 604,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "12926:138:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "12917:147:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 606,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "12917:147:0"
                                                },
                                                {
                                                    "expression": {
                                                        "id": 615,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "baseExpression": {
                                                                        "id": 607,
                                                                        "name": "_deployments",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 68,
                                                                        "src": "13078:12:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                            "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                        }
                                                                    },
                                                                    "id": 611,
                                                                    "indexExpression": {
                                                                        "expression": {
                                                                            "id": 608,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -15,
                                                                            "src": "13091:3:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 609,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "13095:6:0",
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "13091:10:0",
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
                                                                    "src": "13078:24:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                    }
                                                                },
                                                                "id": 612,
                                                                "indexExpression": {
                                                                    "id": 610,
                                                                    "name": "_deploymentId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 310,
                                                                    "src": "13103:13:0",
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
                                                                "src": "13078:39:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                                }
                                                            },
                                                            "id": 613,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "memberLocation": "13118:7:0",
                                                            "memberName": "target2",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 35,
                                                            "src": "13078:47:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "id": 614,
                                                            "name": "target",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 322,
                                                            "src": "13128:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "13078:56:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 616,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "13078:56:0"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 715,
                                    "nodeType": "IfStatement",
                                    "src": "12261:1863:0",
                                    "trueBody": {
                                        "id": 573,
                                        "nodeType": "Block",
                                        "src": "12284:416:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 544,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 533,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "12302:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 536,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 534,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "12315:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 535,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12319:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "12315:10:0",
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
                                                                "src": "12302:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 538,
                                                            "indexExpression": {
                                                                "id": 537,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "12327:13:0",
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
                                                            "src": "12302:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 539,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12342:7:0",
                                                        "memberName": "target1",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 32,
                                                        "src": "12302:47:0",
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
                                                                "id": 542,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "12361:1:0",
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
                                                            "id": 541,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "12353:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 540,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "12353:7:0",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 543,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12353:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "12302:61:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 551,
                                                "nodeType": "IfStatement",
                                                "src": "12298:161:0",
                                                "trueBody": {
                                                    "id": 550,
                                                    "nodeType": "Block",
                                                    "src": "12365:94:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 545,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 7888,
                                                                        "src": "12390:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 547,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12421:21:0",
                                                                    "memberName": "TargetAlreadyDeployed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7855,
                                                                    "src": "12390:52:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 548,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12390:54:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 549,
                                                            "nodeType": "RevertStatement",
                                                            "src": "12383:61:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 561,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 552,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 322,
                                                        "src": "12472:6:0",
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
                                                                "id": 557,
                                                                "name": "config",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 513,
                                                                "src": "12548:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 558,
                                                                "name": "_extraData",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 315,
                                                                "src": "12572:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 559,
                                                                "name": "_salt",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 319,
                                                                "src": "12600:5:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
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
                                                                        "id": 554,
                                                                        "name": "target1Deployer",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 51,
                                                                        "src": "12507:15:0",
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
                                                                    "id": 553,
                                                                    "name": "IHyperdriveTargetDeployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 8400,
                                                                    "src": "12481:25:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$",
                                                                        "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                    }
                                                                },
                                                                "id": 555,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12481:42:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8400",
                                                                    "typeString": "contract IHyperdriveTargetDeployer"
                                                                }
                                                            },
                                                            "id": 556,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "12524:6:0",
                                                            "memberName": "deploy",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 8399,
                                                            "src": "12481:49:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                            }
                                                        },
                                                        "id": 560,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12481:138:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "12472:147:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 562,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12472:147:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 571,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 563,
                                                                    "name": "_deployments",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 68,
                                                                    "src": "12633:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                                        "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                                    }
                                                                },
                                                                "id": 567,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 564,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "12646:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 565,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12650:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "12646:10:0",
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
                                                                "src": "12633:24:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                                }
                                                            },
                                                            "id": 568,
                                                            "indexExpression": {
                                                                "id": 566,
                                                                "name": "_deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 310,
                                                                "src": "12658:13:0",
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
                                                            "src": "12633:39:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                            }
                                                        },
                                                        "id": 569,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "12673:7:0",
                                                        "memberName": "target1",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 32,
                                                        "src": "12633:47:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 570,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 322,
                                                        "src": "12683:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "12633:56:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 572,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12633:56:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 716,
                                        "name": "target",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 322,
                                        "src": "14141:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 323,
                                    "id": 717,
                                    "nodeType": "Return",
                                    "src": "14134:13:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7887
                        ],
                        "documentation": {
                            "id": 308,
                            "nodeType": "StructuredDocumentation",
                            "src": "7451:622:0",
                            "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
                        },
                        "functionSelector": "7cc39092",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployTarget",
                        "nameLocation": "8087:12:0",
                        "parameters": {
                            "id": 320,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 310,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "8117:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 719,
                                    "src": "8109:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 309,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8109:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 313,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "8176:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 719,
                                    "src": "8140:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 312,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 311,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "8140:11:0",
                                                "8152:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7368,
                                            "src": "8140:28:0"
                                        },
                                        "referencedDeclaration": 7368,
                                        "src": "8140:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 315,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "8212:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 719,
                                    "src": "8199:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 314,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8199:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 317,
                                    "mutability": "mutable",
                                    "name": "_targetIndex",
                                    "nameLocation": "8240:12:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 719,
                                    "src": "8232:20:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 316,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8232:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 319,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "8270:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 719,
                                    "src": "8262:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 318,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8262:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8099:182:0"
                        },
                        "returnParameters": {
                            "id": 323,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 322,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "8308:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 719,
                                    "src": "8300:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 321,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8300:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8299:16:0"
                        },
                        "scope": 914,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 737,
                        "nodeType": "FunctionDefinition",
                        "src": "14360:189:0",
                        "nodes": [],
                        "body": {
                            "id": 736,
                            "nodeType": "Block",
                            "src": "14487:62:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "baseExpression": {
                                                "id": 730,
                                                "name": "_deployments",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "14504:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$",
                                                    "typeString": "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))"
                                                }
                                            },
                                            "id": 732,
                                            "indexExpression": {
                                                "id": 731,
                                                "name": "_deployer",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 722,
                                                "src": "14517:9:0",
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
                                            "src": "14504:23:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                            }
                                        },
                                        "id": 734,
                                        "indexExpression": {
                                            "id": 733,
                                            "name": "_deploymentId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 724,
                                            "src": "14528:13:0",
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
                                        "src": "14504:38:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 729,
                                    "id": 735,
                                    "nodeType": "Return",
                                    "src": "14497:45:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 720,
                            "nodeType": "StructuredDocumentation",
                            "src": "14160:195:0",
                            "text": "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment."
                        },
                        "functionSelector": "20503b3f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployments",
                        "nameLocation": "14369:11:0",
                        "parameters": {
                            "id": 725,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 722,
                                    "mutability": "mutable",
                                    "name": "_deployer",
                                    "nameLocation": "14398:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 737,
                                    "src": "14390:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 721,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14390:7:0",
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
                                    "id": 724,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "14425:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 737,
                                    "src": "14417:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 723,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14417:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14380:64:0"
                        },
                        "returnParameters": {
                            "id": 729,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 728,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 737,
                                    "src": "14468:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                    },
                                    "typeName": {
                                        "id": 727,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 726,
                                            "name": "Deployment",
                                            "nameLocations": [
                                                "14468:10:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 42,
                                            "src": "14468:10:0"
                                        },
                                        "referencedDeclaration": 42,
                                        "src": "14468:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14467:19:0"
                        },
                        "scope": 914,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 817,
                        "nodeType": "FunctionDefinition",
                        "src": "14704:1191:0",
                        "nodes": [],
                        "body": {
                            "id": 816,
                            "nodeType": "Block",
                            "src": "14817:1078:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 747,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 744,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 741,
                                                "src": "14968:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 745,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "14982:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7345,
                                            "src": "14968:34:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "316533",
                                            "id": 746,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "15005:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1000_by_1",
                                                "typeString": "int_const 1000"
                                            },
                                            "value": "1e3"
                                        },
                                        "src": "14968:40:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 754,
                                    "nodeType": "IfStatement",
                                    "src": "14964:138:0",
                                    "trueBody": {
                                        "id": 753,
                                        "nodeType": "Block",
                                        "src": "15010:92:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 748,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "15031:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 750,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15062:27:0",
                                                        "memberName": "InvalidMinimumShareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7837,
                                                        "src": "15031:58:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 751,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15031:60:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 752,
                                                "nodeType": "RevertStatement",
                                                "src": "15024:67:0"
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
                                        "id": 758,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 755,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 741,
                                                "src": "15116:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 756,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "15130:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7354,
                                            "src": "15116:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 757,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "15152:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "15116:37:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 765,
                                    "nodeType": "IfStatement",
                                    "src": "15112:133:0",
                                    "trueBody": {
                                        "id": 764,
                                        "nodeType": "Block",
                                        "src": "15155:90:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 759,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "15176:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 761,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15207:25:0",
                                                        "memberName": "InvalidCheckpointDuration",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7831,
                                                        "src": "15176:56:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 762,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15176:58:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 763,
                                                "nodeType": "RevertStatement",
                                                "src": "15169:65:0"
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
                                        "id": 778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 770,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 766,
                                                    "name": "_deployConfig",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 741,
                                                    "src": "15271:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                    }
                                                },
                                                "id": 767,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15285:16:0",
                                                "memberName": "positionDuration",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7351,
                                                "src": "15271:30:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "expression": {
                                                    "id": 768,
                                                    "name": "_deployConfig",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 741,
                                                    "src": "15304:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                    }
                                                },
                                                "id": 769,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15318:18:0",
                                                "memberName": "checkpointDuration",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7354,
                                                "src": "15304:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15271:65:0",
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
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 775,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 771,
                                                        "name": "_deployConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 741,
                                                        "src": "15352:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 772,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15366:16:0",
                                                    "memberName": "positionDuration",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7351,
                                                    "src": "15352:30:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "%",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 773,
                                                        "name": "_deployConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 741,
                                                        "src": "15385:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 774,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15399:18:0",
                                                    "memberName": "checkpointDuration",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7354,
                                                    "src": "15385:32:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "15352:65:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 776,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "15433:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "15352:82:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "15271:163:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 785,
                                    "nodeType": "IfStatement",
                                    "src": "15254:279:0",
                                    "trueBody": {
                                        "id": 784,
                                        "nodeType": "Block",
                                        "src": "15445:88:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 779,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "15466:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 781,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15497:23:0",
                                                        "memberName": "InvalidPositionDuration",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7843,
                                                        "src": "15466:54:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 782,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15466:56:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 783,
                                                "nodeType": "RevertStatement",
                                                "src": "15459:63:0"
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
                                        "id": 808,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 802,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 796,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 790,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 786,
                                                                "name": "_deployConfig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 741,
                                                                "src": "15611:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                }
                                                            },
                                                            "id": 787,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "15625:4:0",
                                                            "memberName": "fees",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7367,
                                                            "src": "15611:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                                "typeString": "struct IHyperdrive.Fees memory"
                                                            }
                                                        },
                                                        "id": 788,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15630:5:0",
                                                        "memberName": "curve",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7322,
                                                        "src": "15611:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "id": 789,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14151,
                                                        "src": "15638:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "15611:30:0",
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
                                                    "id": 795,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 791,
                                                                "name": "_deployConfig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 741,
                                                                "src": "15657:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                }
                                                            },
                                                            "id": 792,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "15671:4:0",
                                                            "memberName": "fees",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7367,
                                                            "src": "15657:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                                "typeString": "struct IHyperdrive.Fees memory"
                                                            }
                                                        },
                                                        "id": 793,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15676:4:0",
                                                        "memberName": "flat",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7325,
                                                        "src": "15657:23:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "id": 794,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14151,
                                                        "src": "15683:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "15657:29:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "15611:75:0",
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
                                                "id": 801,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "expression": {
                                                            "id": 797,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 741,
                                                            "src": "15702:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        },
                                                        "id": 798,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15716:4:0",
                                                        "memberName": "fees",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7367,
                                                        "src": "15702:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                            "typeString": "struct IHyperdrive.Fees memory"
                                                        }
                                                    },
                                                    "id": 799,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15721:12:0",
                                                    "memberName": "governanceLP",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7328,
                                                    "src": "15702:31:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 800,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14151,
                                                    "src": "15736:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "15702:37:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "15611:128:0",
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
                                            "id": 807,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "expression": {
                                                        "id": 803,
                                                        "name": "_deployConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 741,
                                                        "src": "15755:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 804,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15769:4:0",
                                                    "memberName": "fees",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7367,
                                                    "src": "15755:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                    }
                                                },
                                                "id": 805,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15774:16:0",
                                                "memberName": "governanceZombie",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7331,
                                                "src": "15755:35:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 806,
                                                "name": "ONE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14151,
                                                "src": "15793:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15755:41:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "15611:185:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 815,
                                    "nodeType": "IfStatement",
                                    "src": "15594:295:0",
                                    "trueBody": {
                                        "id": 814,
                                        "nodeType": "Block",
                                        "src": "15807:82:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 809,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7888,
                                                            "src": "15828:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 811,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15859:17:0",
                                                        "memberName": "InvalidFeeAmounts",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7834,
                                                        "src": "15828:48:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 812,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15828:50:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 813,
                                                "nodeType": "RevertStatement",
                                                "src": "15821:57:0"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 738,
                            "nodeType": "StructuredDocumentation",
                            "src": "14555:144:0",
                            "text": "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkPoolConfig",
                        "nameLocation": "14713:16:0",
                        "parameters": {
                            "id": 742,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 741,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "14775:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 817,
                                    "src": "14739:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 740,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 739,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "14739:11:0",
                                                "14751:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7368,
                                            "src": "14739:28:0"
                                        },
                                        "referencedDeclaration": 7368,
                                        "src": "14739:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14729:65:0"
                        },
                        "returnParameters": {
                            "id": 743,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14817:0:0"
                        },
                        "scope": 914,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 825,
                        "nodeType": "FunctionDefinition",
                        "src": "16115:115:0",
                        "nodes": [],
                        "documentation": {
                            "id": 818,
                            "nodeType": "StructuredDocumentation",
                            "src": "15901:209:0",
                            "text": "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getInitialVaultSharePrice",
                        "nameLocation": "16124:26:0",
                        "parameters": {
                            "id": 821,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 820,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "16173:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 825,
                                    "src": "16160:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 819,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16160:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16150:39:0"
                        },
                        "returnParameters": {
                            "id": 824,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 823,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 825,
                                    "src": "16221:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 822,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16221:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16220:9:0"
                        },
                        "scope": 914,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 913,
                        "nodeType": "FunctionDefinition",
                        "src": "16446:926:0",
                        "nodes": [],
                        "body": {
                            "id": 912,
                            "nodeType": "Block",
                            "src": "16598:774:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 840,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 835,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "16675:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 837,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16683:9:0",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7372,
                                            "src": "16675:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6920",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 838,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "16695:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 839,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16709:9:0",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7336,
                                            "src": "16695:23:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6920",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "16675:43:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 841,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16675:43:0"
                                },
                                {
                                    "expression": {
                                        "id": 847,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 842,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "16728:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 844,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16736:13:0",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7375,
                                            "src": "16728:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 845,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "16752:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 846,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16766:13:0",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7339,
                                            "src": "16752:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "16728:51:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 848,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16728:51:0"
                                },
                                {
                                    "expression": {
                                        "id": 854,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 849,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "16789:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 851,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16797:14:0",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7378,
                                            "src": "16789:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 852,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "16814:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 853,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16828:14:0",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7342,
                                            "src": "16814:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "16789:53:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 855,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16789:53:0"
                                },
                                {
                                    "expression": {
                                        "id": 861,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 856,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "16852:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 858,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16860:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7384,
                                            "src": "16852:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 859,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "16883:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 860,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16897:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7345,
                                            "src": "16883:34:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16852:65:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 862,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16852:65:0"
                                },
                                {
                                    "expression": {
                                        "id": 868,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 863,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "16927:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 865,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16935:24:0",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7387,
                                            "src": "16927:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 866,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "16962:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 867,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16989:24:0",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7348,
                                            "src": "16962:51:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16927:86:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 869,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16927:86:0"
                                },
                                {
                                    "expression": {
                                        "id": 875,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 870,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "17023:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 872,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17031:16:0",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7390,
                                            "src": "17023:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 873,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "17050:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 874,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17064:16:0",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7351,
                                            "src": "17050:30:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "17023:57:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 876,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17023:57:0"
                                },
                                {
                                    "expression": {
                                        "id": 882,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 877,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "17090:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 879,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17098:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7393,
                                            "src": "17090:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 880,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "17119:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 881,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17133:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7354,
                                            "src": "17119:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "17090:61:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 883,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17090:61:0"
                                },
                                {
                                    "expression": {
                                        "id": 889,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 884,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "17161:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 886,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17169:11:0",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7396,
                                            "src": "17161:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 887,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "17183:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 888,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17197:11:0",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7357,
                                            "src": "17183:25:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "17161:47:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 890,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17161:47:0"
                                },
                                {
                                    "expression": {
                                        "id": 896,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 891,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "17218:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 893,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17226:10:0",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7399,
                                            "src": "17218:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 894,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "17239:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 895,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17253:10:0",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7360,
                                            "src": "17239:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "17218:45:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 897,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17218:45:0"
                                },
                                {
                                    "expression": {
                                        "id": 903,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 898,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "17273:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 900,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17281:12:0",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7402,
                                            "src": "17273:20:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 901,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "17296:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 902,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17310:12:0",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7363,
                                            "src": "17296:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "17273:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 904,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17273:49:0"
                                },
                                {
                                    "expression": {
                                        "id": 910,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 905,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 833,
                                                "src": "17332:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 907,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17340:4:0",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7406,
                                            "src": "17332:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 908,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 829,
                                                "src": "17347:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 909,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "17361:4:0",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7367,
                                            "src": "17347:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "src": "17332:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                            "typeString": "struct IHyperdrive.Fees memory"
                                        }
                                    },
                                    "id": 911,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17332:33:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 826,
                            "nodeType": "StructuredDocumentation",
                            "src": "16236:205:0",
                            "text": "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_copyPoolConfig",
                        "nameLocation": "16455:15:0",
                        "parameters": {
                            "id": 830,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 829,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "16516:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 913,
                                    "src": "16480:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 828,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 827,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "16480:11:0",
                                                "16492:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7368,
                                            "src": "16480:28:0"
                                        },
                                        "referencedDeclaration": 7368,
                                        "src": "16480:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7368_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16470:65:0"
                        },
                        "returnParameters": {
                            "id": 834,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 833,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "16589:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 913,
                                    "src": "16559:37:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 832,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 831,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "16559:11:0",
                                                "16571:10:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "16559:22:0"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "16559:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16558:39:0"
                        },
                        "scope": 914,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 13,
                            "name": "IHyperdriveDeployerCoordinator",
                            "nameLocations": [
                                "1001:30:0"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 7888,
                            "src": "1001:30:0"
                        },
                        "id": 14,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1001:30:0"
                    }
                ],
                "canonicalName": "HyperdriveDeployerCoordinator",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 12,
                    "nodeType": "StructuredDocumentation",
                    "src": "454:492:0",
                    "text": "@author DELV\n @title HyperdriveDeployerCoordinator\n @notice This Hyperdrive deployer coordinates the process of deploying the\n         Hyperdrive system utilizing several child deployers.\n @dev We use multiple deployers to avoid the maximum code size.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    914,
                    7888
                ],
                "name": "HyperdriveDeployerCoordinator",
                "nameLocation": "964:29:0",
                "scope": 915,
                "usedErrors": [
                    7819,
                    7822,
                    7825,
                    7828,
                    7831,
                    7834,
                    7837,
                    7840,
                    7843,
                    7846,
                    7849,
                    7852,
                    7855
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 0
};
