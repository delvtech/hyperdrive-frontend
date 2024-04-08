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
        readonly name: "SenderIsNotFactory";
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
        readonly inputs: readonly [];
        readonly name: "factory";
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
        readonly "deployments(bytes32)": "37404017";
        readonly "factory()": "c45a0155";
        readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70";
        readonly "target0Deployer()": "ab71905f";
        readonly "target1Deployer()": "a085fa30";
        readonly "target2Deployer()": "b6cb1118";
        readonly "target3Deployer()": "aa8cd6c4";
        readonly "target4Deployer()": "966ecd1c";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultSharesToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SenderIsNotFactory\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_factory\":\"The factory that this deployer will be registered with.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"details\":\"This can only be deployed by the associated factory.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"This can only be deployed by the associated factory.As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(bytes32)\":{\"params\":{\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This can only be deployed by the associated factory.This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"InvalidVaultSharesToken()\":[{\"notice\":\"Thrown when the vault shares token isn't valid. Each instance         will have different criteria for what constitutes a valid base         token.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"SenderIsNotFactory()\":[{\"notice\":\"Thrown when the sender of a `deploy`, `deployTarget`, or         `initialize` transaction isn't the associated factory.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(bytes32)\":{\"notice\":\"Gets the deployment specified by the deployment ID.\"},\"factory()\":{\"notice\":\"The factory that this deployer will be registered with.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xa808014ce91bfbe6e112f7ad34c35a0a6b127fc8d9c86f285e0e85db2887d08a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://85951b911bd00eb9ba8595b8aa822ca165b7ea6ba7059461c7e55466cc8996b9\",\"dweb:/ipfs/Qmdh8MTn2oHYgGhmftdg6KDZGpUcuoWM7QWW8e9pSFjNn3\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58\",\"dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]}},\"version\":1}";
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
                readonly name: "SenderIsNotFactory";
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
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "factory";
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
                            readonly _factory: "The factory that this deployer will be registered with.";
                            readonly _target0Deployer: "The target0 deployer.";
                            readonly _target1Deployer: "The target1 deployer.";
                            readonly _target2Deployer: "The target2 deployer.";
                            readonly _target4Deployer: "The target4 deployer.";
                        };
                    };
                    readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        readonly details: "This can only be deployed by the associated factory.";
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
                        readonly details: "This can only be deployed by the associated factory.As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.";
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
                    readonly "deployments(bytes32)": {
                        readonly params: {
                            readonly _deploymentId: "The deployment ID.";
                        };
                        readonly returns: {
                            readonly _0: "The deployment.";
                        };
                    };
                    readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        readonly details: "This can only be deployed by the associated factory.This function utilizes several helper functions that provide      flexibility to implementations.";
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
                    readonly "deployments(bytes32)": {
                        readonly notice: "Gets the deployment specified by the deployment ID.";
                    };
                    readonly "factory()": {
                        readonly notice: "The factory that this deployer will be registered with.";
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
                readonly keccak256: "0xa808014ce91bfbe6e112f7ad34c35a0a6b127fc8d9c86f285e0e85db2887d08a";
                readonly urls: readonly ["bzz-raw://85951b911bd00eb9ba8595b8aa822ca165b7ea6ba7059461c7e55466cc8996b9", "dweb:/ipfs/Qmdh8MTn2oHYgGhmftdg6KDZGpUcuoWM7QWW8e9pSFjNn3"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCoreDeployer.sol": {
                readonly keccak256: "0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761";
                readonly urls: readonly ["bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b", "dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                readonly keccak256: "0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc";
                readonly urls: readonly ["bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58", "dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru"];
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
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/deployers/HyperdriveDeployerCoordinator.sol";
        readonly id: 1040;
        readonly exportedSymbols: {
            readonly HyperdriveDeployerCoordinator: readonly [1039];
            readonly IHyperdrive: readonly [10351];
            readonly IHyperdriveCoreDeployer: readonly [10570];
            readonly IHyperdriveDeployerCoordinator: readonly [10684];
            readonly IHyperdriveTargetDeployer: readonly [11236];
            readonly ONE: readonly [18039];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:21071:0";
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
            readonly scope: 1040;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 2;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
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
            readonly scope: 1040;
            readonly sourceUnit: 10571;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4;
                    readonly name: "IHyperdriveCoreDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10570;
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
            readonly scope: 1040;
            readonly sourceUnit: 10685;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10684;
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
            readonly scope: 1040;
            readonly sourceUnit: 11237;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8;
                    readonly name: "IHyperdriveTargetDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11236;
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
            readonly scope: 1040;
            readonly sourceUnit: 18823;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 10;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18039;
                    readonly src: "407:3:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 1039;
            readonly nodeType: "ContractDefinition";
            readonly src: "946:20163:0";
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
                readonly scope: 1039;
                readonly visibility: "public";
            }, {
                readonly id: 45;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2374:32:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 43;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2302:67:0";
                    readonly text: "@notice The factory that this deployer will be registered with.";
                };
                readonly functionSelector: "c45a0155";
                readonly mutability: "immutable";
                readonly name: "factory";
                readonly nameLocation: "2399:7:0";
                readonly scope: 1039;
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
                    readonly src: "2374:7:0";
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
                readonly src: "2486:37:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 46;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2413:68:0";
                    readonly text: "@notice The contract used to deploy new instances of Hyperdrive.";
                };
                readonly functionSelector: "c83e1f51";
                readonly mutability: "immutable";
                readonly name: "coreDeployer";
                readonly nameLocation: "2511:12:0";
                readonly scope: 1039;
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
                    readonly src: "2486:7:0";
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
                readonly src: "2610:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 49;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2530:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget0.";
                };
                readonly functionSelector: "ab71905f";
                readonly mutability: "immutable";
                readonly name: "target0Deployer";
                readonly nameLocation: "2635:15:0";
                readonly scope: 1039;
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
                    readonly src: "2610:7:0";
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
                readonly src: "2737:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 52;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2657:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget1.";
                };
                readonly functionSelector: "a085fa30";
                readonly mutability: "immutable";
                readonly name: "target1Deployer";
                readonly nameLocation: "2762:15:0";
                readonly scope: 1039;
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
                    readonly src: "2737:7:0";
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
                readonly src: "2864:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 55;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2784:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget2.";
                };
                readonly functionSelector: "b6cb1118";
                readonly mutability: "immutable";
                readonly name: "target2Deployer";
                readonly nameLocation: "2889:15:0";
                readonly scope: 1039;
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
                    readonly src: "2864:7:0";
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
                readonly src: "2991:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 58;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2911:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget3.";
                };
                readonly functionSelector: "aa8cd6c4";
                readonly mutability: "immutable";
                readonly name: "target3Deployer";
                readonly nameLocation: "3016:15:0";
                readonly scope: 1039;
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
                    readonly src: "2991:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 63;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3118:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 61;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3038:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget4.";
                };
                readonly functionSelector: "966ecd1c";
                readonly mutability: "immutable";
                readonly name: "target4Deployer";
                readonly nameLocation: "3143:15:0";
                readonly scope: 1039;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 62;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3118:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 69;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3225:52:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 64;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3165:55:0";
                    readonly text: "@notice A mapping from deployment ID to deployment.";
                };
                readonly mutability: "mutable";
                readonly name: "_deployments";
                readonly nameLocation: "3265:12:0";
                readonly scope: 1039;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)";
                };
                readonly typeName: {
                    readonly id: 68;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 65;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3233:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3225:30:0";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 67;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 66;
                            readonly name: "Deployment";
                            readonly nameLocations: readonly ["3244:10:0"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 42;
                            readonly src: "3244:10:0";
                        };
                        readonly referencedDeclaration: 42;
                        readonly src: "3244:10:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 116;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3683:538:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 115;
                    readonly nodeType: "Block";
                    readonly src: "3928:293:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 89;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 87;
                                readonly name: "factory";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 45;
                                readonly src: "3938:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 88;
                                readonly name: "_factory";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72;
                                readonly src: "3948:8:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3938:18:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 90;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3938:18:0";
                    }, {
                        readonly expression: {
                            readonly id: 93;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 91;
                                readonly name: "coreDeployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 48;
                                readonly src: "3966:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 92;
                                readonly name: "_coreDeployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 74;
                                readonly src: "3981:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3966:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 94;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3966:28:0";
                    }, {
                        readonly expression: {
                            readonly id: 97;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 95;
                                readonly name: "target0Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 51;
                                readonly src: "4004:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 96;
                                readonly name: "_target0Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 76;
                                readonly src: "4022:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4004:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 98;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4004:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 101;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 99;
                                readonly name: "target1Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 54;
                                readonly src: "4048:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 100;
                                readonly name: "_target1Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 78;
                                readonly src: "4066:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4048:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 102;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4048:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 105;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 103;
                                readonly name: "target2Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 57;
                                readonly src: "4092:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 104;
                                readonly name: "_target2Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 80;
                                readonly src: "4110:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4092:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 106;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4092:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 109;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 107;
                                readonly name: "target3Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 60;
                                readonly src: "4136:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 108;
                                readonly name: "_target3Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 82;
                                readonly src: "4154:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4136:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 110;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4136:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 113;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 111;
                                readonly name: "target4Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 63;
                                readonly src: "4180:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 112;
                                readonly name: "_target4Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 84;
                                readonly src: "4198:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4180:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 114;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4180:34:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 70;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3284:394:0";
                    readonly text: "@notice Instantiates the deployer coordinator.\n @param _factory The factory that this deployer will be registered with.\n @param _coreDeployer The core deployer.\n @param _target0Deployer The target0 deployer.\n @param _target1Deployer The target1 deployer.\n @param _target2Deployer The target2 deployer.\n @param _target4Deployer The target4 deployer.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 85;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72;
                        readonly mutability: "mutable";
                        readonly name: "_factory";
                        readonly nameLocation: "3712:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3704:16:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3704:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 74;
                        readonly mutability: "mutable";
                        readonly name: "_coreDeployer";
                        readonly nameLocation: "3738:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3730:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3730:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 76;
                        readonly mutability: "mutable";
                        readonly name: "_target0Deployer";
                        readonly nameLocation: "3769:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3761:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 75;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3761:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 78;
                        readonly mutability: "mutable";
                        readonly name: "_target1Deployer";
                        readonly nameLocation: "3803:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3795:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 77;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3795:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 80;
                        readonly mutability: "mutable";
                        readonly name: "_target2Deployer";
                        readonly nameLocation: "3837:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3829:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 79;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3829:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 82;
                        readonly mutability: "mutable";
                        readonly name: "_target3Deployer";
                        readonly nameLocation: "3871:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3863:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 81;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3863:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 84;
                        readonly mutability: "mutable";
                        readonly name: "_target4Deployer";
                        readonly nameLocation: "3905:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 116;
                        readonly src: "3897:24:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 83;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3897:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3694:233:0";
                };
                readonly returnParameters: {
                    readonly id: 86;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3928:0:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 132;
                readonly nodeType: "ModifierDefinition";
                readonly src: "4322:160:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 131;
                    readonly nodeType: "Block";
                    readonly src: "4345:137:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 122;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 119;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "4359:3:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 120;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4363:6:0";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4359:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 121;
                                readonly name: "factory";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 45;
                                readonly src: "4373:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4359:21:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 129;
                        readonly nodeType: "IfStatement";
                        readonly src: "4355:110:0";
                        readonly trueBody: {
                            readonly id: 128;
                            readonly nodeType: "Block";
                            readonly src: "4382:83:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 123;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "4403:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 125;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4434:18:0";
                                        readonly memberName: "SenderIsNotFactory";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10628;
                                        readonly src: "4403:49:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 126;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4403:51:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 127;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4396:58:0";
                            }];
                        };
                    }, {
                        readonly id: 130;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "4474:1:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 117;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4227:90:0";
                    readonly text: "@dev Ensures that the contract is being called by the associated\n      factory.";
                };
                readonly name: "onlyFactory";
                readonly nameLocation: "4331:11:0";
                readonly parameters: {
                    readonly id: 118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4342:2:0";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 324;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4979:2971:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 323;
                    readonly nodeType: "Block";
                    readonly src: "5186:2764:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [151];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 151;
                            readonly mutability: "mutable";
                            readonly name: "deployment";
                            readonly nameLocation: "5294:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 323;
                            readonly src: "5276:28:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                            readonly typeName: {
                                readonly id: 150;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 149;
                                    readonly name: "Deployment";
                                    readonly nameLocations: readonly ["5276:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 42;
                                    readonly src: "5276:10:0";
                                };
                                readonly referencedDeclaration: 42;
                                readonly src: "5276:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 155;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 152;
                                readonly name: "_deployments";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 69;
                                readonly src: "5307:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 154;
                            readonly indexExpression: {
                                readonly id: 153;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 135;
                                readonly src: "5320:13:0";
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
                            readonly src: "5307:27:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5276:58:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 162;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 156;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "5348:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 157;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5359:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26;
                                readonly src: "5348:21:0";
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
                                    readonly id: 160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5381:1:0";
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
                                    readonly id: 159;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5373:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 158;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5373:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 161;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5373:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "5348:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 169;
                        readonly nodeType: "IfStatement";
                        readonly src: "5344:131:0";
                        readonly trueBody: {
                            readonly id: 168;
                            readonly nodeType: "Block";
                            readonly src: "5385:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 163;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "5406:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 165;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5437:25:0";
                                        readonly memberName: "HyperdriveAlreadyDeployed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10586;
                                        readonly src: "5406:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 166;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5406:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 167;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5399:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 176;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 170;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "5624:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 171;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5635:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17;
                                readonly src: "5624:21:0";
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
                                    readonly id: 174;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5657:1:0";
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
                                    readonly id: 173;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5649:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 172;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5649:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 175;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5649:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5624:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 183;
                        readonly nodeType: "IfStatement";
                        readonly src: "5620:128:0";
                        readonly trueBody: {
                            readonly id: 182;
                            readonly nodeType: "Block";
                            readonly src: "5661:87:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 177;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "5682:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 179;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5713:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10580;
                                        readonly src: "5682:53:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 180;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5682:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 181;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5675:62:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 222;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 214;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 206;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly id: 198;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 190;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 184;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 151;
                                                    readonly src: "5837:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                    };
                                                };
                                                readonly id: 185;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5848:7:0";
                                                readonly memberName: "target0";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 29;
                                                readonly src: "5837:18:0";
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
                                                    readonly id: 188;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5867:1:0";
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
                                                    readonly id: 187;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5859:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 186;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5859:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 189;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5859:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5837:32:0";
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
                                            readonly id: 197;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 191;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 151;
                                                    readonly src: "5885:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                    };
                                                };
                                                readonly id: 192;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5896:7:0";
                                                readonly memberName: "target1";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 32;
                                                readonly src: "5885:18:0";
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
                                                    readonly id: 195;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5915:1:0";
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
                                                    readonly id: 194;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5907:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 193;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5907:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 196;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5907:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5885:32:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5837:80:0";
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
                                        readonly id: 205;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 199;
                                                readonly name: "deployment";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 151;
                                                readonly src: "5933:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                };
                                            };
                                            readonly id: 200;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5944:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "5933:18:0";
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
                                                readonly id: 203;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5963:1:0";
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
                                                readonly id: 202;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5955:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 201;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5955:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 204;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5955:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "5933:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5837:128:0";
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
                                    readonly id: 213;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 207;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 151;
                                            readonly src: "5981:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                            };
                                        };
                                        readonly id: 208;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5992:7:0";
                                        readonly memberName: "target3";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 38;
                                        readonly src: "5981:18:0";
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
                                            readonly id: 211;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6011:1:0";
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
                                            readonly id: 210;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6003:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 209;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6003:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 212;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6003:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "5981:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5837:176:0";
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
                                readonly id: 221;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 215;
                                        readonly name: "deployment";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 151;
                                        readonly src: "6029:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                        };
                                    };
                                    readonly id: 216;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6040:7:0";
                                    readonly memberName: "target4";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 41;
                                    readonly src: "6029:18:0";
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
                                        readonly id: 219;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6059:1:0";
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
                                        readonly id: 218;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "6051:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 217;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "6051:7:0";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 220;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6051:10:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "6029:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5837:224:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 229;
                        readonly nodeType: "IfStatement";
                        readonly src: "5820:337:0";
                        readonly trueBody: {
                            readonly id: 228;
                            readonly nodeType: "Block";
                            readonly src: "6072:85:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 223;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "6093:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 225;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6124:20:0";
                                        readonly memberName: "IncompleteDeployment";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10583;
                                        readonly src: "6093:51:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
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
                                    readonly src: "6093:53:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 227;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6086:60:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 238;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 233;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 138;
                                        readonly src: "6260:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 231;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "6249:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 232;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6253:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "6249:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 234;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6249:25:0";
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
                                    readonly id: 230;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "6239:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 235;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6239:36:0";
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
                                    readonly id: 236;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "6279:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 237;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6290:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17;
                                readonly src: "6279:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "6239:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 245;
                        readonly nodeType: "IfStatement";
                        readonly src: "6235:148:0";
                        readonly trueBody: {
                            readonly id: 244;
                            readonly nodeType: "Block";
                            readonly src: "6302:81:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 239;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "6323:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 241;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6354:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10619;
                                        readonly src: "6323:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 242;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6323:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 243;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6316:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 251;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 247;
                                    readonly name: "_extraData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 140;
                                    readonly src: "6483:10:0";
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
                                    readonly id: 246;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "6473:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
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
                                readonly src: "6473:21:0";
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
                                    readonly id: 249;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "6498:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 250;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6509:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20;
                                readonly src: "6498:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "6473:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 258;
                        readonly nodeType: "IfStatement";
                        readonly src: "6469:139:0";
                        readonly trueBody: {
                            readonly id: 257;
                            readonly nodeType: "Block";
                            readonly src: "6524:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 252;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "6545:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 254;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6576:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10622;
                                        readonly src: "6545:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 255;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6545:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 256;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6538:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 260;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 138;
                                readonly src: "6901:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 259;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 925;
                                readonly src: "6884:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                };
                            };
                            readonly id: 261;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6884:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 262;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6884:31:0";
                    }, {
                        readonly assignments: readonly [267];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 267;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "7064:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 323;
                            readonly src: "7034:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 266;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 265;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["7034:11:0", "7046:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10154;
                                    readonly src: "7034:22:0";
                                };
                                readonly referencedDeclaration: 10154;
                                readonly src: "7034:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 271;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 269;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 138;
                                readonly src: "7089:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 268;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 1038;
                                readonly src: "7073:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$_t_struct$_PoolConfig_$10154_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 270;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7073:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7034:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 277;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 272;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 267;
                                    readonly src: "7113:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 274;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "7120:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10125;
                                readonly src: "7113:29:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 275;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "7145:10:0";
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
                                readonly memberLocation: "7156:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 23;
                                readonly src: "7145:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "7113:60:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 278;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7113:60:0";
                    }, {
                        readonly assignments: readonly [280];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 280;
                            readonly mutability: "mutable";
                            readonly name: "deploymentId";
                            readonly nameLocation: "7271:12:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 323;
                            readonly src: "7263:20:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 279;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7263:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 282;
                        readonly initialValue: {
                            readonly id: 281;
                            readonly name: "_deploymentId";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 135;
                            readonly src: "7286:13:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7263:36:0";
                    }, {
                        readonly assignments: readonly [284];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 284;
                            readonly mutability: "mutable";
                            readonly name: "salt";
                            readonly nameLocation: "7347:4:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 323;
                            readonly src: "7339:12:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 283;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7339:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 286;
                        readonly initialValue: {
                            readonly id: 285;
                            readonly name: "_salt";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 142;
                            readonly src: "7354:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7339:20:0";
                    }, {
                        readonly assignments: readonly [288];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 288;
                            readonly mutability: "mutable";
                            readonly name: "hyperdrive";
                            readonly nameLocation: "7407:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 323;
                            readonly src: "7399:18:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly typeName: {
                                readonly id: 287;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7399:7:0";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 313;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 293;
                                readonly name: "config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 267;
                                readonly src: "7478:6:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }, {
                                readonly id: 294;
                                readonly name: "_extraData";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 140;
                                readonly src: "7498:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 295;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "7522:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 296;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7533:7:0";
                                readonly memberName: "target0";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 29;
                                readonly src: "7522:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 297;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "7554:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 298;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7565:7:0";
                                readonly memberName: "target1";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 32;
                                readonly src: "7554:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 299;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "7586:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 300;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7597:7:0";
                                readonly memberName: "target2";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35;
                                readonly src: "7586:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 301;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "7618:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 302;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7629:7:0";
                                readonly memberName: "target3";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 38;
                                readonly src: "7618:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 303;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 151;
                                    readonly src: "7650:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 304;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7661:7:0";
                                readonly memberName: "target4";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 41;
                                readonly src: "7650:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 308;
                                        readonly name: "deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 280;
                                        readonly src: "7824:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 309;
                                        readonly name: "salt";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 284;
                                        readonly src: "7838:4:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }];
                                        readonly expression: {
                                            readonly id: 306;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7813:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 307;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7817:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7813:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 310;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7813:30:0";
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
                                    readonly id: 305;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7803:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 311;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7803:41:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
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
                                        readonly id: 290;
                                        readonly name: "coreDeployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 48;
                                        readonly src: "7444:12:0";
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
                                        readonly id: 289;
                                        readonly name: "IHyperdriveCoreDeployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 10570;
                                        readonly src: "7420:23:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveCoreDeployer_$10570_$";
                                            readonly typeString: "type(contract IHyperdriveCoreDeployer)";
                                        };
                                    };
                                    readonly id: 291;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7420:37:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IHyperdriveCoreDeployer_$10570";
                                        readonly typeString: "contract IHyperdriveCoreDeployer";
                                    };
                                };
                                readonly id: 292;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7458:6:0";
                                readonly memberName: "deploy";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10569;
                                readonly src: "7420:44:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,address,address,address,address,address,bytes32) external returns (address)";
                                };
                            };
                            readonly id: 312;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7420:434:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7399:455:0";
                    }, {
                        readonly expression: {
                            readonly id: 319;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly id: 314;
                                        readonly name: "_deployments";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 69;
                                        readonly src: "7864:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 316;
                                    readonly indexExpression: {
                                        readonly id: 315;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 135;
                                        readonly src: "7877:13:0";
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
                                    readonly src: "7864:27:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 317;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "7892:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26;
                                readonly src: "7864:38:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 318;
                                readonly name: "hyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 288;
                                readonly src: "7905:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "7864:51:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 320;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7864:51:0";
                    }, {
                        readonly expression: {
                            readonly id: 321;
                            readonly name: "hyperdrive";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 288;
                            readonly src: "7933:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 148;
                        readonly id: 322;
                        readonly nodeType: "Return";
                        readonly src: "7926:17:0";
                    }];
                };
                readonly baseFunctions: readonly [10649];
                readonly documentation: {
                    readonly id: 133;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4488:486:0";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @dev This can only be deployed by the associated factory.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance.";
                };
                readonly functionSelector: "1ae6f515";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 145;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 144;
                        readonly name: "onlyFactory";
                        readonly nameLocations: readonly ["5156:11:0"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 132;
                        readonly src: "5156:11:0";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "5156:11:0";
                }];
                readonly name: "deploy";
                readonly nameLocation: "4988:6:0";
                readonly parameters: {
                    readonly id: 143;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 135;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "5012:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 324;
                        readonly src: "5004:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 134;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5004:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 138;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "5071:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 324;
                        readonly src: "5035:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 137;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 136;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["5035:11:0", "5047:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10108;
                                readonly src: "5035:28:0";
                            };
                            readonly referencedDeclaration: 10108;
                            readonly src: "5035:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 140;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "5107:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 324;
                        readonly src: "5094:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 139;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5094:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 142;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "5135:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 324;
                        readonly src: "5127:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 141;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5127:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4994:152:0";
                };
                readonly returnParameters: {
                    readonly id: 148;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 147;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 324;
                        readonly src: "5177:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 146;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5177:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5176:9:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 706;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8649:5837:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 705;
                    readonly nodeType: "Block";
                    readonly src: "8899:5587:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [345];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 345;
                            readonly mutability: "mutable";
                            readonly name: "deployment";
                            readonly nameLocation: "9169:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 705;
                            readonly src: "9150:29:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "storage";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                            readonly typeName: {
                                readonly id: 344;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 343;
                                    readonly name: "Deployment";
                                    readonly nameLocations: readonly ["9150:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 42;
                                    readonly src: "9150:10:0";
                                };
                                readonly referencedDeclaration: 42;
                                readonly src: "9150:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 349;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 346;
                                readonly name: "_deployments";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 69;
                                readonly src: "9182:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 348;
                            readonly indexExpression: {
                                readonly id: 347;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 327;
                                readonly src: "9195:13:0";
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
                            readonly src: "9182:27:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9150:59:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 352;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 350;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 334;
                                readonly src: "9223:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 351;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9239:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "9223:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 452;
                        readonly nodeType: "IfStatement";
                        readonly src: "9219:1810:0";
                        readonly trueBody: {
                            readonly id: 451;
                            readonly nodeType: "Block";
                            readonly src: "9242:1787:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 359;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 353;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "9403:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 354;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "9414:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17;
                                        readonly src: "9403:21:0";
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
                                            readonly id: 357;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "9436:1:0";
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
                                            readonly id: 356;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "9428:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                readonly typeString: "type(bytes32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 355;
                                                readonly name: "bytes32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "9428:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 358;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9428:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "9403:35:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 366;
                                readonly nodeType: "IfStatement";
                                readonly src: "9399:137:0";
                                readonly trueBody: {
                                    readonly id: 365;
                                    readonly nodeType: "Block";
                                    readonly src: "9440:96:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 360;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10684;
                                                    readonly src: "9465:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 362;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9496:23:0";
                                                readonly memberName: "DeploymentAlreadyExists";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10577;
                                                readonly src: "9465:54:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
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
                                            readonly src: "9465:56:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 364;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "9458:63:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 368;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 330;
                                        readonly src: "9687:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 367;
                                        readonly name: "_checkPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 925;
                                        readonly src: "9670:16:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$__$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                        };
                                    };
                                    readonly id: 369;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9670:31:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 370;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9670:31:0";
                            }, {
                                readonly assignments: readonly [372];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 372;
                                    readonly mutability: "mutable";
                                    readonly name: "initialSharePrice";
                                    readonly nameLocation: "9827:17:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 451;
                                    readonly src: "9819:25:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 371;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9819:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 377;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 374;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 330;
                                        readonly src: "9891:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }, {
                                        readonly id: 375;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 332;
                                        readonly src: "9922:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 373;
                                        readonly name: "_getInitialVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 936;
                                        readonly src: "9847:26:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_uint256_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory,bytes memory) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 376;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9847:99:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9819:127:0";
                            }, {
                                readonly assignments: readonly [379];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 379;
                                    readonly mutability: "mutable";
                                    readonly name: "configHash_";
                                    readonly nameLocation: "9968:11:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 451;
                                    readonly src: "9960:19:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 378;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9960:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 386;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 383;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 330;
                                            readonly src: "10003:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 381;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "9992:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 382;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9996:6:0";
                                            readonly memberName: "encode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "9992:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 384;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9992:25:0";
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
                                        readonly id: 380;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "9982:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 385;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9982:36:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9960:58:0";
                            }, {
                                readonly assignments: readonly [388];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 388;
                                    readonly mutability: "mutable";
                                    readonly name: "extraDataHash";
                                    readonly nameLocation: "10040:13:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 451;
                                    readonly src: "10032:21:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 387;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "10032:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 392;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 390;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 332;
                                        readonly src: "10066:10:0";
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
                                        readonly id: 389;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "10056:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 391;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10056:21:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "10032:45:0";
                            }, {
                                readonly assignments: readonly [397];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 397;
                                    readonly mutability: "mutable";
                                    readonly name: "config_";
                                    readonly nameLocation: "10238:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 451;
                                    readonly src: "10208:37:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "memory";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig";
                                    };
                                    readonly typeName: {
                                        readonly id: 396;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 395;
                                            readonly name: "IHyperdrive.PoolConfig";
                                            readonly nameLocations: readonly ["10208:11:0", "10220:10:0"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 10154;
                                            readonly src: "10208:22:0";
                                        };
                                        readonly referencedDeclaration: 10154;
                                        readonly src: "10208:22:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 401;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 399;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 330;
                                        readonly src: "10281:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 398;
                                        readonly name: "_copyPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 1038;
                                        readonly src: "10248:15:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$_t_struct$_PoolConfig_$10154_memory_ptr_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                        };
                                    };
                                    readonly id: 400;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10248:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "10208:100:0";
                            }, {
                                readonly expression: {
                                    readonly id: 406;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 402;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 397;
                                            readonly src: "10322:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        };
                                        readonly id: 404;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10330:22:0";
                                        readonly memberName: "initialVaultSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10125;
                                        readonly src: "10322:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 405;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 372;
                                        readonly src: "10355:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "10322:50:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 407;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10322:50:0";
                            }, {
                                readonly expression: {
                                    readonly id: 423;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 408;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 341;
                                        readonly src: "10431:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 413;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 397;
                                            readonly src: "10507:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 414;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 332;
                                            readonly src: "10532:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly id: 418;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 327;
                                                    readonly src: "10710:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }, {
                                                    readonly id: 419;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 336;
                                                    readonly src: "10725:5:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }, {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 416;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "10699:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 417;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10703:6:0";
                                                    readonly memberName: "encode";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10699:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 420;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10699:32:0";
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
                                                readonly id: 415;
                                                readonly name: "keccak256";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -8;
                                                readonly src: "10689:9:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                };
                                            };
                                            readonly id: 421;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10689:43:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
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
                                                    readonly id: 410;
                                                    readonly name: "target0Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 51;
                                                    readonly src: "10466:15:0";
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
                                                    readonly id: 409;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11236;
                                                    readonly src: "10440:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 411;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10440:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11236";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 412;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10483:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 11235;
                                            readonly src: "10440:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                            };
                                        };
                                        readonly id: 422;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10440:306:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "10431:315:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 424;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10431:315:0";
                            }, {
                                readonly expression: {
                                    readonly id: 429;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 425;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "10798:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 427;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10809:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17;
                                        readonly src: "10798:21:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 428;
                                        readonly name: "configHash_";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 379;
                                        readonly src: "10822:11:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "10798:35:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 430;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10798:35:0";
                            }, {
                                readonly expression: {
                                    readonly id: 435;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 431;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "10847:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 433;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10858:13:0";
                                        readonly memberName: "extraDataHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 20;
                                        readonly src: "10847:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 434;
                                        readonly name: "extraDataHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 388;
                                        readonly src: "10874:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "10847:40:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 436;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10847:40:0";
                            }, {
                                readonly expression: {
                                    readonly id: 441;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 437;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "10901:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 439;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10912:17:0";
                                        readonly memberName: "initialSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 23;
                                        readonly src: "10901:28:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 440;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 372;
                                        readonly src: "10932:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "10901:48:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 442;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10901:48:0";
                            }, {
                                readonly expression: {
                                    readonly id: 447;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 443;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "10963:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 445;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10974:7:0";
                                        readonly memberName: "target0";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 29;
                                        readonly src: "10963:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 446;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 341;
                                        readonly src: "10984:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "10963:27:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 448;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10963:27:0";
                            }, {
                                readonly expression: {
                                    readonly id: 449;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 341;
                                    readonly src: "11012:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly functionReturnParameters: 342;
                                readonly id: 450;
                                readonly nodeType: "Return";
                                readonly src: "11005:13:0";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [454];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 454;
                            readonly mutability: "mutable";
                            readonly name: "configHash";
                            readonly nameLocation: "11182:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 705;
                            readonly src: "11174:18:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 453;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "11174:7:0";
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
                                    readonly id: 455;
                                    readonly name: "_deployments";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 69;
                                    readonly src: "11195:12:0";
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
                                    readonly referencedDeclaration: 327;
                                    readonly src: "11208:13:0";
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
                                readonly src: "11195:27:0";
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
                            readonly memberLocation: "11223:10:0";
                            readonly memberName: "configHash";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 17;
                            readonly src: "11195:38:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11174:59:0";
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
                                readonly referencedDeclaration: 454;
                                readonly src: "11247:10:0";
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
                                    readonly src: "11269:1:0";
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
                                    readonly src: "11261:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 461;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "11261:7:0";
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
                                readonly src: "11261:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "11247:24:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 472;
                        readonly nodeType: "IfStatement";
                        readonly src: "11243:117:0";
                        readonly trueBody: {
                            readonly id: 471;
                            readonly nodeType: "Block";
                            readonly src: "11273:87:0";
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
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "11294:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 468;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11325:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10580;
                                        readonly src: "11294:53:0";
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
                                    readonly src: "11294:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 470;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11287:62:0";
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
                                        readonly referencedDeclaration: 330;
                                        readonly src: "11463:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 474;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "11452:3:0";
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
                                        readonly memberLocation: "11456:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "11452:10:0";
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
                                    readonly src: "11452:25:0";
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
                                    readonly src: "11442:9:0";
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
                                readonly src: "11442:36:0";
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
                                readonly referencedDeclaration: 454;
                                readonly src: "11482:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "11442:50:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 487;
                        readonly nodeType: "IfStatement";
                        readonly src: "11438:137:0";
                        readonly trueBody: {
                            readonly id: 486;
                            readonly nodeType: "Block";
                            readonly src: "11494:81:0";
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
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "11515:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 483;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11546:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10619;
                                        readonly src: "11515:47:0";
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
                                    readonly src: "11515:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 485;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11508:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 493;
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
                                    readonly referencedDeclaration: 332;
                                    readonly src: "11675:10:0";
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
                                    readonly src: "11665:9:0";
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
                                readonly src: "11665:21:0";
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
                                    readonly id: 491;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 345;
                                    readonly src: "11690:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                    };
                                };
                                readonly id: 492;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11701:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20;
                                readonly src: "11690:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "11665:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 500;
                        readonly nodeType: "IfStatement";
                        readonly src: "11661:139:0";
                        readonly trueBody: {
                            readonly id: 499;
                            readonly nodeType: "Block";
                            readonly src: "11716:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 494;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "11737:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 496;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11768:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10622;
                                        readonly src: "11737:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 497;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11737:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 498;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11730:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 502;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 330;
                                readonly src: "12093:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 501;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 925;
                                readonly src: "12076:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                };
                            };
                            readonly id: 503;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12076:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 504;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12076:31:0";
                    }, {
                        readonly assignments: readonly [509];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 509;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "12256:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 705;
                            readonly src: "12226:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 508;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 507;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["12226:11:0", "12238:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10154;
                                    readonly src: "12226:22:0";
                                };
                                readonly referencedDeclaration: 10154;
                                readonly src: "12226:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 513;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 511;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 330;
                                readonly src: "12281:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 510;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 1038;
                                readonly src: "12265:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$10108_memory_ptr_$returns$_t_struct$_PoolConfig_$10154_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 512;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12265:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12226:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 519;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 514;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 509;
                                    readonly src: "12305:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 516;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "12312:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10125;
                                readonly src: "12305:29:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 517;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 345;
                                    readonly src: "12337:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                    };
                                };
                                readonly id: 518;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12348:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 23;
                                readonly src: "12337:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "12305:60:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 520;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12305:60:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 523;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 521;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 334;
                                readonly src: "12629:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 522;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "12645:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "12629:17:0";
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
                                readonly id: 566;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 564;
                                    readonly name: "_targetIndex";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 334;
                                    readonly src: "13066:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "32";
                                    readonly id: 565;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "13082:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_2_by_1";
                                        readonly typeString: "int_const 2";
                                    };
                                    readonly value: "2";
                                };
                                readonly src: "13066:17:0";
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
                                    readonly id: 609;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 607;
                                        readonly name: "_targetIndex";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 334;
                                        readonly src: "13503:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "33";
                                        readonly id: 608;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "13519:1:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "13503:17:0";
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
                                        readonly id: 652;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 650;
                                            readonly name: "_targetIndex";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 334;
                                            readonly src: "13940:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "34";
                                            readonly id: 651;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "13956:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_4_by_1";
                                                readonly typeString: "int_const 4";
                                            };
                                            readonly value: "4";
                                        };
                                        readonly src: "13940:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly falseBody: {
                                        readonly id: 698;
                                        readonly nodeType: "Block";
                                        readonly src: "14373:83:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 693;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 10684;
                                                        readonly src: "14394:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 695;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "14425:18:0";
                                                    readonly memberName: "InvalidTargetIndex";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 10616;
                                                    readonly src: "14394:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 696;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "14394:51:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 697;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "14387:58:0";
                                        }];
                                    };
                                    readonly id: 699;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "13936:520:0";
                                    readonly trueBody: {
                                        readonly id: 692;
                                        readonly nodeType: "Block";
                                        readonly src: "13959:408:0";
                                        readonly statements: readonly [{
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                                readonly id: 659;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly expression: {
                                                        readonly id: 653;
                                                        readonly name: "deployment";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 345;
                                                        readonly src: "13977:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                                        };
                                                    };
                                                    readonly id: 654;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13988:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 41;
                                                    readonly src: "13977:18:0";
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
                                                        readonly id: 657;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "14007:1:0";
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
                                                        readonly id: 656;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "13999:7:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 655;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "13999:7:0";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 658;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13999:10:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13977:32:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 666;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "13973:132:0";
                                            readonly trueBody: {
                                                readonly id: 665;
                                                readonly nodeType: "Block";
                                                readonly src: "14011:94:0";
                                                readonly statements: readonly [{
                                                    readonly errorCall: {
                                                        readonly arguments: readonly [];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [];
                                                            readonly expression: {
                                                                readonly id: 660;
                                                                readonly name: "IHyperdriveDeployerCoordinator";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 10684;
                                                                readonly src: "14036:30:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                                    readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                                };
                                                            };
                                                            readonly id: 662;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "14067:21:0";
                                                            readonly memberName: "TargetAlreadyDeployed";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 10631;
                                                            readonly src: "14036:52:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                                readonly typeString: "function () pure";
                                                            };
                                                        };
                                                        readonly id: 663;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "14036:54:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_tuple$__$";
                                                            readonly typeString: "tuple()";
                                                        };
                                                    };
                                                    readonly id: 664;
                                                    readonly nodeType: "RevertStatement";
                                                    readonly src: "14029:61:0";
                                                }];
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 684;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 667;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 341;
                                                    readonly src: "14118:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 672;
                                                        readonly name: "config";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 509;
                                                        readonly src: "14194:6:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                        };
                                                    }, {
                                                        readonly id: 673;
                                                        readonly name: "_extraData";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 332;
                                                        readonly src: "14218:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        };
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly arguments: readonly [{
                                                                readonly expression: {
                                                                    readonly id: 677;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "14267:3:0";
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
                                                                readonly memberLocation: "14271:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "14267:10:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_address";
                                                                    readonly typeString: "address";
                                                                };
                                                            }, {
                                                                readonly id: 679;
                                                                readonly name: "_deploymentId";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 327;
                                                                readonly src: "14279:13:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_bytes32";
                                                                    readonly typeString: "bytes32";
                                                                };
                                                            }, {
                                                                readonly id: 680;
                                                                readonly name: "_salt";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 336;
                                                                readonly src: "14294:5:0";
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
                                                                    readonly id: 675;
                                                                    readonly name: "abi";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -1;
                                                                    readonly src: "14256:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_abi";
                                                                        readonly typeString: "abi";
                                                                    };
                                                                };
                                                                readonly id: 676;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "14260:6:0";
                                                                readonly memberName: "encode";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "14256:10:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                    readonly typeString: "function () pure returns (bytes memory)";
                                                                };
                                                            };
                                                            readonly id: 681;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "14256:44:0";
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
                                                            readonly id: 674;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "14246:9:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 682;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "14246:55:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
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
                                                                readonly id: 669;
                                                                readonly name: "target4Deployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 63;
                                                                readonly src: "14153:15:0";
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
                                                                readonly id: 668;
                                                                readonly name: "IHyperdriveTargetDeployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 11236;
                                                                readonly src: "14127:25:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$";
                                                                    readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                                };
                                                            };
                                                            readonly id: 670;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "14127:42:0";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11236";
                                                                readonly typeString: "contract IHyperdriveTargetDeployer";
                                                            };
                                                        };
                                                        readonly id: 671;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "14170:6:0";
                                                        readonly memberName: "deploy";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 11235;
                                                        readonly src: "14127:49:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                        };
                                                    };
                                                    readonly id: 683;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "14127:188:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "14118:197:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 685;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "14118:197:0";
                                        }, {
                                            readonly expression: {
                                                readonly id: 690;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly id: 686;
                                                        readonly name: "deployment";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 345;
                                                        readonly src: "14329:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                                        };
                                                    };
                                                    readonly id: 688;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "14340:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 41;
                                                    readonly src: "14329:18:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 689;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 341;
                                                    readonly src: "14350:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "14329:27:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 691;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "14329:27:0";
                                        }];
                                    };
                                };
                                readonly id: 700;
                                readonly nodeType: "IfStatement";
                                readonly src: "13499:957:0";
                                readonly trueBody: {
                                    readonly id: 649;
                                    readonly nodeType: "Block";
                                    readonly src: "13522:408:0";
                                    readonly statements: readonly [{
                                        readonly condition: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 616;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 610;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 345;
                                                    readonly src: "13540:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                                    };
                                                };
                                                readonly id: 611;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13551:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 38;
                                                readonly src: "13540:18:0";
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
                                                    readonly id: 614;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "13570:1:0";
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
                                                    readonly id: 613;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "13562:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 612;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "13562:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 615;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13562:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13540:32:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly id: 623;
                                        readonly nodeType: "IfStatement";
                                        readonly src: "13536:132:0";
                                        readonly trueBody: {
                                            readonly id: 622;
                                            readonly nodeType: "Block";
                                            readonly src: "13574:94:0";
                                            readonly statements: readonly [{
                                                readonly errorCall: {
                                                    readonly arguments: readonly [];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [];
                                                        readonly expression: {
                                                            readonly id: 617;
                                                            readonly name: "IHyperdriveDeployerCoordinator";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 10684;
                                                            readonly src: "13599:30:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                            };
                                                        };
                                                        readonly id: 619;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13630:21:0";
                                                        readonly memberName: "TargetAlreadyDeployed";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 10631;
                                                        readonly src: "13599:52:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                            readonly typeString: "function () pure";
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
                                                    readonly src: "13599:54:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_tuple$__$";
                                                        readonly typeString: "tuple()";
                                                    };
                                                };
                                                readonly id: 621;
                                                readonly nodeType: "RevertStatement";
                                                readonly src: "13592:61:0";
                                            }];
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 641;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 624;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 341;
                                                readonly src: "13681:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly id: 629;
                                                    readonly name: "config";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 509;
                                                    readonly src: "13757:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                    };
                                                }, {
                                                    readonly id: 630;
                                                    readonly name: "_extraData";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 332;
                                                    readonly src: "13781:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly expression: {
                                                                readonly id: 634;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13830:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 635;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13834:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13830:10:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_address";
                                                                readonly typeString: "address";
                                                            };
                                                        }, {
                                                            readonly id: 636;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 327;
                                                            readonly src: "13842:13:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes32";
                                                                readonly typeString: "bytes32";
                                                            };
                                                        }, {
                                                            readonly id: 637;
                                                            readonly name: "_salt";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 336;
                                                            readonly src: "13857:5:0";
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
                                                                readonly id: 632;
                                                                readonly name: "abi";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -1;
                                                                readonly src: "13819:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_abi";
                                                                    readonly typeString: "abi";
                                                                };
                                                            };
                                                            readonly id: 633;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13823:6:0";
                                                            readonly memberName: "encode";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13819:10:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                readonly typeString: "function () pure returns (bytes memory)";
                                                            };
                                                        };
                                                        readonly id: 638;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13819:44:0";
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
                                                        readonly id: 631;
                                                        readonly name: "keccak256";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -8;
                                                        readonly src: "13809:9:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                        };
                                                    };
                                                    readonly id: 639;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13809:55:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
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
                                                            readonly id: 626;
                                                            readonly name: "target3Deployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 60;
                                                            readonly src: "13716:15:0";
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
                                                            readonly id: 625;
                                                            readonly name: "IHyperdriveTargetDeployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 11236;
                                                            readonly src: "13690:25:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$";
                                                                readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                            };
                                                        };
                                                        readonly id: 627;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13690:42:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11236";
                                                            readonly typeString: "contract IHyperdriveTargetDeployer";
                                                        };
                                                    };
                                                    readonly id: 628;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13733:6:0";
                                                    readonly memberName: "deploy";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 11235;
                                                    readonly src: "13690:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                        readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                    };
                                                };
                                                readonly id: 640;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13690:188:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13681:197:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 642;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13681:197:0";
                                    }, {
                                        readonly expression: {
                                            readonly id: 647;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly expression: {
                                                    readonly id: 643;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 345;
                                                    readonly src: "13892:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                                    };
                                                };
                                                readonly id: 645;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly memberLocation: "13903:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 38;
                                                readonly src: "13892:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 646;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 341;
                                                readonly src: "13913:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13892:27:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 648;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13892:27:0";
                                    }];
                                };
                            };
                            readonly id: 701;
                            readonly nodeType: "IfStatement";
                            readonly src: "13062:1394:0";
                            readonly trueBody: {
                                readonly id: 606;
                                readonly nodeType: "Block";
                                readonly src: "13085:408:0";
                                readonly statements: readonly [{
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 573;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 567;
                                                readonly name: "deployment";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 345;
                                                readonly src: "13103:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                                };
                                            };
                                            readonly id: 568;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "13114:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "13103:18:0";
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
                                                readonly id: 571;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "13133:1:0";
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
                                                readonly id: 570;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "13125:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 569;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "13125:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 572;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13125:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "13103:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 580;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "13099:132:0";
                                    readonly trueBody: {
                                        readonly id: 579;
                                        readonly nodeType: "Block";
                                        readonly src: "13137:94:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 574;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 10684;
                                                        readonly src: "13162:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 576;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13193:21:0";
                                                    readonly memberName: "TargetAlreadyDeployed";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 10631;
                                                    readonly src: "13162:52:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 577;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13162:54:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 578;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "13155:61:0";
                                        }];
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 598;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 581;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 341;
                                            readonly src: "13244:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 586;
                                                readonly name: "config";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 509;
                                                readonly src: "13320:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                };
                                            }, {
                                                readonly id: 587;
                                                readonly name: "_extraData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 332;
                                                readonly src: "13344:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly expression: {
                                                            readonly id: 591;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "13393:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 592;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13397:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "13393:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_address";
                                                            readonly typeString: "address";
                                                        };
                                                    }, {
                                                        readonly id: 593;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 327;
                                                        readonly src: "13405:13:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }, {
                                                        readonly id: 594;
                                                        readonly name: "_salt";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 336;
                                                        readonly src: "13420:5:0";
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
                                                            readonly id: 589;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "13382:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 590;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13386:6:0";
                                                        readonly memberName: "encode";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "13382:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 595;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13382:44:0";
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
                                                    readonly id: 588;
                                                    readonly name: "keccak256";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -8;
                                                    readonly src: "13372:9:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                    };
                                                };
                                                readonly id: 596;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13372:55:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
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
                                                        readonly id: 583;
                                                        readonly name: "target2Deployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 57;
                                                        readonly src: "13279:15:0";
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
                                                        readonly id: 582;
                                                        readonly name: "IHyperdriveTargetDeployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 11236;
                                                        readonly src: "13253:25:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$";
                                                            readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                        };
                                                    };
                                                    readonly id: 584;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13253:42:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11236";
                                                        readonly typeString: "contract IHyperdriveTargetDeployer";
                                                    };
                                                };
                                                readonly id: 585;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13296:6:0";
                                                readonly memberName: "deploy";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 11235;
                                                readonly src: "13253:49:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                };
                                            };
                                            readonly id: 597;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13253:188:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "13244:197:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 599;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13244:197:0";
                                }, {
                                    readonly expression: {
                                        readonly id: 604;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly expression: {
                                                readonly id: 600;
                                                readonly name: "deployment";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 345;
                                                readonly src: "13455:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                                };
                                            };
                                            readonly id: 602;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly memberLocation: "13466:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "13455:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly id: 603;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 341;
                                            readonly src: "13476:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "13455:27:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 605;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13455:27:0";
                                }];
                            };
                        };
                        readonly id: 702;
                        readonly nodeType: "IfStatement";
                        readonly src: "12625:1831:0";
                        readonly trueBody: {
                            readonly id: 563;
                            readonly nodeType: "Block";
                            readonly src: "12648:408:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 530;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 524;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "12666:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 525;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12677:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 32;
                                        readonly src: "12666:18:0";
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
                                            readonly id: 528;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "12696:1:0";
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
                                            readonly id: 527;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "12688:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 526;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "12688:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 529;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12688:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12666:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 537;
                                readonly nodeType: "IfStatement";
                                readonly src: "12662:132:0";
                                readonly trueBody: {
                                    readonly id: 536;
                                    readonly nodeType: "Block";
                                    readonly src: "12700:94:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 531;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10684;
                                                    readonly src: "12725:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 533;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12756:21:0";
                                                readonly memberName: "TargetAlreadyDeployed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10631;
                                                readonly src: "12725:52:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 534;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12725:54:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 535;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "12718:61:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 555;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 538;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 341;
                                        readonly src: "12807:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 543;
                                            readonly name: "config";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 509;
                                            readonly src: "12883:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 544;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 332;
                                            readonly src: "12907:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 548;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12956:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 549;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12960:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12956:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }, {
                                                    readonly id: 550;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 327;
                                                    readonly src: "12968:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }, {
                                                    readonly id: 551;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 336;
                                                    readonly src: "12983:5:0";
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
                                                        readonly id: 546;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "12945:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 547;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12949:6:0";
                                                    readonly memberName: "encode";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12945:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 552;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12945:44:0";
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
                                                readonly id: 545;
                                                readonly name: "keccak256";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -8;
                                                readonly src: "12935:9:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                };
                                            };
                                            readonly id: 553;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12935:55:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
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
                                                    readonly id: 540;
                                                    readonly name: "target1Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 54;
                                                    readonly src: "12842:15:0";
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
                                                    readonly id: 539;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11236;
                                                    readonly src: "12816:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$11236_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 541;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12816:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$11236";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 542;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12859:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 11235;
                                            readonly src: "12816:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                            };
                                        };
                                        readonly id: 554;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12816:188:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12807:197:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 556;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12807:197:0";
                            }, {
                                readonly expression: {
                                    readonly id: 561;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 557;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 345;
                                            readonly src: "13018:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage pointer";
                                            };
                                        };
                                        readonly id: 559;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "13029:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 32;
                                        readonly src: "13018:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 560;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 341;
                                        readonly src: "13039:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "13018:27:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 562;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "13018:27:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 703;
                            readonly name: "target";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 341;
                            readonly src: "14473:6:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 342;
                        readonly id: 704;
                        readonly nodeType: "Return";
                        readonly src: "14466:13:0";
                    }];
                };
                readonly baseFunctions: readonly [10666];
                readonly documentation: {
                    readonly id: 325;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7956:688:0";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev This can only be deployed by the associated factory.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "0b3c4f86";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 339;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 338;
                        readonly name: "onlyFactory";
                        readonly nameLocations: readonly ["8862:11:0"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 132;
                        readonly src: "8862:11:0";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "8862:11:0";
                }];
                readonly name: "deployTarget";
                readonly nameLocation: "8658:12:0";
                readonly parameters: {
                    readonly id: 337;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 327;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "8688:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 706;
                        readonly src: "8680:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 326;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8680:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 330;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "8747:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 706;
                        readonly src: "8711:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 329;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 328;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["8711:11:0", "8723:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10108;
                                readonly src: "8711:28:0";
                            };
                            readonly referencedDeclaration: 10108;
                            readonly src: "8711:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 332;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "8783:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 706;
                        readonly src: "8770:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 331;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8770:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 334;
                        readonly mutability: "mutable";
                        readonly name: "_targetIndex";
                        readonly nameLocation: "8811:12:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 706;
                        readonly src: "8803:20:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 333;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8803:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 336;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "8841:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 706;
                        readonly src: "8833:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 335;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8833:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8670:182:0";
                };
                readonly returnParameters: {
                    readonly id: 342;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 341;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "8891:6:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 706;
                        readonly src: "8883:14:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 340;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8883:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8882:16:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 811;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15263:1363:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 810;
                    readonly nodeType: "Block";
                    readonly src: "15495:1131:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 725;
                                readonly name: "_checkMessageValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 845;
                                readonly src: "15555:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$__$";
                                    readonly typeString: "function () view";
                                };
                            };
                            readonly id: 726;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15555:20:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 727;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15555:20:0";
                    }, {
                        readonly assignments: readonly [730];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 730;
                            readonly mutability: "mutable";
                            readonly name: "hyperdrive";
                            readonly nameLocation: "15659:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 810;
                            readonly src: "15647:22:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                readonly typeString: "contract IHyperdrive";
                            };
                            readonly typeName: {
                                readonly id: 729;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 728;
                                    readonly name: "IHyperdrive";
                                    readonly nameLocations: readonly ["15647:11:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10351;
                                    readonly src: "15647:11:0";
                                };
                                readonly referencedDeclaration: 10351;
                                readonly src: "15647:11:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                    readonly typeString: "contract IHyperdrive";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 737;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly id: 732;
                                        readonly name: "_deployments";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 69;
                                        readonly src: "15697:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 734;
                                    readonly indexExpression: {
                                        readonly id: 733;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 709;
                                        readonly src: "15710:13:0";
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
                                    readonly src: "15697:27:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 735;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "15725:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26;
                                readonly src: "15697:38:0";
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
                                readonly id: 731;
                                readonly name: "IHyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 10351;
                                readonly src: "15672:11:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                    readonly typeString: "type(contract IHyperdrive)";
                                };
                            };
                            readonly id: 736;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15672:73:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                readonly typeString: "contract IHyperdrive";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15647:98:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 746;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 740;
                                    readonly name: "hyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 730;
                                    readonly src: "15767:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                        readonly typeString: "contract IHyperdrive";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                        readonly typeString: "contract IHyperdrive";
                                    }];
                                    readonly id: 739;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "15759:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 738;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "15759:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 741;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15759:19:0";
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
                                    readonly id: 744;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "15790:1:0";
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
                                    readonly id: 743;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "15782:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 742;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "15782:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 745;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15782:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "15759:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 753;
                        readonly nodeType: "IfStatement";
                        readonly src: "15755:127:0";
                        readonly trueBody: {
                            readonly id: 752;
                            readonly nodeType: "Block";
                            readonly src: "15794:88:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 747;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "15815:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 749;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15846:23:0";
                                        readonly memberName: "HyperdriveIsNotDeployed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10589;
                                        readonly src: "15815:54:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 750;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15815:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 751;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15808:63:0";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [755];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 755;
                            readonly mutability: "mutable";
                            readonly name: "value";
                            readonly nameLocation: "15970:5:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 810;
                            readonly src: "15962:13:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 754;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "15962:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 762;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 757;
                                readonly name: "hyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 730;
                                readonly src: "16010:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                    readonly typeString: "contract IHyperdrive";
                                };
                            }, {
                                readonly id: 758;
                                readonly name: "_lp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 711;
                                readonly src: "16034:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 759;
                                readonly name: "_contribution";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 713;
                                readonly src: "16051:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 760;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 718;
                                readonly src: "16078:8:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Options memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                    readonly typeString: "contract IHyperdrive";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Options memory";
                                }];
                                readonly id: 756;
                                readonly name: "_prepareInitialize";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 841;
                                readonly src: "15978:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IHyperdrive_$10351_$_t_address_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (contract IHyperdrive,address,uint256,struct IHyperdrive.Options memory) returns (uint256)";
                                };
                            };
                            readonly id: 761;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15978:118:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15962:134:0";
                    }, {
                        readonly expression: {
                            readonly id: 772;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 763;
                                readonly name: "lpShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 723;
                                readonly src: "16145:8:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 768;
                                    readonly name: "_contribution";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 713;
                                    readonly src: "16207:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 769;
                                    readonly name: "_apr";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 715;
                                    readonly src: "16234:4:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 770;
                                    readonly name: "_options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 718;
                                    readonly src: "16252:8:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
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
                                        readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
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
                                            readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Options memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 764;
                                            readonly name: "hyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 730;
                                            readonly src: "16156:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                                readonly typeString: "contract IHyperdrive";
                                            };
                                        };
                                        readonly id: 765;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "16167:10:0";
                                        readonly memberName: "initialize";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10438;
                                        readonly src: "16156:21:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)";
                                        };
                                    };
                                    readonly id: 767;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly names: readonly ["value"];
                                    readonly nodeType: "FunctionCallOptions";
                                    readonly options: readonly [{
                                        readonly id: 766;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 755;
                                        readonly src: "16186:5:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly src: "16156:37:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$value";
                                        readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)";
                                    };
                                };
                                readonly id: 771;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16156:114:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16145:125:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 773;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16145:125:0";
                    }, {
                        readonly assignments: readonly [775];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 775;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "16339:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 810;
                            readonly src: "16331:14:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 774;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "16331:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 780;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 779;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 776;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "16348:3:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 777;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16352:5:0";
                                readonly memberName: "value";
                                readonly nodeType: "MemberAccess";
                                readonly src: "16348:9:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly id: 778;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 755;
                                readonly src: "16360:5:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16348:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "16331:34:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 783;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 781;
                                readonly name: "refund";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 775;
                                readonly src: "16379:6:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 782;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "16388:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "16379:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 807;
                        readonly nodeType: "IfStatement";
                        readonly src: "16375:219:0";
                        readonly trueBody: {
                            readonly id: 806;
                            readonly nodeType: "Block";
                            readonly src: "16391:203:0";
                            readonly statements: readonly [{
                                readonly assignments: readonly [785, null];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 785;
                                    readonly mutability: "mutable";
                                    readonly name: "success";
                                    readonly nameLocation: "16411:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 806;
                                    readonly src: "16406:12:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly typeName: {
                                        readonly id: 784;
                                        readonly name: "bool";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "16406:4:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }, null];
                                readonly id: 796;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly hexValue: "";
                                        readonly id: 794;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "16466:2:0";
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
                                                        readonly id: 788;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "16432:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 789;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "16436:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "16432:10:0";
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
                                                    readonly id: 787;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "16424:8:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                        readonly typeString: "type(address payable)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 786;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "16424:8:0";
                                                        readonly stateMutability: "payable";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 790;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "16424:19:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address_payable";
                                                    readonly typeString: "address payable";
                                                };
                                            };
                                            readonly id: 791;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "16444:4:0";
                                            readonly memberName: "call";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "16424:24:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 793;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly names: readonly ["value"];
                                        readonly nodeType: "FunctionCallOptions";
                                        readonly options: readonly [{
                                            readonly id: 792;
                                            readonly name: "refund";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 775;
                                            readonly src: "16457:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly src: "16424:41:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                            readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                        };
                                    };
                                    readonly id: 795;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "16424:45:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "tuple(bool,bytes memory)";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "16405:64:0";
                            }, {
                                readonly condition: {
                                    readonly id: 798;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "!";
                                    readonly prefix: true;
                                    readonly src: "16487:8:0";
                                    readonly subExpression: {
                                        readonly id: 797;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 785;
                                        readonly src: "16488:7:0";
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
                                readonly id: 805;
                                readonly nodeType: "IfStatement";
                                readonly src: "16483:101:0";
                                readonly trueBody: {
                                    readonly id: 804;
                                    readonly nodeType: "Block";
                                    readonly src: "16497:87:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 799;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10684;
                                                    readonly src: "16522:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 801;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "16553:14:0";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10634;
                                                readonly src: "16522:45:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 802;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "16522:47:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 803;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "16515:54:0";
                                    }];
                                };
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 808;
                            readonly name: "lpShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 723;
                            readonly src: "16611:8:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 724;
                        readonly id: 809;
                        readonly nodeType: "Return";
                        readonly src: "16604:15:0";
                    }];
                };
                readonly baseFunctions: readonly [10683];
                readonly documentation: {
                    readonly id: 707;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14492:766:0";
                    readonly text: "@notice Initializes a pool that was deployed by this coordinator.\n @dev This can only be deployed by the associated factory.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created.";
                };
                readonly functionSelector: "16abfc70";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 721;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 720;
                        readonly name: "onlyFactory";
                        readonly nameLocations: readonly ["15456:11:0"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 132;
                        readonly src: "15456:11:0";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "15456:11:0";
                }];
                readonly name: "initialize";
                readonly nameLocation: "15272:10:0";
                readonly parameters: {
                    readonly id: 719;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 709;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "15300:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 811;
                        readonly src: "15292:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 708;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15292:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 711;
                        readonly mutability: "mutable";
                        readonly name: "_lp";
                        readonly nameLocation: "15331:3:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 811;
                        readonly src: "15323:11:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 710;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15323:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 713;
                        readonly mutability: "mutable";
                        readonly name: "_contribution";
                        readonly nameLocation: "15352:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 811;
                        readonly src: "15344:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 712;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15344:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 715;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "15383:4:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 811;
                        readonly src: "15375:12:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 714;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15375:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 718;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "15424:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 811;
                        readonly src: "15397:35:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 717;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 716;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["15397:11:0", "15409:7:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10210;
                                readonly src: "15397:19:0";
                            };
                            readonly referencedDeclaration: 10210;
                            readonly src: "15397:19:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15282:156:0";
                };
                readonly returnParameters: {
                    readonly id: 724;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 723;
                        readonly mutability: "mutable";
                        readonly name: "lpShares";
                        readonly nameLocation: "15485:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 811;
                        readonly src: "15477:16:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 722;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15477:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15476:18:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 825;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16780:151:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 824;
                    readonly nodeType: "Block";
                    readonly src: "16880:51:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly id: 820;
                                readonly name: "_deployments";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 69;
                                readonly src: "16897:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 822;
                            readonly indexExpression: {
                                readonly id: 821;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 814;
                                readonly src: "16910:13:0";
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
                            readonly src: "16897:27:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly functionReturnParameters: 819;
                        readonly id: 823;
                        readonly nodeType: "Return";
                        readonly src: "16890:34:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 812;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16632:143:0";
                    readonly text: "@notice Gets the deployment specified by the deployment ID.\n @param _deploymentId The deployment ID.\n @return The deployment.";
                };
                readonly functionSelector: "37404017";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployments";
                readonly nameLocation: "16789:11:0";
                readonly parameters: {
                    readonly id: 815;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 814;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "16818:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 825;
                        readonly src: "16810:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 813;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16810:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16800:37:0";
                };
                readonly returnParameters: {
                    readonly id: 819;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 818;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 825;
                        readonly src: "16861:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                        };
                        readonly typeName: {
                            readonly id: 817;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 816;
                                readonly name: "Deployment";
                                readonly nameLocations: readonly ["16861:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 42;
                                readonly src: "16861:10:0";
                            };
                            readonly referencedDeclaration: 42;
                            readonly src: "16861:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16860:19:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 841;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17583:205:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 826;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16937:641:0";
                    readonly text: "@dev Prepares the coordinator for initialization by drawing funds from\n      the LP, if necessary.\n @param _hyperdrive The Hyperdrive instance that is being initialized.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the initialization is\n        settled.\n @return value The value that should be sent in the initialize\n         transaction.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_prepareInitialize";
                readonly nameLocation: "17592:18:0";
                readonly parameters: {
                    readonly id: 837;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 829;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdrive";
                        readonly nameLocation: "17632:11:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 841;
                        readonly src: "17620:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                            readonly typeString: "contract IHyperdrive";
                        };
                        readonly typeName: {
                            readonly id: 828;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 827;
                                readonly name: "IHyperdrive";
                                readonly nameLocations: readonly ["17620:11:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10351;
                                readonly src: "17620:11:0";
                            };
                            readonly referencedDeclaration: 10351;
                            readonly src: "17620:11:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IHyperdrive_$10351";
                                readonly typeString: "contract IHyperdrive";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 831;
                        readonly mutability: "mutable";
                        readonly name: "_lp";
                        readonly nameLocation: "17661:3:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 841;
                        readonly src: "17653:11:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 830;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17653:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 833;
                        readonly mutability: "mutable";
                        readonly name: "_contribution";
                        readonly nameLocation: "17682:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 841;
                        readonly src: "17674:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 832;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17674:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 836;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "17732:8:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 841;
                        readonly src: "17705:35:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10210_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 835;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 834;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["17705:11:0", "17717:7:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10210;
                                readonly src: "17705:19:0";
                            };
                            readonly referencedDeclaration: 10210;
                            readonly src: "17705:19:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17610:136:0";
                };
                readonly returnParameters: {
                    readonly id: 840;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 839;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "17781:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 841;
                        readonly src: "17773:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 838;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17773:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17772:15:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 845;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17943:52:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 842;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17794:144:0";
                    readonly text: "@dev A yield source dependent check that prevents ether from being\n      transferred to Hyperdrive instances that don't accept ether.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "17952:18:0";
                readonly parameters: {
                    readonly id: 843;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "17970:2:0";
                };
                readonly returnParameters: {
                    readonly id: 844;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "17994:0:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 925;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18150:1191:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 924;
                    readonly nodeType: "Block";
                    readonly src: "18263:1078:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 855;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 852;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 849;
                                    readonly src: "18414:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 853;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18428:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10082;
                                readonly src: "18414:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "316533";
                                readonly id: 854;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "18451:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1000_by_1";
                                    readonly typeString: "int_const 1000";
                                };
                                readonly value: "1e3";
                            };
                            readonly src: "18414:40:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 862;
                        readonly nodeType: "IfStatement";
                        readonly src: "18410:138:0";
                        readonly trueBody: {
                            readonly id: 861;
                            readonly nodeType: "Block";
                            readonly src: "18456:92:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 856;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "18477:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 858;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18508:27:0";
                                        readonly memberName: "InvalidMinimumShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10607;
                                        readonly src: "18477:58:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 859;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18477:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 860;
                                readonly nodeType: "RevertStatement";
                                readonly src: "18470:67:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 866;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 863;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 849;
                                    readonly src: "18562:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 864;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18576:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10091;
                                readonly src: "18562:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 865;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "18598:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "18562:37:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 873;
                        readonly nodeType: "IfStatement";
                        readonly src: "18558:133:0";
                        readonly trueBody: {
                            readonly id: 872;
                            readonly nodeType: "Block";
                            readonly src: "18601:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 867;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "18622:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 869;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18653:25:0";
                                        readonly memberName: "InvalidCheckpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10601;
                                        readonly src: "18622:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 870;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18622:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 871;
                                readonly nodeType: "RevertStatement";
                                readonly src: "18615:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 886;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 878;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 874;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 849;
                                        readonly src: "18717:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 875;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18731:16:0";
                                    readonly memberName: "positionDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10088;
                                    readonly src: "18717:30:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 876;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 849;
                                        readonly src: "18750:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 877;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18764:18:0";
                                    readonly memberName: "checkpointDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10091;
                                    readonly src: "18750:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "18717:65:0";
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
                                readonly id: 885;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 883;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 879;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 849;
                                            readonly src: "18798:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 880;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18812:16:0";
                                        readonly memberName: "positionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10088;
                                        readonly src: "18798:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "%";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly id: 881;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 849;
                                            readonly src: "18831:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 882;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18845:18:0";
                                        readonly memberName: "checkpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10091;
                                        readonly src: "18831:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18798:65:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 884;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "18879:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "18798:82:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "18717:163:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 893;
                        readonly nodeType: "IfStatement";
                        readonly src: "18700:279:0";
                        readonly trueBody: {
                            readonly id: 892;
                            readonly nodeType: "Block";
                            readonly src: "18891:88:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 887;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "18912:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 889;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18943:23:0";
                                        readonly memberName: "InvalidPositionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10613;
                                        readonly src: "18912:54:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 890;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18912:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 891;
                                readonly nodeType: "RevertStatement";
                                readonly src: "18905:63:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 916;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 910;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 904;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 898;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 894;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 849;
                                                    readonly src: "19057:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 895;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19071:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10107;
                                                readonly src: "19057:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 896;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "19076:5:0";
                                            readonly memberName: "curve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10055;
                                            readonly src: "19057:24:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 897;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18039;
                                            readonly src: "19084:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "19057:30:0";
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
                                        readonly id: 903;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 899;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 849;
                                                    readonly src: "19103:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 900;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19117:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10107;
                                                readonly src: "19103:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 901;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "19122:4:0";
                                            readonly memberName: "flat";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10058;
                                            readonly src: "19103:23:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 902;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18039;
                                            readonly src: "19129:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "19103:29:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "19057:75:0";
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
                                    readonly id: 909;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 905;
                                                readonly name: "_deployConfig";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 849;
                                                readonly src: "19148:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                };
                                            };
                                            readonly id: 906;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "19162:4:0";
                                            readonly memberName: "fees";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10107;
                                            readonly src: "19148:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        };
                                        readonly id: 907;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19167:12:0";
                                        readonly memberName: "governanceLP";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10061;
                                        readonly src: "19148:31:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 908;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18039;
                                        readonly src: "19182:3:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "19148:37:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "19057:128:0";
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
                                readonly id: 915;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly id: 911;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 849;
                                            readonly src: "19201:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 912;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19215:4:0";
                                        readonly memberName: "fees";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10107;
                                        readonly src: "19201:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        };
                                    };
                                    readonly id: 913;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "19220:16:0";
                                    readonly memberName: "governanceZombie";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10064;
                                    readonly src: "19201:35:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 914;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "19239:3:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "19201:41:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "19057:185:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 923;
                        readonly nodeType: "IfStatement";
                        readonly src: "19040:295:0";
                        readonly trueBody: {
                            readonly id: 922;
                            readonly nodeType: "Block";
                            readonly src: "19253:82:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 917;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10684;
                                            readonly src: "19274:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$10684_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 919;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19305:17:0";
                                        readonly memberName: "InvalidFeeAmounts";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10604;
                                        readonly src: "19274:48:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 920;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "19274:50:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 921;
                                readonly nodeType: "RevertStatement";
                                readonly src: "19267:57:0";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 846;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "18001:144:0";
                    readonly text: "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkPoolConfig";
                readonly nameLocation: "18159:16:0";
                readonly parameters: {
                    readonly id: 850;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 849;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "18221:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 925;
                        readonly src: "18185:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 848;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 847;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["18185:11:0", "18197:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10108;
                                readonly src: "18185:28:0";
                            };
                            readonly referencedDeclaration: 10108;
                            readonly src: "18185:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18175:65:0";
                };
                readonly returnParameters: {
                    readonly id: 851;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "18263:0:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 936;
                readonly nodeType: "FunctionDefinition";
                readonly src: "19661:174:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 926;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "19347:309:0";
                    readonly text: "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _deployConfig The deploy config that will be used to deploy the\n        pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getInitialVaultSharePrice";
                readonly nameLocation: "19670:26:0";
                readonly parameters: {
                    readonly id: 932;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 929;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "19742:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 936;
                        readonly src: "19706:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 928;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 927;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["19706:11:0", "19718:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10108;
                                readonly src: "19706:28:0";
                            };
                            readonly referencedDeclaration: 10108;
                            readonly src: "19706:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 931;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "19778:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 936;
                        readonly src: "19765:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 930;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19765:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19696:98:0";
                };
                readonly returnParameters: {
                    readonly id: 935;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 934;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 936;
                        readonly src: "19826:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 933;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19826:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19825:9:0";
                };
                readonly scope: 1039;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 1038;
                readonly nodeType: "FunctionDefinition";
                readonly src: "20051:1056:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 1037;
                    readonly nodeType: "Block";
                    readonly src: "20203:904:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 951;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 946;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20280:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 948;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20288:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10112;
                                readonly src: "20280:17:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 949;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20300:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 950;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20314:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10069;
                                readonly src: "20300:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "20280:43:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 952;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20280:43:0";
                    }, {
                        readonly expression: {
                            readonly id: 958;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 953;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20333:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 955;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20341:16:0";
                                readonly memberName: "vaultSharesToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10116;
                                readonly src: "20333:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 956;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20360:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 957;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20374:16:0";
                                readonly memberName: "vaultSharesToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10073;
                                readonly src: "20360:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "20333:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 959;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20333:57:0";
                    }, {
                        readonly expression: {
                            readonly id: 965;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 960;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20400:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 962;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20408:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10119;
                                readonly src: "20400:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 963;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20424:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 964;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20438:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10076;
                                readonly src: "20424:27:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20400:51:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 966;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20400:51:0";
                    }, {
                        readonly expression: {
                            readonly id: 972;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 967;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20461:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 969;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20469:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10122;
                                readonly src: "20461:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 970;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20486:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 971;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20500:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10079;
                                readonly src: "20486:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "20461:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 973;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20461:53:0";
                    }, {
                        readonly expression: {
                            readonly id: 979;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 974;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20524:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 976;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20532:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10128;
                                readonly src: "20524:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 977;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20555:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 978;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20569:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10082;
                                readonly src: "20555:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20524:65:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 980;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20524:65:0";
                    }, {
                        readonly expression: {
                            readonly id: 986;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 981;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20599:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 983;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20607:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10131;
                                readonly src: "20599:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 984;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20634:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 985;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20661:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10085;
                                readonly src: "20634:51:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20599:86:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 987;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20599:86:0";
                    }, {
                        readonly expression: {
                            readonly id: 993;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 988;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20695:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 990;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20703:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10134;
                                readonly src: "20695:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 991;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20722:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 992;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20736:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10088;
                                readonly src: "20722:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20695:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 994;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20695:57:0";
                    }, {
                        readonly expression: {
                            readonly id: 1000;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 995;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20762:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 997;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20770:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10137;
                                readonly src: "20762:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 998;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20791:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 999;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20805:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10091;
                                readonly src: "20791:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20762:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1001;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20762:61:0";
                    }, {
                        readonly expression: {
                            readonly id: 1007;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1002;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20833:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1004;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20841:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10140;
                                readonly src: "20833:19:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1005;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20855:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1006;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20869:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10094;
                                readonly src: "20855:25:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "20833:47:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 1008;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20833:47:0";
                    }, {
                        readonly expression: {
                            readonly id: 1014;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1009;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20890:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1011;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20898:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10143;
                                readonly src: "20890:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1012;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20911:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1013;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20925:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10097;
                                readonly src: "20911:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20890:45:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1015;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20890:45:0";
                    }, {
                        readonly expression: {
                            readonly id: 1021;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1016;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "20945:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1018;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "20953:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10146;
                                readonly src: "20945:20:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1019;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "20968:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1020;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20982:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10100;
                                readonly src: "20968:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "20945:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1022;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "20945:49:0";
                    }, {
                        readonly expression: {
                            readonly id: 1028;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1023;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "21004:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1025;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "21012:14:0";
                                readonly memberName: "sweepCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10149;
                                readonly src: "21004:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1026;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "21029:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1027;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "21043:14:0";
                                readonly memberName: "sweepCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10103;
                                readonly src: "21029:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "21004:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 1029;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "21004:53:0";
                    }, {
                        readonly expression: {
                            readonly id: 1035;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 1030;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 944;
                                    readonly src: "21067:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 1032;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "21075:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10153;
                                readonly src: "21067:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 1033;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 940;
                                    readonly src: "21082:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 1034;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "21096:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10107;
                                readonly src: "21082:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly src: "21067:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$10065_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        };
                        readonly id: 1036;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "21067:33:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 937;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "19841:205:0";
                    readonly text: "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_copyPoolConfig";
                readonly nameLocation: "20060:15:0";
                readonly parameters: {
                    readonly id: 941;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 940;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "20121:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 1038;
                        readonly src: "20085:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 939;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 938;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["20085:11:0", "20097:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10108;
                                readonly src: "20085:28:0";
                            };
                            readonly referencedDeclaration: 10108;
                            readonly src: "20085:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10108_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "20075:65:0";
                };
                readonly returnParameters: {
                    readonly id: 945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 944;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "20194:7:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 1038;
                        readonly src: "20164:37:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 943;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 942;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["20164:11:0", "20176:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "20164:22:0";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "20164:22:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "20163:39:0";
                };
                readonly scope: 1039;
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
                    readonly referencedDeclaration: 10684;
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
            readonly linearizedBaseContracts: readonly [1039, 10684];
            readonly name: "HyperdriveDeployerCoordinator";
            readonly nameLocation: "964:29:0";
            readonly scope: 1040;
            readonly usedErrors: readonly [10577, 10580, 10583, 10586, 10589, 10592, 10595, 10598, 10601, 10604, 10607, 10610, 10613, 10616, 10619, 10622, 10625, 10628, 10631, 10634];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 0;
};
//# sourceMappingURL=HyperdriveDeployerCoordinator.d.ts.map