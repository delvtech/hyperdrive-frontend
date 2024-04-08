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
            "name": "HyperdriveIsNotDeployed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "IncompleteDeployment",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidBaseToken",
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
            "name": "InvalidVaultSharesToken",
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
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "SenderIsNotFactory",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TargetAlreadyDeployed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TransferFailed",
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
            "name": "factory",
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
                    "internalType": "address",
                    "name": "_lp",
                    "type": "address"
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
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "lpShares",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
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
        "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "1ae6f515",
        "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "0b3c4f86",
        "deployments(bytes32)": "37404017",
        "factory()": "c45a0155",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70",
        "target0Deployer()": "ab71905f",
        "target1Deployer()": "a085fa30",
        "target2Deployer()": "b6cb1118",
        "target3Deployer()": "aa8cd6c4",
        "target4Deployer()": "966ecd1c"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultSharesToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SenderIsNotFactory\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_factory\":\"The factory that this deployer will be registered with.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"details\":\"This can only be deployed by the associated factory.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"This can only be deployed by the associated factory.As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(bytes32)\":{\"params\":{\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This can only be deployed by the associated factory.This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"InvalidVaultSharesToken()\":[{\"notice\":\"Thrown when the vault shares token isn't valid. Each instance         will have different criteria for what constitutes a valid base         token.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"SenderIsNotFactory()\":[{\"notice\":\"Thrown when the sender of a `deploy`, `deployTarget`, or         `initialize` transaction isn't the associated factory.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(bytes32)\":{\"notice\":\"Gets the deployment specified by the deployment ID.\"},\"factory()\":{\"notice\":\"The factory that this deployer will be registered with.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xa808014ce91bfbe6e112f7ad34c35a0a6b127fc8d9c86f285e0e85db2887d08a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://85951b911bd00eb9ba8595b8aa822ca165b7ea6ba7059461c7e55466cc8996b9\",\"dweb:/ipfs/Qmdh8MTn2oHYgGhmftdg6KDZGpUcuoWM7QWW8e9pSFjNn3\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58\",\"dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]}},\"version\":1}",
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
                    "name": "HyperdriveIsNotDeployed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "IncompleteDeployment"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InsufficientValue"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidBaseToken"
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
                    "name": "InvalidVaultSharesToken"
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
                    "name": "NotPayable"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "SenderIsNotFactory"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "TargetAlreadyDeployed"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "TransferFailed"
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
                                    "internalType": "address",
                                    "name": "sweepCollector",
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
                                    "internalType": "address",
                                    "name": "sweepCollector",
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
                    "name": "factory",
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
                            "internalType": "address",
                            "name": "_lp",
                            "type": "address"
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
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "initialize",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "lpShares",
                            "type": "uint256"
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
                            "_factory": "The factory that this deployer will be registered with.",
                            "_target0Deployer": "The target0 deployer.",
                            "_target1Deployer": "The target1 deployer.",
                            "_target2Deployer": "The target2 deployer.",
                            "_target4Deployer": "The target4 deployer."
                        }
                    },
                    "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        "details": "This can only be deployed by the associated factory.",
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
                    "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        "details": "This can only be deployed by the associated factory.As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.",
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
                    "deployments(bytes32)": {
                        "params": {
                            "_deploymentId": "The deployment ID."
                        },
                        "returns": {
                            "_0": "The deployment."
                        }
                    },
                    "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        "details": "This can only be deployed by the associated factory.This function utilizes several helper functions that provide      flexibility to implementations.",
                        "params": {
                            "_apr": "The target APR.",
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_deploymentId": "The ID of the deployment.",
                            "_lp": "The LP that is initializing the pool.",
                            "_options": "The options that configure how the initialization is        settled."
                        },
                        "returns": {
                            "lpShares": "The initial number of LP shares created."
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
                    "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        "notice": "Deploys a Hyperdrive instance with the given parameters."
                    },
                    "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        "notice": "Deploys a Hyperdrive target instance with the given parameters."
                    },
                    "deployments(bytes32)": {
                        "notice": "Gets the deployment specified by the deployment ID."
                    },
                    "factory()": {
                        "notice": "The factory that this deployer will be registered with."
                    },
                    "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Initializes a pool that was deployed by this coordinator."
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
                "keccak256": "0xa808014ce91bfbe6e112f7ad34c35a0a6b127fc8d9c86f285e0e85db2887d08a",
                "urls": [
                    "bzz-raw://85951b911bd00eb9ba8595b8aa822ca165b7ea6ba7059461c7e55466cc8996b9",
                    "dweb:/ipfs/Qmdh8MTn2oHYgGhmftdg6KDZGpUcuoWM7QWW8e9pSFjNn3"
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
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
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
                "keccak256": "0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc",
                "urls": [
                    "bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58",
                    "dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/deployers/HyperdriveDeployerCoordinator.sol",
        "id": 1040,
        "exportedSymbols": {
            "HyperdriveDeployerCoordinator": [
                1039
            ],
            "IHyperdrive": [
                10351
            ],
            "IHyperdriveCoreDeployer": [
                10570
            ],
            "IHyperdriveDeployerCoordinator": [
                10684
            ],
            "IHyperdriveTargetDeployer": [
                11236
            ],
            "ONE": [
                18039
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:21071:0",
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
                "scope": 1040,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 2,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
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
                "scope": 1040,
                "sourceUnit": 10571,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 4,
                            "name": "IHyperdriveCoreDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10570,
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
                "scope": 1040,
                "sourceUnit": 10685,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6,
                            "name": "IHyperdriveDeployerCoordinator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10684,
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
                "scope": 1040,
                "sourceUnit": 11237,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8,
                            "name": "IHyperdriveTargetDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11236,
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
                "scope": 1040,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18039,
                            "src": "407:3:0",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 1039,
                "nodeType": "ContractDefinition",
                "src": "946:20163:0",
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
                        "scope": 1039,
                        "visibility": "public"
                    },
                    {
                        "id": 45,
                        "nodeType": "VariableDeclaration",
                        "src": "2374:32:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 43,
                            "nodeType": "StructuredDocumentation",
                            "src": "2302:67:0",
                            "text": "@notice The factory that this deployer will be registered with."
                        },
                        "functionSelector": "c45a0155",
                        "mutability": "immutable",
                        "name": "factory",
                        "nameLocation": "2399:7:0",
                        "scope": 1039,
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
                            "src": "2374:7:0",
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
                        "src": "2486:37:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 46,
                            "nodeType": "StructuredDocumentation",
                            "src": "2413:68:0",
                            "text": "@notice The contract used to deploy new instances of Hyperdrive."
                        },
                        "functionSelector": "c83e1f51",
                        "mutability": "immutable",
                        "name": "coreDeployer",
                        "nameLocation": "2511:12:0",
                        "scope": 1039,
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
                            "src": "2486:7:0",
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
                        "src": "2610:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 49,
                            "nodeType": "StructuredDocumentation",
                            "src": "2530:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget0."
                        },
                        "functionSelector": "ab71905f",
                        "mutability": "immutable",
                        "name": "target0Deployer",
                        "nameLocation": "2635:15:0",
                        "scope": 1039,
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
                            "src": "2610:7:0",
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
                        "src": "2737:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 52,
                            "nodeType": "StructuredDocumentation",
                            "src": "2657:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget1."
                        },
                        "functionSelector": "a085fa30",
                        "mutability": "immutable",
                        "name": "target1Deployer",
                        "nameLocation": "2762:15:0",
                        "scope": 1039,
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
                            "src": "2737:7:0",
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
                        "src": "2864:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 55,
                            "nodeType": "StructuredDocumentation",
                            "src": "2784:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget2."
                        },
                        "functionSelector": "b6cb1118",
                        "mutability": "immutable",
                        "name": "target2Deployer",
                        "nameLocation": "2889:15:0",
                        "scope": 1039,
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
                            "src": "2864:7:0",
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
                        "src": "2991:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 58,
                            "nodeType": "StructuredDocumentation",
                            "src": "2911:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget3."
                        },
                        "functionSelector": "aa8cd6c4",
                        "mutability": "immutable",
                        "name": "target3Deployer",
                        "nameLocation": "3016:15:0",
                        "scope": 1039,
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
                            "src": "2991:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 63,
                        "nodeType": "VariableDeclaration",
                        "src": "3118:40:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 61,
                            "nodeType": "StructuredDocumentation",
                            "src": "3038:75:0",
                            "text": "@notice The contract used to deploy new instances of HyperdriveTarget4."
                        },
                        "functionSelector": "966ecd1c",
                        "mutability": "immutable",
                        "name": "target4Deployer",
                        "nameLocation": "3143:15:0",
                        "scope": 1039,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 62,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3118:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 69,
                        "nodeType": "VariableDeclaration",
                        "src": "3225:52:0",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 64,
                            "nodeType": "StructuredDocumentation",
                            "src": "3165:55:0",
                            "text": "@notice A mapping from deployment ID to deployment."
                        },
                        "mutability": "mutable",
                        "name": "_deployments",
                        "nameLocation": "3265:12:0",
                        "scope": 1039,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                            "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)"
                        },
                        "typeName": {
                            "id": 68,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 65,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "3233:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3225:30:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 67,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 66,
                                    "name": "Deployment",
                                    "nameLocations": [
                                        "3244:10:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 42,
                                    "src": "3244:10:0"
                                },
                                "referencedDeclaration": 42,
                                "src": "3244:10:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 116,
                        "nodeType": "FunctionDefinition",
                        "src": "3683:538:0",
                        "nodes": [],
                        "body": {
                            "id": 115,
                            "nodeType": "Block",
                            "src": "3928:293:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 89,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 87,
                                            "name": "factory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 45,
                                            "src": "3938:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 88,
                                            "name": "_factory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72,
                                            "src": "3948:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3938:18:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 90,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3938:18:0"
                                },
                                {
                                    "expression": {
                                        "id": 93,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 91,
                                            "name": "coreDeployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 48,
                                            "src": "3966:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 92,
                                            "name": "_coreDeployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 74,
                                            "src": "3981:13:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3966:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 94,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3966:28:0"
                                },
                                {
                                    "expression": {
                                        "id": 97,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 95,
                                            "name": "target0Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 51,
                                            "src": "4004:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 96,
                                            "name": "_target0Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 76,
                                            "src": "4022:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4004:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 98,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4004:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 101,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 99,
                                            "name": "target1Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54,
                                            "src": "4048:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 100,
                                            "name": "_target1Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 78,
                                            "src": "4066:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4048:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 102,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4048:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 105,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 103,
                                            "name": "target2Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 57,
                                            "src": "4092:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 104,
                                            "name": "_target2Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 80,
                                            "src": "4110:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4092:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 106,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4092:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 109,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 107,
                                            "name": "target3Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60,
                                            "src": "4136:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 108,
                                            "name": "_target3Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 82,
                                            "src": "4154:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4136:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 110,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4136:34:0"
                                },
                                {
                                    "expression": {
                                        "id": 113,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 111,
                                            "name": "target4Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 63,
                                            "src": "4180:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 112,
                                            "name": "_target4Deployer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 84,
                                            "src": "4198:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4180:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 114,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4180:34:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 70,
                            "nodeType": "StructuredDocumentation",
                            "src": "3284:394:0",
                            "text": "@notice Instantiates the deployer coordinator.\n @param _factory The factory that this deployer will be registered with.\n @param _coreDeployer The core deployer.\n @param _target0Deployer The target0 deployer.\n @param _target1Deployer The target1 deployer.\n @param _target2Deployer The target2 deployer.\n @param _target4Deployer The target4 deployer."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72,
                                    "mutability": "mutable",
                                    "name": "_factory",
                                    "nameLocation": "3712:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3704:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3704:7:0",
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
                                    "id": 74,
                                    "mutability": "mutable",
                                    "name": "_coreDeployer",
                                    "nameLocation": "3738:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3730:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3730:7:0",
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
                                    "id": 76,
                                    "mutability": "mutable",
                                    "name": "_target0Deployer",
                                    "nameLocation": "3769:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3761:24:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 75,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3761:7:0",
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
                                    "id": 78,
                                    "mutability": "mutable",
                                    "name": "_target1Deployer",
                                    "nameLocation": "3803:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3795:24:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 77,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3795:7:0",
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
                                    "id": 80,
                                    "mutability": "mutable",
                                    "name": "_target2Deployer",
                                    "nameLocation": "3837:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3829:24:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 79,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3829:7:0",
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
                                    "id": 82,
                                    "mutability": "mutable",
                                    "name": "_target3Deployer",
                                    "nameLocation": "3871:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3863:24:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 81,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3863:7:0",
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
                                    "id": 84,
                                    "mutability": "mutable",
                                    "name": "_target4Deployer",
                                    "nameLocation": "3905:16:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 116,
                                    "src": "3897:24:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 83,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3897:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3694:233:0"
                        },
                        "returnParameters": {
                            "id": 86,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3928:0:0"
                        },
                        "scope": 1039,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 132,
                        "nodeType": "ModifierDefinition",
                        "src": "4322:160:0",
                        "nodes": [],
                        "body": {
                            "id": 131,
                            "nodeType": "Block",
                            "src": "4345:137:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 119,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "4359:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 120,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4363:6:0",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "4359:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 121,
                                            "name": "factory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 45,
                                            "src": "4373:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4359:21:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 129,
                                    "nodeType": "IfStatement",
                                    "src": "4355:110:0",
                                    "trueBody": {
                                        "id": 128,
                                        "nodeType": "Block",
                                        "src": "4382:83:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 123,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "4403:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 125,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4434:18:0",
                                                        "memberName": "SenderIsNotFactory",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10628,
                                                        "src": "4403:49:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 126,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4403:51:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 127,
                                                "nodeType": "RevertStatement",
                                                "src": "4396:58:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 130,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "4474:1:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 117,
                            "nodeType": "StructuredDocumentation",
                            "src": "4227:90:0",
                            "text": "@dev Ensures that the contract is being called by the associated\n      factory."
                        },
                        "name": "onlyFactory",
                        "nameLocation": "4331:11:0",
                        "parameters": {
                            "id": 118,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4342:2:0"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 324,
                        "nodeType": "FunctionDefinition",
                        "src": "4979:2971:0",
                        "nodes": [],
                        "body": {
                            "id": 323,
                            "nodeType": "Block",
                            "src": "5186:2764:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        151
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 151,
                                            "mutability": "mutable",
                                            "name": "deployment",
                                            "nameLocation": "5294:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 323,
                                            "src": "5276:28:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                            },
                                            "typeName": {
                                                "id": 150,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 149,
                                                    "name": "Deployment",
                                                    "nameLocations": [
                                                        "5276:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 42,
                                                    "src": "5276:10:0"
                                                },
                                                "referencedDeclaration": 42,
                                                "src": "5276:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 155,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 152,
                                            "name": "_deployments",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69,
                                            "src": "5307:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                            }
                                        },
                                        "id": 154,
                                        "indexExpression": {
                                            "id": 153,
                                            "name": "_deploymentId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 135,
                                            "src": "5320:13:0",
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
                                        "src": "5307:27:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5276:58:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 156,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 151,
                                                "src": "5348:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 157,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5359:10:0",
                                            "memberName": "hyperdrive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26,
                                            "src": "5348:21:0",
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
                                                    "id": 160,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5381:1:0",
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
                                                "id": 159,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5373:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 158,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5373:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 161,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5373:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5348:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 169,
                                    "nodeType": "IfStatement",
                                    "src": "5344:131:0",
                                    "trueBody": {
                                        "id": 168,
                                        "nodeType": "Block",
                                        "src": "5385:90:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 163,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "5406:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 165,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5437:25:0",
                                                        "memberName": "HyperdriveAlreadyDeployed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10586,
                                                        "src": "5406:56:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5406:58:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 167,
                                                "nodeType": "RevertStatement",
                                                "src": "5399:65:0"
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
                                        "id": 176,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 170,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 151,
                                                "src": "5624:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 171,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5635:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17,
                                            "src": "5624:21:0",
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
                                                    "id": 174,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5657:1:0",
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
                                                "id": 173,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5649:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                    "typeString": "type(bytes32)"
                                                },
                                                "typeName": {
                                                    "id": 172,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5649:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 175,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5649:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "5624:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 183,
                                    "nodeType": "IfStatement",
                                    "src": "5620:128:0",
                                    "trueBody": {
                                        "id": 182,
                                        "nodeType": "Block",
                                        "src": "5661:87:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 177,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "5682:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 179,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5713:22:0",
                                                        "memberName": "DeploymentDoesNotExist",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10580,
                                                        "src": "5682:53:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 180,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5682:55:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 181,
                                                "nodeType": "RevertStatement",
                                                "src": "5675:62:0"
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
                                        "id": 222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 214,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 206,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
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
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 190,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 184,
                                                                "name": "deployment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 151,
                                                                "src": "5837:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                                }
                                                            },
                                                            "id": 185,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5848:7:0",
                                                            "memberName": "target0",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 29,
                                                            "src": "5837:18:0",
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
                                                                    "id": 188,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5867:1:0",
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
                                                                "id": 187,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "5859:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 186,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5859:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 189,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5859:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "5837:32:0",
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
                                                                "referencedDeclaration": 151,
                                                                "src": "5885:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                                }
                                                            },
                                                            "id": 192,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5896:7:0",
                                                            "memberName": "target1",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 32,
                                                            "src": "5885:18:0",
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
                                                                    "src": "5915:1:0",
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
                                                                "src": "5907:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 193,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5907:7:0",
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
                                                            "src": "5907:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "5885:32:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5837:80:0",
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
                                                    "id": 205,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 199,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 151,
                                                            "src": "5933:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                            }
                                                        },
                                                        "id": 200,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5944:7:0",
                                                        "memberName": "target2",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 35,
                                                        "src": "5933:18:0",
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
                                                                "id": 203,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5963:1:0",
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
                                                            "id": 202,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "5955:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 201,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5955:7:0",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 204,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5955:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "5933:32:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "5837:128:0",
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
                                                "id": 213,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 207,
                                                        "name": "deployment",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 151,
                                                        "src": "5981:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                        }
                                                    },
                                                    "id": 208,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5992:7:0",
                                                    "memberName": "target3",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 38,
                                                    "src": "5981:18:0",
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
                                                            "id": 211,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6011:1:0",
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
                                                        "id": 210,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "6003:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 209,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "6003:7:0",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 212,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6003:10:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "5981:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "5837:176:0",
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
                                            "id": 221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 215,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 151,
                                                    "src": "6029:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 216,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6040:7:0",
                                                "memberName": "target4",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 41,
                                                "src": "6029:18:0",
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
                                                        "id": 219,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6059:1:0",
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
                                                    "id": 218,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6051:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 217,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6051:7:0",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6051:10:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "6029:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5837:224:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 229,
                                    "nodeType": "IfStatement",
                                    "src": "5820:337:0",
                                    "trueBody": {
                                        "id": 228,
                                        "nodeType": "Block",
                                        "src": "6072:85:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 223,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "6093:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 225,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6124:20:0",
                                                        "memberName": "IncompleteDeployment",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10583,
                                                        "src": "6093:51:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
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
                                                    "src": "6093:53:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 227,
                                                "nodeType": "RevertStatement",
                                                "src": "6086:60:0"
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
                                        "id": 238,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 233,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 138,
                                                            "src": "6260:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 231,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "6249:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 232,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6253:6:0",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "6249:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 234,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6249:25:0",
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
                                                "id": 230,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "6239:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 235,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6239:36:0",
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
                                                "id": 236,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 151,
                                                "src": "6279:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 237,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6290:10:0",
                                            "memberName": "configHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17,
                                            "src": "6279:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "6239:61:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 245,
                                    "nodeType": "IfStatement",
                                    "src": "6235:148:0",
                                    "trueBody": {
                                        "id": 244,
                                        "nodeType": "Block",
                                        "src": "6302:81:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 239,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "6323:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 241,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6354:16:0",
                                                        "memberName": "MismatchedConfig",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10619,
                                                        "src": "6323:47:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 242,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6323:49:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 243,
                                                "nodeType": "RevertStatement",
                                                "src": "6316:56:0"
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
                                        "id": 251,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 247,
                                                    "name": "_extraData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 140,
                                                    "src": "6483:10:0",
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
                                                "id": 246,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "6473:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
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
                                            "src": "6473:21:0",
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
                                                "id": 249,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 151,
                                                "src": "6498:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                }
                                            },
                                            "id": 250,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6509:13:0",
                                            "memberName": "extraDataHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20,
                                            "src": "6498:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "6473:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 258,
                                    "nodeType": "IfStatement",
                                    "src": "6469:139:0",
                                    "trueBody": {
                                        "id": 257,
                                        "nodeType": "Block",
                                        "src": "6524:84:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 252,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "6545:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 254,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6576:19:0",
                                                        "memberName": "MismatchedExtraData",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10622,
                                                        "src": "6545:50:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 255,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6545:52:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 256,
                                                "nodeType": "RevertStatement",
                                                "src": "6538:59:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 260,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 138,
                                                "src": "6901:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 259,
                                            "name": "_checkPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 925,
                                            "src": "6884:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                                            }
                                        },
                                        "id": 261,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6884:31:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 262,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6884:31:0"
                                },
                                {
                                    "assignments": [
                                        267
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 267,
                                            "mutability": "mutable",
                                            "name": "config",
                                            "nameLocation": "7064:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 323,
                                            "src": "7034:36:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 266,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 265,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "7034:11:0",
                                                        "7046:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10154,
                                                    "src": "7034:22:0"
                                                },
                                                "referencedDeclaration": 10154,
                                                "src": "7034:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 271,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 269,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 138,
                                                "src": "7089:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 268,
                                            "name": "_copyPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1038,
                                            "src": "7073:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$_t_struct$_PoolConfig_$10154_memory_ptr_$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                                            }
                                        },
                                        "id": 270,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7073:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7034:69:0"
                                },
                                {
                                    "expression": {
                                        "id": 277,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 272,
                                                "name": "config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 267,
                                                "src": "7113:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 274,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7120:22:0",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10125,
                                            "src": "7113:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 275,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 151,
                                                "src": "7145:10:0",
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
                                            "memberLocation": "7156:17:0",
                                            "memberName": "initialSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 23,
                                            "src": "7145:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7113:60:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 278,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7113:60:0"
                                },
                                {
                                    "assignments": [
                                        280
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 280,
                                            "mutability": "mutable",
                                            "name": "deploymentId",
                                            "nameLocation": "7271:12:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 323,
                                            "src": "7263:20:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 279,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7263:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 282,
                                    "initialValue": {
                                        "id": 281,
                                        "name": "_deploymentId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 135,
                                        "src": "7286:13:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7263:36:0"
                                },
                                {
                                    "assignments": [
                                        284
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 284,
                                            "mutability": "mutable",
                                            "name": "salt",
                                            "nameLocation": "7347:4:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 323,
                                            "src": "7339:12:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 283,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7339:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 286,
                                    "initialValue": {
                                        "id": 285,
                                        "name": "_salt",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 142,
                                        "src": "7354:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7339:20:0"
                                },
                                {
                                    "assignments": [
                                        288
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 288,
                                            "mutability": "mutable",
                                            "name": "hyperdrive",
                                            "nameLocation": "7407:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 323,
                                            "src": "7399:18:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 287,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7399:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 313,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 293,
                                                "name": "config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 267,
                                                "src": "7478:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            {
                                                "id": 294,
                                                "name": "_extraData",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 140,
                                                "src": "7498:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 295,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 151,
                                                    "src": "7522:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 296,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7533:7:0",
                                                "memberName": "target0",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 29,
                                                "src": "7522:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 297,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 151,
                                                    "src": "7554:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 298,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7565:7:0",
                                                "memberName": "target1",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 32,
                                                "src": "7554:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 299,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 151,
                                                    "src": "7586:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 300,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7597:7:0",
                                                "memberName": "target2",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 35,
                                                "src": "7586:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 301,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 151,
                                                    "src": "7618:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 302,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7629:7:0",
                                                "memberName": "target3",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 38,
                                                "src": "7618:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 303,
                                                    "name": "deployment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 151,
                                                    "src": "7650:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment memory"
                                                    }
                                                },
                                                "id": 304,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7661:7:0",
                                                "memberName": "target4",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 41,
                                                "src": "7650:18:0",
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
                                                                "id": 308,
                                                                "name": "deploymentId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 280,
                                                                "src": "7824:12:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 309,
                                                                "name": "salt",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 284,
                                                                "src": "7838:4:0",
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
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 306,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "7813:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 307,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7817:6:0",
                                                            "memberName": "encode",
                                                            "nodeType": "MemberAccess",
                                                            "src": "7813:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 310,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7813:30:0",
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
                                                    "id": 305,
                                                    "name": "keccak256",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -8,
                                                    "src": "7803:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                    }
                                                },
                                                "id": 311,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7803:41:0",
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
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
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
                                                        "id": 290,
                                                        "name": "coreDeployer",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 48,
                                                        "src": "7444:12:0",
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
                                                    "id": 289,
                                                    "name": "IHyperdriveCoreDeployer",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10570,
                                                    "src": "7420:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveCoreDeployer_$10570_$",
                                                        "typeString": "type(contract IHyperdriveCoreDeployer)"
                                                    }
                                                },
                                                "id": 291,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7420:37:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdriveCoreDeployer_$10570",
                                                    "typeString": "contract IHyperdriveCoreDeployer"
                                                }
                                            },
                                            "id": 292,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7458:6:0",
                                            "memberName": "deploy",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10569,
                                            "src": "7420:44:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$",
                                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,address,address,address,address,address,bytes32) external returns (address)"
                                            }
                                        },
                                        "id": 312,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7420:434:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7399:455:0"
                                },
                                {
                                    "expression": {
                                        "id": 319,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 314,
                                                    "name": "_deployments",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 69,
                                                    "src": "7864:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                        "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                    }
                                                },
                                                "id": 316,
                                                "indexExpression": {
                                                    "id": 315,
                                                    "name": "_deploymentId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 135,
                                                    "src": "7877:13:0",
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
                                                "src": "7864:27:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                }
                                            },
                                            "id": 317,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7892:10:0",
                                            "memberName": "hyperdrive",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26,
                                            "src": "7864:38:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 318,
                                            "name": "hyperdrive",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 288,
                                            "src": "7905:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7864:51:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 320,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7864:51:0"
                                },
                                {
                                    "expression": {
                                        "id": 321,
                                        "name": "hyperdrive",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 288,
                                        "src": "7933:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 148,
                                    "id": 322,
                                    "nodeType": "Return",
                                    "src": "7926:17:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10649
                        ],
                        "documentation": {
                            "id": 133,
                            "nodeType": "StructuredDocumentation",
                            "src": "4488:486:0",
                            "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @dev This can only be deployed by the associated factory.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance."
                        },
                        "functionSelector": "1ae6f515",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 145,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 144,
                                    "name": "onlyFactory",
                                    "nameLocations": [
                                        "5156:11:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 132,
                                    "src": "5156:11:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5156:11:0"
                            }
                        ],
                        "name": "deploy",
                        "nameLocation": "4988:6:0",
                        "parameters": {
                            "id": 143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 135,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "5012:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 324,
                                    "src": "5004:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 134,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5004:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 138,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "5071:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 324,
                                    "src": "5035:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 137,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 136,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "5035:11:0",
                                                "5047:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "5035:28:0"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "5035:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 140,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "5107:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 324,
                                    "src": "5094:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 139,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5094:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 142,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "5135:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 324,
                                    "src": "5127:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 141,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5127:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4994:152:0"
                        },
                        "returnParameters": {
                            "id": 148,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 147,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 324,
                                    "src": "5177:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 146,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5177:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5176:9:0"
                        },
                        "scope": 1039,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 706,
                        "nodeType": "FunctionDefinition",
                        "src": "8649:5837:0",
                        "nodes": [],
                        "body": {
                            "id": 705,
                            "nodeType": "Block",
                            "src": "8899:5587:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        345
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 345,
                                            "mutability": "mutable",
                                            "name": "deployment",
                                            "nameLocation": "9169:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 705,
                                            "src": "9150:29:0",
                                            "stateVariable": false,
                                            "storageLocation": "storage",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                            },
                                            "typeName": {
                                                "id": 344,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 343,
                                                    "name": "Deployment",
                                                    "nameLocations": [
                                                        "9150:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 42,
                                                    "src": "9150:10:0"
                                                },
                                                "referencedDeclaration": 42,
                                                "src": "9150:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 349,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 346,
                                            "name": "_deployments",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69,
                                            "src": "9182:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                            }
                                        },
                                        "id": 348,
                                        "indexExpression": {
                                            "id": 347,
                                            "name": "_deploymentId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 327,
                                            "src": "9195:13:0",
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
                                        "src": "9182:27:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "9150:59:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 352,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 350,
                                            "name": "_targetIndex",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 334,
                                            "src": "9223:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 351,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "9239:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "9223:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 452,
                                    "nodeType": "IfStatement",
                                    "src": "9219:1810:0",
                                    "trueBody": {
                                        "id": 451,
                                        "nodeType": "Block",
                                        "src": "9242:1787:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 359,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 353,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "9403:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 354,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9414:10:0",
                                                        "memberName": "configHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17,
                                                        "src": "9403:21:0",
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
                                                                "id": 357,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "9436:1:0",
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
                                                            "id": 356,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "9428:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes32_$",
                                                                "typeString": "type(bytes32)"
                                                            },
                                                            "typeName": {
                                                                "id": 355,
                                                                "name": "bytes32",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "9428:7:0",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 358,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9428:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "9403:35:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 366,
                                                "nodeType": "IfStatement",
                                                "src": "9399:137:0",
                                                "trueBody": {
                                                    "id": 365,
                                                    "nodeType": "Block",
                                                    "src": "9440:96:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 360,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10684,
                                                                        "src": "9465:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 362,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9496:23:0",
                                                                    "memberName": "DeploymentAlreadyExists",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10577,
                                                                    "src": "9465:54:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
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
                                                                "src": "9465:56:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 364,
                                                            "nodeType": "RevertStatement",
                                                            "src": "9458:63:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 368,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 330,
                                                            "src": "9687:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "id": 367,
                                                        "name": "_checkPoolConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 925,
                                                        "src": "9670:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$__$",
                                                            "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
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
                                                    "src": "9670:31:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 370,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9670:31:0"
                                            },
                                            {
                                                "assignments": [
                                                    372
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 372,
                                                        "mutability": "mutable",
                                                        "name": "initialSharePrice",
                                                        "nameLocation": "9827:17:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 451,
                                                        "src": "9819:25:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 371,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9819:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 377,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 374,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 330,
                                                            "src": "9891:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        },
                                                        {
                                                            "id": 375,
                                                            "name": "_extraData",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 332,
                                                            "src": "9922:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "id": 373,
                                                        "name": "_getInitialVaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 936,
                                                        "src": "9847:26:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct IHyperdrive.PoolDeployConfig memory,bytes memory) view returns (uint256)"
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
                                                    "src": "9847:99:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9819:127:0"
                                            },
                                            {
                                                "assignments": [
                                                    379
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 379,
                                                        "mutability": "mutable",
                                                        "name": "configHash_",
                                                        "nameLocation": "9968:11:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 451,
                                                        "src": "9960:19:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 378,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9960:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 386,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 383,
                                                                    "name": "_deployConfig",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 330,
                                                                    "src": "10003:13:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 381,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "9992:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 382,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "9996:6:0",
                                                                "memberName": "encode",
                                                                "nodeType": "MemberAccess",
                                                                "src": "9992:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 384,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "9992:25:0",
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
                                                        "id": 380,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "9982:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 385,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9982:36:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9960:58:0"
                                            },
                                            {
                                                "assignments": [
                                                    388
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 388,
                                                        "mutability": "mutable",
                                                        "name": "extraDataHash",
                                                        "nameLocation": "10040:13:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 451,
                                                        "src": "10032:21:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 387,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "10032:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 392,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 390,
                                                            "name": "_extraData",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 332,
                                                            "src": "10066:10:0",
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
                                                        "id": 389,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "10056:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 391,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10056:21:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "10032:45:0"
                                            },
                                            {
                                                "assignments": [
                                                    397
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 397,
                                                        "mutability": "mutable",
                                                        "name": "config_",
                                                        "nameLocation": "10238:7:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 451,
                                                        "src": "10208:37:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "memory",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig"
                                                        },
                                                        "typeName": {
                                                            "id": 396,
                                                            "nodeType": "UserDefinedTypeName",
                                                            "pathNode": {
                                                                "id": 395,
                                                                "name": "IHyperdrive.PoolConfig",
                                                                "nameLocations": [
                                                                    "10208:11:0",
                                                                    "10220:10:0"
                                                                ],
                                                                "nodeType": "IdentifierPath",
                                                                "referencedDeclaration": 10154,
                                                                "src": "10208:22:0"
                                                            },
                                                            "referencedDeclaration": 10154,
                                                            "src": "10208:22:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 401,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 399,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 330,
                                                            "src": "10281:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "id": 398,
                                                        "name": "_copyPoolConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1038,
                                                        "src": "10248:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$_t_struct$_PoolConfig_$10154_memory_ptr_$",
                                                            "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
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
                                                    "src": "10248:60:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "10208:100:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 406,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 402,
                                                            "name": "config_",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 397,
                                                            "src": "10322:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                            }
                                                        },
                                                        "id": 404,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10330:22:0",
                                                        "memberName": "initialVaultSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10125,
                                                        "src": "10322:30:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 405,
                                                        "name": "initialSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 372,
                                                        "src": "10355:17:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "10322:50:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 407,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10322:50:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 423,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 408,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 341,
                                                        "src": "10431:6:0",
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
                                                                "id": 413,
                                                                "name": "config_",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 397,
                                                                "src": "10507:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 414,
                                                                "name": "_extraData",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 332,
                                                                "src": "10532:10:0",
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
                                                                                "id": 418,
                                                                                "name": "_deploymentId",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 327,
                                                                                "src": "10710:13:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 419,
                                                                                "name": "_salt",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 336,
                                                                                "src": "10725:5:0",
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
                                                                                },
                                                                                {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            ],
                                                                            "expression": {
                                                                                "id": 416,
                                                                                "name": "abi",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -1,
                                                                                "src": "10699:3:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                    "typeString": "abi"
                                                                                }
                                                                            },
                                                                            "id": 417,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "10703:6:0",
                                                                            "memberName": "encode",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "10699:10:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                "typeString": "function () pure returns (bytes memory)"
                                                                            }
                                                                        },
                                                                        "id": 420,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "10699:32:0",
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
                                                                    "id": 415,
                                                                    "name": "keccak256",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -8,
                                                                    "src": "10689:9:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                    }
                                                                },
                                                                "id": 421,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10689:43:0",
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
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
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
                                                                        "id": 410,
                                                                        "name": "target0Deployer",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 51,
                                                                        "src": "10466:15:0",
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
                                                                    "id": 409,
                                                                    "name": "IHyperdriveTargetDeployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11236,
                                                                    "src": "10440:25:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$",
                                                                        "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                    }
                                                                },
                                                                "id": 411,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10440:42:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$11236",
                                                                    "typeString": "contract IHyperdriveTargetDeployer"
                                                                }
                                                            },
                                                            "id": 412,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10483:6:0",
                                                            "memberName": "deploy",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 11235,
                                                            "src": "10440:49:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                            }
                                                        },
                                                        "id": 422,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10440:306:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "10431:315:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 424,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10431:315:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 429,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 425,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "10798:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 427,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10809:10:0",
                                                        "memberName": "configHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17,
                                                        "src": "10798:21:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 428,
                                                        "name": "configHash_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 379,
                                                        "src": "10822:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "10798:35:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 430,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10798:35:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 435,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 431,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "10847:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 433,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10858:13:0",
                                                        "memberName": "extraDataHash",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 20,
                                                        "src": "10847:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 434,
                                                        "name": "extraDataHash",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 388,
                                                        "src": "10874:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "10847:40:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 436,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10847:40:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 441,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 437,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "10901:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 439,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10912:17:0",
                                                        "memberName": "initialSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 23,
                                                        "src": "10901:28:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 440,
                                                        "name": "initialSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 372,
                                                        "src": "10932:17:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "10901:48:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 442,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10901:48:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 447,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 443,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "10963:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 445,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "10974:7:0",
                                                        "memberName": "target0",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 29,
                                                        "src": "10963:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 446,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 341,
                                                        "src": "10984:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "10963:27:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 448,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10963:27:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 449,
                                                    "name": "target",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 341,
                                                    "src": "11012:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "functionReturnParameters": 342,
                                                "id": 450,
                                                "nodeType": "Return",
                                                "src": "11005:13:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        454
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 454,
                                            "mutability": "mutable",
                                            "name": "configHash",
                                            "nameLocation": "11182:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 705,
                                            "src": "11174:18:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 453,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11174:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 459,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "id": 455,
                                                "name": "_deployments",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 69,
                                                "src": "11195:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                    "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                                }
                                            },
                                            "id": 457,
                                            "indexExpression": {
                                                "id": 456,
                                                "name": "_deploymentId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 327,
                                                "src": "11208:13:0",
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
                                            "src": "11195:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                            }
                                        },
                                        "id": 458,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "11223:10:0",
                                        "memberName": "configHash",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 17,
                                        "src": "11195:38:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11174:59:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 465,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 460,
                                            "name": "configHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 454,
                                            "src": "11247:10:0",
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
                                                    "id": 463,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "11269:1:0",
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
                                                "id": 462,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "11261:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                    "typeString": "type(bytes32)"
                                                },
                                                "typeName": {
                                                    "id": 461,
                                                    "name": "bytes32",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "11261:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 464,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11261:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "11247:24:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 472,
                                    "nodeType": "IfStatement",
                                    "src": "11243:117:0",
                                    "trueBody": {
                                        "id": 471,
                                        "nodeType": "Block",
                                        "src": "11273:87:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 466,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "11294:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 468,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11325:22:0",
                                                        "memberName": "DeploymentDoesNotExist",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10580,
                                                        "src": "11294:53:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 469,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11294:55:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 470,
                                                "nodeType": "RevertStatement",
                                                "src": "11287:62:0"
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
                                        "id": 480,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 476,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 330,
                                                            "src": "11463:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 474,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "11452:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 475,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11456:6:0",
                                                        "memberName": "encode",
                                                        "nodeType": "MemberAccess",
                                                        "src": "11452:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
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
                                                    "src": "11452:25:0",
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
                                                "id": 473,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "11442:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 478,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11442:36:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 479,
                                            "name": "configHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 454,
                                            "src": "11482:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "11442:50:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 487,
                                    "nodeType": "IfStatement",
                                    "src": "11438:137:0",
                                    "trueBody": {
                                        "id": 486,
                                        "nodeType": "Block",
                                        "src": "11494:81:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 481,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "11515:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 483,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11546:16:0",
                                                        "memberName": "MismatchedConfig",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10619,
                                                        "src": "11515:47:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 484,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11515:49:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 485,
                                                "nodeType": "RevertStatement",
                                                "src": "11508:56:0"
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
                                        "id": 493,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 489,
                                                    "name": "_extraData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 332,
                                                    "src": "11675:10:0",
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
                                                "id": 488,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "11665:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 490,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11665:21:0",
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
                                                "id": 491,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 345,
                                                "src": "11690:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                }
                                            },
                                            "id": 492,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "11701:13:0",
                                            "memberName": "extraDataHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20,
                                            "src": "11690:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "11665:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 500,
                                    "nodeType": "IfStatement",
                                    "src": "11661:139:0",
                                    "trueBody": {
                                        "id": 499,
                                        "nodeType": "Block",
                                        "src": "11716:84:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 494,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "11737:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 496,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11768:19:0",
                                                        "memberName": "MismatchedExtraData",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10622,
                                                        "src": "11737:50:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 497,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11737:52:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 498,
                                                "nodeType": "RevertStatement",
                                                "src": "11730:59:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 502,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 330,
                                                "src": "12093:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 501,
                                            "name": "_checkPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 925,
                                            "src": "12076:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) view"
                                            }
                                        },
                                        "id": 503,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12076:31:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 504,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12076:31:0"
                                },
                                {
                                    "assignments": [
                                        509
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 509,
                                            "mutability": "mutable",
                                            "name": "config",
                                            "nameLocation": "12256:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 705,
                                            "src": "12226:36:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 508,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 507,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "12226:11:0",
                                                        "12238:10:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10154,
                                                    "src": "12226:22:0"
                                                },
                                                "referencedDeclaration": 10154,
                                                "src": "12226:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 513,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 511,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 330,
                                                "src": "12281:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            ],
                                            "id": 510,
                                            "name": "_copyPoolConfig",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1038,
                                            "src": "12265:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$_t_struct$_PoolConfig_$10154_memory_ptr_$",
                                                "typeString": "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)"
                                            }
                                        },
                                        "id": 512,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12265:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12226:69:0"
                                },
                                {
                                    "expression": {
                                        "id": 519,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 514,
                                                "name": "config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 509,
                                                "src": "12305:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 516,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12312:22:0",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10125,
                                            "src": "12305:29:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 517,
                                                "name": "deployment",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 345,
                                                "src": "12337:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                }
                                            },
                                            "id": 518,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12348:17:0",
                                            "memberName": "initialSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 23,
                                            "src": "12337:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12305:60:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 520,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12305:60:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 523,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 521,
                                            "name": "_targetIndex",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 334,
                                            "src": "12629:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 522,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "12645:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "12629:17:0",
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
                                            "id": 566,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 564,
                                                "name": "_targetIndex",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 334,
                                                "src": "13066:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "32",
                                                "id": 565,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "13082:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_2_by_1",
                                                    "typeString": "int_const 2"
                                                },
                                                "value": "2"
                                            },
                                            "src": "13066:17:0",
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
                                                "id": 609,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 607,
                                                    "name": "_targetIndex",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 334,
                                                    "src": "13503:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "hexValue": "33",
                                                    "id": 608,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "13519:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_3_by_1",
                                                        "typeString": "int_const 3"
                                                    },
                                                    "value": "3"
                                                },
                                                "src": "13503:17:0",
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
                                                    "id": 652,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 650,
                                                        "name": "_targetIndex",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 334,
                                                        "src": "13940:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "34",
                                                        "id": 651,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "13956:1:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_4_by_1",
                                                            "typeString": "int_const 4"
                                                        },
                                                        "value": "4"
                                                    },
                                                    "src": "13940:17:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 698,
                                                    "nodeType": "Block",
                                                    "src": "14373:83:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 693,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10684,
                                                                        "src": "14394:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 695,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "14425:18:0",
                                                                    "memberName": "InvalidTargetIndex",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10616,
                                                                    "src": "14394:49:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 696,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "14394:51:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 697,
                                                            "nodeType": "RevertStatement",
                                                            "src": "14387:58:0"
                                                        }
                                                    ]
                                                },
                                                "id": 699,
                                                "nodeType": "IfStatement",
                                                "src": "13936:520:0",
                                                "trueBody": {
                                                    "id": 692,
                                                    "nodeType": "Block",
                                                    "src": "13959:408:0",
                                                    "statements": [
                                                        {
                                                            "condition": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                "id": 659,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "expression": {
                                                                        "id": 653,
                                                                        "name": "deployment",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 345,
                                                                        "src": "13977:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                                        }
                                                                    },
                                                                    "id": 654,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "13988:7:0",
                                                                    "memberName": "target4",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 41,
                                                                    "src": "13977:18:0",
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
                                                                            "id": 657,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "14007:1:0",
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
                                                                        "id": 656,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "13999:7:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 655,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "13999:7:0",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 658,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "13999:10:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "13977:32:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 666,
                                                            "nodeType": "IfStatement",
                                                            "src": "13973:132:0",
                                                            "trueBody": {
                                                                "id": 665,
                                                                "nodeType": "Block",
                                                                "src": "14011:94:0",
                                                                "statements": [
                                                                    {
                                                                        "errorCall": {
                                                                            "arguments": [],
                                                                            "expression": {
                                                                                "argumentTypes": [],
                                                                                "expression": {
                                                                                    "id": 660,
                                                                                    "name": "IHyperdriveDeployerCoordinator",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 10684,
                                                                                    "src": "14036:30:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                                        "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                                    }
                                                                                },
                                                                                "id": 662,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "14067:21:0",
                                                                                "memberName": "TargetAlreadyDeployed",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 10631,
                                                                                "src": "14036:52:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                                    "typeString": "function () pure"
                                                                                }
                                                                            },
                                                                            "id": 663,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "14036:54:0",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_tuple$__$",
                                                                                "typeString": "tuple()"
                                                                            }
                                                                        },
                                                                        "id": 664,
                                                                        "nodeType": "RevertStatement",
                                                                        "src": "14029:61:0"
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 684,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 667,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 341,
                                                                    "src": "14118:6:0",
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
                                                                            "id": 672,
                                                                            "name": "config",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 509,
                                                                            "src": "14194:6:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                                                "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": 673,
                                                                            "name": "_extraData",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 332,
                                                                            "src": "14218:10:0",
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
                                                                                                "id": 677,
                                                                                                "name": "msg",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": -15,
                                                                                                "src": "14267:3:0",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_magic_message",
                                                                                                    "typeString": "msg"
                                                                                                }
                                                                                            },
                                                                                            "id": 678,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "14271:6:0",
                                                                                            "memberName": "sender",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "src": "14267:10:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_address",
                                                                                                "typeString": "address"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            "id": 679,
                                                                                            "name": "_deploymentId",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 327,
                                                                                            "src": "14279:13:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_bytes32",
                                                                                                "typeString": "bytes32"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            "id": 680,
                                                                                            "name": "_salt",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 336,
                                                                                            "src": "14294:5:0",
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
                                                                                            "id": 675,
                                                                                            "name": "abi",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": -1,
                                                                                            "src": "14256:3:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_magic_abi",
                                                                                                "typeString": "abi"
                                                                                            }
                                                                                        },
                                                                                        "id": 676,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "memberLocation": "14260:6:0",
                                                                                        "memberName": "encode",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "src": "14256:10:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                            "typeString": "function () pure returns (bytes memory)"
                                                                                        }
                                                                                    },
                                                                                    "id": 681,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "functionCall",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "14256:44:0",
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
                                                                                "id": 674,
                                                                                "name": "keccak256",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -8,
                                                                                "src": "14246:9:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                }
                                                                            },
                                                                            "id": 682,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "14246:55:0",
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
                                                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
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
                                                                                    "id": 669,
                                                                                    "name": "target4Deployer",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 63,
                                                                                    "src": "14153:15:0",
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
                                                                                "id": 668,
                                                                                "name": "IHyperdriveTargetDeployer",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 11236,
                                                                                "src": "14127:25:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$",
                                                                                    "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                                }
                                                                            },
                                                                            "id": 670,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "14127:42:0",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$11236",
                                                                                "typeString": "contract IHyperdriveTargetDeployer"
                                                                            }
                                                                        },
                                                                        "id": 671,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "14170:6:0",
                                                                        "memberName": "deploy",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 11235,
                                                                        "src": "14127:49:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                            "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                                        }
                                                                    },
                                                                    "id": 683,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "14127:188:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "14118:197:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "id": 685,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "14118:197:0"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 690,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "expression": {
                                                                        "id": 686,
                                                                        "name": "deployment",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 345,
                                                                        "src": "14329:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                                        }
                                                                    },
                                                                    "id": 688,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "memberLocation": "14340:7:0",
                                                                    "memberName": "target4",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 41,
                                                                    "src": "14329:18:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "id": 689,
                                                                    "name": "target",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 341,
                                                                    "src": "14350:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                "src": "14329:27:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "id": 691,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "14329:27:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            "id": 700,
                                            "nodeType": "IfStatement",
                                            "src": "13499:957:0",
                                            "trueBody": {
                                                "id": 649,
                                                "nodeType": "Block",
                                                "src": "13522:408:0",
                                                "statements": [
                                                    {
                                                        "condition": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "id": 616,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "id": 610,
                                                                    "name": "deployment",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 345,
                                                                    "src": "13540:10:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                                    }
                                                                },
                                                                "id": 611,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "13551:7:0",
                                                                "memberName": "target3",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 38,
                                                                "src": "13540:18:0",
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
                                                                        "id": 614,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "13570:1:0",
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
                                                                    "id": 613,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "13562:7:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 612,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "13562:7:0",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 615,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "13562:10:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "13540:32:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "id": 623,
                                                        "nodeType": "IfStatement",
                                                        "src": "13536:132:0",
                                                        "trueBody": {
                                                            "id": 622,
                                                            "nodeType": "Block",
                                                            "src": "13574:94:0",
                                                            "statements": [
                                                                {
                                                                    "errorCall": {
                                                                        "arguments": [],
                                                                        "expression": {
                                                                            "argumentTypes": [],
                                                                            "expression": {
                                                                                "id": 617,
                                                                                "name": "IHyperdriveDeployerCoordinator",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 10684,
                                                                                "src": "13599:30:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                                    "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                                }
                                                                            },
                                                                            "id": 619,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "13630:21:0",
                                                                            "memberName": "TargetAlreadyDeployed",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": 10631,
                                                                            "src": "13599:52:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                                "typeString": "function () pure"
                                                                            }
                                                                        },
                                                                        "id": 620,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "13599:54:0",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_tuple$__$",
                                                                            "typeString": "tuple()"
                                                                        }
                                                                    },
                                                                    "id": 621,
                                                                    "nodeType": "RevertStatement",
                                                                    "src": "13592:61:0"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 641,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "id": 624,
                                                                "name": "target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 341,
                                                                "src": "13681:6:0",
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
                                                                        "id": 629,
                                                                        "name": "config",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 509,
                                                                        "src": "13757:6:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 630,
                                                                        "name": "_extraData",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 332,
                                                                        "src": "13781:10:0",
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
                                                                                            "id": 634,
                                                                                            "name": "msg",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": -15,
                                                                                            "src": "13830:3:0",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_magic_message",
                                                                                                "typeString": "msg"
                                                                                            }
                                                                                        },
                                                                                        "id": 635,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "memberLocation": "13834:6:0",
                                                                                        "memberName": "sender",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "src": "13830:10:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 636,
                                                                                        "name": "_deploymentId",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 327,
                                                                                        "src": "13842:13:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes32",
                                                                                            "typeString": "bytes32"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 637,
                                                                                        "name": "_salt",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 336,
                                                                                        "src": "13857:5:0",
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
                                                                                        "id": 632,
                                                                                        "name": "abi",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -1,
                                                                                        "src": "13819:3:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                            "typeString": "abi"
                                                                                        }
                                                                                    },
                                                                                    "id": 633,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "13823:6:0",
                                                                                    "memberName": "encode",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "13819:10:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                    }
                                                                                },
                                                                                "id": 638,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "13819:44:0",
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
                                                                            "id": 631,
                                                                            "name": "keccak256",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -8,
                                                                            "src": "13809:9:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                            }
                                                                        },
                                                                        "id": 639,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "13809:55:0",
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
                                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
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
                                                                                "id": 626,
                                                                                "name": "target3Deployer",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 60,
                                                                                "src": "13716:15:0",
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
                                                                            "id": 625,
                                                                            "name": "IHyperdriveTargetDeployer",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 11236,
                                                                            "src": "13690:25:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$",
                                                                                "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                            }
                                                                        },
                                                                        "id": 627,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "13690:42:0",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$11236",
                                                                            "typeString": "contract IHyperdriveTargetDeployer"
                                                                        }
                                                                    },
                                                                    "id": 628,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "13733:6:0",
                                                                    "memberName": "deploy",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 11235,
                                                                    "src": "13690:49:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                                    }
                                                                },
                                                                "id": 640,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "13690:188:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "13681:197:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 642,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "13681:197:0"
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 647,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "expression": {
                                                                    "id": 643,
                                                                    "name": "deployment",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 345,
                                                                    "src": "13892:10:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                                    }
                                                                },
                                                                "id": 645,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": true,
                                                                "memberLocation": "13903:7:0",
                                                                "memberName": "target3",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 38,
                                                                "src": "13892:18:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "nodeType": "Assignment",
                                                            "operator": "=",
                                                            "rightHandSide": {
                                                                "id": 646,
                                                                "name": "target",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 341,
                                                                "src": "13913:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "13892:27:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 648,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "13892:27:0"
                                                    }
                                                ]
                                            }
                                        },
                                        "id": 701,
                                        "nodeType": "IfStatement",
                                        "src": "13062:1394:0",
                                        "trueBody": {
                                            "id": 606,
                                            "nodeType": "Block",
                                            "src": "13085:408:0",
                                            "statements": [
                                                {
                                                    "condition": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 573,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 567,
                                                                "name": "deployment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 345,
                                                                "src": "13103:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                                }
                                                            },
                                                            "id": 568,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "13114:7:0",
                                                            "memberName": "target2",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 35,
                                                            "src": "13103:18:0",
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
                                                                    "id": 571,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "13133:1:0",
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
                                                                "id": 570,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "13125:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 569,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "13125:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 572,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "13125:10:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "13103:32:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 580,
                                                    "nodeType": "IfStatement",
                                                    "src": "13099:132:0",
                                                    "trueBody": {
                                                        "id": 579,
                                                        "nodeType": "Block",
                                                        "src": "13137:94:0",
                                                        "statements": [
                                                            {
                                                                "errorCall": {
                                                                    "arguments": [],
                                                                    "expression": {
                                                                        "argumentTypes": [],
                                                                        "expression": {
                                                                            "id": 574,
                                                                            "name": "IHyperdriveDeployerCoordinator",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 10684,
                                                                            "src": "13162:30:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                            }
                                                                        },
                                                                        "id": 576,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "13193:21:0",
                                                                        "memberName": "TargetAlreadyDeployed",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 10631,
                                                                        "src": "13162:52:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 577,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "13162:54:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_tuple$__$",
                                                                        "typeString": "tuple()"
                                                                    }
                                                                },
                                                                "id": 578,
                                                                "nodeType": "RevertStatement",
                                                                "src": "13155:61:0"
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 598,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "id": 581,
                                                            "name": "target",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 341,
                                                            "src": "13244:6:0",
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
                                                                    "id": 586,
                                                                    "name": "config",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 509,
                                                                    "src": "13320:6:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 587,
                                                                    "name": "_extraData",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 332,
                                                                    "src": "13344:10:0",
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
                                                                                        "id": 591,
                                                                                        "name": "msg",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -15,
                                                                                        "src": "13393:3:0",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_message",
                                                                                            "typeString": "msg"
                                                                                        }
                                                                                    },
                                                                                    "id": 592,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "13397:6:0",
                                                                                    "memberName": "sender",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "13393:10:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_address",
                                                                                        "typeString": "address"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "id": 593,
                                                                                    "name": "_deploymentId",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 327,
                                                                                    "src": "13405:13:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_bytes32",
                                                                                        "typeString": "bytes32"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "id": 594,
                                                                                    "name": "_salt",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 336,
                                                                                    "src": "13420:5:0",
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
                                                                                    "id": 589,
                                                                                    "name": "abi",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -1,
                                                                                    "src": "13382:3:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_abi",
                                                                                        "typeString": "abi"
                                                                                    }
                                                                                },
                                                                                "id": 590,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13386:6:0",
                                                                                "memberName": "encode",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "13382:10:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                                }
                                                                            },
                                                                            "id": 595,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "13382:44:0",
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
                                                                        "id": 588,
                                                                        "name": "keccak256",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -8,
                                                                        "src": "13372:9:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 596,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "13372:55:0",
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
                                                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
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
                                                                            "id": 583,
                                                                            "name": "target2Deployer",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 57,
                                                                            "src": "13279:15:0",
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
                                                                        "id": 582,
                                                                        "name": "IHyperdriveTargetDeployer",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 11236,
                                                                        "src": "13253:25:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$",
                                                                            "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                        }
                                                                    },
                                                                    "id": 584,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "13253:42:0",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$11236",
                                                                        "typeString": "contract IHyperdriveTargetDeployer"
                                                                    }
                                                                },
                                                                "id": 585,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "13296:6:0",
                                                                "memberName": "deploy",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 11235,
                                                                "src": "13253:49:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                    "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                                }
                                                            },
                                                            "id": 597,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "13253:188:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "13244:197:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 599,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "13244:197:0"
                                                },
                                                {
                                                    "expression": {
                                                        "id": 604,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "expression": {
                                                                "id": 600,
                                                                "name": "deployment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 345,
                                                                "src": "13455:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                    "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                                }
                                                            },
                                                            "id": 602,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "memberLocation": "13466:7:0",
                                                            "memberName": "target2",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 35,
                                                            "src": "13455:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "id": 603,
                                                            "name": "target",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 341,
                                                            "src": "13476:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "13455:27:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "id": 605,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "13455:27:0"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 702,
                                    "nodeType": "IfStatement",
                                    "src": "12625:1831:0",
                                    "trueBody": {
                                        "id": 563,
                                        "nodeType": "Block",
                                        "src": "12648:408:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 530,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 524,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "12666:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 525,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12677:7:0",
                                                        "memberName": "target1",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 32,
                                                        "src": "12666:18:0",
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
                                                                "id": 528,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "12696:1:0",
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
                                                            "id": 527,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "12688:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 526,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "12688:7:0",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 529,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12688:10:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "12666:32:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 537,
                                                "nodeType": "IfStatement",
                                                "src": "12662:132:0",
                                                "trueBody": {
                                                    "id": 536,
                                                    "nodeType": "Block",
                                                    "src": "12700:94:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 531,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10684,
                                                                        "src": "12725:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 533,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12756:21:0",
                                                                    "memberName": "TargetAlreadyDeployed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10631,
                                                                    "src": "12725:52:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 534,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12725:54:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 535,
                                                            "nodeType": "RevertStatement",
                                                            "src": "12718:61:0"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 555,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 538,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 341,
                                                        "src": "12807:6:0",
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
                                                                "id": 543,
                                                                "name": "config",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 509,
                                                                "src": "12883:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                                }
                                                            },
                                                            {
                                                                "id": 544,
                                                                "name": "_extraData",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 332,
                                                                "src": "12907:10:0",
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
                                                                                    "id": 548,
                                                                                    "name": "msg",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -15,
                                                                                    "src": "12956:3:0",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_message",
                                                                                        "typeString": "msg"
                                                                                    }
                                                                                },
                                                                                "id": 549,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "12960:6:0",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "12956:10:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 550,
                                                                                "name": "_deploymentId",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 327,
                                                                                "src": "12968:13:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            {
                                                                                "id": 551,
                                                                                "name": "_salt",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 336,
                                                                                "src": "12983:5:0",
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
                                                                                "id": 546,
                                                                                "name": "abi",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -1,
                                                                                "src": "12945:3:0",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                    "typeString": "abi"
                                                                                }
                                                                            },
                                                                            "id": 547,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "12949:6:0",
                                                                            "memberName": "encode",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "12945:10:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                "typeString": "function () pure returns (bytes memory)"
                                                                            }
                                                                        },
                                                                        "id": 552,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "12945:44:0",
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
                                                                    "id": 545,
                                                                    "name": "keccak256",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -8,
                                                                    "src": "12935:9:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                    }
                                                                },
                                                                "id": 553,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12935:55:0",
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
                                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
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
                                                                        "id": 540,
                                                                        "name": "target1Deployer",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 54,
                                                                        "src": "12842:15:0",
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
                                                                    "id": 539,
                                                                    "name": "IHyperdriveTargetDeployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11236,
                                                                    "src": "12816:25:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$",
                                                                        "typeString": "type(contract IHyperdriveTargetDeployer)"
                                                                    }
                                                                },
                                                                "id": 541,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12816:42:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IHyperdriveTargetDeployer_$11236",
                                                                    "typeString": "contract IHyperdriveTargetDeployer"
                                                                }
                                                            },
                                                            "id": 542,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "12859:6:0",
                                                            "memberName": "deploy",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 11235,
                                                            "src": "12816:49:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$",
                                                                "typeString": "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)"
                                                            }
                                                        },
                                                        "id": 554,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12816:188:0",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "12807:197:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 556,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12807:197:0"
                                            },
                                            {
                                                "expression": {
                                                    "id": 561,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 557,
                                                            "name": "deployment",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 345,
                                                            "src": "13018:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                                                "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage pointer"
                                                            }
                                                        },
                                                        "id": 559,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "13029:7:0",
                                                        "memberName": "target1",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 32,
                                                        "src": "13018:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 560,
                                                        "name": "target",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 341,
                                                        "src": "13039:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "13018:27:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 562,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13018:27:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 703,
                                        "name": "target",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 341,
                                        "src": "14473:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 342,
                                    "id": 704,
                                    "nodeType": "Return",
                                    "src": "14466:13:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10666
                        ],
                        "documentation": {
                            "id": 325,
                            "nodeType": "StructuredDocumentation",
                            "src": "7956:688:0",
                            "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev This can only be deployed by the associated factory.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
                        },
                        "functionSelector": "0b3c4f86",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 339,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 338,
                                    "name": "onlyFactory",
                                    "nameLocations": [
                                        "8862:11:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 132,
                                    "src": "8862:11:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "8862:11:0"
                            }
                        ],
                        "name": "deployTarget",
                        "nameLocation": "8658:12:0",
                        "parameters": {
                            "id": 337,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 327,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "8688:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 706,
                                    "src": "8680:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 326,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8680:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 330,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "8747:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 706,
                                    "src": "8711:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 329,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 328,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "8711:11:0",
                                                "8723:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "8711:28:0"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "8711:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 332,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "8783:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 706,
                                    "src": "8770:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 331,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8770:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 334,
                                    "mutability": "mutable",
                                    "name": "_targetIndex",
                                    "nameLocation": "8811:12:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 706,
                                    "src": "8803:20:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 333,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8803:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 336,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "8841:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 706,
                                    "src": "8833:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 335,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8833:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8670:182:0"
                        },
                        "returnParameters": {
                            "id": 342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 341,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "8891:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 706,
                                    "src": "8883:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 340,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8883:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8882:16:0"
                        },
                        "scope": 1039,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 811,
                        "nodeType": "FunctionDefinition",
                        "src": "15263:1363:0",
                        "nodes": [],
                        "body": {
                            "id": 810,
                            "nodeType": "Block",
                            "src": "15495:1131:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 725,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 845,
                                            "src": "15555:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 726,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15555:20:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 727,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15555:20:0"
                                },
                                {
                                    "assignments": [
                                        730
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 730,
                                            "mutability": "mutable",
                                            "name": "hyperdrive",
                                            "nameLocation": "15659:10:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 810,
                                            "src": "15647:22:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                "typeString": "contract IHyperdrive"
                                            },
                                            "typeName": {
                                                "id": 729,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 728,
                                                    "name": "IHyperdrive",
                                                    "nameLocations": [
                                                        "15647:11:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10351,
                                                    "src": "15647:11:0"
                                                },
                                                "referencedDeclaration": 10351,
                                                "src": "15647:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                    "typeString": "contract IHyperdrive"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 737,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 732,
                                                        "name": "_deployments",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 69,
                                                        "src": "15697:12:0",
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
                                                        "referencedDeclaration": 709,
                                                        "src": "15710:13:0",
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
                                                    "src": "15697:27:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                                    }
                                                },
                                                "id": 735,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15725:10:0",
                                                "memberName": "hyperdrive",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 26,
                                                "src": "15697:38:0",
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
                                            "id": 731,
                                            "name": "IHyperdrive",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10351,
                                            "src": "15672:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                "typeString": "type(contract IHyperdrive)"
                                            }
                                        },
                                        "id": 736,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15672:73:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                            "typeString": "contract IHyperdrive"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "15647:98:0"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 746,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 740,
                                                    "name": "hyperdrive",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 730,
                                                    "src": "15767:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                        "typeString": "contract IHyperdrive"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                        "typeString": "contract IHyperdrive"
                                                    }
                                                ],
                                                "id": 739,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "15759:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 738,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15759:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 741,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "15759:19:0",
                                            "tryCall": false,
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
                                                    "id": 744,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "15790:1:0",
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
                                                "id": 743,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "15782:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 742,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "15782:7:0",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 745,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "15782:10:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "15759:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 753,
                                    "nodeType": "IfStatement",
                                    "src": "15755:127:0",
                                    "trueBody": {
                                        "id": 752,
                                        "nodeType": "Block",
                                        "src": "15794:88:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 747,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "15815:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 749,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15846:23:0",
                                                        "memberName": "HyperdriveIsNotDeployed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10589,
                                                        "src": "15815:54:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 750,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15815:56:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 751,
                                                "nodeType": "RevertStatement",
                                                "src": "15808:63:0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        755
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 755,
                                            "mutability": "mutable",
                                            "name": "value",
                                            "nameLocation": "15970:5:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 810,
                                            "src": "15962:13:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 754,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "15962:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 762,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 757,
                                                "name": "hyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 730,
                                                "src": "16010:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                    "typeString": "contract IHyperdrive"
                                                }
                                            },
                                            {
                                                "id": 758,
                                                "name": "_lp",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 711,
                                                "src": "16034:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 759,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 713,
                                                "src": "16051:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 760,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 718,
                                                "src": "16078:8:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Options memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                    "typeString": "contract IHyperdrive"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Options memory"
                                                }
                                            ],
                                            "id": 756,
                                            "name": "_prepareInitialize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 841,
                                            "src": "15978:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IHyperdrive_$10351_$_t_address_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (contract IHyperdrive,address,uint256,struct IHyperdrive.Options memory) returns (uint256)"
                                            }
                                        },
                                        "id": 761,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15978:118:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "15962:134:0"
                                },
                                {
                                    "expression": {
                                        "id": 772,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 763,
                                            "name": "lpShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 723,
                                            "src": "16145:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 768,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 713,
                                                    "src": "16207:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 769,
                                                    "name": "_apr",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 715,
                                                    "src": "16234:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 770,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 718,
                                                    "src": "16252:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
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
                                                        "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                                        "typeString": "struct IHyperdrive.Options memory"
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
                                                            "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                                            "typeString": "struct IHyperdrive.Options memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 764,
                                                        "name": "hyperdrive",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 730,
                                                        "src": "16156:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                            "typeString": "contract IHyperdrive"
                                                        }
                                                    },
                                                    "id": 765,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16167:10:0",
                                                    "memberName": "initialize",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10438,
                                                    "src": "16156:21:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)"
                                                    }
                                                },
                                                "id": 767,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "names": [
                                                    "value"
                                                ],
                                                "nodeType": "FunctionCallOptions",
                                                "options": [
                                                    {
                                                        "id": 766,
                                                        "name": "value",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 755,
                                                        "src": "16186:5:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "src": "16156:37:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$value",
                                                    "typeString": "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)"
                                                }
                                            },
                                            "id": 771,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16156:114:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16145:125:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 773,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16145:125:0"
                                },
                                {
                                    "assignments": [
                                        775
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 775,
                                            "mutability": "mutable",
                                            "name": "refund",
                                            "nameLocation": "16339:6:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 810,
                                            "src": "16331:14:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 774,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16331:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 780,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 779,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 776,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "16348:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 777,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16352:5:0",
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "src": "16348:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "id": 778,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 755,
                                            "src": "16360:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16348:17:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16331:34:0"
                                },
                                {
                                    "condition": {
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
                                            "id": 781,
                                            "name": "refund",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 775,
                                            "src": "16379:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 782,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "16388:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "16379:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 807,
                                    "nodeType": "IfStatement",
                                    "src": "16375:219:0",
                                    "trueBody": {
                                        "id": 806,
                                        "nodeType": "Block",
                                        "src": "16391:203:0",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    785,
                                                    null
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 785,
                                                        "mutability": "mutable",
                                                        "name": "success",
                                                        "nameLocation": "16411:7:0",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 806,
                                                        "src": "16406:12:0",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "typeName": {
                                                            "id": 784,
                                                            "name": "bool",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "16406:4:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    },
                                                    null
                                                ],
                                                "id": 796,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "hexValue": "",
                                                            "id": 794,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "string",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "16466:2:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                "typeString": "literal_string \"\""
                                                            },
                                                            "value": ""
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                "typeString": "literal_string \"\""
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "expression": {
                                                                            "id": 788,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -15,
                                                                            "src": "16432:3:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 789,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "16436:6:0",
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "16432:10:0",
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
                                                                    "id": 787,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "16424:8:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_payable_$",
                                                                        "typeString": "type(address payable)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 786,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "16424:8:0",
                                                                        "stateMutability": "payable",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 790,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "16424:19:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                }
                                                            },
                                                            "id": 791,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16444:4:0",
                                                            "memberName": "call",
                                                            "nodeType": "MemberAccess",
                                                            "src": "16424:24:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                            }
                                                        },
                                                        "id": 793,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "names": [
                                                            "value"
                                                        ],
                                                        "nodeType": "FunctionCallOptions",
                                                        "options": [
                                                            {
                                                                "id": 792,
                                                                "name": "refund",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 775,
                                                                "src": "16457:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "src": "16424:41:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                            "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                        }
                                                    },
                                                    "id": 795,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "16424:45:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                                        "typeString": "tuple(bool,bytes memory)"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "16405:64:0"
                                            },
                                            {
                                                "condition": {
                                                    "id": 798,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "!",
                                                    "prefix": true,
                                                    "src": "16487:8:0",
                                                    "subExpression": {
                                                        "id": 797,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 785,
                                                        "src": "16488:7:0",
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
                                                "id": 805,
                                                "nodeType": "IfStatement",
                                                "src": "16483:101:0",
                                                "trueBody": {
                                                    "id": 804,
                                                    "nodeType": "Block",
                                                    "src": "16497:87:0",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 799,
                                                                        "name": "IHyperdriveDeployerCoordinator",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10684,
                                                                        "src": "16522:30:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                            "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                                        }
                                                                    },
                                                                    "id": 801,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "16553:14:0",
                                                                    "memberName": "TransferFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10634,
                                                                    "src": "16522:45:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 802,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "16522:47:0",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 803,
                                                            "nodeType": "RevertStatement",
                                                            "src": "16515:54:0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 808,
                                        "name": "lpShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 723,
                                        "src": "16611:8:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 724,
                                    "id": 809,
                                    "nodeType": "Return",
                                    "src": "16604:15:0"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10683
                        ],
                        "documentation": {
                            "id": 707,
                            "nodeType": "StructuredDocumentation",
                            "src": "14492:766:0",
                            "text": "@notice Initializes a pool that was deployed by this coordinator.\n @dev This can only be deployed by the associated factory.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "functionSelector": "16abfc70",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 721,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 720,
                                    "name": "onlyFactory",
                                    "nameLocations": [
                                        "15456:11:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 132,
                                    "src": "15456:11:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "15456:11:0"
                            }
                        ],
                        "name": "initialize",
                        "nameLocation": "15272:10:0",
                        "parameters": {
                            "id": 719,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 709,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "15300:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 811,
                                    "src": "15292:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 708,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15292:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 711,
                                    "mutability": "mutable",
                                    "name": "_lp",
                                    "nameLocation": "15331:3:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 811,
                                    "src": "15323:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 710,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15323:7:0",
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
                                    "id": 713,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "15352:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 811,
                                    "src": "15344:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 712,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15344:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 715,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "15383:4:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 811,
                                    "src": "15375:12:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 714,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15375:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 718,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "15424:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 811,
                                    "src": "15397:35:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 717,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 716,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "15397:11:0",
                                                "15409:7:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "15397:19:0"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "15397:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15282:156:0"
                        },
                        "returnParameters": {
                            "id": 724,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 723,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "15485:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 811,
                                    "src": "15477:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 722,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15477:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15476:18:0"
                        },
                        "scope": 1039,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 825,
                        "nodeType": "FunctionDefinition",
                        "src": "16780:151:0",
                        "nodes": [],
                        "body": {
                            "id": 824,
                            "nodeType": "Block",
                            "src": "16880:51:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 820,
                                            "name": "_deployments",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69,
                                            "src": "16897:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$",
                                                "typeString": "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)"
                                            }
                                        },
                                        "id": 822,
                                        "indexExpression": {
                                            "id": 821,
                                            "name": "_deploymentId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 814,
                                            "src": "16910:13:0",
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
                                        "src": "16897:27:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 819,
                                    "id": 823,
                                    "nodeType": "Return",
                                    "src": "16890:34:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 812,
                            "nodeType": "StructuredDocumentation",
                            "src": "16632:143:0",
                            "text": "@notice Gets the deployment specified by the deployment ID.\n @param _deploymentId The deployment ID.\n @return The deployment."
                        },
                        "functionSelector": "37404017",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployments",
                        "nameLocation": "16789:11:0",
                        "parameters": {
                            "id": 815,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 814,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "16818:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 825,
                                    "src": "16810:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 813,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16810:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16800:37:0"
                        },
                        "returnParameters": {
                            "id": 819,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 818,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 825,
                                    "src": "16861:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Deployment_$42_memory_ptr",
                                        "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                    },
                                    "typeName": {
                                        "id": 817,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 816,
                                            "name": "Deployment",
                                            "nameLocations": [
                                                "16861:10:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 42,
                                            "src": "16861:10:0"
                                        },
                                        "referencedDeclaration": 42,
                                        "src": "16861:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Deployment_$42_storage_ptr",
                                            "typeString": "struct HyperdriveDeployerCoordinator.Deployment"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16860:19:0"
                        },
                        "scope": 1039,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 841,
                        "nodeType": "FunctionDefinition",
                        "src": "17583:205:0",
                        "nodes": [],
                        "documentation": {
                            "id": 826,
                            "nodeType": "StructuredDocumentation",
                            "src": "16937:641:0",
                            "text": "@dev Prepares the coordinator for initialization by drawing funds from\n      the LP, if necessary.\n @param _hyperdrive The Hyperdrive instance that is being initialized.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the initialization is\n        settled.\n @return value The value that should be sent in the initialize\n         transaction."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_prepareInitialize",
                        "nameLocation": "17592:18:0",
                        "parameters": {
                            "id": 837,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 829,
                                    "mutability": "mutable",
                                    "name": "_hyperdrive",
                                    "nameLocation": "17632:11:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 841,
                                    "src": "17620:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                        "typeString": "contract IHyperdrive"
                                    },
                                    "typeName": {
                                        "id": 828,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 827,
                                            "name": "IHyperdrive",
                                            "nameLocations": [
                                                "17620:11:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10351,
                                            "src": "17620:11:0"
                                        },
                                        "referencedDeclaration": 10351,
                                        "src": "17620:11:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                            "typeString": "contract IHyperdrive"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 831,
                                    "mutability": "mutable",
                                    "name": "_lp",
                                    "nameLocation": "17661:3:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 841,
                                    "src": "17653:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 830,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17653:7:0",
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
                                    "id": 833,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "17682:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 841,
                                    "src": "17674:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 832,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17674:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 836,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "17732:8:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 841,
                                    "src": "17705:35:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 835,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 834,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "17705:11:0",
                                                "17717:7:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "17705:19:0"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "17705:19:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17610:136:0"
                        },
                        "returnParameters": {
                            "id": 840,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 839,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "17781:5:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 841,
                                    "src": "17773:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 838,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17773:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17772:15:0"
                        },
                        "scope": 1039,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 845,
                        "nodeType": "FunctionDefinition",
                        "src": "17943:52:0",
                        "nodes": [],
                        "documentation": {
                            "id": 842,
                            "nodeType": "StructuredDocumentation",
                            "src": "17794:144:0",
                            "text": "@dev A yield source dependent check that prevents ether from being\n      transferred to Hyperdrive instances that don't accept ether."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkMessageValue",
                        "nameLocation": "17952:18:0",
                        "parameters": {
                            "id": 843,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "17970:2:0"
                        },
                        "returnParameters": {
                            "id": 844,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "17994:0:0"
                        },
                        "scope": 1039,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 925,
                        "nodeType": "FunctionDefinition",
                        "src": "18150:1191:0",
                        "nodes": [],
                        "body": {
                            "id": 924,
                            "nodeType": "Block",
                            "src": "18263:1078:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 855,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 852,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 849,
                                                "src": "18414:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 853,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18428:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10082,
                                            "src": "18414:34:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "316533",
                                            "id": 854,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "18451:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1000_by_1",
                                                "typeString": "int_const 1000"
                                            },
                                            "value": "1e3"
                                        },
                                        "src": "18414:40:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 862,
                                    "nodeType": "IfStatement",
                                    "src": "18410:138:0",
                                    "trueBody": {
                                        "id": 861,
                                        "nodeType": "Block",
                                        "src": "18456:92:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 856,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "18477:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 858,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "18508:27:0",
                                                        "memberName": "InvalidMinimumShareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10607,
                                                        "src": "18477:58:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 859,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "18477:60:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 860,
                                                "nodeType": "RevertStatement",
                                                "src": "18470:67:0"
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
                                        "id": 866,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 863,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 849,
                                                "src": "18562:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 864,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18576:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10091,
                                            "src": "18562:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 865,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "18598:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "18562:37:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 873,
                                    "nodeType": "IfStatement",
                                    "src": "18558:133:0",
                                    "trueBody": {
                                        "id": 872,
                                        "nodeType": "Block",
                                        "src": "18601:90:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 867,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "18622:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 869,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "18653:25:0",
                                                        "memberName": "InvalidCheckpointDuration",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10601,
                                                        "src": "18622:56:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 870,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "18622:58:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 871,
                                                "nodeType": "RevertStatement",
                                                "src": "18615:65:0"
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
                                        "id": 886,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 878,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 874,
                                                    "name": "_deployConfig",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 849,
                                                    "src": "18717:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                    }
                                                },
                                                "id": 875,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "18731:16:0",
                                                "memberName": "positionDuration",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10088,
                                                "src": "18717:30:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "expression": {
                                                    "id": 876,
                                                    "name": "_deployConfig",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 849,
                                                    "src": "18750:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                    }
                                                },
                                                "id": 877,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "18764:18:0",
                                                "memberName": "checkpointDuration",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10091,
                                                "src": "18750:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "18717:65:0",
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
                                            "id": 885,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 883,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 879,
                                                        "name": "_deployConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 849,
                                                        "src": "18798:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 880,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "18812:16:0",
                                                    "memberName": "positionDuration",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10088,
                                                    "src": "18798:30:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "%",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 881,
                                                        "name": "_deployConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 849,
                                                        "src": "18831:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 882,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "18845:18:0",
                                                    "memberName": "checkpointDuration",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10091,
                                                    "src": "18831:32:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "18798:65:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 884,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "18879:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "18798:82:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "18717:163:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 893,
                                    "nodeType": "IfStatement",
                                    "src": "18700:279:0",
                                    "trueBody": {
                                        "id": 892,
                                        "nodeType": "Block",
                                        "src": "18891:88:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 887,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "18912:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 889,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "18943:23:0",
                                                        "memberName": "InvalidPositionDuration",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10613,
                                                        "src": "18912:54:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 890,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "18912:56:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 891,
                                                "nodeType": "RevertStatement",
                                                "src": "18905:63:0"
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
                                        "id": 916,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 910,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 904,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 898,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 894,
                                                                "name": "_deployConfig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 849,
                                                                "src": "19057:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                }
                                                            },
                                                            "id": 895,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "19071:4:0",
                                                            "memberName": "fees",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10107,
                                                            "src": "19057:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                                "typeString": "struct IHyperdrive.Fees memory"
                                                            }
                                                        },
                                                        "id": 896,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19076:5:0",
                                                        "memberName": "curve",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10055,
                                                        "src": "19057:24:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "id": 897,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18039,
                                                        "src": "19084:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "19057:30:0",
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
                                                    "id": 903,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 899,
                                                                "name": "_deployConfig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 849,
                                                                "src": "19103:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                                }
                                                            },
                                                            "id": 900,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "19117:4:0",
                                                            "memberName": "fees",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10107,
                                                            "src": "19103:18:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                                "typeString": "struct IHyperdrive.Fees memory"
                                                            }
                                                        },
                                                        "id": 901,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19122:4:0",
                                                        "memberName": "flat",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10058,
                                                        "src": "19103:23:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "id": 902,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18039,
                                                        "src": "19129:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "19103:29:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "19057:75:0",
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
                                                "id": 909,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "expression": {
                                                            "id": 905,
                                                            "name": "_deployConfig",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 849,
                                                            "src": "19148:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                                "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                            }
                                                        },
                                                        "id": 906,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19162:4:0",
                                                        "memberName": "fees",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10107,
                                                        "src": "19148:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                            "typeString": "struct IHyperdrive.Fees memory"
                                                        }
                                                    },
                                                    "id": 907,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "19167:12:0",
                                                    "memberName": "governanceLP",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10061,
                                                    "src": "19148:31:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 908,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18039,
                                                    "src": "19182:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "19148:37:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "19057:128:0",
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
                                            "id": 915,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "expression": {
                                                        "id": 911,
                                                        "name": "_deployConfig",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 849,
                                                        "src": "19201:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                        }
                                                    },
                                                    "id": 912,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "19215:4:0",
                                                    "memberName": "fees",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10107,
                                                    "src": "19201:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                        "typeString": "struct IHyperdrive.Fees memory"
                                                    }
                                                },
                                                "id": 913,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "19220:16:0",
                                                "memberName": "governanceZombie",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10064,
                                                "src": "19201:35:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 914,
                                                "name": "ONE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18039,
                                                "src": "19239:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "19201:41:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "19057:185:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 923,
                                    "nodeType": "IfStatement",
                                    "src": "19040:295:0",
                                    "trueBody": {
                                        "id": 922,
                                        "nodeType": "Block",
                                        "src": "19253:82:0",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 917,
                                                            "name": "IHyperdriveDeployerCoordinator",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10684,
                                                            "src": "19274:30:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$",
                                                                "typeString": "type(contract IHyperdriveDeployerCoordinator)"
                                                            }
                                                        },
                                                        "id": 919,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19305:17:0",
                                                        "memberName": "InvalidFeeAmounts",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10604,
                                                        "src": "19274:48:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 920,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "19274:50:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 921,
                                                "nodeType": "RevertStatement",
                                                "src": "19267:57:0"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 846,
                            "nodeType": "StructuredDocumentation",
                            "src": "18001:144:0",
                            "text": "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkPoolConfig",
                        "nameLocation": "18159:16:0",
                        "parameters": {
                            "id": 850,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 849,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "18221:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 925,
                                    "src": "18185:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 848,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 847,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "18185:11:0",
                                                "18197:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "18185:28:0"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "18185:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18175:65:0"
                        },
                        "returnParameters": {
                            "id": 851,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "18263:0:0"
                        },
                        "scope": 1039,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 936,
                        "nodeType": "FunctionDefinition",
                        "src": "19661:174:0",
                        "nodes": [],
                        "documentation": {
                            "id": 926,
                            "nodeType": "StructuredDocumentation",
                            "src": "19347:309:0",
                            "text": "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _deployConfig The deploy config that will be used to deploy the\n        pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getInitialVaultSharePrice",
                        "nameLocation": "19670:26:0",
                        "parameters": {
                            "id": 932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 929,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "19742:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 936,
                                    "src": "19706:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 928,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 927,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "19706:11:0",
                                                "19718:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "19706:28:0"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "19706:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 931,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "19778:10:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 936,
                                    "src": "19765:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 930,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "19765:5:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "19696:98:0"
                        },
                        "returnParameters": {
                            "id": 935,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 934,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 936,
                                    "src": "19826:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 933,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "19826:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "19825:9:0"
                        },
                        "scope": 1039,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 1038,
                        "nodeType": "FunctionDefinition",
                        "src": "20051:1056:0",
                        "nodes": [],
                        "body": {
                            "id": 1037,
                            "nodeType": "Block",
                            "src": "20203:904:0",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 951,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 946,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20280:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 948,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20288:9:0",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10112,
                                            "src": "20280:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 949,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20300:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 950,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20314:9:0",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10069,
                                            "src": "20300:23:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "20280:43:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 952,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20280:43:0"
                                },
                                {
                                    "expression": {
                                        "id": 958,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 953,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20333:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 955,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20341:16:0",
                                            "memberName": "vaultSharesToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10116,
                                            "src": "20333:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 956,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20360:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 957,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20374:16:0",
                                            "memberName": "vaultSharesToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10073,
                                            "src": "20360:30:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "20333:57:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 959,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20333:57:0"
                                },
                                {
                                    "expression": {
                                        "id": 965,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 960,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20400:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 962,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20408:13:0",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10119,
                                            "src": "20400:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 963,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20424:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 964,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20438:13:0",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10076,
                                            "src": "20424:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "20400:51:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 966,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20400:51:0"
                                },
                                {
                                    "expression": {
                                        "id": 972,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 967,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20461:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 969,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20469:14:0",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10122,
                                            "src": "20461:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 970,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20486:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 971,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20500:14:0",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10079,
                                            "src": "20486:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "20461:53:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 973,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20461:53:0"
                                },
                                {
                                    "expression": {
                                        "id": 979,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 974,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20524:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 976,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20532:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10128,
                                            "src": "20524:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 977,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20555:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 978,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20569:20:0",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10082,
                                            "src": "20555:34:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20524:65:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 980,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20524:65:0"
                                },
                                {
                                    "expression": {
                                        "id": 986,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 981,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20599:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 983,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20607:24:0",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10131,
                                            "src": "20599:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 984,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20634:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 985,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20661:24:0",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10085,
                                            "src": "20634:51:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20599:86:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 987,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20599:86:0"
                                },
                                {
                                    "expression": {
                                        "id": 993,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 988,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20695:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 990,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20703:16:0",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10134,
                                            "src": "20695:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 991,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20722:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 992,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20736:16:0",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10088,
                                            "src": "20722:30:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20695:57:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 994,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20695:57:0"
                                },
                                {
                                    "expression": {
                                        "id": 1000,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 995,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20762:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 997,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20770:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10137,
                                            "src": "20762:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 998,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20791:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 999,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20805:18:0",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10091,
                                            "src": "20791:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20762:61:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1001,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20762:61:0"
                                },
                                {
                                    "expression": {
                                        "id": 1007,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 1002,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20833:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 1004,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20841:11:0",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10140,
                                            "src": "20833:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 1005,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20855:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 1006,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20869:11:0",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10094,
                                            "src": "20855:25:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20833:47:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1008,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20833:47:0"
                                },
                                {
                                    "expression": {
                                        "id": 1014,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 1009,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20890:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 1011,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20898:10:0",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10143,
                                            "src": "20890:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 1012,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20911:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 1013,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20925:10:0",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10097,
                                            "src": "20911:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "20890:45:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1015,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20890:45:0"
                                },
                                {
                                    "expression": {
                                        "id": 1021,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 1016,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "20945:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 1018,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20953:12:0",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10146,
                                            "src": "20945:20:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 1019,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "20968:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 1020,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20982:12:0",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10100,
                                            "src": "20968:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "20945:49:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1022,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20945:49:0"
                                },
                                {
                                    "expression": {
                                        "id": 1028,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 1023,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "21004:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 1025,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "21012:14:0",
                                            "memberName": "sweepCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10149,
                                            "src": "21004:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 1026,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "21029:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 1027,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "21043:14:0",
                                            "memberName": "sweepCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10103,
                                            "src": "21029:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "21004:53:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1029,
                                    "nodeType": "ExpressionStatement",
                                    "src": "21004:53:0"
                                },
                                {
                                    "expression": {
                                        "id": 1035,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 1030,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 944,
                                                "src": "21067:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 1032,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "21075:4:0",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10153,
                                            "src": "21067:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 1033,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 940,
                                                "src": "21082:13:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 1034,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "21096:4:0",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10107,
                                            "src": "21082:18:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "src": "21067:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                            "typeString": "struct IHyperdrive.Fees memory"
                                        }
                                    },
                                    "id": 1036,
                                    "nodeType": "ExpressionStatement",
                                    "src": "21067:33:0"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 937,
                            "nodeType": "StructuredDocumentation",
                            "src": "19841:205:0",
                            "text": "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_copyPoolConfig",
                        "nameLocation": "20060:15:0",
                        "parameters": {
                            "id": 941,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 940,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "20121:13:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1038,
                                    "src": "20085:49:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 939,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 938,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "20085:11:0",
                                                "20097:16:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "20085:28:0"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "20085:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20075:65:0"
                        },
                        "returnParameters": {
                            "id": 945,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 944,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "20194:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1038,
                                    "src": "20164:37:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 943,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 942,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "20164:11:0",
                                                "20176:10:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "20164:22:0"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "20164:22:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20163:39:0"
                        },
                        "scope": 1039,
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
                            "referencedDeclaration": 10684,
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
                    1039,
                    10684
                ],
                "name": "HyperdriveDeployerCoordinator",
                "nameLocation": "964:29:0",
                "scope": 1040,
                "usedErrors": [
                    10577,
                    10580,
                    10583,
                    10586,
                    10589,
                    10592,
                    10595,
                    10598,
                    10601,
                    10604,
                    10607,
                    10610,
                    10613,
                    10616,
                    10619,
                    10622,
                    10625,
                    10628,
                    10631,
                    10634
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 0
};
