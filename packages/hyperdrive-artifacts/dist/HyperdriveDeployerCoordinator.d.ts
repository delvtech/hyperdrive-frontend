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
        readonly name: "IncompleteDeployment";
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
        readonly name: "MismatchedConfig";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MismatchedExtraData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TargetAlreadyDeployed";
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
        readonly "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "c47e90c4";
        readonly "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "7cc39092";
        readonly "deployments(address,bytes32)": "20503b3f";
        readonly "target0Deployer()": "ab71905f";
        readonly "target1Deployer()": "a085fa30";
        readonly "target2Deployer()": "b6cb1118";
        readonly "target3Deployer()": "aa8cd6c4";
        readonly "target4Deployer()": "966ecd1c";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x43e1779b4fd0634f56574752b969b9aeadf9fe4b5633aa417654027928c3d88e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d758145e49d0a9fa61ac8d04263b093f0f95034c04eb08512092593b0775677e\",\"dweb:/ipfs/QmVfeof8yPxG7DoSJt7jGodQ7YALhQ2zuLabKuQLGCSBbj\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x7d0e883b5d68892df654212a0f4448839358fe66d88728dc2535414edcfb4bdc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d0290659a7ef8ceb30f33617a696b1410d7fd110061eee77419ccce580f5a586\",\"dweb:/ipfs/QmXg2p6zmomxS2B3huDMtgUMSHpstWh3wMYdxt2czs45en\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}";
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
                readonly name: "IncompleteDeployment";
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
                readonly name: "MismatchedConfig";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MismatchedExtraData";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TargetAlreadyDeployed";
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
                    readonly "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
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
                    readonly "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
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
                    readonly "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive instance with the given parameters.";
                    };
                    readonly "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive target instance with the given parameters.";
                    };
                    readonly "deployments(address,bytes32)": {
                        readonly notice: "Gets the deployment specified by the deployer and deployment ID.";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0x43e1779b4fd0634f56574752b969b9aeadf9fe4b5633aa417654027928c3d88e";
                readonly urls: readonly ["bzz-raw://d758145e49d0a9fa61ac8d04263b093f0f95034c04eb08512092593b0775677e", "dweb:/ipfs/QmVfeof8yPxG7DoSJt7jGodQ7YALhQ2zuLabKuQLGCSBbj"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317";
                readonly urls: readonly ["bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213", "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76";
                readonly urls: readonly ["bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb", "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCoreDeployer.sol": {
                readonly keccak256: "0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761";
                readonly urls: readonly ["bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b", "dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                readonly keccak256: "0x7d0e883b5d68892df654212a0f4448839358fe66d88728dc2535414edcfb4bdc";
                readonly urls: readonly ["bzz-raw://d0290659a7ef8ceb30f33617a696b1410d7fd110061eee77419ccce580f5a586", "dweb:/ipfs/QmXg2p6zmomxS2B3huDMtgUMSHpstWh3wMYdxt2czs45en"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56";
                readonly urls: readonly ["bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8", "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
        readonly id: 915;
        readonly exportedSymbols: {
            readonly HyperdriveDeployerCoordinator: readonly [914];
            readonly IHyperdrive: readonly [7616];
            readonly IHyperdriveCoreDeployer: readonly [7812];
            readonly IHyperdriveDeployerCoordinator: readonly [7888];
            readonly IHyperdriveTargetDeployer: readonly [8400];
            readonly ONE: readonly [14151];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:17336:0";
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
            readonly scope: 915;
            readonly sourceUnit: 7617;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 2;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7616;
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
            readonly scope: 915;
            readonly sourceUnit: 7813;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4;
                    readonly name: "IHyperdriveCoreDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7812;
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
            readonly scope: 915;
            readonly sourceUnit: 7889;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7888;
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
            readonly scope: 915;
            readonly sourceUnit: 8401;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8;
                    readonly name: "IHyperdriveTargetDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8400;
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
            readonly scope: 915;
            readonly sourceUnit: 14918;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 10;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14151;
                    readonly src: "407:3:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 914;
            readonly nodeType: "ContractDefinition";
            readonly src: "946:16428:0";
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                readonly scope: 914;
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
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "4866:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
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
                                        readonly referencedDeclaration: 7828;
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
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "5142:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
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
                                        readonly referencedDeclaration: 7822;
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
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "5553:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
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
                                        readonly referencedDeclaration: 7825;
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
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
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
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "5783:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
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
                                        readonly referencedDeclaration: 7849;
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
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "6005:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
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
                                        readonly referencedDeclaration: 7852;
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
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 237;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 817;
                                readonly src: "6344:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$__$";
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
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                    readonly referencedDeclaration: 7407;
                                    readonly src: "6494:22:0";
                                };
                                readonly referencedDeclaration: 7407;
                                readonly src: "6494:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7407_storage_ptr";
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
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 246;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 913;
                                readonly src: "6533:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$_t_struct$_PoolConfig_$7407_memory_ptr_$";
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
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                readonly referencedDeclaration: 7381;
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
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                        readonly referencedDeclaration: 7812;
                                        readonly src: "6880:23:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveCoreDeployer_$7812_$";
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
                                        readonly typeIdentifier: "t_contract$_IHyperdriveCoreDeployer_$7812";
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
                                readonly referencedDeclaration: 7811;
                                readonly src: "6880:44:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$";
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
                readonly baseFunctions: readonly [7870];
                readonly documentation: {
                    readonly id: 110;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4014:420:0";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance.";
                };
                readonly functionSelector: "c47e90c4";
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
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
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
                                readonly referencedDeclaration: 7368;
                                readonly src: "4495:28:0";
                            };
                            readonly referencedDeclaration: 7368;
                            readonly src: "4495:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_storage_ptr";
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
                readonly scope: 914;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 719;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8078:6076:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 718;
                    readonly nodeType: "Block";
                    readonly src: "8316:5838:0";
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
                        readonly id: 448;
                        readonly nodeType: "IfStatement";
                        readonly src: "8567:1981:0";
                        readonly trueBody: {
                            readonly id: 447;
                            readonly nodeType: "Block";
                            readonly src: "8590:1958:0";
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
                                                    readonly referencedDeclaration: 7888;
                                                    readonly src: "8872:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
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
                                                readonly referencedDeclaration: 7819;
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
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 346;
                                        readonly name: "_checkPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 817;
                                        readonly src: "9077:16:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$__$";
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
                                    readonly scope: 447;
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
                                readonly id: 355;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 353;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 315;
                                        readonly src: "9281:10:0";
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
                                        readonly id: 352;
                                        readonly name: "_getInitialVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 825;
                                        readonly src: "9254:26:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_bytes_memory_ptr_$returns$_t_uint256_$";
                                            readonly typeString: "function (bytes memory) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 354;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9254:38:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9226:66:0";
                            }, {
                                readonly assignments: readonly [357];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 357;
                                    readonly mutability: "mutable";
                                    readonly name: "configHash_";
                                    readonly nameLocation: "9314:11:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 447;
                                    readonly src: "9306:19:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 356;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9306:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 364;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 361;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 313;
                                            readonly src: "9349:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 359;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "9338:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 360;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9342:6:0";
                                            readonly memberName: "encode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "9338:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 362;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9338:25:0";
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
                                        readonly id: 358;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "9328:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
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
                                    readonly src: "9328:36:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9306:58:0";
                            }, {
                                readonly assignments: readonly [366];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 366;
                                    readonly mutability: "mutable";
                                    readonly name: "extraDataHash";
                                    readonly nameLocation: "9386:13:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 447;
                                    readonly src: "9378:21:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 365;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9378:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 370;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 368;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 315;
                                        readonly src: "9412:10:0";
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
                                        readonly id: 367;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "9402:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
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
                                    readonly src: "9402:21:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9378:45:0";
                            }, {
                                readonly assignments: readonly [375];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 375;
                                    readonly mutability: "mutable";
                                    readonly name: "config_";
                                    readonly nameLocation: "9584:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 447;
                                    readonly src: "9554:37:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "memory";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig";
                                    };
                                    readonly typeName: {
                                        readonly id: 374;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 373;
                                            readonly name: "IHyperdrive.PoolConfig";
                                            readonly nameLocations: readonly ["9554:11:0", "9566:10:0"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 7407;
                                            readonly src: "9554:22:0";
                                        };
                                        readonly referencedDeclaration: 7407;
                                        readonly src: "9554:22:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_storage_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 379;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 377;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 313;
                                        readonly src: "9627:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 376;
                                        readonly name: "_copyPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 913;
                                        readonly src: "9594:15:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$_t_struct$_PoolConfig_$7407_memory_ptr_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                        };
                                    };
                                    readonly id: 378;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9594:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9554:100:0";
                            }, {
                                readonly expression: {
                                    readonly id: 384;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 380;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 375;
                                            readonly src: "9668:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        };
                                        readonly id: 382;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9676:22:0";
                                        readonly memberName: "initialVaultSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7381;
                                        readonly src: "9668:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 383;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 351;
                                        readonly src: "9701:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9668:50:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 385;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9668:50:0";
                            }, {
                                readonly expression: {
                                    readonly id: 403;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 386;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "9777:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 391;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 375;
                                            readonly src: "9853:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 392;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 315;
                                            readonly src: "9878:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly expression: {
                                                        readonly id: 396;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10067:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 397;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10071:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10067:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }, {
                                                    readonly id: 398;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "10079:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }, {
                                                    readonly id: 399;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 319;
                                                    readonly src: "10094:5:0";
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
                                                        readonly id: 394;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "10056:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 395;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10060:6:0";
                                                    readonly memberName: "encode";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10056:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
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
                                                readonly src: "10056:44:0";
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
                                                readonly id: 393;
                                                readonly name: "keccak256";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -8;
                                                readonly src: "10046:9:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
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
                                            readonly src: "10046:55:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                                    readonly id: 388;
                                                    readonly name: "target0Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 48;
                                                    readonly src: "9812:15:0";
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
                                                    readonly id: 387;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 8400;
                                                    readonly src: "9786:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 389;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "9786:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8400";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 390;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9829:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 8399;
                                            readonly src: "9786:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
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
                                        readonly src: "9786:329:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "9777:338:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 404;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9777:338:0";
                            }, {
                                readonly expression: {
                                    readonly id: 413;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 405;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10167:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 409;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 406;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10180:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 407;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10184:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10180:10:0";
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
                                                readonly src: "10167:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 410;
                                            readonly indexExpression: {
                                                readonly id: 408;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10192:13:0";
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
                                            readonly src: "10167:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 411;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10207:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17;
                                        readonly src: "10167:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 412;
                                        readonly name: "configHash_";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 357;
                                        readonly src: "10220:11:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "10167:64:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 414;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10167:64:0";
                            }, {
                                readonly expression: {
                                    readonly id: 423;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 415;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10245:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 419;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 416;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10258:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 417;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10262:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10258:10:0";
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
                                                readonly src: "10245:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 420;
                                            readonly indexExpression: {
                                                readonly id: 418;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10270:13:0";
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
                                            readonly src: "10245:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 421;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10302:13:0";
                                        readonly memberName: "extraDataHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 20;
                                        readonly src: "10245:70:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 422;
                                        readonly name: "extraDataHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 366;
                                        readonly src: "10318:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "10245:86:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 424;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10245:86:0";
                            }, {
                                readonly expression: {
                                    readonly id: 433;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 425;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10345:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 429;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 426;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10358:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 427;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10362:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10358:10:0";
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
                                                readonly src: "10345:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 430;
                                            readonly indexExpression: {
                                                readonly id: 428;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10370:13:0";
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
                                            readonly src: "10345:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 431;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10402:17:0";
                                        readonly memberName: "initialSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 23;
                                        readonly src: "10345:74:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 432;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 351;
                                        readonly src: "10422:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "10345:94:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 434;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10345:94:0";
                            }, {
                                readonly expression: {
                                    readonly id: 443;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 435;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "10453:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 439;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 436;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "10466:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 437;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "10470:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "10466:10:0";
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
                                                readonly src: "10453:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 440;
                                            readonly indexExpression: {
                                                readonly id: 438;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "10478:13:0";
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
                                            readonly src: "10453:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 441;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "10493:7:0";
                                        readonly memberName: "target0";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 29;
                                        readonly src: "10453:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 442;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "10503:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "10453:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 444;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10453:56:0";
                            }, {
                                readonly expression: {
                                    readonly id: 445;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 322;
                                    readonly src: "10531:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly functionReturnParameters: 323;
                                readonly id: 446;
                                readonly nodeType: "Return";
                                readonly src: "10524:13:0";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [450];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 450;
                            readonly mutability: "mutable";
                            readonly name: "configHash";
                            readonly nameLocation: "10701:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 718;
                            readonly src: "10693:18:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly typeName: {
                                readonly id: 449;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10693:7:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 458;
                        readonly initialValue: {
                            readonly expression: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 451;
                                        readonly name: "_deployments";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 68;
                                        readonly src: "10714:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                        };
                                    };
                                    readonly id: 454;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 452;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "10727:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 453;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10731:6:0";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "10727:10:0";
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
                                    readonly src: "10714:24:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                    };
                                };
                                readonly id: 456;
                                readonly indexExpression: {
                                    readonly id: 455;
                                    readonly name: "_deploymentId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 310;
                                    readonly src: "10739:13:0";
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
                                readonly src: "10714:39:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                };
                            };
                            readonly id: 457;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "10754:10:0";
                            readonly memberName: "configHash";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 17;
                            readonly src: "10714:50:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10693:71:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 464;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 459;
                                readonly name: "configHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 450;
                                readonly src: "10778:10:0";
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
                                    readonly id: 462;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10800:1:0";
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
                                    readonly id: 461;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "10792:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 460;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "10792:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 463;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10792:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10778:24:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 471;
                        readonly nodeType: "IfStatement";
                        readonly src: "10774:117:0";
                        readonly trueBody: {
                            readonly id: 470;
                            readonly nodeType: "Block";
                            readonly src: "10804:87:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 465;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "10825:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 467;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10856:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7822;
                                        readonly src: "10825:53:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 468;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10825:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 469;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10818:62:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 479;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 475;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 313;
                                        readonly src: "10994:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 473;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "10983:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 474;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10987:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "10983:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 476;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10983:25:0";
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
                                    readonly id: 472;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "10973:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
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
                                readonly src: "10973:36:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 478;
                                readonly name: "configHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 450;
                                readonly src: "11013:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10973:50:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 486;
                        readonly nodeType: "IfStatement";
                        readonly src: "10969:137:0";
                        readonly trueBody: {
                            readonly id: 485;
                            readonly nodeType: "Block";
                            readonly src: "11025:81:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 480;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "11046:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 482;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11077:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7849;
                                        readonly src: "11046:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 483;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11046:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 484;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11039:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 497;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 488;
                                    readonly name: "_extraData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 315;
                                    readonly src: "11219:10:0";
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
                                    readonly id: 487;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "11209:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 489;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11209:21:0";
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
                                            readonly id: 490;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68;
                                            readonly src: "11246:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 493;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 491;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "11259:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 492;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11263:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "11259:10:0";
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
                                        readonly src: "11246:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 495;
                                    readonly indexExpression: {
                                        readonly id: 494;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 310;
                                        readonly src: "11271:13:0";
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
                                    readonly src: "11246:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 496;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11286:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 20;
                                readonly src: "11246:53:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "11209:90:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 504;
                        readonly nodeType: "IfStatement";
                        readonly src: "11192:202:0";
                        readonly trueBody: {
                            readonly id: 503;
                            readonly nodeType: "Block";
                            readonly src: "11310:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 498;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "11331:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 500;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11362:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7852;
                                        readonly src: "11331:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 501;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11331:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 502;
                                readonly nodeType: "RevertStatement";
                                readonly src: "11324:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 506;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 313;
                                readonly src: "11687:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 505;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 817;
                                readonly src: "11670:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                };
                            };
                            readonly id: 507;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11670:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 508;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11670:31:0";
                    }, {
                        readonly assignments: readonly [513];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 513;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "11850:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 718;
                            readonly src: "11820:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 512;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 511;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["11820:11:0", "11832:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 7407;
                                    readonly src: "11820:22:0";
                                };
                                readonly referencedDeclaration: 7407;
                                readonly src: "11820:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7407_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 517;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 515;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 313;
                                readonly src: "11875:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 514;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 913;
                                readonly src: "11859:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7368_memory_ptr_$returns$_t_struct$_PoolConfig_$7407_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 516;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11859:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11820:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 528;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 518;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 513;
                                    readonly src: "11899:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 520;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "11906:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7381;
                                readonly src: "11899:29:0";
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
                                            readonly id: 521;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 68;
                                            readonly src: "11931:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 524;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 522;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "11944:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 523;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11948:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "11944:10:0";
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
                                        readonly src: "11931:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 526;
                                    readonly indexExpression: {
                                        readonly id: 525;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 310;
                                        readonly src: "11956:13:0";
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
                                    readonly src: "11931:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 527;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11984:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 23;
                                readonly src: "11931:70:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11899:102:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 529;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11899:102:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 532;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 530;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 317;
                                readonly src: "12265:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 531;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "12281:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "12265:17:0";
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
                                readonly id: 576;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 574;
                                    readonly name: "_targetIndex";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 317;
                                    readonly src: "12710:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "32";
                                    readonly id: 575;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "12726:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_2_by_1";
                                        readonly typeString: "int_const 2";
                                    };
                                    readonly value: "2";
                                };
                                readonly src: "12710:17:0";
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
                                    readonly id: 620;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 618;
                                        readonly name: "_targetIndex";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 317;
                                        readonly src: "13155:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "33";
                                        readonly id: 619;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "13171:1:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "13155:17:0";
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
                                        readonly id: 664;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 662;
                                            readonly name: "_targetIndex";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 317;
                                            readonly src: "13600:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "34";
                                            readonly id: 663;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "13616:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_4_by_1";
                                                readonly typeString: "int_const 4";
                                            };
                                            readonly value: "4";
                                        };
                                        readonly src: "13600:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly falseBody: {
                                        readonly id: 711;
                                        readonly nodeType: "Block";
                                        readonly src: "14041:83:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 706;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 7888;
                                                        readonly src: "14062:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 708;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "14093:18:0";
                                                    readonly memberName: "InvalidTargetIndex";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 7846;
                                                    readonly src: "14062:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 709;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "14062:51:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 710;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "14055:58:0";
                                        }];
                                    };
                                    readonly id: 712;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "13596:528:0";
                                    readonly trueBody: {
                                        readonly id: 705;
                                        readonly nodeType: "Block";
                                        readonly src: "13619:416:0";
                                        readonly statements: readonly [{
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                                readonly id: 676;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly expression: {
                                                        readonly baseExpression: {
                                                            readonly baseExpression: {
                                                                readonly id: 665;
                                                                readonly name: "_deployments";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 68;
                                                                readonly src: "13637:12:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                                };
                                                            };
                                                            readonly id: 668;
                                                            readonly indexExpression: {
                                                                readonly expression: {
                                                                    readonly id: 666;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "13650:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 667;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "13654:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13650:10:0";
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
                                                            readonly src: "13637:24:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                                readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                            };
                                                        };
                                                        readonly id: 670;
                                                        readonly indexExpression: {
                                                            readonly id: 669;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 310;
                                                            readonly src: "13662:13:0";
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
                                                        readonly src: "13637:39:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                        };
                                                    };
                                                    readonly id: 671;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13677:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 41;
                                                    readonly src: "13637:47:0";
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
                                                        readonly id: 674;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "13696:1:0";
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
                                                        readonly id: 673;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "13688:7:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 672;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "13688:7:0";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 675;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13688:10:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13637:61:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 683;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "13633:161:0";
                                            readonly trueBody: {
                                                readonly id: 682;
                                                readonly nodeType: "Block";
                                                readonly src: "13700:94:0";
                                                readonly statements: readonly [{
                                                    readonly errorCall: {
                                                        readonly arguments: readonly [];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [];
                                                            readonly expression: {
                                                                readonly id: 677;
                                                                readonly name: "IHyperdriveDeployerCoordinator";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 7888;
                                                                readonly src: "13725:30:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                                    readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                                };
                                                            };
                                                            readonly id: 679;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13756:21:0";
                                                            readonly memberName: "TargetAlreadyDeployed";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 7855;
                                                            readonly src: "13725:52:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                                readonly typeString: "function () pure";
                                                            };
                                                        };
                                                        readonly id: 680;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13725:54:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_tuple$__$";
                                                            readonly typeString: "tuple()";
                                                        };
                                                    };
                                                    readonly id: 681;
                                                    readonly nodeType: "RevertStatement";
                                                    readonly src: "13718:61:0";
                                                }];
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 693;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 684;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 322;
                                                    readonly src: "13807:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 689;
                                                        readonly name: "config";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 513;
                                                        readonly src: "13883:6:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                        };
                                                    }, {
                                                        readonly id: 690;
                                                        readonly name: "_extraData";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 315;
                                                        readonly src: "13907:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        };
                                                    }, {
                                                        readonly id: 691;
                                                        readonly name: "_salt";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 319;
                                                        readonly src: "13935:5:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                                                readonly id: 686;
                                                                readonly name: "target4Deployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 60;
                                                                readonly src: "13842:15:0";
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
                                                                readonly id: 685;
                                                                readonly name: "IHyperdriveTargetDeployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 8400;
                                                                readonly src: "13816:25:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$";
                                                                    readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                                };
                                                            };
                                                            readonly id: 687;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "13816:42:0";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8400";
                                                                readonly typeString: "contract IHyperdriveTargetDeployer";
                                                            };
                                                        };
                                                        readonly id: 688;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13859:6:0";
                                                        readonly memberName: "deploy";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 8399;
                                                        readonly src: "13816:49:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                        };
                                                    };
                                                    readonly id: 692;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13816:138:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13807:147:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 694;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "13807:147:0";
                                        }, {
                                            readonly expression: {
                                                readonly id: 703;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly baseExpression: {
                                                            readonly baseExpression: {
                                                                readonly id: 695;
                                                                readonly name: "_deployments";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 68;
                                                                readonly src: "13968:12:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                                };
                                                            };
                                                            readonly id: 699;
                                                            readonly indexExpression: {
                                                                readonly expression: {
                                                                    readonly id: 696;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "13981:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 697;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "13985:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13981:10:0";
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
                                                            readonly src: "13968:24:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                                readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                            };
                                                        };
                                                        readonly id: 700;
                                                        readonly indexExpression: {
                                                            readonly id: 698;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 310;
                                                            readonly src: "13993:13:0";
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
                                                        readonly src: "13968:39:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                        };
                                                    };
                                                    readonly id: 701;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "14008:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 41;
                                                    readonly src: "13968:47:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 702;
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
                                                readonly src: "13968:56:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 704;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "13968:56:0";
                                        }];
                                    };
                                };
                                readonly id: 713;
                                readonly nodeType: "IfStatement";
                                readonly src: "13151:973:0";
                                readonly trueBody: {
                                    readonly id: 661;
                                    readonly nodeType: "Block";
                                    readonly src: "13174:416:0";
                                    readonly statements: readonly [{
                                        readonly condition: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 632;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly baseExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 621;
                                                            readonly name: "_deployments";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 68;
                                                            readonly src: "13192:12:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                            };
                                                        };
                                                        readonly id: 624;
                                                        readonly indexExpression: {
                                                            readonly expression: {
                                                                readonly id: 622;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13205:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 623;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13209:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13205:10:0";
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
                                                        readonly src: "13192:24:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                        };
                                                    };
                                                    readonly id: 626;
                                                    readonly indexExpression: {
                                                        readonly id: 625;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 310;
                                                        readonly src: "13217:13:0";
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
                                                    readonly src: "13192:39:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                    };
                                                };
                                                readonly id: 627;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13232:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 38;
                                                readonly src: "13192:47:0";
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
                                                    readonly id: 630;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "13251:1:0";
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
                                                    readonly id: 629;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "13243:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 628;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "13243:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 631;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13243:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13192:61:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly id: 639;
                                        readonly nodeType: "IfStatement";
                                        readonly src: "13188:161:0";
                                        readonly trueBody: {
                                            readonly id: 638;
                                            readonly nodeType: "Block";
                                            readonly src: "13255:94:0";
                                            readonly statements: readonly [{
                                                readonly errorCall: {
                                                    readonly arguments: readonly [];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [];
                                                        readonly expression: {
                                                            readonly id: 633;
                                                            readonly name: "IHyperdriveDeployerCoordinator";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 7888;
                                                            readonly src: "13280:30:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                            };
                                                        };
                                                        readonly id: 635;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13311:21:0";
                                                        readonly memberName: "TargetAlreadyDeployed";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 7855;
                                                        readonly src: "13280:52:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                            readonly typeString: "function () pure";
                                                        };
                                                    };
                                                    readonly id: 636;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13280:54:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_tuple$__$";
                                                        readonly typeString: "tuple()";
                                                    };
                                                };
                                                readonly id: 637;
                                                readonly nodeType: "RevertStatement";
                                                readonly src: "13273:61:0";
                                            }];
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 649;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 640;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 322;
                                                readonly src: "13362:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly id: 645;
                                                    readonly name: "config";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 513;
                                                    readonly src: "13438:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                    };
                                                }, {
                                                    readonly id: 646;
                                                    readonly name: "_extraData";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 315;
                                                    readonly src: "13462:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }, {
                                                    readonly id: 647;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 319;
                                                    readonly src: "13490:5:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                                            readonly id: 642;
                                                            readonly name: "target3Deployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 57;
                                                            readonly src: "13397:15:0";
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
                                                            readonly id: 641;
                                                            readonly name: "IHyperdriveTargetDeployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 8400;
                                                            readonly src: "13371:25:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$";
                                                                readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                            };
                                                        };
                                                        readonly id: 643;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13371:42:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8400";
                                                            readonly typeString: "contract IHyperdriveTargetDeployer";
                                                        };
                                                    };
                                                    readonly id: 644;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13414:6:0";
                                                    readonly memberName: "deploy";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 8399;
                                                    readonly src: "13371:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                        readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                    };
                                                };
                                                readonly id: 648;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13371:138:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13362:147:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 650;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13362:147:0";
                                    }, {
                                        readonly expression: {
                                            readonly id: 659;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly expression: {
                                                    readonly baseExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 651;
                                                            readonly name: "_deployments";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 68;
                                                            readonly src: "13523:12:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                            };
                                                        };
                                                        readonly id: 655;
                                                        readonly indexExpression: {
                                                            readonly expression: {
                                                                readonly id: 652;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13536:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 653;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13540:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13536:10:0";
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
                                                        readonly src: "13523:24:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                        };
                                                    };
                                                    readonly id: 656;
                                                    readonly indexExpression: {
                                                        readonly id: 654;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 310;
                                                        readonly src: "13548:13:0";
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
                                                    readonly src: "13523:39:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                    };
                                                };
                                                readonly id: 657;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly memberLocation: "13563:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 38;
                                                readonly src: "13523:47:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 658;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 322;
                                                readonly src: "13573:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13523:56:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 660;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13523:56:0";
                                    }];
                                };
                            };
                            readonly id: 714;
                            readonly nodeType: "IfStatement";
                            readonly src: "12706:1418:0";
                            readonly trueBody: {
                                readonly id: 617;
                                readonly nodeType: "Block";
                                readonly src: "12729:416:0";
                                readonly statements: readonly [{
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 588;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly baseExpression: {
                                                        readonly id: 577;
                                                        readonly name: "_deployments";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 68;
                                                        readonly src: "12747:12:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                        };
                                                    };
                                                    readonly id: 580;
                                                    readonly indexExpression: {
                                                        readonly expression: {
                                                            readonly id: 578;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "12760:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 579;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "12764:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "12760:10:0";
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
                                                    readonly src: "12747:24:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                    };
                                                };
                                                readonly id: 582;
                                                readonly indexExpression: {
                                                    readonly id: 581;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "12772:13:0";
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
                                                readonly src: "12747:39:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                };
                                            };
                                            readonly id: 583;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12787:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "12747:47:0";
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
                                                readonly id: 586;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "12806:1:0";
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
                                                readonly id: 585;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "12798:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 584;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "12798:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 587;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12798:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12747:61:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 595;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "12743:161:0";
                                    readonly trueBody: {
                                        readonly id: 594;
                                        readonly nodeType: "Block";
                                        readonly src: "12810:94:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 589;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 7888;
                                                        readonly src: "12835:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 591;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12866:21:0";
                                                    readonly memberName: "TargetAlreadyDeployed";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 7855;
                                                    readonly src: "12835:52:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 592;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12835:54:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 593;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "12828:61:0";
                                        }];
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 605;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 596;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 322;
                                            readonly src: "12917:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 601;
                                                readonly name: "config";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 513;
                                                readonly src: "12993:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                };
                                            }, {
                                                readonly id: 602;
                                                readonly name: "_extraData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 315;
                                                readonly src: "13017:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly id: 603;
                                                readonly name: "_salt";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 319;
                                                readonly src: "13045:5:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                                        readonly id: 598;
                                                        readonly name: "target2Deployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 54;
                                                        readonly src: "12952:15:0";
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
                                                        readonly id: 597;
                                                        readonly name: "IHyperdriveTargetDeployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 8400;
                                                        readonly src: "12926:25:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$";
                                                            readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                        };
                                                    };
                                                    readonly id: 599;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "12926:42:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8400";
                                                        readonly typeString: "contract IHyperdriveTargetDeployer";
                                                    };
                                                };
                                                readonly id: 600;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12969:6:0";
                                                readonly memberName: "deploy";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 8399;
                                                readonly src: "12926:49:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                };
                                            };
                                            readonly id: 604;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12926:138:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12917:147:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 606;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "12917:147:0";
                                }, {
                                    readonly expression: {
                                        readonly id: 615;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly baseExpression: {
                                                        readonly id: 607;
                                                        readonly name: "_deployments";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 68;
                                                        readonly src: "13078:12:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                        };
                                                    };
                                                    readonly id: 611;
                                                    readonly indexExpression: {
                                                        readonly expression: {
                                                            readonly id: 608;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "13091:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 609;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13095:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "13091:10:0";
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
                                                    readonly src: "13078:24:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                    };
                                                };
                                                readonly id: 612;
                                                readonly indexExpression: {
                                                    readonly id: 610;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 310;
                                                    readonly src: "13103:13:0";
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
                                                readonly src: "13078:39:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                };
                                            };
                                            readonly id: 613;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly memberLocation: "13118:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35;
                                            readonly src: "13078:47:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly id: 614;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 322;
                                            readonly src: "13128:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "13078:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 616;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13078:56:0";
                                }];
                            };
                        };
                        readonly id: 715;
                        readonly nodeType: "IfStatement";
                        readonly src: "12261:1863:0";
                        readonly trueBody: {
                            readonly id: 573;
                            readonly nodeType: "Block";
                            readonly src: "12284:416:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 544;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 533;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "12302:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 536;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 534;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12315:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 535;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12319:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12315:10:0";
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
                                                readonly src: "12302:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 538;
                                            readonly indexExpression: {
                                                readonly id: 537;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "12327:13:0";
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
                                            readonly src: "12302:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 539;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12342:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 32;
                                        readonly src: "12302:47:0";
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
                                            readonly id: 542;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "12361:1:0";
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
                                            readonly id: 541;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "12353:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 540;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "12353:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 543;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12353:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12302:61:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 551;
                                readonly nodeType: "IfStatement";
                                readonly src: "12298:161:0";
                                readonly trueBody: {
                                    readonly id: 550;
                                    readonly nodeType: "Block";
                                    readonly src: "12365:94:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 545;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 7888;
                                                    readonly src: "12390:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 547;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12421:21:0";
                                                readonly memberName: "TargetAlreadyDeployed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7855;
                                                readonly src: "12390:52:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 548;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12390:54:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 549;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "12383:61:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 561;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 552;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "12472:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 557;
                                            readonly name: "config";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 513;
                                            readonly src: "12548:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 558;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 315;
                                            readonly src: "12572:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly id: 559;
                                            readonly name: "_salt";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 319;
                                            readonly src: "12600:5:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
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
                                                    readonly id: 554;
                                                    readonly name: "target1Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 51;
                                                    readonly src: "12507:15:0";
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
                                                    readonly id: 553;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 8400;
                                                    readonly src: "12481:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8400_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 555;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12481:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8400";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 556;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12524:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 8399;
                                            readonly src: "12481:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7407_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                            };
                                        };
                                        readonly id: 560;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12481:138:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12472:147:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 562;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12472:147:0";
                            }, {
                                readonly expression: {
                                    readonly id: 571;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 563;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 68;
                                                    readonly src: "12633:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 567;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 564;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12646:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 565;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12650:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12646:10:0";
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
                                                readonly src: "12633:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 568;
                                            readonly indexExpression: {
                                                readonly id: 566;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 310;
                                                readonly src: "12658:13:0";
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
                                            readonly src: "12633:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 569;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "12673:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 32;
                                        readonly src: "12633:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 570;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 322;
                                        readonly src: "12683:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12633:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 572;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12633:56:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 716;
                            readonly name: "target";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 322;
                            readonly src: "14141:6:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 323;
                        readonly id: 717;
                        readonly nodeType: "Return";
                        readonly src: "14134:13:0";
                    }];
                };
                readonly baseFunctions: readonly [7887];
                readonly documentation: {
                    readonly id: 308;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7451:622:0";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "7cc39092";
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
                        readonly scope: 719;
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
                        readonly scope: 719;
                        readonly src: "8140:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
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
                                readonly referencedDeclaration: 7368;
                                readonly src: "8140:28:0";
                            };
                            readonly referencedDeclaration: 7368;
                            readonly src: "8140:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_storage_ptr";
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
                        readonly scope: 719;
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
                        readonly scope: 719;
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
                        readonly scope: 719;
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
                        readonly scope: 719;
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
                readonly scope: 914;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 737;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14360:189:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 736;
                    readonly nodeType: "Block";
                    readonly src: "14487:62:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly baseExpression: {
                                    readonly id: 730;
                                    readonly name: "_deployments";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 68;
                                    readonly src: "14504:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$42_storage_$_$";
                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                    };
                                };
                                readonly id: 732;
                                readonly indexExpression: {
                                    readonly id: 731;
                                    readonly name: "_deployer";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 722;
                                    readonly src: "14517:9:0";
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
                                readonly src: "14504:23:0";
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
                                readonly referencedDeclaration: 724;
                                readonly src: "14528:13:0";
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
                            readonly src: "14504:38:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly functionReturnParameters: 729;
                        readonly id: 735;
                        readonly nodeType: "Return";
                        readonly src: "14497:45:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 720;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14160:195:0";
                    readonly text: "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment.";
                };
                readonly functionSelector: "20503b3f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployments";
                readonly nameLocation: "14369:11:0";
                readonly parameters: {
                    readonly id: 725;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 722;
                        readonly mutability: "mutable";
                        readonly name: "_deployer";
                        readonly nameLocation: "14398:9:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 737;
                        readonly src: "14390:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 721;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14390:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 724;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "14425:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 737;
                        readonly src: "14417:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 723;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14417:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14380:64:0";
                };
                readonly returnParameters: {
                    readonly id: 729;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 728;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 737;
                        readonly src: "14468:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Deployment_$42_memory_ptr";
                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                        };
                        readonly typeName: {
                            readonly id: 727;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 726;
                                readonly name: "Deployment";
                                readonly nameLocations: readonly ["14468:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 42;
                                readonly src: "14468:10:0";
                            };
                            readonly referencedDeclaration: 42;
                            readonly src: "14468:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$42_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14467:19:0";
                };
                readonly scope: 914;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 817;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14704:1191:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 816;
                    readonly nodeType: "Block";
                    readonly src: "14817:1078:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 744;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 741;
                                    readonly src: "14968:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 745;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14982:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7345;
                                readonly src: "14968:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "316533";
                                readonly id: 746;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "15005:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1000_by_1";
                                    readonly typeString: "int_const 1000";
                                };
                                readonly value: "1e3";
                            };
                            readonly src: "14968:40:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 754;
                        readonly nodeType: "IfStatement";
                        readonly src: "14964:138:0";
                        readonly trueBody: {
                            readonly id: 753;
                            readonly nodeType: "Block";
                            readonly src: "15010:92:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 748;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "15031:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 750;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15062:27:0";
                                        readonly memberName: "InvalidMinimumShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7837;
                                        readonly src: "15031:58:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 751;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15031:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 752;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15024:67:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 758;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 755;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 741;
                                    readonly src: "15116:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 756;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "15130:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7354;
                                readonly src: "15116:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 757;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "15152:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "15116:37:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 765;
                        readonly nodeType: "IfStatement";
                        readonly src: "15112:133:0";
                        readonly trueBody: {
                            readonly id: 764;
                            readonly nodeType: "Block";
                            readonly src: "15155:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 759;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "15176:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 761;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15207:25:0";
                                        readonly memberName: "InvalidCheckpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7831;
                                        readonly src: "15176:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 762;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15176:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 763;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15169:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 778;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 770;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 766;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 741;
                                        readonly src: "15271:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 767;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15285:16:0";
                                    readonly memberName: "positionDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7351;
                                    readonly src: "15271:30:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 768;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 741;
                                        readonly src: "15304:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 769;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15318:18:0";
                                    readonly memberName: "checkpointDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7354;
                                    readonly src: "15304:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15271:65:0";
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
                                readonly id: 777;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 775;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 771;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 741;
                                            readonly src: "15352:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 772;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15366:16:0";
                                        readonly memberName: "positionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7351;
                                        readonly src: "15352:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "%";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly id: 773;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 741;
                                            readonly src: "15385:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 774;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15399:18:0";
                                        readonly memberName: "checkpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7354;
                                        readonly src: "15385:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "15352:65:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 776;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "15433:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "15352:82:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "15271:163:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 785;
                        readonly nodeType: "IfStatement";
                        readonly src: "15254:279:0";
                        readonly trueBody: {
                            readonly id: 784;
                            readonly nodeType: "Block";
                            readonly src: "15445:88:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 779;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "15466:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 781;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15497:23:0";
                                        readonly memberName: "InvalidPositionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7843;
                                        readonly src: "15466:54:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 782;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15466:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 783;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15459:63:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 808;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 802;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 796;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 790;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 786;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 741;
                                                    readonly src: "15611:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 787;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "15625:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7367;
                                                readonly src: "15611:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 788;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15630:5:0";
                                            readonly memberName: "curve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7322;
                                            readonly src: "15611:24:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 789;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 14151;
                                            readonly src: "15638:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "15611:30:0";
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
                                        readonly id: 795;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 791;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 741;
                                                    readonly src: "15657:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 792;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "15671:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7367;
                                                readonly src: "15657:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 793;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15676:4:0";
                                            readonly memberName: "flat";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7325;
                                            readonly src: "15657:23:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 794;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 14151;
                                            readonly src: "15683:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "15657:29:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "15611:75:0";
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
                                    readonly id: 801;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 797;
                                                readonly name: "_deployConfig";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 741;
                                                readonly src: "15702:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                };
                                            };
                                            readonly id: 798;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15716:4:0";
                                            readonly memberName: "fees";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7367;
                                            readonly src: "15702:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        };
                                        readonly id: 799;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15721:12:0";
                                        readonly memberName: "governanceLP";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7328;
                                        readonly src: "15702:31:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 800;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 14151;
                                        readonly src: "15736:3:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "15702:37:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "15611:128:0";
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
                                readonly id: 807;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly id: 803;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 741;
                                            readonly src: "15755:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 804;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15769:4:0";
                                        readonly memberName: "fees";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7367;
                                        readonly src: "15755:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        };
                                    };
                                    readonly id: 805;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15774:16:0";
                                    readonly memberName: "governanceZombie";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7331;
                                    readonly src: "15755:35:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 806;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 14151;
                                    readonly src: "15793:3:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15755:41:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "15611:185:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 815;
                        readonly nodeType: "IfStatement";
                        readonly src: "15594:295:0";
                        readonly trueBody: {
                            readonly id: 814;
                            readonly nodeType: "Block";
                            readonly src: "15807:82:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 809;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7888;
                                            readonly src: "15828:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7888_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 811;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15859:17:0";
                                        readonly memberName: "InvalidFeeAmounts";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7834;
                                        readonly src: "15828:48:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 812;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15828:50:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 813;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15821:57:0";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 738;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14555:144:0";
                    readonly text: "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkPoolConfig";
                readonly nameLocation: "14713:16:0";
                readonly parameters: {
                    readonly id: 742;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 741;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "14775:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 817;
                        readonly src: "14739:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 740;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 739;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["14739:11:0", "14751:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7368;
                                readonly src: "14739:28:0";
                            };
                            readonly referencedDeclaration: 7368;
                            readonly src: "14739:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14729:65:0";
                };
                readonly returnParameters: {
                    readonly id: 743;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14817:0:0";
                };
                readonly scope: 914;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 825;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16115:115:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 818;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15901:209:0";
                    readonly text: "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getInitialVaultSharePrice";
                readonly nameLocation: "16124:26:0";
                readonly parameters: {
                    readonly id: 821;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 820;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "16173:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 825;
                        readonly src: "16160:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 819;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16160:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16150:39:0";
                };
                readonly returnParameters: {
                    readonly id: 824;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 823;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 825;
                        readonly src: "16221:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 822;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16221:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16220:9:0";
                };
                readonly scope: 914;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 913;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16446:926:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 912;
                    readonly nodeType: "Block";
                    readonly src: "16598:774:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 840;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 835;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "16675:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 837;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16683:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7372;
                                readonly src: "16675:17:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6920";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 838;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "16695:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 839;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16709:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7336;
                                readonly src: "16695:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6920";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "16675:43:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$6920";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 841;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16675:43:0";
                    }, {
                        readonly expression: {
                            readonly id: 847;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 842;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "16728:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 844;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16736:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7375;
                                readonly src: "16728:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 845;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "16752:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 846;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16766:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7339;
                                readonly src: "16752:27:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16728:51:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 848;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16728:51:0";
                    }, {
                        readonly expression: {
                            readonly id: 854;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 849;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "16789:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 851;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16797:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7378;
                                readonly src: "16789:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 852;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "16814:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 853;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16828:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7342;
                                readonly src: "16814:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "16789:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 855;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16789:53:0";
                    }, {
                        readonly expression: {
                            readonly id: 861;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 856;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "16852:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 858;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16860:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7384;
                                readonly src: "16852:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 859;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "16883:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 860;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16897:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7345;
                                readonly src: "16883:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16852:65:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 862;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16852:65:0";
                    }, {
                        readonly expression: {
                            readonly id: 868;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 863;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "16927:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 865;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16935:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7387;
                                readonly src: "16927:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 866;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "16962:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 867;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16989:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7348;
                                readonly src: "16962:51:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16927:86:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 869;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16927:86:0";
                    }, {
                        readonly expression: {
                            readonly id: 875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 870;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "17023:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 872;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17031:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7390;
                                readonly src: "17023:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 873;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "17050:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 874;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17064:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7351;
                                readonly src: "17050:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "17023:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 876;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17023:57:0";
                    }, {
                        readonly expression: {
                            readonly id: 882;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 877;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "17090:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 879;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17098:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7393;
                                readonly src: "17090:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 880;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "17119:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 881;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17133:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7354;
                                readonly src: "17119:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "17090:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 883;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17090:61:0";
                    }, {
                        readonly expression: {
                            readonly id: 889;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 884;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "17161:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 886;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17169:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7396;
                                readonly src: "17161:19:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 887;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "17183:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 888;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17197:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7357;
                                readonly src: "17183:25:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "17161:47:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 890;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17161:47:0";
                    }, {
                        readonly expression: {
                            readonly id: 896;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 891;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "17218:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 893;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17226:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7399;
                                readonly src: "17218:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 894;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "17239:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 895;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17253:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7360;
                                readonly src: "17239:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "17218:45:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 897;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17218:45:0";
                    }, {
                        readonly expression: {
                            readonly id: 903;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 898;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "17273:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 900;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17281:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7402;
                                readonly src: "17273:20:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 901;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "17296:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 902;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17310:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7363;
                                readonly src: "17296:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "17273:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 904;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17273:49:0";
                    }, {
                        readonly expression: {
                            readonly id: 910;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 905;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 833;
                                    readonly src: "17332:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 907;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "17340:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7406;
                                readonly src: "17332:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 908;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 829;
                                    readonly src: "17347:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 909;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17361:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7367;
                                readonly src: "17347:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly src: "17332:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7332_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        };
                        readonly id: 911;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17332:33:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 826;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16236:205:0";
                    readonly text: "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_copyPoolConfig";
                readonly nameLocation: "16455:15:0";
                readonly parameters: {
                    readonly id: 830;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 829;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "16516:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 913;
                        readonly src: "16480:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 828;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 827;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["16480:11:0", "16492:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7368;
                                readonly src: "16480:28:0";
                            };
                            readonly referencedDeclaration: 7368;
                            readonly src: "16480:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7368_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16470:65:0";
                };
                readonly returnParameters: {
                    readonly id: 834;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 833;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "16589:7:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 913;
                        readonly src: "16559:37:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7407_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 832;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 831;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["16559:11:0", "16571:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7407;
                                readonly src: "16559:22:0";
                            };
                            readonly referencedDeclaration: 7407;
                            readonly src: "16559:22:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7407_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16558:39:0";
                };
                readonly scope: 914;
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
                    readonly referencedDeclaration: 7888;
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
            readonly linearizedBaseContracts: readonly [914, 7888];
            readonly name: "HyperdriveDeployerCoordinator";
            readonly nameLocation: "964:29:0";
            readonly scope: 915;
            readonly usedErrors: readonly [7819, 7822, 7825, 7828, 7831, 7834, 7837, 7840, 7843, 7846, 7849, 7852, 7855];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 0;
};
//# sourceMappingURL=HyperdriveDeployerCoordinator.d.ts.map