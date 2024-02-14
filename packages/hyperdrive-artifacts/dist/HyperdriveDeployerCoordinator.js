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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xa514f3df6feb2126925db532c8b0dca054eb6763c3a264c594829108ded99b64\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://eb2beb980386b097c6ef754ce41cb805b8d37520c14f6a3b237626a7048b2bab\",\"dweb:/ipfs/QmXVVfRufQse6p2VmWcWn8Qf5RKW4cdbVNnLfeLHtSERsX\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x7d0e883b5d68892df654212a0f4448839358fe66d88728dc2535414edcfb4bdc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d0290659a7ef8ceb30f33617a696b1410d7fd110061eee77419ccce580f5a586\",\"dweb:/ipfs/QmXg2p6zmomxS2B3huDMtgUMSHpstWh3wMYdxt2czs45en\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]}},\"version\":1}",
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
                "keccak256": "0xa514f3df6feb2126925db532c8b0dca054eb6763c3a264c594829108ded99b64",
                "urls": [
                    "bzz-raw://eb2beb980386b097c6ef754ce41cb805b8d37520c14f6a3b237626a7048b2bab",
                    "dweb:/ipfs/QmXVVfRufQse6p2VmWcWn8Qf5RKW4cdbVNnLfeLHtSERsX"
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
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
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
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
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
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
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
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
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
                7480
            ],
            "IHyperdriveCoreDeployer": [
                7676
            ],
            "IHyperdriveDeployerCoordinator": [
                7752
            ],
            "IHyperdriveTargetDeployer": [
                8259
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:16810:0",
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
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
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
                "sourceUnit": 7677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4,
                            "name": "IHyperdriveCoreDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7676,
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
                "sourceUnit": 7753,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6,
                            "name": "IHyperdriveDeployerCoordinator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7752,
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
                "sourceUnit": 8260,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8,
                            "name": "IHyperdriveTargetDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8259,
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
                "src": "891:15957:0",
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
                        "src": "4384:2690:0",
                        "nodes": [],
                        "body": {
                            "id": 288,
                            "nodeType": "Block",
                            "src": "4579:2495:0",
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
                                            "nameLocation": "4687:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 288,
                                            "src": "4669:28:0",
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
                                                        "4669:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 40,
                                                    "src": "4669:10:0"
                                                },
                                                "referencedDeclaration": 40,
                                                "src": "4669:10:0",
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
                                                "src": "4700:12:0",
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
                                                    "src": "4713:3:0",
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
                                                "memberLocation": "4717:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "4713:10:0",
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
                                            "src": "4700:24:0",
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
                                            "src": "4725:13:0",
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
                                        "src": "4700:39:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4669:70:0"
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
                                                "src": "4753:10:0",
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
                                            "memberLocation": "4764:10:0",
                                            "memberName": "hyperdrive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 24,
                                            "src": "4753:21:0",
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
                                                    "src": "4786:1:0",
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
                                                "src": "4778:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 134,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4778:7:0",
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
                                            "src": "4778:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4753:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 145,
                                    "nodeType": "IfStatement",
                                    "src": "4749:131:0",
                                    "trueBody": {
                                        "id": 144,
                                        "nodeType": "Block",
                                        "src": "4790:90:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "4811:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 141,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4842:25:0",
                                                        "memberName": "HyperdriveAlreadyDeployed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7692,
                                                        "src": "4811:56:0",
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
                                                    "src": "4811:58:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 143,
                                                "nodeType": "RevertStatement",
                                                "src": "4804:65:0"
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
                                                "src": "5029:10:0",
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
                                            "memberLocation": "5040:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15,
                                            "src": "5029:21:0",
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
                                                    "src": "5062:1:0",
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
                                                "src": "5054:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                    "typeString": "type(bytes32)"
                                                },
                                                "typeName": {
                                                    "id": 148,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5054:7:0",
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
                                            "src": "5054:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5029:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 159,
                                    "nodeType": "IfStatement",
                                    "src": "5025:128:0",
                                    "trueBody": {
                                        "id": 158,
                                        "nodeType": "Block",
                                        "src": "5066:87:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "5087:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 155,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5118:22:0",
                                                        "memberName": "DeploymentDoesNotExist",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7686,
                                                        "src": "5087:53:0",
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
                                                    "src": "5087:55:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 157,
                                                "nodeType": "RevertStatement",
                                                "src": "5080:62:0"
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
                                                                "src": "5242:10:0",
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
                                                            "memberLocation": "5253:7:0",
                                                            "memberName": "target0",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 27,
                                                            "src": "5242:18:0",
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
                                                                    "src": "5272:1:0",
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
                                                                "src": "5264:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 162,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5264:7:0",
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
                                                            "src": "5264:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "5242:32:0",
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
                                                                "src": "5290:10:0",
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
                                                            "memberLocation": "5301:7:0",
                                                            "memberName": "target1",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 30,
                                                            "src": "5290:18:0",
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
                                                                    "src": "5320:1:0",
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
                                                                "src": "5312:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 169,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5312:7:0",
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
                                                            "src": "5312:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "5290:32:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5242:80:0",
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
                                                            "src": "5338:10:0",
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
                                                        "memberLocation": "5349:7:0",
                                                        "memberName": "target2",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 33,
                                                        "src": "5338:18:0",
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
                                                                "src": "5368:1:0",
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
                                                            "src": "5360:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 177,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5360:7:0",
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
                                                        "src": "5360:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "5338:32:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "5242:128:0",
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
                                                        "src": "5386:10:0",
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
                                                    "memberLocation": "5397:7:0",
                                                    "memberName": "target3",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 36,
                                                    "src": "5386:18:0",
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
                                                            "src": "5416:1:0",
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
                                                        "src": "5408:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 185,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5408:7:0",
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
                                                    "src": "5408:10:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "5386:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "5242:176:0",
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
                                                    "src": "5434:10:0",
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
                                                "memberLocation": "5445:7:0",
                                                "memberName": "target4",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 39,
                                                "src": "5434:18:0",
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
                                                        "src": "5464:1:0",
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
                                                    "src": "5456:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 193,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5456:7:0",
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
                                                "src": "5456:10:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "5434:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5242:224:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 205,
                                    "nodeType": "IfStatement",
                                    "src": "5225:337:0",
                                    "trueBody": {
                                        "id": 204,
                                        "nodeType": "Block",
                                        "src": "5477:85:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "5498:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 201,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5529:20:0",
                                                        "memberName": "IncompleteDeployment",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7689,
                                                        "src": "5498:51:0",
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
                                                    "src": "5498:53:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 203,
                                                "nodeType": "RevertStatement",
                                                "src": "5491:60:0"
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
                                                            "src": "5665:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 207,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "5654:3:0",
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
                                                        "memberLocation": "5658:6:0",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5654:10:0",
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
                                                    "src": "5654:25:0",
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
                                                "src": "5644:9:0",
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
                                            "src": "5644:36:0",
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
                                                "src": "5684:10:0",
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
                                            "memberLocation": "5695:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15,
                                            "src": "5684:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5644:61:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 221,
                                    "nodeType": "IfStatement",
                                    "src": "5640:148:0",
                                    "trueBody": {
                                        "id": 220,
                                        "nodeType": "Block",
                                        "src": "5707:81:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "5728:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 217,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5759:16:0",
                                                        "memberName": "MismatchedConfig",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7713,
                                                        "src": "5728:47:0",
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
                                                    "src": "5728:49:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 219,
                                                "nodeType": "RevertStatement",
                                                "src": "5721:56:0"
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
                                                    "src": "5888:10:0",
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
                                                "src": "5878:9:0",
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
                                            "src": "5878:21:0",
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
                                                "src": "5903:10:0",
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
                                            "memberLocation": "5914:13:0",
                                            "memberName": "extraDataHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18,
                                            "src": "5903:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5878:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 234,
                                    "nodeType": "IfStatement",
                                    "src": "5874:139:0",
                                    "trueBody": {
                                        "id": 233,
                                        "nodeType": "Block",
                                        "src": "5929:84:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "5950:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 230,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5981:19:0",
                                                        "memberName": "MismatchedExtraData",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7716,
                                                        "src": "5950:50:0",
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
                                                    "src": "5950:52:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 232,
                                                "nodeType": "RevertStatement",
                                                "src": "5943:59:0"
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
                                                "src": "6306:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 235,
                                            "name": "_checkPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 793,
                                            "src": "6289:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$__$",
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
                                        "src": "6289:31:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 238,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6289:31:0"
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
                                            "nameLocation": "6469:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 288,
                                            "src": "6439:36:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 242,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 241,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "6439:11:0",
                                                        "6451:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 7280,
                                                    "src": "6439:22:0"
                                                },
                                                "referencedDeclaration": 7280,
                                                "src": "6439:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
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
                                                "src": "6494:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 244,
                                            "name": "_copyPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 889,
                                            "src": "6478:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$_t_struct$_PoolConfig_$7280_memory_ptr_$",
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
                                        "src": "6478:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6439:69:0"
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
                                                "src": "6518:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 250,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6525:22:0",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7254,
                                            "src": "6518:29:0",
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
                                                "src": "6550:10:0",
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
                                            "memberLocation": "6561:17:0",
                                            "memberName": "initialSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "6550:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6518:60:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 254,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6518:60:0"
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
                                            "nameLocation": "6676:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 288,
                                            "src": "6668:18:0",
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
                                                "src": "6668:7:0",
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
                                                "src": "6747:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            {
                                                "id": 262,
                                                "name": "_extraData",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "6767:10:0",
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
                                                    "src": "6791:10:0",
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
                                                "memberLocation": "6802:7:0",
                                                "memberName": "target0",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 27,
                                                "src": "6791:18:0",
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
                                                    "src": "6823:10:0",
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
                                                "memberLocation": "6834:7:0",
                                                "memberName": "target1",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 30,
                                                "src": "6823:18:0",
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
                                                    "src": "6855:10:0",
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
                                                "memberLocation": "6866:7:0",
                                                "memberName": "target2",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 33,
                                                "src": "6855:18:0",
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
                                                    "src": "6887:10:0",
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
                                                "memberLocation": "6898:7:0",
                                                "memberName": "target3",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 36,
                                                "src": "6887:18:0",
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
                                                    "src": "6919:10:0",
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
                                                "memberLocation": "6930:7:0",
                                                "memberName": "target4",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 39,
                                                "src": "6919:18:0",
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
                                                "src": "6951:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
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
                                                        "src": "6713:12:0",
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
                                                    "referencedDeclaration": 7676,
                                                    "src": "6689:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveCoreDeployer_$7676_$",
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
                                                "src": "6689:37:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdriveCoreDeployer_$7676",
                                                    "typeString": "contract IHyperdriveCoreDeployer"
                                                }
                                            },
                                            "id": 260,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6727:6:0",
                                            "memberName": "deploy",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7675,
                                            "src": "6689:44:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$",
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
                                        "src": "6689:277:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6668:298:0"
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
                                                        "src": "6976:12:0",
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
                                                            "src": "6989:3:0",
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
                                                        "memberLocation": "6993:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "6989:10:0",
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
                                                    "src": "6976:24:0",
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
                                                    "src": "7001:13:0",
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
                                                "src": "6976:39:0",
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
                                            "memberLocation": "7016:10:0",
                                            "memberName": "hyperdrive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 24,
                                            "src": "6976:50:0",
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
                                            "src": "7029:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6976:63:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 285,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6976:63:0"
                                },
                                {
                                    "expression": {
                                        "id": 286,
                                        "name": "hyperdrive",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 256,
                                        "src": "7057:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 121,
                                    "id": 287,
                                    "nodeType": "Return",
                                    "src": "7050:17:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7734
                        ],
                        "documentation": {
                            "id": 108,
                            "nodeType": "StructuredDocumentation",
                            "src": "3959:420:0",
                            "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance."
                        },
                        "functionSelector": "c47e90c4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "4393:6:0",
                        "parameters": {
                            "id": 118,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 110,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "4417:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 289,
                                    "src": "4409:21:0",
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
                                        "src": "4409:7:0",
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
                                    "nameLocation": "4476:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 289,
                                    "src": "4440:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 112,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 111,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "4440:11:0",
                                                "4452:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7241,
                                            "src": "4440:28:0"
                                        },
                                        "referencedDeclaration": 7241,
                                        "src": "4440:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_storage_ptr",
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
                                    "nameLocation": "4512:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 289,
                                    "src": "4499:23:0",
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
                                        "src": "4499:5:0",
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
                                    "nameLocation": "4540:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 289,
                                    "src": "4532:13:0",
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
                                        "src": "4532:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4399:152:0"
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
                                    "src": "4570:7:0",
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
                                        "src": "4570:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4569:9:0"
                        },
                        "scope": 890,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 695,
                        "nodeType": "FunctionDefinition",
                        "src": "7707:5917:0",
                        "nodes": [],
                        "body": {
                            "id": 694,
                            "nodeType": "Block",
                            "src": "7945:5679:0",
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
                                            "src": "8200:12:0",
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
                                            "src": "8216:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "8200:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 422,
                                    "nodeType": "IfStatement",
                                    "src": "8196:1789:0",
                                    "trueBody": {
                                        "id": 421,
                                        "nodeType": "Block",
                                        "src": "8219:1766:0",
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
                                                                    "src": "8397:12:0",
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
                                                                        "src": "8410:3:0",
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
                                                                    "memberLocation": "8414:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "8410:10:0",
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
                                                                "src": "8397:24:0",
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
                                                                "src": "8422:13:0",
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
                                                            "src": "8397:39:0",
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
                                                        "memberLocation": "8437:10:0",
                                                        "memberName": "configHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 15,
                                                        "src": "8397:50:0",
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
                                                                "src": "8459:1:0",
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
                                                            "src": "8451:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes32_$",
                                                                "typeString": "type(bytes32)"
                                                            },
                                                            "typeName": {
                                                                "id": 316,
                                                                "name": "bytes32",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "8451:7:0",
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
                                                        "src": "8451:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "8397:64:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 327,
                                                "nodeType": "IfStatement",
                                                "src": "8376:196:0",
                                                "trueBody": {
                                                    "id": 326,
                                                    "nodeType": "Block",
                                                    "src": "8476:96:0",
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
                                                                        "referencedDeclaration": 7752,
                                                                        "src": "8501:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 323,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "8532:23:0",
                                                                    "memberName": "DeploymentAlreadyExists",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7683,
                                                                    "src": "8501:54:0",
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
                                                                "src": "8501:56:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 325,
                                                            "nodeType": "RevertStatement",
                                                            "src": "8494:63:0"
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
                                                            "src": "8723:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "id": 328,
                                                        "name": "_checkPoolConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 793,
                                                        "src": "8706:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$__$",
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
                                                    "src": "8706:31:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 331,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8706:31:0"
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
                                                        "nameLocation": "8863:17:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 421,
                                                        "src": "8855:25:0",
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
                                                            "src": "8855:7:0",
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
                                                            "src": "8910:10:0",
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
                                                        "src": "8883:26:0",
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
                                                    "src": "8883:38:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "8855:66:0"
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
                                                        "nameLocation": "8943:10:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 421,
                                                        "src": "8935:18:0",
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
                                                            "src": "8935:7:0",
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
                                                                    "src": "8977:13:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 341,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "8966:3:0",
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
                                                                "memberLocation": "8970:6:0",
                                                                "memberName": "encode",
                                                                "nodeType": "MemberAccess",
                                                                "src": "8966:10:0",
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
                                                            "src": "8966:25:0",
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
                                                        "src": "8956:9:0",
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
                                                    "src": "8956:36:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "8935:57:0"
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
                                                        "nameLocation": "9014:13:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 421,
                                                        "src": "9006:21:0",
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
                                                            "src": "9006:7:0",
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
                                                            "src": "9040:10:0",
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
                                                        "src": "9030:9:0",
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
                                                    "src": "9030:21:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9006:45:0"
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
                                                        "nameLocation": "9212:7:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 421,
                                                        "src": "9182:37:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "memory",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig"
                                                        },
                                                        "typeName": {
                                                            "id": 356,
                                                            "nodeType": "UserDefinedTypeName",
                                                            "pathNode": {
                                                                "id": 355,
                                                                "name": "IHyperdrive.PoolConfig",
                                                                "nameLocations": [
                                                                    "9182:11:0",
                                                                    "9194:10:0"
                                                                ],
                                                                "nodeType": "IdentifierPath",
                                                                "referencedDeclaration": 7280,
                                                                "src": "9182:22:0"
                                                            },
                                                            "referencedDeclaration": 7280,
                                                            "src": "9182:22:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
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
                                                            "src": "9255:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "id": 358,
                                                        "name": "_copyPoolConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 889,
                                                        "src": "9222:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$_t_struct$_PoolConfig_$7280_memory_ptr_$",
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
                                                    "src": "9222:60:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9182:100:0"
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
                                                            "src": "9296:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        },
                                                        "id": 364,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "9304:22:0",
                                                        "memberName": "initialVaultSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7254,
                                                        "src": "9296:30:0",
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
                                                        "src": "9329:17:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9296:50:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 367,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9296:50:0"
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
                                                        "src": "9405:6:0",
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
                                                                "src": "9481:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 374,
                                                                "name": "_extraData",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 297,
                                                                "src": "9506:10:0",
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
                                                                "src": "9534:5:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
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
                                                                        "src": "9440:15:0",
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
                                                                    "referencedDeclaration": 8259,
                                                                    "src": "9414:25:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$",
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
                                                                "src": "9414:42:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8259",
                                                                    "typeString": "contract IHyperdriveTargetDeployer"
                                                                }
                                                            },
                                                            "id": 372,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9457:6:0",
                                                            "memberName": "deploy",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 8258,
                                                            "src": "9414:49:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
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
                                                        "src": "9414:139:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "9405:148:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 378,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9405:148:0"
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
                                                                    "src": "9605:12:0",
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
                                                                        "src": "9618:3:0",
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
                                                                    "memberLocation": "9622:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "9618:10:0",
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
                                                                "src": "9605:24:0",
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
                                                                "src": "9630:13:0",
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
                                                            "src": "9605:39:0",
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
                                                        "memberLocation": "9645:10:0",
                                                        "memberName": "configHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 15,
                                                        "src": "9605:50:0",
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
                                                        "src": "9658:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "9605:63:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 388,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9605:63:0"
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
                                                                    "src": "9682:12:0",
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
                                                                        "src": "9695:3:0",
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
                                                                    "memberLocation": "9699:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "9695:10:0",
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
                                                                "src": "9682:24:0",
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
                                                                "src": "9707:13:0",
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
                                                            "src": "9682:39:0",
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
                                                        "memberLocation": "9739:13:0",
                                                        "memberName": "extraDataHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18,
                                                        "src": "9682:70:0",
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
                                                        "src": "9755:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "9682:86:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 398,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9682:86:0"
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
                                                                    "src": "9782:12:0",
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
                                                                        "src": "9795:3:0",
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
                                                                    "memberLocation": "9799:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "9795:10:0",
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
                                                                "src": "9782:24:0",
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
                                                                "src": "9807:13:0",
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
                                                            "src": "9782:39:0",
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
                                                        "memberLocation": "9839:17:0",
                                                        "memberName": "initialSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 21,
                                                        "src": "9782:74:0",
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
                                                        "src": "9859:17:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9782:94:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 408,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9782:94:0"
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
                                                                    "src": "9890:12:0",
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
                                                                        "src": "9903:3:0",
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
                                                                    "memberLocation": "9907:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "9903:10:0",
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
                                                                "src": "9890:24:0",
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
                                                                "src": "9915:13:0",
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
                                                            "src": "9890:39:0",
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
                                                        "memberLocation": "9930:7:0",
                                                        "memberName": "target0",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 27,
                                                        "src": "9890:47:0",
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
                                                        "src": "9940:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "9890:56:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 418,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9890:56:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 419,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 304,
                                                    "src": "9968:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "functionReturnParameters": 305,
                                                "id": 420,
                                                "nodeType": "Return",
                                                "src": "9961:13:0"
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
                                                        "src": "10134:12:0",
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
                                                            "src": "10147:3:0",
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
                                                        "memberLocation": "10151:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "10147:10:0",
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
                                                    "src": "10134:24:0",
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
                                                    "src": "10159:13:0",
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
                                                "src": "10134:39:0",
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
                                            "memberLocation": "10174:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15,
                                            "src": "10134:50:0",
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
                                                    "src": "10196:1:0",
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
                                                "src": "10188:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                    "typeString": "type(bytes32)"
                                                },
                                                "typeName": {
                                                    "id": 430,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "10188:7:0",
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
                                            "src": "10188:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "10134:64:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 441,
                                    "nodeType": "IfStatement",
                                    "src": "10130:157:0",
                                    "trueBody": {
                                        "id": 440,
                                        "nodeType": "Block",
                                        "src": "10200:87:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "10221:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 437,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10252:22:0",
                                                        "memberName": "DeploymentDoesNotExist",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7686,
                                                        "src": "10221:53:0",
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
                                                    "src": "10221:55:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 439,
                                                "nodeType": "RevertStatement",
                                                "src": "10214:62:0"
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
                                                            "src": "10403:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 443,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "10392:3:0",
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
                                                        "memberLocation": "10396:6:0",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "10392:10:0",
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
                                                    "src": "10392:25:0",
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
                                                "src": "10382:9:0",
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
                                            "src": "10382:36:0",
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
                                                        "src": "10434:12:0",
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
                                                            "src": "10447:3:0",
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
                                                        "memberLocation": "10451:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "10447:10:0",
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
                                                    "src": "10434:24:0",
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
                                                    "src": "10459:13:0",
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
                                                "src": "10434:39:0",
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
                                            "memberLocation": "10474:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15,
                                            "src": "10434:50:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "10382:102:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 462,
                                    "nodeType": "IfStatement",
                                    "src": "10365:211:0",
                                    "trueBody": {
                                        "id": 461,
                                        "nodeType": "Block",
                                        "src": "10495:81:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "10516:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 458,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10547:16:0",
                                                        "memberName": "MismatchedConfig",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7713,
                                                        "src": "10516:47:0",
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
                                                    "src": "10516:49:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 460,
                                                "nodeType": "RevertStatement",
                                                "src": "10509:56:0"
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
                                                    "src": "10689:10:0",
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
                                                "src": "10679:9:0",
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
                                            "src": "10679:21:0",
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
                                                        "src": "10716:12:0",
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
                                                            "src": "10729:3:0",
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
                                                        "memberLocation": "10733:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "10729:10:0",
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
                                                    "src": "10716:24:0",
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
                                                    "src": "10741:13:0",
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
                                                "src": "10716:39:0",
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
                                            "memberLocation": "10756:13:0",
                                            "memberName": "extraDataHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18,
                                            "src": "10716:53:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "10679:90:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 480,
                                    "nodeType": "IfStatement",
                                    "src": "10662:202:0",
                                    "trueBody": {
                                        "id": 479,
                                        "nodeType": "Block",
                                        "src": "10780:84:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "10801:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 476,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10832:19:0",
                                                        "memberName": "MismatchedExtraData",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7716,
                                                        "src": "10801:50:0",
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
                                                    "src": "10801:52:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 478,
                                                "nodeType": "RevertStatement",
                                                "src": "10794:59:0"
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
                                                "src": "11157:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 481,
                                            "name": "_checkPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 793,
                                            "src": "11140:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$__$",
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
                                        "src": "11140:31:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 484,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11140:31:0"
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
                                            "nameLocation": "11320:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 694,
                                            "src": "11290:36:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 488,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 487,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "11290:11:0",
                                                        "11302:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 7280,
                                                    "src": "11290:22:0"
                                                },
                                                "referencedDeclaration": 7280,
                                                "src": "11290:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
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
                                                "src": "11345:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 490,
                                            "name": "_copyPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 889,
                                            "src": "11329:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$_t_struct$_PoolConfig_$7280_memory_ptr_$",
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
                                        "src": "11329:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11290:69:0"
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
                                                "src": "11369:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 496,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "11376:22:0",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7254,
                                            "src": "11369:29:0",
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
                                                        "src": "11401:12:0",
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
                                                            "src": "11414:3:0",
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
                                                        "memberLocation": "11418:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "11414:10:0",
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
                                                    "src": "11401:24:0",
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
                                                    "src": "11426:13:0",
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
                                                "src": "11401:39:0",
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
                                            "memberLocation": "11454:17:0",
                                            "memberName": "initialSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21,
                                            "src": "11401:70:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "11369:102:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 505,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11369:102:0"
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
                                            "src": "11735:12:0",
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
                                            "src": "11751:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "11735:17:0",
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
                                                "src": "12180:12:0",
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
                                                "src": "12196:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_2_by_1",
                                                    "typeString": "int_const 2"
                                                },
                                                "value": "2"
                                            },
                                            "src": "12180:17:0",
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
                                                    "src": "12625:12:0",
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
                                                    "src": "12641:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_3_by_1",
                                                        "typeString": "int_const 3"
                                                    },
                                                    "value": "3"
                                                },
                                                "src": "12625:17:0",
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
                                                        "src": "13070:12:0",
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
                                                        "src": "13086:1:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_4_by_1",
                                                            "typeString": "int_const 4"
                                                        },
                                                        "value": "4"
                                                    },
                                                    "src": "13070:17:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 687,
                                                    "nodeType": "Block",
                                                    "src": "13511:83:0",
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
                                                                        "referencedDeclaration": 7752,
                                                                        "src": "13532:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 684,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "13563:18:0",
                                                                    "memberName": "InvalidTargetIndex",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7710,
                                                                    "src": "13532:49:0",
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
                                                                "src": "13532:51:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 686,
                                                            "nodeType": "RevertStatement",
                                                            "src": "13525:58:0"
                                                        }
                                                    ]
                                                },
                                                "id": 688,
                                                "nodeType": "IfStatement",
                                                "src": "13066:528:0",
                                                "trueBody": {
                                                    "id": 681,
                                                    "nodeType": "Block",
                                                    "src": "13089:416:0",
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
                                                                                "src": "13107:12:0",
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
                                                                                    "src": "13120:3:0",
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
                                                                                "memberLocation": "13124:6:0",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "13120:10:0",
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
                                                                            "src": "13107:24:0",
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
                                                                            "src": "13132:13:0",
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
                                                                        "src": "13107:39:0",
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
                                                                    "memberLocation": "13147:7:0",
                                                                    "memberName": "target4",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 39,
                                                                    "src": "13107:47:0",
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
                                                                            "src": "13166:1:0",
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
                                                                        "src": "13158:7:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 648,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "13158:7:0",
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
                                                                    "src": "13158:10:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13107:61:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 659,
                                                            "nodeType": "IfStatement",
                                                            "src": "13103:161:0",
                                                            "trueBody": {
                                                                "id": 658,
                                                                "nodeType": "Block",
                                                                "src": "13170:94:0",
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
                                                                                    "referencedDeclaration": 7752,
                                                                                    "src": "13195:30:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                                        "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                                    }
                                                                                },
                                                                                "id": 655,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13226:21:0",
                                                                                "memberName": "TargetAlreadyDeployed",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 7719,
                                                                                "src": "13195:52:0",
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
                                                                            "src": "13195:54:0",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_tuple$__$",
                                                                                "typeString": "tuple()"
                                                                            }
                                                                        },
                                                                        "id": 657,
                                                                        "nodeType": "RevertStatement",
                                                                        "src": "13188:61:0"
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
                                                                    "src": "13277:6:0",
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
                                                                            "src": "13353:6:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": 666,
                                                                            "name": "_extraData",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 297,
                                                                            "src": "13377:10:0",
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
                                                                            "src": "13405:5:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
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
                                                                                    "src": "13312:15:0",
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
                                                                                "referencedDeclaration": 8259,
                                                                                "src": "13286:25:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$",
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
                                                                            "src": "13286:42:0",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8259",
                                                                                "typeString": "contract IHyperdriveTargetDeployer"
                                                                            }
                                                                        },
                                                                        "id": 664,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "13329:6:0",
                                                                        "memberName": "deploy",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 8258,
                                                                        "src": "13286:49:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
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
                                                                    "src": "13286:138:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13277:147:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "id": 670,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "13277:147:0"
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
                                                                                "src": "13438:12:0",
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
                                                                                    "src": "13451:3:0",
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
                                                                                "memberLocation": "13455:6:0",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "13451:10:0",
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
                                                                            "src": "13438:24:0",
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
                                                                            "src": "13463:13:0",
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
                                                                        "src": "13438:39:0",
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
                                                                    "memberLocation": "13478:7:0",
                                                                    "memberName": "target4",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 39,
                                                                    "src": "13438:47:0",
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
                                                                    "src": "13488:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13438:56:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "id": 680,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "13438:56:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            "id": 689,
                                            "nodeType": "IfStatement",
                                            "src": "12621:973:0",
                                            "trueBody": {
                                                "id": 637,
                                                "nodeType": "Block",
                                                "src": "12644:416:0",
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
                                                                            "src": "12662:12:0",
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
                                                                                "src": "12675:3:0",
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
                                                                            "memberLocation": "12679:6:0",
                                                                            "memberName": "sender",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "12675:10:0",
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
                                                                        "src": "12662:24:0",
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
                                                                        "src": "12687:13:0",
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
                                                                    "src": "12662:39:0",
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
                                                                "memberLocation": "12702:7:0",
                                                                "memberName": "target3",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 36,
                                                                "src": "12662:47:0",
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
                                                                        "src": "12721:1:0",
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
                                                                    "src": "12713:7:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 604,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "12713:7:0",
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
                                                                "src": "12713:10:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "12662:61:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "id": 615,
                                                        "nodeType": "IfStatement",
                                                        "src": "12658:161:0",
                                                        "trueBody": {
                                                            "id": 614,
                                                            "nodeType": "Block",
                                                            "src": "12725:94:0",
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
                                                                                "referencedDeclaration": 7752,
                                                                                "src": "12750:30:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                                    "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                                }
                                                                            },
                                                                            "id": 611,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "12781:21:0",
                                                                            "memberName": "TargetAlreadyDeployed",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": 7719,
                                                                            "src": "12750:52:0",
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
                                                                        "src": "12750:54:0",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_tuple$__$",
                                                                            "typeString": "tuple()"
                                                                        }
                                                                    },
                                                                    "id": 613,
                                                                    "nodeType": "RevertStatement",
                                                                    "src": "12743:61:0"
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
                                                                "src": "12832:6:0",
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
                                                                        "src": "12908:6:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 622,
                                                                        "name": "_extraData",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 297,
                                                                        "src": "12932:10:0",
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
                                                                        "src": "12960:5:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
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
                                                                                "src": "12867:15:0",
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
                                                                            "referencedDeclaration": 8259,
                                                                            "src": "12841:25:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$",
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
                                                                        "src": "12841:42:0",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8259",
                                                                            "typeString": "contract IHyperdriveTargetDeployer"
                                                                        }
                                                                    },
                                                                    "id": 620,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12884:6:0",
                                                                    "memberName": "deploy",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 8258,
                                                                    "src": "12841:49:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
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
                                                                "src": "12841:138:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "12832:147:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 626,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "12832:147:0"
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
                                                                            "src": "12993:12:0",
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
                                                                                "src": "13006:3:0",
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
                                                                            "memberLocation": "13010:6:0",
                                                                            "memberName": "sender",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "13006:10:0",
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
                                                                        "src": "12993:24:0",
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
                                                                        "src": "13018:13:0",
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
                                                                    "src": "12993:39:0",
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
                                                                "memberLocation": "13033:7:0",
                                                                "memberName": "target3",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 36,
                                                                "src": "12993:47:0",
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
                                                                "src": "13043:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "12993:56:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 636,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "12993:56:0"
                                                    }
                                                ]
                                            }
                                        },
                                        "id": 690,
                                        "nodeType": "IfStatement",
                                        "src": "12176:1418:0",
                                        "trueBody": {
                                            "id": 593,
                                            "nodeType": "Block",
                                            "src": "12199:416:0",
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
                                                                        "src": "12217:12:0",
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
                                                                            "src": "12230:3:0",
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
                                                                        "memberLocation": "12234:6:0",
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "12230:10:0",
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
                                                                    "src": "12217:24:0",
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
                                                                    "src": "12242:13:0",
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
                                                                "src": "12217:39:0",
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
                                                            "memberLocation": "12257:7:0",
                                                            "memberName": "target2",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 33,
                                                            "src": "12217:47:0",
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
                                                                    "src": "12276:1:0",
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
                                                                "src": "12268:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 560,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "12268:7:0",
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
                                                            "src": "12268:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "12217:61:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 571,
                                                    "nodeType": "IfStatement",
                                                    "src": "12213:161:0",
                                                    "trueBody": {
                                                        "id": 570,
                                                        "nodeType": "Block",
                                                        "src": "12280:94:0",
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
                                                                            "referencedDeclaration": 7752,
                                                                            "src": "12305:30:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                            }
                                                                        },
                                                                        "id": 567,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "12336:21:0",
                                                                        "memberName": "TargetAlreadyDeployed",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 7719,
                                                                        "src": "12305:52:0",
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
                                                                    "src": "12305:54:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_tuple$__$",
                                                                        "typeString": "tuple()"
                                                                    }
                                                                },
                                                                "id": 569,
                                                                "nodeType": "RevertStatement",
                                                                "src": "12298:61:0"
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
                                                            "src": "12387:6:0",
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
                                                                    "src": "12463:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 578,
                                                                    "name": "_extraData",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 297,
                                                                    "src": "12487:10:0",
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
                                                                    "src": "12515:5:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
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
                                                                            "src": "12422:15:0",
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
                                                                        "referencedDeclaration": 8259,
                                                                        "src": "12396:25:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$",
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
                                                                    "src": "12396:42:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8259",
                                                                        "typeString": "contract IHyperdriveTargetDeployer"
                                                                    }
                                                                },
                                                                "id": 576,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "12439:6:0",
                                                                "memberName": "deploy",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 8258,
                                                                "src": "12396:49:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
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
                                                            "src": "12396:138:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "12387:147:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 582,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "12387:147:0"
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
                                                                        "src": "12548:12:0",
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
                                                                            "src": "12561:3:0",
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
                                                                        "memberLocation": "12565:6:0",
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "12561:10:0",
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
                                                                    "src": "12548:24:0",
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
                                                                    "src": "12573:13:0",
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
                                                                "src": "12548:39:0",
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
                                                            "memberLocation": "12588:7:0",
                                                            "memberName": "target2",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 33,
                                                            "src": "12548:47:0",
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
                                                            "src": "12598:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "12548:56:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 592,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "12548:56:0"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 691,
                                    "nodeType": "IfStatement",
                                    "src": "11731:1863:0",
                                    "trueBody": {
                                        "id": 549,
                                        "nodeType": "Block",
                                        "src": "11754:416:0",
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
                                                                    "src": "11772:12:0",
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
                                                                        "src": "11785:3:0",
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
                                                                    "memberLocation": "11789:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "11785:10:0",
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
                                                                "src": "11772:24:0",
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
                                                                "src": "11797:13:0",
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
                                                            "src": "11772:39:0",
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
                                                        "memberLocation": "11812:7:0",
                                                        "memberName": "target1",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 30,
                                                        "src": "11772:47:0",
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
                                                                "src": "11831:1:0",
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
                                                            "src": "11823:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 516,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "11823:7:0",
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
                                                        "src": "11823:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "11772:61:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 527,
                                                "nodeType": "IfStatement",
                                                "src": "11768:161:0",
                                                "trueBody": {
                                                    "id": 526,
                                                    "nodeType": "Block",
                                                    "src": "11835:94:0",
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
                                                                        "referencedDeclaration": 7752,
                                                                        "src": "11860:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 523,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "11891:21:0",
                                                                    "memberName": "TargetAlreadyDeployed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 7719,
                                                                    "src": "11860:52:0",
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
                                                                "src": "11860:54:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 525,
                                                            "nodeType": "RevertStatement",
                                                            "src": "11853:61:0"
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
                                                        "src": "11942:6:0",
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
                                                                "src": "12018:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 534,
                                                                "name": "_extraData",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 297,
                                                                "src": "12042:10:0",
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
                                                                "src": "12070:5:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
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
                                                                        "src": "11977:15:0",
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
                                                                    "referencedDeclaration": 8259,
                                                                    "src": "11951:25:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$",
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
                                                                "src": "11951:42:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$8259",
                                                                    "typeString": "contract IHyperdriveTargetDeployer"
                                                                }
                                                            },
                                                            "id": 532,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "11994:6:0",
                                                            "memberName": "deploy",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 8258,
                                                            "src": "11951:49:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
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
                                                        "src": "11951:138:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "11942:147:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 538,
                                                "nodeType": "ExpressionStatement",
                                                "src": "11942:147:0"
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
                                                                    "src": "12103:12:0",
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
                                                                        "src": "12116:3:0",
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
                                                                    "memberLocation": "12120:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "12116:10:0",
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
                                                                "src": "12103:24:0",
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
                                                                "src": "12128:13:0",
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
                                                            "src": "12103:39:0",
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
                                                        "memberLocation": "12143:7:0",
                                                        "memberName": "target1",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 30,
                                                        "src": "12103:47:0",
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
                                                        "src": "12153:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "12103:56:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 548,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12103:56:0"
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
                                        "src": "13611:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 305,
                                    "id": 693,
                                    "nodeType": "Return",
                                    "src": "13604:13:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            7751
                        ],
                        "documentation": {
                            "id": 290,
                            "nodeType": "StructuredDocumentation",
                            "src": "7080:622:0",
                            "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
                        },
                        "functionSelector": "7cc39092",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployTarget",
                        "nameLocation": "7716:12:0",
                        "parameters": {
                            "id": 302,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 292,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "7746:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 695,
                                    "src": "7738:21:0",
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
                                        "src": "7738:7:0",
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
                                    "nameLocation": "7805:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 695,
                                    "src": "7769:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 294,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 293,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "7769:11:0",
                                                "7781:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7241,
                                            "src": "7769:28:0"
                                        },
                                        "referencedDeclaration": 7241,
                                        "src": "7769:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_storage_ptr",
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
                                    "nameLocation": "7841:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 695,
                                    "src": "7828:23:0",
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
                                        "src": "7828:5:0",
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
                                    "nameLocation": "7869:12:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 695,
                                    "src": "7861:20:0",
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
                                        "src": "7861:7:0",
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
                                    "nameLocation": "7899:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 695,
                                    "src": "7891:13:0",
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
                                        "src": "7891:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7728:182:0"
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
                                    "nameLocation": "7937:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 695,
                                    "src": "7929:14:0",
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
                                        "src": "7929:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7928:16:0"
                        },
                        "scope": 890,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 713,
                        "nodeType": "FunctionDefinition",
                        "src": "13830:189:0",
                        "nodes": [],
                        "body": {
                            "id": 712,
                            "nodeType": "Block",
                            "src": "13957:62:0",
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
                                                "src": "13974:12:0",
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
                                                "src": "13987:9:0",
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
                                            "src": "13974:23:0",
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
                                            "src": "13998:13:0",
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
                                        "src": "13974:38:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$40_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 705,
                                    "id": 711,
                                    "nodeType": "Return",
                                    "src": "13967:45:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 696,
                            "nodeType": "StructuredDocumentation",
                            "src": "13630:195:0",
                            "text": "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment."
                        },
                        "functionSelector": "20503b3f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployments",
                        "nameLocation": "13839:11:0",
                        "parameters": {
                            "id": 701,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 698,
                                    "mutability": "mutable",
                                    "name": "_deployer",
                                    "nameLocation": "13868:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 713,
                                    "src": "13860:17:0",
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
                                        "src": "13860:7:0",
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
                                    "nameLocation": "13895:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 713,
                                    "src": "13887:21:0",
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
                                        "src": "13887:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13850:64:0"
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
                                    "src": "13938:17:0",
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
                                                "13938:10:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 40,
                                            "src": "13938:10:0"
                                        },
                                        "referencedDeclaration": 40,
                                        "src": "13938:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$40_storage_ptr",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13937:19:0"
                        },
                        "scope": 890,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 793,
                        "nodeType": "FunctionDefinition",
                        "src": "14174:1195:0",
                        "nodes": [],
                        "body": {
                            "id": 792,
                            "nodeType": "Block",
                            "src": "14287:1082:0",
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
                                                "src": "14438:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 721,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "14452:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7218,
                                            "src": "14438:34:0",
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
                                            "src": "14475:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1000_by_1",
                                                "typeString": "int_const 1000"
                                            },
                                            "value": "1e3"
                                        },
                                        "src": "14438:40:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 730,
                                    "nodeType": "IfStatement",
                                    "src": "14434:138:0",
                                    "trueBody": {
                                        "id": 729,
                                        "nodeType": "Block",
                                        "src": "14480:92:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "14501:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 726,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14532:27:0",
                                                        "memberName": "InvalidMinimumShareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7701,
                                                        "src": "14501:58:0",
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
                                                    "src": "14501:60:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 728,
                                                "nodeType": "RevertStatement",
                                                "src": "14494:67:0"
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
                                                "src": "14586:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 732,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "14600:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7227,
                                            "src": "14586:32:0",
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
                                            "src": "14622:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "14586:37:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 741,
                                    "nodeType": "IfStatement",
                                    "src": "14582:133:0",
                                    "trueBody": {
                                        "id": 740,
                                        "nodeType": "Block",
                                        "src": "14625:90:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "14646:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 737,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14677:25:0",
                                                        "memberName": "InvalidCheckpointDuration",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7695,
                                                        "src": "14646:56:0",
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
                                                    "src": "14646:58:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 739,
                                                "nodeType": "RevertStatement",
                                                "src": "14639:65:0"
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
                                                    "src": "14741:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                    }
                                                },
                                                "id": 743,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14755:16:0",
                                                "memberName": "positionDuration",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7224,
                                                "src": "14741:30:0",
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
                                                    "src": "14774:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                    }
                                                },
                                                "id": 745,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14788:18:0",
                                                "memberName": "checkpointDuration",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7227,
                                                "src": "14774:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "14741:65:0",
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
                                                        "src": "14822:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 748,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14836:16:0",
                                                    "memberName": "positionDuration",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7224,
                                                    "src": "14822:30:0",
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
                                                        "src": "14855:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 750,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14869:18:0",
                                                    "memberName": "checkpointDuration",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7227,
                                                    "src": "14855:32:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "14822:65:0",
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
                                                "src": "14903:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "14822:82:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "14741:163:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 761,
                                    "nodeType": "IfStatement",
                                    "src": "14724:279:0",
                                    "trueBody": {
                                        "id": 760,
                                        "nodeType": "Block",
                                        "src": "14915:88:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "14936:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 757,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14967:23:0",
                                                        "memberName": "InvalidPositionDuration",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7707,
                                                        "src": "14936:54:0",
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
                                                    "src": "14936:56:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 759,
                                                "nodeType": "RevertStatement",
                                                "src": "14929:63:0"
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
                                                                "src": "15081:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                }
                                                            },
                                                            "id": 763,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "15095:4:0",
                                                            "memberName": "fees",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7240,
                                                            "src": "15081:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                                "typeString": "struct IHyperdrive.Fees memory"
                                                            }
                                                        },
                                                        "id": 764,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15100:5:0",
                                                        "memberName": "curve",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7195,
                                                        "src": "15081:24:0",
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
                                                        "src": "15108:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                            "typeString": "int_const 1000000000000000000"
                                                        },
                                                        "value": "1e18"
                                                    },
                                                    "src": "15081:31:0",
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
                                                                "src": "15128:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                }
                                                            },
                                                            "id": 768,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "15142:4:0",
                                                            "memberName": "fees",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7240,
                                                            "src": "15128:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                                "typeString": "struct IHyperdrive.Fees memory"
                                                            }
                                                        },
                                                        "id": 769,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15147:4:0",
                                                        "memberName": "flat",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7198,
                                                        "src": "15128:23:0",
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
                                                        "src": "15154:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                            "typeString": "int_const 1000000000000000000"
                                                        },
                                                        "value": "1e18"
                                                    },
                                                    "src": "15128:30:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "15081:77:0",
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
                                                            "src": "15174:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        },
                                                        "id": 774,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15188:4:0",
                                                        "memberName": "fees",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7240,
                                                        "src": "15174:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                            "typeString": "struct IHyperdrive.Fees memory"
                                                        }
                                                    },
                                                    "id": 775,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15193:12:0",
                                                    "memberName": "governanceLP",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7201,
                                                    "src": "15174:31:0",
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
                                                    "src": "15208:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                        "typeString": "int_const 1000000000000000000"
                                                    },
                                                    "value": "1e18"
                                                },
                                                "src": "15174:38:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "15081:131:0",
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
                                                        "src": "15228:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 780,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15242:4:0",
                                                    "memberName": "fees",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7240,
                                                    "src": "15228:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                    }
                                                },
                                                "id": 781,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15247:16:0",
                                                "memberName": "governanceZombie",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7204,
                                                "src": "15228:35:0",
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
                                                "src": "15266:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000"
                                                },
                                                "value": "1e18"
                                            },
                                            "src": "15228:42:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "15081:189:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 791,
                                    "nodeType": "IfStatement",
                                    "src": "15064:299:0",
                                    "trueBody": {
                                        "id": 790,
                                        "nodeType": "Block",
                                        "src": "15281:82:0",
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
                                                            "referencedDeclaration": 7752,
                                                            "src": "15302:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 787,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15333:17:0",
                                                        "memberName": "InvalidFeeAmounts",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7698,
                                                        "src": "15302:48:0",
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
                                                    "src": "15302:50:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 789,
                                                "nodeType": "RevertStatement",
                                                "src": "15295:57:0"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 714,
                            "nodeType": "StructuredDocumentation",
                            "src": "14025:144:0",
                            "text": "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkPoolConfig",
                        "nameLocation": "14183:16:0",
                        "parameters": {
                            "id": 718,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 717,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "14245:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 793,
                                    "src": "14209:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 716,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 715,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "14209:11:0",
                                                "14221:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7241,
                                            "src": "14209:28:0"
                                        },
                                        "referencedDeclaration": 7241,
                                        "src": "14209:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14199:65:0"
                        },
                        "returnParameters": {
                            "id": 719,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14287:0:0"
                        },
                        "scope": 890,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 801,
                        "nodeType": "FunctionDefinition",
                        "src": "15589:115:0",
                        "nodes": [],
                        "documentation": {
                            "id": 794,
                            "nodeType": "StructuredDocumentation",
                            "src": "15375:209:0",
                            "text": "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getInitialVaultSharePrice",
                        "nameLocation": "15598:26:0",
                        "parameters": {
                            "id": 797,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 796,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "15647:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 801,
                                    "src": "15634:23:0",
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
                                        "src": "15634:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15624:39:0"
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
                                    "src": "15695:7:0",
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
                                        "src": "15695:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15694:9:0"
                        },
                        "scope": 890,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 889,
                        "nodeType": "FunctionDefinition",
                        "src": "15920:926:0",
                        "nodes": [],
                        "body": {
                            "id": 888,
                            "nodeType": "Block",
                            "src": "16072:774:0",
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
                                                "src": "16149:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 813,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16157:9:0",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7245,
                                            "src": "16149:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6793",
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
                                                "src": "16169:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 815,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16183:9:0",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7209,
                                            "src": "16169:23:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6793",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "16149:43:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6793",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 817,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16149:43:0"
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
                                                "src": "16202:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 820,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16210:13:0",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7248,
                                            "src": "16202:21:0",
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
                                                "src": "16226:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 822,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16240:13:0",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7212,
                                            "src": "16226:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "16202:51:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 824,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16202:51:0"
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
                                                "src": "16263:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 827,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16271:14:0",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7251,
                                            "src": "16263:22:0",
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
                                                "src": "16288:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 829,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16302:14:0",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7215,
                                            "src": "16288:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "16263:53:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 831,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16263:53:0"
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
                                                "src": "16326:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 834,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16334:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7257,
                                            "src": "16326:28:0",
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
                                                "src": "16357:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 836,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16371:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7218,
                                            "src": "16357:34:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16326:65:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 838,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16326:65:0"
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
                                                "src": "16401:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 841,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16409:24:0",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7260,
                                            "src": "16401:32:0",
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
                                                "src": "16436:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 843,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16463:24:0",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7221,
                                            "src": "16436:51:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16401:86:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 845,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16401:86:0"
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
                                                "src": "16497:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 848,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16505:16:0",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7263,
                                            "src": "16497:24:0",
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
                                                "src": "16524:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 850,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16538:16:0",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7224,
                                            "src": "16524:30:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16497:57:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 852,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16497:57:0"
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
                                                "src": "16564:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 855,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16572:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7266,
                                            "src": "16564:26:0",
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
                                                "src": "16593:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 857,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16607:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7227,
                                            "src": "16593:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16564:61:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 859,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16564:61:0"
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
                                                "src": "16635:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 862,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16643:11:0",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7269,
                                            "src": "16635:19:0",
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
                                                "src": "16657:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 864,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16671:11:0",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7230,
                                            "src": "16657:25:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16635:47:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 866,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16635:47:0"
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
                                                "src": "16692:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 869,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16700:10:0",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7272,
                                            "src": "16692:18:0",
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
                                                "src": "16713:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 871,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16727:10:0",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7233,
                                            "src": "16713:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "16692:45:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 873,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16692:45:0"
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
                                                "src": "16747:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 876,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16755:12:0",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7275,
                                            "src": "16747:20:0",
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
                                                "src": "16770:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 878,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16784:12:0",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7236,
                                            "src": "16770:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "16747:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 880,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16747:49:0"
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
                                                "src": "16806:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 883,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16814:4:0",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7279,
                                            "src": "16806:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
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
                                                "src": "16821:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 885,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16835:4:0",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7240,
                                            "src": "16821:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "src": "16806:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                            "typeString": "struct IHyperdrive.Fees memory"
                                        }
                                    },
                                    "id": 887,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16806:33:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 802,
                            "nodeType": "StructuredDocumentation",
                            "src": "15710:205:0",
                            "text": "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_copyPoolConfig",
                        "nameLocation": "15929:15:0",
                        "parameters": {
                            "id": 806,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 805,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "15990:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 889,
                                    "src": "15954:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 804,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 803,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "15954:11:0",
                                                "15966:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7241,
                                            "src": "15954:28:0"
                                        },
                                        "referencedDeclaration": 7241,
                                        "src": "15954:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$7241_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15944:65:0"
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
                                    "nameLocation": "16063:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 889,
                                    "src": "16033:37:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 808,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 807,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "16033:11:0",
                                                "16045:10:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7280,
                                            "src": "16033:22:0"
                                        },
                                        "referencedDeclaration": 7280,
                                        "src": "16033:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16032:39:0"
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
                            "referencedDeclaration": 7752,
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
                    7752
                ],
                "name": "HyperdriveDeployerCoordinator",
                "nameLocation": "909:29:0",
                "scope": 891,
                "usedErrors": [
                    7683,
                    7686,
                    7689,
                    7692,
                    7695,
                    7698,
                    7701,
                    7704,
                    7707,
                    7710,
                    7713,
                    7716,
                    7719
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 0
};
