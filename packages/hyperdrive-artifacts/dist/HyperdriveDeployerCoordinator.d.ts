export declare const HyperdriveDeployerCoordinator: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DeploymentAlreadyExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DeploymentDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HyperdriveAlreadyDeployed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HyperdriveIsNotDeployed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IncompleteDeployment";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBaseToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCheckpointDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFeeAmounts";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinimumShareReserves";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMinimumTransactionAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPositionDuration";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTargetIndex";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVaultSharesToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MismatchedConfig";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MismatchedExtraData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TargetAlreadyDeployed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "coreDeployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_deploymentId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "linkerFactory";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "checkpointDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sweepCollector";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "curve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "flat";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly name: "_deployConfig";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_salt";
            readonly type: "bytes32";
        }];
        readonly name: "deploy";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_deploymentId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "linkerFactory";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "checkpointDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sweepCollector";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "curve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "flat";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly name: "_deployConfig";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_targetIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_salt";
            readonly type: "bytes32";
        }];
        readonly name: "deployTarget";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_deployer";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_deploymentId";
            readonly type: "bytes32";
        }];
        readonly name: "deployments";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "configHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "extraDataHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "hyperdrive";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "target0";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "target1";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "target2";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "target3";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "target4";
                readonly type: "address";
            }];
            readonly internalType: "struct HyperdriveDeployerCoordinator.Deployment";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_deploymentId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_lp";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_contribution";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_apr";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "destination";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "asBase";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHyperdrive.Options";
            readonly name: "_options";
            readonly type: "tuple";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lpShares";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target0Deployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target1Deployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target2Deployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target3Deployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target4Deployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "coreDeployer()": "c83e1f51";
        readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "1ae6f515";
        readonly "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "0b3c4f86";
        readonly "deployments(address,bytes32)": "20503b3f";
        readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70";
        readonly "target0Deployer()": "ab71905f";
        readonly "target1Deployer()": "a085fa30";
        readonly "target2Deployer()": "b6cb1118";
        readonly "target3Deployer()": "aa8cd6c4";
        readonly "target4Deployer()": "966ecd1c";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultSharesToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"InvalidVaultSharesToken()\":[{\"notice\":\"Thrown when the vault shares token isn't valid. Each instance         will have different criteria for what constitutes a valid base         token.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xf6c8e82f88f58a7f694384882ab7c2218bd07a672e80f137eb50c56aa8d849da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41b150e78a9b8d5c7dd3b6ad14dd124e5fb84486d8bb7c2732d107f386545214\",\"dweb:/ipfs/QmNT6KEz9LdUJCaV9pvF2YmccHeJPqq5LQAy6Y2wZhfqzR\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x2eb8c9cd2fb58f1c6b1054c5d5e325b78386855bbcfd0a86b595aa98bd05df28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cd2aa557854a35ada0b5d334c981739eecbc82580aa35693277749b8cadbe4f4\",\"dweb:/ipfs/QmcRWJuLSrA44XmFC1bMAGCKUfPmVUnUv7YE8fNC4gy91v\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeploymentAlreadyExists";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeploymentDoesNotExist";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "HyperdriveAlreadyDeployed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "HyperdriveIsNotDeployed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "IncompleteDeployment";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InsufficientValue";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidBaseToken";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFeeAmounts";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinimumShareReserves";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinimumTransactionAmount";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTargetIndex";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidVaultSharesToken";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MismatchedConfig";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MismatchedExtraData";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "NotPayable";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TargetAlreadyDeployed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "coreDeployer";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_deploymentId";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "struct IHyperdrive.PoolDeployConfig";
                    readonly name: "_deployConfig";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "contract IERC20";
                        readonly name: "baseToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "vaultSharesToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "linkerFactory";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "linkerCodeHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "positionDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "checkpointDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "governance";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "feeCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sweepCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "struct IHyperdrive.Fees";
                        readonly name: "fees";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "curve";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "flat";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceLP";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceZombie";
                            readonly type: "uint256";
                        }];
                    }];
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_salt";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deploy";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_deploymentId";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "struct IHyperdrive.PoolDeployConfig";
                    readonly name: "_deployConfig";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "contract IERC20";
                        readonly name: "baseToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "vaultSharesToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "linkerFactory";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "linkerCodeHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "positionDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "checkpointDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "governance";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "feeCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sweepCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "struct IHyperdrive.Fees";
                        readonly name: "fees";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "curve";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "flat";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceLP";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceZombie";
                            readonly type: "uint256";
                        }];
                    }];
                }, {
                    readonly internalType: "bytes";
                    readonly name: "_extraData";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_targetIndex";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_salt";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "deployTarget";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_deployer";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "_deploymentId";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "deployments";
                readonly outputs: readonly [{
                    readonly internalType: "struct HyperdriveDeployerCoordinator.Deployment";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "configHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "extraDataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "hyperdrive";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "target0";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "target1";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "target2";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "target3";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "target4";
                        readonly type: "address";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "_deploymentId";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "address";
                    readonly name: "_lp";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_contribution";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_apr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "initialize";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "lpShares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target0Deployer";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target1Deployer";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target2Deployer";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target3Deployer";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target4Deployer";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly constructor: {
                        readonly params: {
                            readonly _coreDeployer: "The core deployer.";
                            readonly _target0Deployer: "The target0 deployer.";
                            readonly _target1Deployer: "The target1 deployer.";
                            readonly _target2Deployer: "The target2 deployer.";
                            readonly _target4Deployer: "The target4 deployer.";
                        };
                    };
                    readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        readonly params: {
                            readonly _deployConfig: "The deploy configuration of the Hyperdrive pool.";
                            readonly _deploymentId: "The ID of the deployment.";
                            readonly _extraData: "The extra data that contains the pool and sweep targets.";
                            readonly _salt: "The create2 salt used to deploy Hyperdrive.";
                        };
                        readonly returns: {
                            readonly _0: "The address of the newly deployed Hyperdrive instance.";
                        };
                    };
                    readonly "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        readonly details: "As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.";
                        readonly params: {
                            readonly _deployConfig: "The deploy configuration of the Hyperdrive pool.";
                            readonly _deploymentId: "The ID of the deployment.";
                            readonly _extraData: "The extra data that contains the pool and sweep targets.";
                            readonly _salt: "The create2 salt used to deploy the target.";
                            readonly _targetIndex: "The index of the target to deploy.";
                        };
                        readonly returns: {
                            readonly target: "The address of the newly deployed target instance.";
                        };
                    };
                    readonly "deployments(address,bytes32)": {
                        readonly params: {
                            readonly _deployer: "The deployer.";
                            readonly _deploymentId: "The deployment ID.";
                        };
                        readonly returns: {
                            readonly _0: "The deployment.";
                        };
                    };
                    readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        readonly details: "This function utilizes several helper functions that provide      flexibility to implementations.";
                        readonly params: {
                            readonly _apr: "The target APR.";
                            readonly _contribution: "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.";
                            readonly _deploymentId: "The ID of the deployment.";
                            readonly _lp: "The LP that is initializing the pool.";
                            readonly _options: "The options that configure how the initialization is        settled.";
                        };
                        readonly returns: {
                            readonly lpShares: "The initial number of LP shares created.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly constructor: {
                        readonly notice: "Instantiates the deployer coordinator.";
                    };
                    readonly "coreDeployer()": {
                        readonly notice: "The contract used to deploy new instances of Hyperdrive.";
                    };
                    readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive instance with the given parameters.";
                    };
                    readonly "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive target instance with the given parameters.";
                    };
                    readonly "deployments(address,bytes32)": {
                        readonly notice: "Gets the deployment specified by the deployer and deployment ID.";
                    };
                    readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Initializes a pool that was deployed by this coordinator.";
                    };
                    readonly "target0Deployer()": {
                        readonly notice: "The contract used to deploy new instances of HyperdriveTarget0.";
                    };
                    readonly "target1Deployer()": {
                        readonly notice: "The contract used to deploy new instances of HyperdriveTarget1.";
                    };
                    readonly "target2Deployer()": {
                        readonly notice: "The contract used to deploy new instances of HyperdriveTarget2.";
                    };
                    readonly "target3Deployer()": {
                        readonly notice: "The contract used to deploy new instances of HyperdriveTarget3.";
                    };
                    readonly "target4Deployer()": {
                        readonly notice: "The contract used to deploy new instances of HyperdriveTarget4.";
                    };
                };
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/deployers/HyperdriveDeployerCoordinator.sol": "HyperdriveDeployerCoordinator";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/deployers/HyperdriveDeployerCoordinator.sol": {
                readonly keccak256: "0xf6c8e82f88f58a7f694384882ab7c2218bd07a672e80f137eb50c56aa8d849da";
                readonly urls: readonly ["bzz-raw://41b150e78a9b8d5c7dd3b6ad14dd124e5fb84486d8bb7c2732d107f386545214", "dweb:/ipfs/QmNT6KEz9LdUJCaV9pvF2YmccHeJPqq5LQAy6Y2wZhfqzR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCoreDeployer.sol": {
                readonly keccak256: "0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761";
                readonly urls: readonly ["bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b", "dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                readonly keccak256: "0x2eb8c9cd2fb58f1c6b1054c5d5e325b78386855bbcfd0a86b595aa98bd05df28";
                readonly urls: readonly ["bzz-raw://cd2aa557854a35ada0b5d334c981739eecbc82580aa35693277749b8cadbe4f4", "dweb:/ipfs/QmcRWJuLSrA44XmFC1bMAGCKUfPmVUnUv7YE8fNC4gy91v"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveTargetDeployer.sol": {
                readonly keccak256: "0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205";
                readonly urls: readonly ["bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed", "dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/deployers/HyperdriveDeployerCoordinator.sol";
        readonly id: 1091;
        readonly exportedSymbols: {
            readonly HyperdriveDeployerCoordinator: readonly [1090];
            readonly IHyperdrive: readonly [10506];
            readonly IHyperdriveCoreDeployer: readonly [10723];
            readonly IHyperdriveDeployerCoordinator: readonly [10834];
            readonly IHyperdriveTargetDeployer: readonly [11386];
            readonly ONE: readonly [18202];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:21024:0";
        readonly nodes: readonly [{
            readonly id: 1;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:0";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 3;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:0";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 1091;
            readonly sourceUnit: 10507;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 2;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10506;
                    readonly src: "73:11:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5;
            readonly nodeType: "ImportDirective";
            readonly src: "125:84:0";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveCoreDeployer.sol";
            readonly file: "../interfaces/IHyperdriveCoreDeployer.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 1091;
            readonly sourceUnit: 10724;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4;
                    readonly name: "IHyperdriveCoreDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10723;
                    readonly src: "134:23:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7;
            readonly nodeType: "ImportDirective";
            readonly src: "210:98:0";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol";
            readonly file: "../interfaces/IHyperdriveDeployerCoordinator.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 1091;
            readonly sourceUnit: 10835;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10834;
                    readonly src: "219:30:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9;
            readonly nodeType: "ImportDirective";
            readonly src: "309:88:0";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveTargetDeployer.sol";
            readonly file: "../interfaces/IHyperdriveTargetDeployer.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 1091;
            readonly sourceUnit: 11387;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8;
                    readonly name: "IHyperdriveTargetDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11386;
                    readonly src: "318:25:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11;
            readonly nodeType: "ImportDirective";
            readonly src: "398:54:0";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 1091;
            readonly sourceUnit: 18969;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 10;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18202;
                    readonly src: "407:3:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 1090;
            readonly nodeType: "ContractDefinition";
            readonly src: "946:20116:0";
            readonly nodes: readonly [{
                readonly id: 42;
                readonly nodeType: "StructDefinition";
                readonly src: "1038:1258:0";
                readonly nodes: readonly [];
                readonly canonicalName: "HyperdriveDeployerCoordinator.Deployment";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 17;
                    readonly mutability: "mutable";
                    readonly name: "configHash";
                    readonly nameLocation: "1261:10:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "1253:18:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                    readonly typeName: {
                        readonly id: 16;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1253:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 20;
                    readonly mutability: "mutable";
                    readonly name: "extraDataHash";
                    readonly nameLocation: "1490:13:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "1482:21:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                    readonly typeName: {
                        readonly id: 19;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1482:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 23;
                    readonly mutability: "mutable";
                    readonly name: "initialSharePrice";
                    readonly nameLocation: "1740:17:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "1732:25:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 22;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1732:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26;
                    readonly mutability: "mutable";
                    readonly name: "hyperdrive";
                    readonly nameLocation: "1834:10:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "1826:18:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 25;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1826:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 29;
                    readonly mutability: "mutable";
                    readonly name: "target0";
                    readonly nameLocation: "1926:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "1918:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 28;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1918:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 32;
                    readonly mutability: "mutable";
                    readonly name: "target1";
                    readonly nameLocation: "2015:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "2007:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 31;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2007:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 35;
                    readonly mutability: "mutable";
                    readonly name: "target2";
                    readonly nameLocation: "2104:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "2096:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 34;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2096:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 38;
                    readonly mutability: "mutable";
                    readonly name: "target3";
                    readonly nameLocation: "2193:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "2185:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 37;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2185:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 41;
                    readonly mutability: "mutable";
                    readonly name: "target4";
                    readonly nameLocation: "2282:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 42;
                    readonly src: "2274:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 40;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2274:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Deployment";
                readonly nameLocation: "1045:10:0";
                readonly scope: 1090;
                readonly visibility: "public";
            }, {
                readonly id: 45;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2375:37:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 43;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2302:68:0";
                    readonly text: "@notice The contract used to deploy new instances of Hyperdrive.";
                };
                readonly functionSelector: "c83e1f51";
                readonly mutability: "immutable";
                readonly name: "coreDeployer";
                readonly nameLocation: "2400:12:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 44;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2375:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 48;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2499:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 46;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2419:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget0.";
                };
                readonly functionSelector: "ab71905f";
                readonly mutability: "immutable";
                readonly name: "target0Deployer";
                readonly nameLocation: "2524:15:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 47;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2499:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 51;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2626:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 49;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2546:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget1.";
                };
                readonly functionSelector: "a085fa30";
                readonly mutability: "immutable";
                readonly name: "target1Deployer";
                readonly nameLocation: "2651:15:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 50;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2626:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 54;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2753:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 52;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2673:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget2.";
                };
                readonly functionSelector: "b6cb1118";
                readonly mutability: "immutable";
                readonly name: "target2Deployer";
                readonly nameLocation: "2778:15:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 53;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2753:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 57;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2880:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 55;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2800:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget3.";
                };
                readonly functionSelector: "aa8cd6c4";
                readonly mutability: "immutable";
                readonly name: "target3Deployer";
                readonly nameLocation: "2905:15:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 56;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2880:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 60;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3007:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 58;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2927:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget4.";
                };
                readonly functionSelector: "966ecd1c";
                readonly mutability: "immutable";
                readonly name: "target4Deployer";
                readonly nameLocation: "3032:15:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 59;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3007:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 68;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3126:72:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 61;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3054:67:0";
                    readonly text: "@notice A mapping from deployer to deployment ID to deployment.";
                };
                readonly mutability: "mutable";
                readonly name: "_deployments";
                readonly nameLocation: "3186:12:0";
                readonly scope: 1090;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))";
                };
                readonly typeName: {
                    readonly id: 67;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 62;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3134:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3126:50:0";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 66;
                        readonly keyName: "";
                        readonly keyNameLocation: "-1:-1:-1";
                        readonly keyType: {
                            readonly id: 63;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3153:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "3145:30:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)";
                        };
                        readonly valueName: "";
                        readonly valueNameLocation: "-1:-1:-1";
                        readonly valueType: {
                            readonly id: 65;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 64;
                                readonly name: "Deployment";
                                readonly nameLocations: readonly ["3164:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 42;
                                readonly src: "3164:10:0";
                            };
                            readonly referencedDeclaration: 42;
                            readonly src: "3164:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 109;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3524:484:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 108;
                    readonly nodeType: "Block";
                    readonly src: "3743:265:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 86;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 84;
                                readonly name: "coreDeployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 45;
                                readonly src: "3753:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 85;
                                readonly name: "_coreDeployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71;
                                readonly src: "3768:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3753:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 87;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3753:28:0";
                    }, {
                        readonly expression: {
                            readonly id: 90;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 88;
                                readonly name: "target0Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 48;
                                readonly src: "3791:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 89;
                                readonly name: "_target0Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73;
                                readonly src: "3809:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3791:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 91;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3791:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 94;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 92;
                                readonly name: "target1Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 51;
                                readonly src: "3835:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 93;
                                readonly name: "_target1Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 75;
                                readonly src: "3853:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3835:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 95;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3835:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 98;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 96;
                                readonly name: "target2Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 54;
                                readonly src: "3879:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 97;
                                readonly name: "_target2Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 77;
                                readonly src: "3897:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3879:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 99;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3879:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 102;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 100;
                                readonly name: "target3Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 57;
                                readonly src: "3923:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 101;
                                readonly name: "_target3Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 79;
                                readonly src: "3941:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3923:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 103;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3923:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 106;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 104;
                                readonly name: "target4Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 60;
                                readonly src: "3967:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 105;
                                readonly name: "_target4Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 81;
                                readonly src: "3985:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3967:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 107;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3967:34:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 69;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3205:314:0";
                    readonly text: "@notice Instantiates the deployer coordinator.\n @param _coreDeployer The core deployer.\n @param _target0Deployer The target0 deployer.\n @param _target1Deployer The target1 deployer.\n @param _target2Deployer The target2 deployer.\n @param _target4Deployer The target4 deployer.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 82;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71;
                        readonly mutability: "mutable";
                        readonly name: "_coreDeployer";
                        readonly nameLocation: "3553:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 109;
                        readonly src: "3545:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3545:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73;
                        readonly mutability: "mutable";
                        readonly name: "_target0Deployer";
                        readonly nameLocation: "3584:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 109;
                        readonly src: "3576:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3576:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 75;
                        readonly mutability: "mutable";
                        readonly name: "_target1Deployer";
                        readonly nameLocation: "3618:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 109;
                        readonly src: "3610:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 74;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3610:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 77;
                        readonly mutability: "mutable";
                        readonly name: "_target2Deployer";
                        readonly nameLocation: "3652:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 109;
                        readonly src: "3644:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 76;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3644:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 79;
                        readonly mutability: "mutable";
                        readonly name: "_target3Deployer";
                        readonly nameLocation: "3686:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 109;
                        readonly src: "3678:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 78;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3678:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 81;
                        readonly mutability: "mutable";
                        readonly name: "_target4Deployer";
                        readonly nameLocation: "3720:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 109;
                        readonly src: "3712:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 80;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3712:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3535:207:0";
                };
                readonly returnParameters: {
                    readonly id: 83;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3743:0:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 307;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4439:3006:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 306;
                    readonly nodeType: "Block";
                    readonly src: "4634:2811:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [126];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 126;
                            readonly mutability: "mutable";
                            readonly name: "deployment";
                            readonly nameLocation: "4742:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 306;
                            readonly src: "4724:28:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                            readonly typeName: {
                                readonly id: 125;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 124;
                                    readonly name: "Deployment";
                                    readonly nameLocations: readonly ["4724:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 42;
                                    readonly src: "4724:10:0";
                                };
                                readonly referencedDeclaration: 42;
                                readonly src: "4724:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 133;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly baseExpression: {
                                    readonly id: 127;
                                    readonly name: "_deployments";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 68;
                                    readonly src: "4755:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                    };
                                };
                                readonly id: 130;
                                readonly indexExpression: {
                                    readonly expression: {
                                        readonly id: 128;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "4768:3:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 129;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4772:6:0";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4768:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "4755:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 132;
                            readonly indexExpression: {
                                readonly id: 131;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 112;
                                readonly src: "4780:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "4755:39:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4724:70:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 140;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 134;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "4808:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 135;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4819:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26;
                                readonly src: "4808:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 138;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4841:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 137;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4833:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 136;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4833:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 139;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4833:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4808:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 147;
                        readonly nodeType: "IfStatement";
                        readonly src: "4804:131:0";
                        readonly trueBody: {
                            readonly id: 146;
                            readonly nodeType: "Block";
                            readonly src: "4845:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 141;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "4866:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 143;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4897:25:0";
                                        readonly memberName: "HyperdriveAlreadyDeployed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10739;
                                        readonly src: "4866:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 144;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4866:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 145;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4859:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 154;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 148;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "5084:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 149;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5095:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17;
                                readonly src: "5084:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 152;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5117:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 151;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5109:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 150;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5109:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 153;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5109:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5084:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 161;
                        readonly nodeType: "IfStatement";
                        readonly src: "5080:128:0";
                        readonly trueBody: {
                            readonly id: 160;
                            readonly nodeType: "Block";
                            readonly src: "5121:87:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 155;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "5142:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 157;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5173:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10733;
                                        readonly src: "5142:53:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 158;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5142:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 159;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5135:62:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 200;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 192;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 184;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly id: 176;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 168;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 162;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 126;
                                                    readonly src: "5297:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                    };
                                                };
                                                readonly id: 163;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5308:7:0";
                                                readonly memberName: "target0";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 29;
                                                readonly src: "5297:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 166;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5327:1:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 165;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5319:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 164;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5319:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 167;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5319:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5297:32:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "||";
                                        readonly rightExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 175;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 169;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 126;
                                                    readonly src: "5345:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                    };
                                                };
                                                readonly id: 170;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5356:7:0";
                                                readonly memberName: "target1";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 32;
                                                readonly src: "5345:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 173;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5375:1:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 172;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5367:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 171;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5367:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 174;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5367:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5345:32:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5297:80:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "||";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 183;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 177;
                                                readonly name: "deployment";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 126;
                                                readonly src: "5393:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                };
                                            };
                                            readonly id: 178;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5404:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "5393:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 181;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5423:1:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 180;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5415:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 179;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5415:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 182;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5415:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "5393:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5297:128:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "||";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 191;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 185;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 126;
                                            readonly src: "5441:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                            };
                                        };
                                        readonly id: 186;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5452:7:0";
                                        readonly memberName: "target3";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 38;
                                        readonly src: "5441:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30";
                                            readonly id: 189;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5471:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            }];
                                            readonly id: 188;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "5463:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 187;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "5463:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 190;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5463:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "5441:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5297:176:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 199;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 193;
                                        readonly name: "deployment";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 126;
                                        readonly src: "5489:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                        };
                                    };
                                    readonly id: 194;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5500:7:0";
                                    readonly memberName: "target4";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 41;
                                    readonly src: "5489:18:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 197;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5519:1:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        }];
                                        readonly id: 196;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5511:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 195;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5511:7:0";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 198;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5511:10:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "5489:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5297:224:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 207;
                        readonly nodeType: "IfStatement";
                        readonly src: "5280:337:0";
                        readonly trueBody: {
                            readonly id: 206;
                            readonly nodeType: "Block";
                            readonly src: "5532:85:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 201;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "5553:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 203;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5584:20:0";
                                        readonly memberName: "IncompleteDeployment";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10736;
                                        readonly src: "5553:51:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 204;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5553:53:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 205;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5546:60:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 216;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 211;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 115;
                                        readonly src: "5720:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 209;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "5709:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 210;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5713:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5709:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 212;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5709:25:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 208;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "5699:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 213;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5699:36:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 214;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "5739:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 215;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5750:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17;
                                readonly src: "5739:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5699:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 223;
                        readonly nodeType: "IfStatement";
                        readonly src: "5695:148:0";
                        readonly trueBody: {
                            readonly id: 222;
                            readonly nodeType: "Block";
                            readonly src: "5762:81:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 217;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "5783:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 219;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5814:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10772;
                                        readonly src: "5783:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 220;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5783:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 221;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5776:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 229;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 225;
                                    readonly name: "_extraData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 117;
                                    readonly src: "5943:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 224;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "5933:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 226;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5933:21:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 227;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "5958:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 228;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5969:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20;
                                readonly src: "5958:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5933:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 236;
                        readonly nodeType: "IfStatement";
                        readonly src: "5929:139:0";
                        readonly trueBody: {
                            readonly id: 235;
                            readonly nodeType: "Block";
                            readonly src: "5984:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 230;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "6005:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 232;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6036:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10775;
                                        readonly src: "6005:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 233;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6005:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 234;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5998:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 238;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 115;
                                readonly src: "6361:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 237;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 976;
                                readonly src: "6344:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                };
                            };
                            readonly id: 239;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6344:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 240;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6344:31:0";
                    }, {
                        readonly assignments: readonly [245];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 245;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "6524:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 306;
                            readonly src: "6494:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 244;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 243;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["6494:11:0", "6506:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10300;
                                    readonly src: "6494:22:0";
                                };
                                readonly referencedDeclaration: 10300;
                                readonly src: "6494:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 249;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 247;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 115;
                                readonly src: "6549:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 246;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 1089;
                                readonly src: "6533:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$returns$_t_struct$_PoolConfig_$10300_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 248;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6533:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6494:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 255;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 250;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 245;
                                    readonly src: "6573:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 252;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "6580:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10271;
                                readonly src: "6573:29:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 253;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "6605:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 254;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6616:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 23;
                                readonly src: "6605:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6573:60:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 256;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6573:60:0";
                    }, {
                        readonly assignments: readonly [258];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 258;
                            readonly mutability: "mutable";
                            readonly name: "deploymentId";
                            readonly nameLocation: "6731:12:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 306;
                            readonly src: "6723:20:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 257;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6723:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 260;
                        readonly initialValue: {
                            readonly id: 259;
                            readonly name: "_deploymentId";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 112;
                            readonly src: "6746:13:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6723:36:0";
                    }, {
                        readonly assignments: readonly [262];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 262;
                            readonly mutability: "mutable";
                            readonly name: "salt";
                            readonly nameLocation: "6807:4:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 306;
                            readonly src: "6799:12:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 261;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6799:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 264;
                        readonly initialValue: {
                            readonly id: 263;
                            readonly name: "_salt";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 119;
                            readonly src: "6814:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6799:20:0";
                    }, {
                        readonly assignments: readonly [266];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 266;
                            readonly mutability: "mutable";
                            readonly name: "hyperdrive";
                            readonly nameLocation: "6867:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 306;
                            readonly src: "6859:18:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly typeName: {
                                readonly id: 265;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6859:7:0";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 293;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 271;
                                readonly name: "config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 245;
                                readonly src: "6938:6:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }, {
                                readonly id: 272;
                                readonly name: "_extraData";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 117;
                                readonly src: "6958:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 273;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "6982:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 274;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6993:7:0";
                                readonly memberName: "target0";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 29;
                                readonly src: "6982:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 275;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "7014:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 276;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7025:7:0";
                                readonly memberName: "target1";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 32;
                                readonly src: "7014:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 277;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "7046:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 278;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7057:7:0";
                                readonly memberName: "target2";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35;
                                readonly src: "7046:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 279;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "7078:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 280;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7089:7:0";
                                readonly memberName: "target3";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 38;
                                readonly src: "7078:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 281;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 126;
                                    readonly src: "7110:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 282;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7121:7:0";
                                readonly memberName: "target4";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 41;
                                readonly src: "7110:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 286;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "7295:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 287;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7299:6:0";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7295:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 288;
                                        readonly name: "deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 258;
                                        readonly src: "7307:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 289;
                                        readonly name: "salt";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 262;
                                        readonly src: "7321:4:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }];
                                        readonly expression: {
                                            readonly id: 284;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7284:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 285;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7288:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7284:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 290;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7284:42:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 283;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7274:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 291;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7274:53:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }];
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 268;
                                        readonly name: "coreDeployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 45;
                                        readonly src: "6904:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly id: 267;
                                        readonly name: "IHyperdriveCoreDeployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 10723;
                                        readonly src: "6880:23:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveCoreDeployer_$10723_$";
                                            readonly typeString: "type(contract IHyperdriveCoreDeployer)";
                                        };
                                    };
                                    readonly id: 269;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6880:37:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IHyperdriveCoreDeployer_$10723";
                                        readonly typeString: "contract IHyperdriveCoreDeployer";
                                    };
                                };
                                readonly id: 270;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6918:6:0";
                                readonly memberName: "deploy";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10722;
                                readonly src: "6880:44:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,address,address,address,address,address,bytes32) external returns (address)";
                                };
                            };
                            readonly id: 292;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6880:457:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6859:478:0";
                    }, {
                        readonly expression: {
                            readonly id: 302;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 294;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68;
                                            readonly src: "7347:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 298;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 295;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "7360:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 296;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "7364:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "7360:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "7347:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 299;
                                    readonly indexExpression: {
                                        readonly id: 297;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 112;
                                        readonly src: "7372:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "7347:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 300;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "7387:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26;
                                readonly src: "7347:50:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 301;
                                readonly name: "hyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 266;
                                readonly src: "7400:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "7347:63:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 303;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7347:63:0";
                    }, {
                        readonly expression: {
                            readonly id: 304;
                            readonly name: "hyperdrive";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 266;
                            readonly src: "7428:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 123;
                        readonly id: 305;
                        readonly nodeType: "Return";
                        readonly src: "7421:17:0";
                    }];
                };
                readonly baseFunctions: readonly [10799];
                readonly documentation: {
                    readonly id: 110;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4014:420:0";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance.";
                };
                readonly functionSelector: "1ae6f515";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deploy";
                readonly nameLocation: "4448:6:0";
                readonly parameters: {
                    readonly id: 120;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 112;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "4472:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 307;
                        readonly src: "4464:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 111;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4464:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 115;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "4531:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 307;
                        readonly src: "4495:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 114;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 113;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["4495:11:0", "4507:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "4495:28:0";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "4495:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 117;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "4567:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 307;
                        readonly src: "4554:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 116;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4554:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 119;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "4595:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 307;
                        readonly src: "4587:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 118;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4587:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4454:152:0";
                };
                readonly returnParameters: {
                    readonly id: 123;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 122;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 307;
                        readonly src: "4625:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 121;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4625:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4624:9:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 752;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8078:6337:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 751;
                    readonly nodeType: "Block";
                    readonly src: "8316:6099:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 326;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 324;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 317;
                                readonly src: "8571:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 325;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8587:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "8571:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 449;
                        readonly nodeType: "IfStatement";
                        readonly src: "8567:2042:0";
                        readonly trueBody: {
                            readonly id: 448;
                            readonly nodeType: "Block";
                            readonly src: "8590:2019:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 338;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 327;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "8768:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 330;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 328;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "8781:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 329;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "8785:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "8781:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "8768:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 332;
                                            readonly indexExpression: {
                                                readonly id: 331;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "8793:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "8768:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 333;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8808:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17;
                                        readonly src: "8768:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "!=";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30";
                                            readonly id: 336;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "8830:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            }];
                                            readonly id: 335;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "8822:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                readonly typeString: "type(bytes32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 334;
                                                readonly name: "bytes32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "8822:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 337;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8822:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "8768:64:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 345;
                                readonly nodeType: "IfStatement";
                                readonly src: "8747:196:0";
                                readonly trueBody: {
                                    readonly id: 344;
                                    readonly nodeType: "Block";
                                    readonly src: "8847:96:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 339;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10834;
                                                    readonly src: "8872:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 341;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "8903:23:0";
                                                readonly memberName: "DeploymentAlreadyExists";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10730;
                                                readonly src: "8872:54:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 342;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8872:56:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 343;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "8865:63:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 347;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 313;
                                        readonly src: "9094:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 346;
                                        readonly name: "_checkPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 976;
                                        readonly src: "9077:16:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$returns$__$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                        };
                                    };
                                    readonly id: 348;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9077:31:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 349;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9077:31:0";
                            }, {
                                readonly assignments: readonly [351];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 351;
                                    readonly mutability: "mutable";
                                    readonly name: "initialSharePrice";
                                    readonly nameLocation: "9234:17:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 448;
                                    readonly src: "9226:25:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 350;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9226:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 356;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 353;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 313;
                                        readonly src: "9298:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }, {
                                        readonly id: 354;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 315;
                                        readonly src: "9329:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 352;
                                        readonly name: "_getInitialVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 987;
                                        readonly src: "9254:26:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_uint256_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory,bytes memory) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 355;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9254:99:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9226:127:0";
                            }, {
                                readonly assignments: readonly [358];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 358;
                                    readonly mutability: "mutable";
                                    readonly name: "configHash_";
                                    readonly nameLocation: "9375:11:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 448;
                                    readonly src: "9367:19:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 357;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9367:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 365;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 362;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 313;
                                            readonly src: "9410:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 360;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "9399:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 361;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9403:6:0";
                                            readonly memberName: "encode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "9399:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 363;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9399:25:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 359;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "9389:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 364;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9389:36:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9367:58:0";
                            }, {
                                readonly assignments: readonly [367];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 367;
                                    readonly mutability: "mutable";
                                    readonly name: "extraDataHash";
                                    readonly nameLocation: "9447:13:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 448;
                                    readonly src: "9439:21:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 366;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9439:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 371;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 369;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 315;
                                        readonly src: "9473:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 368;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "9463:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 370;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9463:21:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9439:45:0";
                            }, {
                                readonly assignments: readonly [376];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 376;
                                    readonly mutability: "mutable";
                                    readonly name: "config_";
                                    readonly nameLocation: "9645:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 448;
                                    readonly src: "9615:37:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "memory";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig";
                                    };
                                    readonly typeName: {
                                        readonly id: 375;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 374;
                                            readonly name: "IHyperdrive.PoolConfig";
                                            readonly nameLocations: readonly ["9615:11:0", "9627:10:0"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 10300;
                                            readonly src: "9615:22:0";
                                        };
                                        readonly referencedDeclaration: 10300;
                                        readonly src: "9615:22:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 380;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 378;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 313;
                                        readonly src: "9688:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 377;
                                        readonly name: "_copyPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 1089;
                                        readonly src: "9655:15:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$returns$_t_struct$_PoolConfig_$10300_memory_ptr_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                        };
                                    };
                                    readonly id: 379;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9655:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9615:100:0";
                            }, {
                                readonly expression: {
                                    readonly id: 385;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 381;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 376;
                                            readonly src: "9729:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        };
                                        readonly id: 383;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9737:22:0";
                                        readonly memberName: "initialVaultSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10271;
                                        readonly src: "9729:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 384;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 351;
                                        readonly src: "9762:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9729:50:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 386;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9729:50:0";
                            }, {
                                readonly expression: {
                                    readonly id: 404;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 387;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "9838:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 392;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 376;
                                            readonly src: "9914:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 393;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 315;
                                            readonly src: "9939:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 397;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10128:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 398;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10132:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10128:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }, {
                                                    readonly id: 399;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "10140:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }, {
                                                    readonly id: 400;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 319;
                                                    readonly src: "10155:5:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 395;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "10117:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 396;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10121:6:0";
                                                    readonly memberName: "encode";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10117:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 401;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10117:44:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                }];
                                                readonly id: 394;
                                                readonly name: "keccak256";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -8;
                                                readonly src: "10107:9:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                };
                                            };
                                            readonly id: 402;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10107:55:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            }, {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }, {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 389;
                                                    readonly name: "target0Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 48;
                                                    readonly src: "9873:15:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    }];
                                                    readonly id: 388;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11386;
                                                    readonly src: "9847:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11386_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 390;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "9847:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11386";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 391;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9890:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 11385;
                                            readonly src: "9847:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                            };
                                        };
                                        readonly id: 403;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9847:329:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "9838:338:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 405;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9838:338:0";
                            }, {
                                readonly expression: {
                                    readonly id: 414;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 406;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10228:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 410;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 407;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10241:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 408;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10245:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10241:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "10228:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 411;
                                            readonly indexExpression: {
                                                readonly id: 409;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10253:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "10228:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 412;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10268:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17;
                                        readonly src: "10228:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 413;
                                        readonly name: "configHash_";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 358;
                                        readonly src: "10281:11:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "10228:64:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 415;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10228:64:0";
                            }, {
                                readonly expression: {
                                    readonly id: 424;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 416;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10306:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 420;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 417;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10319:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 418;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10323:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10319:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "10306:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 421;
                                            readonly indexExpression: {
                                                readonly id: 419;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10331:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "10306:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 422;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10363:13:0";
                                        readonly memberName: "extraDataHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 20;
                                        readonly src: "10306:70:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 423;
                                        readonly name: "extraDataHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 367;
                                        readonly src: "10379:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "10306:86:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 425;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10306:86:0";
                            }, {
                                readonly expression: {
                                    readonly id: 434;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 426;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10406:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 430;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 427;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10419:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 428;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10423:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10419:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "10406:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 431;
                                            readonly indexExpression: {
                                                readonly id: 429;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10431:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "10406:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 432;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10463:17:0";
                                        readonly memberName: "initialSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 23;
                                        readonly src: "10406:74:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 433;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 351;
                                        readonly src: "10483:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "10406:94:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 435;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10406:94:0";
                            }, {
                                readonly expression: {
                                    readonly id: 444;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 436;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10514:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 440;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 437;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10527:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 438;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10531:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10527:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "10514:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 441;
                                            readonly indexExpression: {
                                                readonly id: 439;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10539:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "10514:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 442;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10554:7:0";
                                        readonly memberName: "target0";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 29;
                                        readonly src: "10514:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 443;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "10564:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "10514:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 445;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10514:56:0";
                            }, {
                                readonly expression: {
                                    readonly id: 446;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 322;
                                    readonly src: "10592:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly functionReturnParameters: 323;
                                readonly id: 447;
                                readonly nodeType: "Return";
                                readonly src: "10585:13:0";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [451];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 451;
                            readonly mutability: "mutable";
                            readonly name: "configHash";
                            readonly nameLocation: "10762:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 751;
                            readonly src: "10754:18:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 450;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10754:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 459;
                        readonly initialValue: {
                            readonly expression: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 452;
                                        readonly name: "_deployments";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 68;
                                        readonly src: "10775:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                        };
                                    };
                                    readonly id: 455;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 453;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "10788:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 454;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10792:6:0";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "10788:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "10775:24:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                    };
                                };
                                readonly id: 457;
                                readonly indexExpression: {
                                    readonly id: 456;
                                    readonly name: "_deploymentId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 310;
                                    readonly src: "10800:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "10775:39:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                };
                            };
                            readonly id: 458;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "10815:10:0";
                            readonly memberName: "configHash";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 17;
                            readonly src: "10775:50:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10754:71:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 465;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 460;
                                readonly name: "configHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 451;
                                readonly src: "10839:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 463;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10861:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 462;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "10853:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 461;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "10853:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 464;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10853:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10839:24:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 472;
                        readonly nodeType: "IfStatement";
                        readonly src: "10835:117:0";
                        readonly trueBody: {
                            readonly id: 471;
                            readonly nodeType: "Block";
                            readonly src: "10865:87:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 466;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "10886:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 468;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10917:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10733;
                                        readonly src: "10886:53:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 469;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10886:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 470;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10879:62:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 480;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 476;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 313;
                                        readonly src: "11055:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 474;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "11044:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 475;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11048:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "11044:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 477;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11044:25:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 473;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "11034:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 478;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11034:36:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 479;
                                readonly name: "configHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 451;
                                readonly src: "11074:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "11034:50:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 487;
                        readonly nodeType: "IfStatement";
                        readonly src: "11030:137:0";
                        readonly trueBody: {
                            readonly id: 486;
                            readonly nodeType: "Block";
                            readonly src: "11086:81:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 481;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "11107:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 483;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11138:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10772;
                                        readonly src: "11107:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 484;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11107:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 485;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11100:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 498;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 489;
                                    readonly name: "_extraData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 315;
                                    readonly src: "11280:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 488;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "11270:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 490;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11270:21:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 491;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68;
                                            readonly src: "11307:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 494;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 492;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "11320:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 493;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11324:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "11320:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "11307:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 496;
                                    readonly indexExpression: {
                                        readonly id: 495;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 310;
                                        readonly src: "11332:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "11307:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 497;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11347:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20;
                                readonly src: "11307:53:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "11270:90:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 505;
                        readonly nodeType: "IfStatement";
                        readonly src: "11253:202:0";
                        readonly trueBody: {
                            readonly id: 504;
                            readonly nodeType: "Block";
                            readonly src: "11371:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 499;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "11392:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 501;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11423:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10775;
                                        readonly src: "11392:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 502;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11392:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 503;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11385:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 507;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 313;
                                readonly src: "11748:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 506;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 976;
                                readonly src: "11731:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                };
                            };
                            readonly id: 508;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11731:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 509;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11731:31:0";
                    }, {
                        readonly assignments: readonly [514];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 514;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "11911:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 751;
                            readonly src: "11881:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 513;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 512;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["11881:11:0", "11893:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10300;
                                    readonly src: "11881:22:0";
                                };
                                readonly referencedDeclaration: 10300;
                                readonly src: "11881:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 518;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 516;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 313;
                                readonly src: "11936:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 515;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 1089;
                                readonly src: "11920:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10254_memory_ptr_$returns$_t_struct$_PoolConfig_$10300_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 517;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11920:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11881:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 529;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 519;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 514;
                                    readonly src: "11960:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 521;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "11967:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10271;
                                readonly src: "11960:29:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 522;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68;
                                            readonly src: "11992:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 525;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 523;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "12005:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 524;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12009:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "12005:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "11992:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 527;
                                    readonly indexExpression: {
                                        readonly id: 526;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 310;
                                        readonly src: "12017:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "11992:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 528;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12045:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 23;
                                readonly src: "11992:70:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11960:102:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 530;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11960:102:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 533;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 531;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 317;
                                readonly src: "12326:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 532;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "12342:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "12326:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 585;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 583;
                                    readonly name: "_targetIndex";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 317;
                                    readonly src: "12821:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "32";
                                    readonly id: 584;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "12837:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_2_by_1";
                                        readonly typeString: "int_const 2";
                                    };
                                    readonly value: "2";
                                };
                                readonly src: "12821:17:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseBody: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 637;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 635;
                                        readonly name: "_targetIndex";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 317;
                                        readonly src: "13316:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "33";
                                        readonly id: 636;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "13332:1:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "13316:17:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 689;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 687;
                                            readonly name: "_targetIndex";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 317;
                                            readonly src: "13811:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "34";
                                            readonly id: 688;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "13827:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_4_by_1";
                                                readonly typeString: "int_const 4";
                                            };
                                            readonly value: "4";
                                        };
                                        readonly src: "13811:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly falseBody: {
                                        readonly id: 744;
                                        readonly nodeType: "Block";
                                        readonly src: "14302:83:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 739;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 10834;
                                                        readonly src: "14323:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 741;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "14354:18:0";
                                                    readonly memberName: "InvalidTargetIndex";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 10769;
                                                    readonly src: "14323:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 742;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "14323:51:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 743;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "14316:58:0";
                                        }];
                                    };
                                    readonly id: 745;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "13807:578:0";
                                    readonly trueBody: {
                                        readonly id: 738;
                                        readonly nodeType: "Block";
                                        readonly src: "13830:466:0";
                                        readonly statements: readonly [{
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                                readonly id: 701;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly expression: {
                                                        readonly baseExpression: {
                                                            readonly baseExpression: {
                                                                readonly id: 690;
                                                                readonly name: "_deployments";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 68;
                                                                readonly src: "13848:12:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                                };
                                                            };
                                                            readonly id: 693;
                                                            readonly indexExpression: {
                                                                readonly expression: {
                                                                    readonly id: 691;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "13861:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 692;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "13865:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13861:10:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                };
                                                            };
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "IndexAccess";
                                                            readonly src: "13848:24:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                                readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                            };
                                                        };
                                                        readonly id: 695;
                                                        readonly indexExpression: {
                                                            readonly id: 694;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 310;
                                                            readonly src: "13873:13:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            };
                                                        };
                                                        readonly isConstant: false;
                                                        readonly isLValue: true;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "IndexAccess";
                                                        readonly src: "13848:39:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                        };
                                                    };
                                                    readonly id: 696;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13888:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 41;
                                                    readonly src: "13848:47:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "!=";
                                                readonly rightExpression: {
                                                    readonly arguments: readonly [{
                                                        readonly hexValue: "30";
                                                        readonly id: 699;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "13907:1:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_0_by_1";
                                                            readonly typeString: "int_const 0";
                                                        };
                                                        readonly value: "0";
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_rational_0_by_1";
                                                            readonly typeString: "int_const 0";
                                                        }];
                                                        readonly id: 698;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "13899:7:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 697;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "13899:7:0";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 700;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13899:10:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13848:61:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 708;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "13844:161:0";
                                            readonly trueBody: {
                                                readonly id: 707;
                                                readonly nodeType: "Block";
                                                readonly src: "13911:94:0";
                                                readonly statements: readonly [{
                                                    readonly errorCall: {
                                                        readonly arguments: readonly [];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [];
                                                            readonly expression: {
                                                                readonly id: 702;
                                                                readonly name: "IHyperdriveDeployerCoordinator";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 10834;
                                                                readonly src: "13936:30:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                                    readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                                };
                                                            };
                                                            readonly id: 704;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13967:21:0";
                                                            readonly memberName: "TargetAlreadyDeployed";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 10781;
                                                            readonly src: "13936:52:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                                readonly typeString: "function () pure";
                                                            };
                                                        };
                                                        readonly id: 705;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13936:54:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_tuple$__$";
                                                            readonly typeString: "tuple()";
                                                        };
                                                    };
                                                    readonly id: 706;
                                                    readonly nodeType: "RevertStatement";
                                                    readonly src: "13929:61:0";
                                                }];
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 726;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 709;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 322;
                                                    readonly src: "14018:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 714;
                                                        readonly name: "config";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 514;
                                                        readonly src: "14094:6:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                        };
                                                    }, {
                                                        readonly id: 715;
                                                        readonly name: "_extraData";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 315;
                                                        readonly src: "14118:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        };
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly arguments: readonly [{
                                                                readonly expression: {
                                                                    readonly id: 719;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "14167:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 720;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "14171:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "14167:10:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                };
                                                            }, {
                                                                readonly id: 721;
                                                                readonly name: "_deploymentId";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 310;
                                                                readonly src: "14179:13:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_bytes32";
                                                                    readonly typeString: "bytes32";
                                                                };
                                                            }, {
                                                                readonly id: 722;
                                                                readonly name: "_salt";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 319;
                                                                readonly src: "14194:5:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_bytes32";
                                                                    readonly typeString: "bytes32";
                                                                };
                                                            }];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [{
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                }, {
                                                                    readonly typeIdentifier: "t_bytes32";
                                                                    readonly typeString: "bytes32";
                                                                }, {
                                                                    readonly typeIdentifier: "t_bytes32";
                                                                    readonly typeString: "bytes32";
                                                                }];
                                                                readonly expression: {
                                                                    readonly id: 717;
                                                                    readonly name: "abi";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -1;
                                                                    readonly src: "14156:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_abi";
                                                                        readonly typeString: "abi";
                                                                    };
                                                                };
                                                                readonly id: 718;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "14160:6:0";
                                                                readonly memberName: "encode";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "14156:10:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                    readonly typeString: "function () pure returns (bytes memory)";
                                                                };
                                                            };
                                                            readonly id: 723;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "14156:44:0";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            }];
                                                            readonly id: 716;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "14146:9:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 724;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "14146:55:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                        }, {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        }, {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        }];
                                                        readonly expression: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 711;
                                                                readonly name: "target4Deployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 60;
                                                                readonly src: "14053:15:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                };
                                                            }];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [{
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                }];
                                                                readonly id: 710;
                                                                readonly name: "IHyperdriveTargetDeployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 11386;
                                                                readonly src: "14027:25:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11386_$";
                                                                    readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                                };
                                                            };
                                                            readonly id: 712;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "14027:42:0";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11386";
                                                                readonly typeString: "contract IHyperdriveTargetDeployer";
                                                            };
                                                        };
                                                        readonly id: 713;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "14070:6:0";
                                                        readonly memberName: "deploy";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 11385;
                                                        readonly src: "14027:49:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                        };
                                                    };
                                                    readonly id: 725;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "14027:188:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "14018:197:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 727;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "14018:197:0";
                                        }, {
                                            readonly expression: {
                                                readonly id: 736;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly baseExpression: {
                                                            readonly baseExpression: {
                                                                readonly id: 728;
                                                                readonly name: "_deployments";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 68;
                                                                readonly src: "14229:12:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                                };
                                                            };
                                                            readonly id: 732;
                                                            readonly indexExpression: {
                                                                readonly expression: {
                                                                    readonly id: 729;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "14242:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 730;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "14246:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "14242:10:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                };
                                                            };
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "IndexAccess";
                                                            readonly src: "14229:24:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                                readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                            };
                                                        };
                                                        readonly id: 733;
                                                        readonly indexExpression: {
                                                            readonly id: 731;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 310;
                                                            readonly src: "14254:13:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            };
                                                        };
                                                        readonly isConstant: false;
                                                        readonly isLValue: true;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "IndexAccess";
                                                        readonly src: "14229:39:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                        };
                                                    };
                                                    readonly id: 734;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "14269:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 41;
                                                    readonly src: "14229:47:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 735;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 322;
                                                    readonly src: "14279:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "14229:56:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 737;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "14229:56:0";
                                        }];
                                    };
                                };
                                readonly id: 746;
                                readonly nodeType: "IfStatement";
                                readonly src: "13312:1073:0";
                                readonly trueBody: {
                                    readonly id: 686;
                                    readonly nodeType: "Block";
                                    readonly src: "13335:466:0";
                                    readonly statements: readonly [{
                                        readonly condition: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 649;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly baseExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 638;
                                                            readonly name: "_deployments";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 68;
                                                            readonly src: "13353:12:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                            };
                                                        };
                                                        readonly id: 641;
                                                        readonly indexExpression: {
                                                            readonly expression: {
                                                                readonly id: 639;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13366:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 640;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13370:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13366:10:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            };
                                                        };
                                                        readonly isConstant: false;
                                                        readonly isLValue: true;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "IndexAccess";
                                                        readonly src: "13353:24:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                        };
                                                    };
                                                    readonly id: 643;
                                                    readonly indexExpression: {
                                                        readonly id: 642;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 310;
                                                        readonly src: "13378:13:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    };
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "IndexAccess";
                                                    readonly src: "13353:39:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                    };
                                                };
                                                readonly id: 644;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13393:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 38;
                                                readonly src: "13353:47:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "!=";
                                            readonly rightExpression: {
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "30";
                                                    readonly id: 647;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "13412:1:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    };
                                                    readonly value: "0";
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_rational_0_by_1";
                                                        readonly typeString: "int_const 0";
                                                    }];
                                                    readonly id: 646;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "13404:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 645;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "13404:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 648;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13404:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13353:61:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly id: 656;
                                        readonly nodeType: "IfStatement";
                                        readonly src: "13349:161:0";
                                        readonly trueBody: {
                                            readonly id: 655;
                                            readonly nodeType: "Block";
                                            readonly src: "13416:94:0";
                                            readonly statements: readonly [{
                                                readonly errorCall: {
                                                    readonly arguments: readonly [];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [];
                                                        readonly expression: {
                                                            readonly id: 650;
                                                            readonly name: "IHyperdriveDeployerCoordinator";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 10834;
                                                            readonly src: "13441:30:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                            };
                                                        };
                                                        readonly id: 652;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13472:21:0";
                                                        readonly memberName: "TargetAlreadyDeployed";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 10781;
                                                        readonly src: "13441:52:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                            readonly typeString: "function () pure";
                                                        };
                                                    };
                                                    readonly id: 653;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13441:54:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_tuple$__$";
                                                        readonly typeString: "tuple()";
                                                    };
                                                };
                                                readonly id: 654;
                                                readonly nodeType: "RevertStatement";
                                                readonly src: "13434:61:0";
                                            }];
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 674;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 657;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 322;
                                                readonly src: "13523:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly id: 662;
                                                    readonly name: "config";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 514;
                                                    readonly src: "13599:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                    };
                                                }, {
                                                    readonly id: 663;
                                                    readonly name: "_extraData";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 315;
                                                    readonly src: "13623:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly expression: {
                                                                readonly id: 667;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13672:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 668;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13676:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13672:10:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            };
                                                        }, {
                                                            readonly id: 669;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 310;
                                                            readonly src: "13684:13:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            };
                                                        }, {
                                                            readonly id: 670;
                                                            readonly name: "_salt";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 319;
                                                            readonly src: "13699:5:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            }, {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            }, {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            }];
                                                            readonly expression: {
                                                                readonly id: 665;
                                                                readonly name: "abi";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -1;
                                                                readonly src: "13661:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_abi";
                                                                    readonly typeString: "abi";
                                                                };
                                                            };
                                                            readonly id: 666;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13665:6:0";
                                                            readonly memberName: "encode";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13661:10:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                readonly typeString: "function () pure returns (bytes memory)";
                                                            };
                                                        };
                                                        readonly id: 671;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13661:44:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        }];
                                                        readonly id: 664;
                                                        readonly name: "keccak256";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -8;
                                                        readonly src: "13651:9:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                        };
                                                    };
                                                    readonly id: 672;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13651:55:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }];
                                                    readonly expression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 659;
                                                            readonly name: "target3Deployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 57;
                                                            readonly src: "13558:15:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            }];
                                                            readonly id: 658;
                                                            readonly name: "IHyperdriveTargetDeployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 11386;
                                                            readonly src: "13532:25:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11386_$";
                                                                readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                            };
                                                        };
                                                        readonly id: 660;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13532:42:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11386";
                                                            readonly typeString: "contract IHyperdriveTargetDeployer";
                                                        };
                                                    };
                                                    readonly id: 661;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13575:6:0";
                                                    readonly memberName: "deploy";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 11385;
                                                    readonly src: "13532:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                        readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                    };
                                                };
                                                readonly id: 673;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13532:188:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13523:197:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 675;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13523:197:0";
                                    }, {
                                        readonly expression: {
                                            readonly id: 684;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly expression: {
                                                    readonly baseExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 676;
                                                            readonly name: "_deployments";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 68;
                                                            readonly src: "13734:12:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                            };
                                                        };
                                                        readonly id: 680;
                                                        readonly indexExpression: {
                                                            readonly expression: {
                                                                readonly id: 677;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13747:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 678;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13751:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13747:10:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            };
                                                        };
                                                        readonly isConstant: false;
                                                        readonly isLValue: true;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "IndexAccess";
                                                        readonly src: "13734:24:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                        };
                                                    };
                                                    readonly id: 681;
                                                    readonly indexExpression: {
                                                        readonly id: 679;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 310;
                                                        readonly src: "13759:13:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    };
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "IndexAccess";
                                                    readonly src: "13734:39:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                    };
                                                };
                                                readonly id: 682;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly memberLocation: "13774:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 38;
                                                readonly src: "13734:47:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 683;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 322;
                                                readonly src: "13784:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13734:56:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 685;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13734:56:0";
                                    }];
                                };
                            };
                            readonly id: 747;
                            readonly nodeType: "IfStatement";
                            readonly src: "12817:1568:0";
                            readonly trueBody: {
                                readonly id: 634;
                                readonly nodeType: "Block";
                                readonly src: "12840:466:0";
                                readonly statements: readonly [{
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 597;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly baseExpression: {
                                                        readonly id: 586;
                                                        readonly name: "_deployments";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 68;
                                                        readonly src: "12858:12:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                        };
                                                    };
                                                    readonly id: 589;
                                                    readonly indexExpression: {
                                                        readonly expression: {
                                                            readonly id: 587;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "12871:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 588;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "12875:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "12871:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        };
                                                    };
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "IndexAccess";
                                                    readonly src: "12858:24:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                    };
                                                };
                                                readonly id: 591;
                                                readonly indexExpression: {
                                                    readonly id: 590;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "12883:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "12858:39:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                };
                                            };
                                            readonly id: 592;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12898:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "12858:47:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "!=";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 595;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "12917:1:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 594;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "12909:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 593;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "12909:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 596;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12909:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12858:61:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 604;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "12854:161:0";
                                    readonly trueBody: {
                                        readonly id: 603;
                                        readonly nodeType: "Block";
                                        readonly src: "12921:94:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 598;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 10834;
                                                        readonly src: "12946:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 600;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12977:21:0";
                                                    readonly memberName: "TargetAlreadyDeployed";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 10781;
                                                    readonly src: "12946:52:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 601;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12946:54:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 602;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "12939:61:0";
                                        }];
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 622;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 605;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 322;
                                            readonly src: "13028:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 610;
                                                readonly name: "config";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 514;
                                                readonly src: "13104:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                };
                                            }, {
                                                readonly id: 611;
                                                readonly name: "_extraData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 315;
                                                readonly src: "13128:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly expression: {
                                                            readonly id: 615;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "13177:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 616;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13181:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "13177:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        };
                                                    }, {
                                                        readonly id: 617;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 310;
                                                        readonly src: "13189:13:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }, {
                                                        readonly id: 618;
                                                        readonly name: "_salt";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 319;
                                                        readonly src: "13204:5:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        }, {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        }, {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        }];
                                                        readonly expression: {
                                                            readonly id: 613;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "13166:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 614;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13170:6:0";
                                                        readonly memberName: "encode";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "13166:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 619;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13166:44:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    }];
                                                    readonly id: 612;
                                                    readonly name: "keccak256";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -8;
                                                    readonly src: "13156:9:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                    };
                                                };
                                                readonly id: 620;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13156:55:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                }, {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                }, {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 607;
                                                        readonly name: "target2Deployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 54;
                                                        readonly src: "13063:15:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        }];
                                                        readonly id: 606;
                                                        readonly name: "IHyperdriveTargetDeployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 11386;
                                                        readonly src: "13037:25:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11386_$";
                                                            readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                        };
                                                    };
                                                    readonly id: 608;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13037:42:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11386";
                                                        readonly typeString: "contract IHyperdriveTargetDeployer";
                                                    };
                                                };
                                                readonly id: 609;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13080:6:0";
                                                readonly memberName: "deploy";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 11385;
                                                readonly src: "13037:49:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                };
                                            };
                                            readonly id: 621;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13037:188:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "13028:197:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 623;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13028:197:0";
                                }, {
                                    readonly expression: {
                                        readonly id: 632;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly baseExpression: {
                                                        readonly id: 624;
                                                        readonly name: "_deployments";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 68;
                                                        readonly src: "13239:12:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                        };
                                                    };
                                                    readonly id: 628;
                                                    readonly indexExpression: {
                                                        readonly expression: {
                                                            readonly id: 625;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "13252:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 626;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13256:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "13252:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        };
                                                    };
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "IndexAccess";
                                                    readonly src: "13239:24:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                    };
                                                };
                                                readonly id: 629;
                                                readonly indexExpression: {
                                                    readonly id: 627;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "13264:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "13239:39:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                };
                                            };
                                            readonly id: 630;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly memberLocation: "13279:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "13239:47:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly id: 631;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 322;
                                            readonly src: "13289:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "13239:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 633;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13239:56:0";
                                }];
                            };
                        };
                        readonly id: 748;
                        readonly nodeType: "IfStatement";
                        readonly src: "12322:2063:0";
                        readonly trueBody: {
                            readonly id: 582;
                            readonly nodeType: "Block";
                            readonly src: "12345:466:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 545;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 534;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "12363:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 537;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 535;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12376:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 536;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12380:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12376:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "12363:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 539;
                                            readonly indexExpression: {
                                                readonly id: 538;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "12388:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "12363:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 540;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12403:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 32;
                                        readonly src: "12363:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "!=";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30";
                                            readonly id: 543;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "12422:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            }];
                                            readonly id: 542;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "12414:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 541;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "12414:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 544;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12414:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12363:61:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 552;
                                readonly nodeType: "IfStatement";
                                readonly src: "12359:161:0";
                                readonly trueBody: {
                                    readonly id: 551;
                                    readonly nodeType: "Block";
                                    readonly src: "12426:94:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 546;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10834;
                                                    readonly src: "12451:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 548;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12482:21:0";
                                                readonly memberName: "TargetAlreadyDeployed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10781;
                                                readonly src: "12451:52:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 549;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12451:54:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 550;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "12444:61:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 570;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 553;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "12533:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 558;
                                            readonly name: "config";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 514;
                                            readonly src: "12609:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 559;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 315;
                                            readonly src: "12633:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 563;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12682:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 564;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12686:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12682:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }, {
                                                    readonly id: 565;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "12694:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }, {
                                                    readonly id: 566;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 319;
                                                    readonly src: "12709:5:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 561;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "12671:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 562;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12675:6:0";
                                                    readonly memberName: "encode";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12671:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 567;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12671:44:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                }];
                                                readonly id: 560;
                                                readonly name: "keccak256";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -8;
                                                readonly src: "12661:9:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                };
                                            };
                                            readonly id: 568;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12661:55:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            }, {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }, {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 555;
                                                    readonly name: "target1Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 51;
                                                    readonly src: "12568:15:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    }];
                                                    readonly id: 554;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11386;
                                                    readonly src: "12542:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11386_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 556;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12542:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11386";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 557;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12585:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 11385;
                                            readonly src: "12542:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                            };
                                        };
                                        readonly id: 569;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12542:188:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12533:197:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 571;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12533:197:0";
                            }, {
                                readonly expression: {
                                    readonly id: 580;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 572;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "12744:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 576;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 573;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12757:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 574;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12761:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12757:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "12744:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 577;
                                            readonly indexExpression: {
                                                readonly id: 575;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "12769:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "12744:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 578;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "12784:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 32;
                                        readonly src: "12744:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 579;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "12794:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12744:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 581;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12744:56:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 749;
                            readonly name: "target";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 322;
                            readonly src: "14402:6:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 323;
                        readonly id: 750;
                        readonly nodeType: "Return";
                        readonly src: "14395:13:0";
                    }];
                };
                readonly baseFunctions: readonly [10816];
                readonly documentation: {
                    readonly id: 308;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7451:622:0";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "0b3c4f86";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployTarget";
                readonly nameLocation: "8087:12:0";
                readonly parameters: {
                    readonly id: 320;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 310;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "8117:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 752;
                        readonly src: "8109:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 309;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8109:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 313;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "8176:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 752;
                        readonly src: "8140:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 312;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 311;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["8140:11:0", "8152:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "8140:28:0";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "8140:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 315;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "8212:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 752;
                        readonly src: "8199:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 314;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8199:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 317;
                        readonly mutability: "mutable";
                        readonly name: "_targetIndex";
                        readonly nameLocation: "8240:12:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 752;
                        readonly src: "8232:20:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 316;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8232:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 319;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "8270:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 752;
                        readonly src: "8262:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 318;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8262:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8099:182:0";
                };
                readonly returnParameters: {
                    readonly id: 323;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 322;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "8308:6:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 752;
                        readonly src: "8300:14:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 321;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8300:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8299:16:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 858;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15126:1363:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 857;
                    readonly nodeType: "Block";
                    readonly src: "15346:1143:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 769;
                                readonly name: "_checkMessageValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 896;
                                readonly src: "15406:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$__$";
                                    readonly typeString: "function () view";
                                };
                            };
                            readonly id: 770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15406:20:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 771;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15406:20:0";
                    }, {
                        readonly assignments: readonly [774];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 774;
                            readonly mutability: "mutable";
                            readonly name: "hyperdrive";
                            readonly nameLocation: "15510:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 857;
                            readonly src: "15498:22:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                readonly typeString: "contract IHyperdrive";
                            };
                            readonly typeName: {
                                readonly id: 773;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 772;
                                    readonly name: "IHyperdrive";
                                    readonly nameLocations: readonly ["15498:11:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10506;
                                    readonly src: "15498:11:0";
                                };
                                readonly referencedDeclaration: 10506;
                                readonly src: "15498:11:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                    readonly typeString: "contract IHyperdrive";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 784;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 776;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68;
                                            readonly src: "15548:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 779;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 777;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "15561:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 778;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15565:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "15561:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "15548:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 781;
                                    readonly indexExpression: {
                                        readonly id: 780;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 755;
                                        readonly src: "15573:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "15548:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 782;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "15588:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26;
                                readonly src: "15548:50:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 775;
                                readonly name: "IHyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 10506;
                                readonly src: "15523:11:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                    readonly typeString: "type(contract IHyperdrive)";
                                };
                            };
                            readonly id: 783;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15523:85:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                readonly typeString: "contract IHyperdrive";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15498:110:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 793;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 787;
                                    readonly name: "hyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 774;
                                    readonly src: "15630:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                        readonly typeString: "contract IHyperdrive";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                        readonly typeString: "contract IHyperdrive";
                                    }];
                                    readonly id: 786;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "15622:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 785;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "15622:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 788;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15622:19:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly hexValue: "30";
                                    readonly id: 791;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "15653:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    }];
                                    readonly id: 790;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "15645:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 789;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "15645:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 792;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15645:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "15622:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 800;
                        readonly nodeType: "IfStatement";
                        readonly src: "15618:127:0";
                        readonly trueBody: {
                            readonly id: 799;
                            readonly nodeType: "Block";
                            readonly src: "15657:88:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 794;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "15678:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 796;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15709:23:0";
                                        readonly memberName: "HyperdriveIsNotDeployed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10742;
                                        readonly src: "15678:54:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 797;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15678:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 798;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15671:63:0";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [802];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 802;
                            readonly mutability: "mutable";
                            readonly name: "value";
                            readonly nameLocation: "15833:5:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 857;
                            readonly src: "15825:13:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 801;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "15825:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 809;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 804;
                                readonly name: "hyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 774;
                                readonly src: "15873:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                    readonly typeString: "contract IHyperdrive";
                                };
                            }, {
                                readonly id: 805;
                                readonly name: "_lp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 757;
                                readonly src: "15897:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 806;
                                readonly name: "_contribution";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 759;
                                readonly src: "15914:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 807;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 764;
                                readonly src: "15941:8:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Options memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                    readonly typeString: "contract IHyperdrive";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Options memory";
                                }];
                                readonly id: 803;
                                readonly name: "_prepareInitialize";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 892;
                                readonly src: "15841:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IHyperdrive_$10506_$_t_address_$_t_uint256_$_t_struct$_Options_$10356_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (contract IHyperdrive,address,uint256,struct IHyperdrive.Options memory) returns (uint256)";
                                };
                            };
                            readonly id: 808;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15841:118:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15825:134:0";
                    }, {
                        readonly expression: {
                            readonly id: 819;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 810;
                                readonly name: "lpShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 767;
                                readonly src: "16008:8:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 815;
                                    readonly name: "_contribution";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 759;
                                    readonly src: "16070:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 816;
                                    readonly name: "_apr";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 761;
                                    readonly src: "16097:4:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 817;
                                    readonly name: "_options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 764;
                                    readonly src: "16115:8:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Options memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Options memory";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Options memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 811;
                                            readonly name: "hyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 774;
                                            readonly src: "16019:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                                readonly typeString: "contract IHyperdrive";
                                            };
                                        };
                                        readonly id: 812;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "16030:10:0";
                                        readonly memberName: "initialize";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10593;
                                        readonly src: "16019:21:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10356_memory_ptr_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)";
                                        };
                                    };
                                    readonly id: 814;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly names: readonly ["value"];
                                    readonly nodeType: "FunctionCallOptions";
                                    readonly options: readonly [{
                                        readonly id: 813;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 802;
                                        readonly src: "16049:5:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly src: "16019:37:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10356_memory_ptr_$returns$_t_uint256_$value";
                                        readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)";
                                    };
                                };
                                readonly id: 818;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16019:114:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16008:125:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 820;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16008:125:0";
                    }, {
                        readonly assignments: readonly [822];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 822;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "16202:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 857;
                            readonly src: "16194:14:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 821;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "16194:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 827;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 826;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 823;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "16211:3:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 824;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16215:5:0";
                                readonly memberName: "value";
                                readonly nodeType: "MemberAccess";
                                readonly src: "16211:9:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly id: 825;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 802;
                                readonly src: "16223:5:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16211:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "16194:34:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 830;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 828;
                                readonly name: "refund";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 822;
                                readonly src: "16242:6:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 829;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "16251:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "16242:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 854;
                        readonly nodeType: "IfStatement";
                        readonly src: "16238:219:0";
                        readonly trueBody: {
                            readonly id: 853;
                            readonly nodeType: "Block";
                            readonly src: "16254:203:0";
                            readonly statements: readonly [{
                                readonly assignments: readonly [832, null];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 832;
                                    readonly mutability: "mutable";
                                    readonly name: "success";
                                    readonly nameLocation: "16274:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 853;
                                    readonly src: "16269:12:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly typeName: {
                                        readonly id: 831;
                                        readonly name: "bool";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "16269:4:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }, null];
                                readonly id: 843;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly hexValue: "";
                                        readonly id: 841;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "16329:2:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                            readonly typeString: "literal_string \"\"";
                                        };
                                        readonly value: "";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                            readonly typeString: "literal_string \"\"";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 835;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "16295:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 836;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "16299:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "16295:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    }];
                                                    readonly id: 834;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "16287:8:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                        readonly typeString: "type(address payable)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 833;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "16287:8:0";
                                                        readonly stateMutability: "payable";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 837;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "16287:19:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address_payable";
                                                    readonly typeString: "address payable";
                                                };
                                            };
                                            readonly id: 838;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "16307:4:0";
                                            readonly memberName: "call";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "16287:24:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 840;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly names: readonly ["value"];
                                        readonly nodeType: "FunctionCallOptions";
                                        readonly options: readonly [{
                                            readonly id: 839;
                                            readonly name: "refund";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 822;
                                            readonly src: "16320:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly src: "16287:41:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                            readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                        };
                                    };
                                    readonly id: 842;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "16287:45:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "tuple(bool,bytes memory)";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "16268:64:0";
                            }, {
                                readonly condition: {
                                    readonly id: 845;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "!";
                                    readonly prefix: true;
                                    readonly src: "16350:8:0";
                                    readonly subExpression: {
                                        readonly id: 844;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 832;
                                        readonly src: "16351:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 852;
                                readonly nodeType: "IfStatement";
                                readonly src: "16346:101:0";
                                readonly trueBody: {
                                    readonly id: 851;
                                    readonly nodeType: "Block";
                                    readonly src: "16360:87:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 846;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10834;
                                                    readonly src: "16385:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 848;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "16416:14:0";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10784;
                                                readonly src: "16385:45:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 849;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "16385:47:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 850;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "16378:54:0";
                                    }];
                                };
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 855;
                            readonly name: "lpShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 767;
                            readonly src: "16474:8:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 768;
                        readonly id: 856;
                        readonly nodeType: "Return";
                        readonly src: "16467:15:0";
                    }];
                };
                readonly baseFunctions: readonly [10833];
                readonly documentation: {
                    readonly id: 753;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14421:700:0";
                    readonly text: "@notice Initializes a pool that was deployed by this coordinator.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created.";
                };
                readonly functionSelector: "16abfc70";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initialize";
                readonly nameLocation: "15135:10:0";
                readonly parameters: {
                    readonly id: 765;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 755;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "15163:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 858;
                        readonly src: "15155:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 754;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15155:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 757;
                        readonly mutability: "mutable";
                        readonly name: "_lp";
                        readonly nameLocation: "15194:3:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 858;
                        readonly src: "15186:11:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 756;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15186:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 759;
                        readonly mutability: "mutable";
                        readonly name: "_contribution";
                        readonly nameLocation: "15215:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 858;
                        readonly src: "15207:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 758;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15207:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 761;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "15246:4:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 858;
                        readonly src: "15238:12:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 760;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15238:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 764;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "15287:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 858;
                        readonly src: "15260:35:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 763;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 762;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["15260:11:0", "15272:7:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10356;
                                readonly src: "15260:19:0";
                            };
                            readonly referencedDeclaration: 10356;
                            readonly src: "15260:19:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10356_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15145:156:0";
                };
                readonly returnParameters: {
                    readonly id: 768;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 767;
                        readonly mutability: "mutable";
                        readonly name: "lpShares";
                        readonly nameLocation: "15336:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 858;
                        readonly src: "15328:16:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 766;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15328:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15327:18:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 876;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16695:189:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 875;
                    readonly nodeType: "Block";
                    readonly src: "16822:62:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly baseExpression: {
                                    readonly id: 869;
                                    readonly name: "_deployments";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 68;
                                    readonly src: "16839:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                    };
                                };
                                readonly id: 871;
                                readonly indexExpression: {
                                    readonly id: 870;
                                    readonly name: "_deployer";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 861;
                                    readonly src: "16852:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "16839:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 873;
                            readonly indexExpression: {
                                readonly id: 872;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 863;
                                readonly src: "16863:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "16839:38:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly functionReturnParameters: 868;
                        readonly id: 874;
                        readonly nodeType: "Return";
                        readonly src: "16832:45:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 859;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16495:195:0";
                    readonly text: "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment.";
                };
                readonly functionSelector: "20503b3f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployments";
                readonly nameLocation: "16704:11:0";
                readonly parameters: {
                    readonly id: 864;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 861;
                        readonly mutability: "mutable";
                        readonly name: "_deployer";
                        readonly nameLocation: "16733:9:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 876;
                        readonly src: "16725:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 860;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16725:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 863;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "16760:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 876;
                        readonly src: "16752:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 862;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16752:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16715:64:0";
                };
                readonly returnParameters: {
                    readonly id: 868;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 867;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 876;
                        readonly src: "16803:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                        };
                        readonly typeName: {
                            readonly id: 866;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 865;
                                readonly name: "Deployment";
                                readonly nameLocations: readonly ["16803:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 42;
                                readonly src: "16803:10:0";
                            };
                            readonly referencedDeclaration: 42;
                            readonly src: "16803:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16802:19:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 892;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17536:205:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 877;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16890:641:0";
                    readonly text: "@dev Prepares the coordinator for initialization by drawing funds from\n      the LP, if necessary.\n @param _hyperdrive The Hyperdrive instance that is being initialized.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the initialization is\n        settled.\n @return value The value that should be sent in the initialize\n         transaction.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_prepareInitialize";
                readonly nameLocation: "17545:18:0";
                readonly parameters: {
                    readonly id: 888;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 880;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdrive";
                        readonly nameLocation: "17585:11:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 892;
                        readonly src: "17573:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                            readonly typeString: "contract IHyperdrive";
                        };
                        readonly typeName: {
                            readonly id: 879;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 878;
                                readonly name: "IHyperdrive";
                                readonly nameLocations: readonly ["17573:11:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10506;
                                readonly src: "17573:11:0";
                            };
                            readonly referencedDeclaration: 10506;
                            readonly src: "17573:11:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10506";
                                readonly typeString: "contract IHyperdrive";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 882;
                        readonly mutability: "mutable";
                        readonly name: "_lp";
                        readonly nameLocation: "17614:3:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 892;
                        readonly src: "17606:11:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 881;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17606:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 884;
                        readonly mutability: "mutable";
                        readonly name: "_contribution";
                        readonly nameLocation: "17635:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 892;
                        readonly src: "17627:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17627:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 887;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "17685:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 892;
                        readonly src: "17658:35:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 886;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 885;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["17658:11:0", "17670:7:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10356;
                                readonly src: "17658:19:0";
                            };
                            readonly referencedDeclaration: 10356;
                            readonly src: "17658:19:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10356_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17563:136:0";
                };
                readonly returnParameters: {
                    readonly id: 891;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 890;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "17734:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 892;
                        readonly src: "17726:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 889;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17726:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17725:15:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 896;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17896:52:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 893;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17747:144:0";
                    readonly text: "@dev A yield source dependent check that prevents ether from being\n      transferred to Hyperdrive instances that don't accept ether.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "17905:18:0";
                readonly parameters: {
                    readonly id: 894;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "17923:2:0";
                };
                readonly returnParameters: {
                    readonly id: 895;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "17947:0:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 976;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18103:1191:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 975;
                    readonly nodeType: "Block";
                    readonly src: "18216:1078:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 906;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 903;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 900;
                                    readonly src: "18367:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 904;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18381:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10228;
                                readonly src: "18367:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "316533";
                                readonly id: 905;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "18404:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1000_by_1";
                                    readonly typeString: "int_const 1000";
                                };
                                readonly value: "1e3";
                            };
                            readonly src: "18367:40:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 913;
                        readonly nodeType: "IfStatement";
                        readonly src: "18363:138:0";
                        readonly trueBody: {
                            readonly id: 912;
                            readonly nodeType: "Block";
                            readonly src: "18409:92:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 907;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "18430:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 909;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18461:27:0";
                                        readonly memberName: "InvalidMinimumShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10760;
                                        readonly src: "18430:58:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 910;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18430:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 911;
                                readonly nodeType: "RevertStatement";
                                readonly src: "18423:67:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 917;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 914;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 900;
                                    readonly src: "18515:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 915;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18529:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10237;
                                readonly src: "18515:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 916;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "18551:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "18515:37:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 924;
                        readonly nodeType: "IfStatement";
                        readonly src: "18511:133:0";
                        readonly trueBody: {
                            readonly id: 923;
                            readonly nodeType: "Block";
                            readonly src: "18554:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 918;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "18575:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 920;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18606:25:0";
                                        readonly memberName: "InvalidCheckpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10754;
                                        readonly src: "18575:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 921;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18575:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 922;
                                readonly nodeType: "RevertStatement";
                                readonly src: "18568:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 929;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 925;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 900;
                                        readonly src: "18670:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 926;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18684:16:0";
                                    readonly memberName: "positionDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10234;
                                    readonly src: "18670:30:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 927;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 900;
                                        readonly src: "18703:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 928;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18717:18:0";
                                    readonly memberName: "checkpointDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10237;
                                    readonly src: "18703:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "18670:65:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 936;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 934;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 930;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 900;
                                            readonly src: "18751:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 931;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18765:16:0";
                                        readonly memberName: "positionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10234;
                                        readonly src: "18751:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "%";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly id: 932;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 900;
                                            readonly src: "18784:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 933;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18798:18:0";
                                        readonly memberName: "checkpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10237;
                                        readonly src: "18784:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18751:65:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 935;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "18832:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "18751:82:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "18670:163:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 944;
                        readonly nodeType: "IfStatement";
                        readonly src: "18653:279:0";
                        readonly trueBody: {
                            readonly id: 943;
                            readonly nodeType: "Block";
                            readonly src: "18844:88:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 938;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "18865:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 940;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18896:23:0";
                                        readonly memberName: "InvalidPositionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10766;
                                        readonly src: "18865:54:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 941;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18865:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 942;
                                readonly nodeType: "RevertStatement";
                                readonly src: "18858:63:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 967;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 961;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 955;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 949;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 945;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 900;
                                                    readonly src: "19010:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 946;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19024:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10253;
                                                readonly src: "19010:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 947;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "19029:5:0";
                                            readonly memberName: "curve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10201;
                                            readonly src: "19010:24:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 948;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18202;
                                            readonly src: "19037:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "19010:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "||";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 954;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 950;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 900;
                                                    readonly src: "19056:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 951;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19070:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10253;
                                                readonly src: "19056:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 952;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "19075:4:0";
                                            readonly memberName: "flat";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10204;
                                            readonly src: "19056:23:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 953;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18202;
                                            readonly src: "19082:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "19056:29:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "19010:75:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "||";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 960;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 956;
                                                readonly name: "_deployConfig";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 900;
                                                readonly src: "19101:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                };
                                            };
                                            readonly id: 957;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "19115:4:0";
                                            readonly memberName: "fees";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10253;
                                            readonly src: "19101:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        };
                                        readonly id: 958;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19120:12:0";
                                        readonly memberName: "governanceLP";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10207;
                                        readonly src: "19101:31:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 959;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18202;
                                        readonly src: "19135:3:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "19101:37:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "19010:128:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 966;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly id: 962;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 900;
                                            readonly src: "19154:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 963;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19168:4:0";
                                        readonly memberName: "fees";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10253;
                                        readonly src: "19154:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        };
                                    };
                                    readonly id: 964;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "19173:16:0";
                                    readonly memberName: "governanceZombie";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10210;
                                    readonly src: "19154:35:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 965;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18202;
                                    readonly src: "19192:3:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "19154:41:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "19010:185:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 974;
                        readonly nodeType: "IfStatement";
                        readonly src: "18993:295:0";
                        readonly trueBody: {
                            readonly id: 973;
                            readonly nodeType: "Block";
                            readonly src: "19206:82:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 968;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10834;
                                            readonly src: "19227:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10834_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 970;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19258:17:0";
                                        readonly memberName: "InvalidFeeAmounts";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10757;
                                        readonly src: "19227:48:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 971;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "19227:50:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 972;
                                readonly nodeType: "RevertStatement";
                                readonly src: "19220:57:0";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 897;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17954:144:0";
                    readonly text: "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkPoolConfig";
                readonly nameLocation: "18112:16:0";
                readonly parameters: {
                    readonly id: 901;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 900;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "18174:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 976;
                        readonly src: "18138:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 899;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 898;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["18138:11:0", "18150:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "18138:28:0";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "18138:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18128:65:0";
                };
                readonly returnParameters: {
                    readonly id: 902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "18216:0:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 987;
                readonly nodeType: "FunctionDefinition";
                readonly src: "19614:174:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 977;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "19300:309:0";
                    readonly text: "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _deployConfig The deploy config that will be used to deploy the\n        pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getInitialVaultSharePrice";
                readonly nameLocation: "19623:26:0";
                readonly parameters: {
                    readonly id: 983;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 980;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "19695:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 987;
                        readonly src: "19659:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 979;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 978;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["19659:11:0", "19671:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "19659:28:0";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "19659:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 982;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "19731:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 987;
                        readonly src: "19718:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 981;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19718:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19649:98:0";
                };
                readonly returnParameters: {
                    readonly id: 986;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 985;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 987;
                        readonly src: "19779:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 984;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19779:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19778:9:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 1089;
                readonly nodeType: "FunctionDefinition";
                readonly src: "20004:1056:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 1088;
                    readonly nodeType: "Block";
                    readonly src: "20156:904:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 1002;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 997;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20233:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 999;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20241:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10258;
                                readonly src: "20233:17:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1000;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20253:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1001;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20267:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10215;
                                readonly src: "20253:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "20233:43:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 1003;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20233:43:0";
                    }, {
                        readonly expression: {
                            readonly id: 1009;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1004;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20286:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1006;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20294:16:0";
                                readonly memberName: "vaultSharesToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10262;
                                readonly src: "20286:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1007;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20313:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1008;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20327:16:0";
                                readonly memberName: "vaultSharesToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10219;
                                readonly src: "20313:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "20286:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 1010;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20286:57:0";
                    }, {
                        readonly expression: {
                            readonly id: 1016;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1011;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20353:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1013;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20361:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10265;
                                readonly src: "20353:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1014;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20377:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1015;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20391:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10222;
                                readonly src: "20377:27:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20353:51:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1017;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20353:51:0";
                    }, {
                        readonly expression: {
                            readonly id: 1023;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1018;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20414:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1020;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20422:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10268;
                                readonly src: "20414:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1021;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20439:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1022;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20453:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10225;
                                readonly src: "20439:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "20414:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 1024;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20414:53:0";
                    }, {
                        readonly expression: {
                            readonly id: 1030;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1025;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20477:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1027;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20485:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10274;
                                readonly src: "20477:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1028;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20508:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1029;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20522:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10228;
                                readonly src: "20508:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20477:65:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1031;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20477:65:0";
                    }, {
                        readonly expression: {
                            readonly id: 1037;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1032;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20552:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1034;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20560:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10277;
                                readonly src: "20552:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1035;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20587:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1036;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20614:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10231;
                                readonly src: "20587:51:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20552:86:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1038;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20552:86:0";
                    }, {
                        readonly expression: {
                            readonly id: 1044;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1039;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20648:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1041;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20656:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10280;
                                readonly src: "20648:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1042;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20675:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1043;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20689:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10234;
                                readonly src: "20675:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20648:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1045;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20648:57:0";
                    }, {
                        readonly expression: {
                            readonly id: 1051;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1046;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20715:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1048;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20723:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10283;
                                readonly src: "20715:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1049;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20744:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1050;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20758:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10237;
                                readonly src: "20744:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20715:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1052;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20715:61:0";
                    }, {
                        readonly expression: {
                            readonly id: 1058;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1053;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20786:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1055;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20794:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10286;
                                readonly src: "20786:19:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1056;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20808:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1057;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20822:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10240;
                                readonly src: "20808:25:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20786:47:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1059;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20786:47:0";
                    }, {
                        readonly expression: {
                            readonly id: 1065;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1060;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20843:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1062;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20851:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10289;
                                readonly src: "20843:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1063;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20864:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1064;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20878:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10243;
                                readonly src: "20864:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20843:45:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1066;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20843:45:0";
                    }, {
                        readonly expression: {
                            readonly id: 1072;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1067;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20898:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1069;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20906:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10292;
                                readonly src: "20898:20:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1070;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20921:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1071;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20935:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10246;
                                readonly src: "20921:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20898:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1073;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20898:49:0";
                    }, {
                        readonly expression: {
                            readonly id: 1079;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1074;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "20957:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1076;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20965:14:0";
                                readonly memberName: "sweepCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10295;
                                readonly src: "20957:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1077;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "20982:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1078;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20996:14:0";
                                readonly memberName: "sweepCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10249;
                                readonly src: "20982:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20957:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1080;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20957:53:0";
                    }, {
                        readonly expression: {
                            readonly id: 1086;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1081;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 995;
                                    readonly src: "21020:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1083;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "21028:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10299;
                                readonly src: "21020:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1084;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 991;
                                    readonly src: "21035:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1085;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "21049:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10253;
                                readonly src: "21035:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly src: "21020:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$10211_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        };
                        readonly id: 1087;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "21020:33:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 988;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "19794:205:0";
                    readonly text: "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_copyPoolConfig";
                readonly nameLocation: "20013:15:0";
                readonly parameters: {
                    readonly id: 992;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 991;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "20074:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 1089;
                        readonly src: "20038:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 990;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 989;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["20038:11:0", "20050:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "20038:28:0";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "20038:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "20028:65:0";
                };
                readonly returnParameters: {
                    readonly id: 996;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 995;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "20147:7:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 1089;
                        readonly src: "20117:37:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 994;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 993;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["20117:11:0", "20129:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "20117:22:0";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "20117:22:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "20116:39:0";
                };
                readonly scope: 1090;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 13;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nameLocations: readonly ["1001:30:0"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 10834;
                    readonly src: "1001:30:0";
                };
                readonly id: 14;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1001:30:0";
            }];
            readonly canonicalName: "HyperdriveDeployerCoordinator";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 12;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "454:492:0";
                readonly text: "@author DELV\n @title HyperdriveDeployerCoordinator\n @notice This Hyperdrive deployer coordinates the process of deploying the\n         Hyperdrive system utilizing several child deployers.\n @dev We use multiple deployers to avoid the maximum code size.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [1090, 10834];
            readonly name: "HyperdriveDeployerCoordinator";
            readonly nameLocation: "964:29:0";
            readonly scope: 1091;
            readonly usedErrors: readonly [10730, 10733, 10736, 10739, 10742, 10745, 10748, 10751, 10754, 10757, 10760, 10763, 10766, 10769, 10772, 10775, 10778, 10781, 10784];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 0;
};
//# sourceMappingURL=HyperdriveDeployerCoordinator.d.ts.map