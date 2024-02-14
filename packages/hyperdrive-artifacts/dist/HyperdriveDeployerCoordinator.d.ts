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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xa514f3df6feb2126925db532c8b0dca054eb6763c3a264c594829108ded99b64\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://eb2beb980386b097c6ef754ce41cb805b8d37520c14f6a3b237626a7048b2bab\",\"dweb:/ipfs/QmXVVfRufQse6p2VmWcWn8Qf5RKW4cdbVNnLfeLHtSERsX\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0x8aaf56733c7d566752a7f4b70652645d1bd68889443b3a55313ff93a7b7a5761\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52ca088c697f0bd94c371ab825575f53fa187d589386915b068bf1f108b2cf8b\",\"dweb:/ipfs/QmYGTYBULTU8LeQGcUgp7FLYrP973oXqwGofHbLj6crAiU\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x7d0e883b5d68892df654212a0f4448839358fe66d88728dc2535414edcfb4bdc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d0290659a7ef8ceb30f33617a696b1410d7fd110061eee77419ccce580f5a586\",\"dweb:/ipfs/QmXg2p6zmomxS2B3huDMtgUMSHpstWh3wMYdxt2czs45en\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]}},\"version\":1}";
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
                readonly keccak256: "0xa514f3df6feb2126925db532c8b0dca054eb6763c3a264c594829108ded99b64";
                readonly urls: readonly ["bzz-raw://eb2beb980386b097c6ef754ce41cb805b8d37520c14f6a3b237626a7048b2bab", "dweb:/ipfs/QmXVVfRufQse6p2VmWcWn8Qf5RKW4cdbVNnLfeLHtSERsX"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94";
                readonly urls: readonly ["bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb", "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3";
                readonly urls: readonly ["bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660", "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"];
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
                readonly keccak256: "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5";
                readonly urls: readonly ["bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171", "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"];
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
                readonly keccak256: "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28";
                readonly urls: readonly ["bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2", "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862";
                readonly urls: readonly ["bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355", "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec";
                readonly urls: readonly ["bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c", "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/deployers/HyperdriveDeployerCoordinator.sol";
        readonly id: 891;
        readonly exportedSymbols: {
            readonly HyperdriveDeployerCoordinator: readonly [890];
            readonly IHyperdrive: readonly [7480];
            readonly IHyperdriveCoreDeployer: readonly [7676];
            readonly IHyperdriveDeployerCoordinator: readonly [7752];
            readonly IHyperdriveTargetDeployer: readonly [8259];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:16810:0";
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
            readonly scope: 891;
            readonly sourceUnit: 7481;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 2;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7480;
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
            readonly scope: 891;
            readonly sourceUnit: 7677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4;
                    readonly name: "IHyperdriveCoreDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7676;
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
            readonly scope: 891;
            readonly sourceUnit: 7753;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7752;
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
            readonly scope: 891;
            readonly sourceUnit: 8260;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8;
                    readonly name: "IHyperdriveTargetDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8259;
                    readonly src: "318:25:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 890;
            readonly nodeType: "ContractDefinition";
            readonly src: "891:15957:0";
            readonly nodes: readonly [{
                readonly id: 40;
                readonly nodeType: "StructDefinition";
                readonly src: "983:1258:0";
                readonly nodes: readonly [];
                readonly canonicalName: "HyperdriveDeployerCoordinator.Deployment";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 15;
                    readonly mutability: "mutable";
                    readonly name: "configHash";
                    readonly nameLocation: "1206:10:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "1198:18:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                    readonly typeName: {
                        readonly id: 14;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1198:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 18;
                    readonly mutability: "mutable";
                    readonly name: "extraDataHash";
                    readonly nameLocation: "1435:13:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "1427:21:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                    readonly typeName: {
                        readonly id: 17;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1427:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 21;
                    readonly mutability: "mutable";
                    readonly name: "initialSharePrice";
                    readonly nameLocation: "1685:17:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "1677:25:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 20;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1677:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 24;
                    readonly mutability: "mutable";
                    readonly name: "hyperdrive";
                    readonly nameLocation: "1779:10:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "1771:18:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 23;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1771:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 27;
                    readonly mutability: "mutable";
                    readonly name: "target0";
                    readonly nameLocation: "1871:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "1863:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 26;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1863:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 30;
                    readonly mutability: "mutable";
                    readonly name: "target1";
                    readonly nameLocation: "1960:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "1952:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 29;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1952:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 33;
                    readonly mutability: "mutable";
                    readonly name: "target2";
                    readonly nameLocation: "2049:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "2041:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 32;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2041:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 36;
                    readonly mutability: "mutable";
                    readonly name: "target3";
                    readonly nameLocation: "2138:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "2130:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 35;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2130:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 39;
                    readonly mutability: "mutable";
                    readonly name: "target4";
                    readonly nameLocation: "2227:7:0";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 40;
                    readonly src: "2219:15:0";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 38;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2219:7:0";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Deployment";
                readonly nameLocation: "990:10:0";
                readonly scope: 890;
                readonly visibility: "public";
            }, {
                readonly id: 43;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2320:37:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 41;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2247:68:0";
                    readonly text: "@notice The contract used to deploy new instances of Hyperdrive.";
                };
                readonly functionSelector: "c83e1f51";
                readonly mutability: "immutable";
                readonly name: "coreDeployer";
                readonly nameLocation: "2345:12:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 42;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2320:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 46;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2444:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 44;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2364:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget0.";
                };
                readonly functionSelector: "ab71905f";
                readonly mutability: "immutable";
                readonly name: "target0Deployer";
                readonly nameLocation: "2469:15:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 45;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2444:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 49;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2571:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 47;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2491:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget1.";
                };
                readonly functionSelector: "a085fa30";
                readonly mutability: "immutable";
                readonly name: "target1Deployer";
                readonly nameLocation: "2596:15:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 48;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2571:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 52;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2698:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 50;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2618:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget2.";
                };
                readonly functionSelector: "b6cb1118";
                readonly mutability: "immutable";
                readonly name: "target2Deployer";
                readonly nameLocation: "2723:15:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 51;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2698:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 55;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2825:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 53;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2745:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget3.";
                };
                readonly functionSelector: "aa8cd6c4";
                readonly mutability: "immutable";
                readonly name: "target3Deployer";
                readonly nameLocation: "2850:15:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 54;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2825:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 58;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2952:40:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 56;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2872:75:0";
                    readonly text: "@notice The contract used to deploy new instances of HyperdriveTarget4.";
                };
                readonly functionSelector: "966ecd1c";
                readonly mutability: "immutable";
                readonly name: "target4Deployer";
                readonly nameLocation: "2977:15:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 57;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2952:7:0";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 66;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3071:72:0";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 59;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2999:67:0";
                    readonly text: "@notice A mapping from deployer to deployment ID to deployment.";
                };
                readonly mutability: "mutable";
                readonly name: "_deployments";
                readonly nameLocation: "3131:12:0";
                readonly scope: 890;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))";
                };
                readonly typeName: {
                    readonly id: 65;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 60;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3079:7:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3071:50:0";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 64;
                        readonly keyName: "";
                        readonly keyNameLocation: "-1:-1:-1";
                        readonly keyType: {
                            readonly id: 61;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3098:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "3090:30:0";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment)";
                        };
                        readonly valueName: "";
                        readonly valueNameLocation: "-1:-1:-1";
                        readonly valueType: {
                            readonly id: 63;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 62;
                                readonly name: "Deployment";
                                readonly nameLocations: readonly ["3109:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 40;
                                readonly src: "3109:10:0";
                            };
                            readonly referencedDeclaration: 40;
                            readonly src: "3109:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 107;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3469:484:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 106;
                    readonly nodeType: "Block";
                    readonly src: "3688:265:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 84;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 82;
                                readonly name: "coreDeployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 43;
                                readonly src: "3698:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 83;
                                readonly name: "_coreDeployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 69;
                                readonly src: "3713:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3698:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 85;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3698:28:0";
                    }, {
                        readonly expression: {
                            readonly id: 88;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 86;
                                readonly name: "target0Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 46;
                                readonly src: "3736:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 87;
                                readonly name: "_target0Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71;
                                readonly src: "3754:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3736:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 89;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3736:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 92;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 90;
                                readonly name: "target1Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 49;
                                readonly src: "3780:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 91;
                                readonly name: "_target1Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73;
                                readonly src: "3798:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3780:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 93;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3780:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 96;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 94;
                                readonly name: "target2Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 52;
                                readonly src: "3824:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 95;
                                readonly name: "_target2Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 75;
                                readonly src: "3842:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3824:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 97;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3824:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 100;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 98;
                                readonly name: "target3Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 55;
                                readonly src: "3868:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 99;
                                readonly name: "_target3Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 77;
                                readonly src: "3886:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3868:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 101;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3868:34:0";
                    }, {
                        readonly expression: {
                            readonly id: 104;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 102;
                                readonly name: "target4Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 58;
                                readonly src: "3912:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 103;
                                readonly name: "_target4Deployer";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 79;
                                readonly src: "3930:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "3912:34:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 105;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3912:34:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 67;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3150:314:0";
                    readonly text: "@notice Instantiates the deployer coordinator.\n @param _coreDeployer The core deployer.\n @param _target0Deployer The target0 deployer.\n @param _target1Deployer The target1 deployer.\n @param _target2Deployer The target2 deployer.\n @param _target4Deployer The target4 deployer.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 80;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 69;
                        readonly mutability: "mutable";
                        readonly name: "_coreDeployer";
                        readonly nameLocation: "3498:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 107;
                        readonly src: "3490:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 68;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3490:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71;
                        readonly mutability: "mutable";
                        readonly name: "_target0Deployer";
                        readonly nameLocation: "3529:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 107;
                        readonly src: "3521:24:0";
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
                            readonly src: "3521:7:0";
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
                        readonly name: "_target1Deployer";
                        readonly nameLocation: "3563:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 107;
                        readonly src: "3555:24:0";
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
                            readonly src: "3555:7:0";
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
                        readonly name: "_target2Deployer";
                        readonly nameLocation: "3597:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 107;
                        readonly src: "3589:24:0";
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
                            readonly src: "3589:7:0";
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
                        readonly name: "_target3Deployer";
                        readonly nameLocation: "3631:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 107;
                        readonly src: "3623:24:0";
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
                            readonly src: "3623:7:0";
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
                        readonly name: "_target4Deployer";
                        readonly nameLocation: "3665:16:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 107;
                        readonly src: "3657:24:0";
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
                            readonly src: "3657:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3480:207:0";
                };
                readonly returnParameters: {
                    readonly id: 81;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3688:0:0";
                };
                readonly scope: 890;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 289;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4384:2690:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 288;
                    readonly nodeType: "Block";
                    readonly src: "4579:2495:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [124];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 124;
                            readonly mutability: "mutable";
                            readonly name: "deployment";
                            readonly nameLocation: "4687:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 288;
                            readonly src: "4669:28:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                            readonly typeName: {
                                readonly id: 123;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 122;
                                    readonly name: "Deployment";
                                    readonly nameLocations: readonly ["4669:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 40;
                                    readonly src: "4669:10:0";
                                };
                                readonly referencedDeclaration: 40;
                                readonly src: "4669:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Deployment_$40_storage_ptr";
                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 131;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly baseExpression: {
                                    readonly id: 125;
                                    readonly name: "_deployments";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66;
                                    readonly src: "4700:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                    };
                                };
                                readonly id: 128;
                                readonly indexExpression: {
                                    readonly expression: {
                                        readonly id: 126;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "4713:3:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 127;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4717:6:0";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4713:10:0";
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
                                readonly src: "4700:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 130;
                            readonly indexExpression: {
                                readonly id: 129;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 110;
                                readonly src: "4725:13:0";
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
                            readonly src: "4700:39:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4669:70:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 138;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 132;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "4753:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 133;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4764:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 24;
                                readonly src: "4753:21:0";
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
                                    readonly id: 136;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4786:1:0";
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
                                    readonly id: 135;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4778:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 134;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4778:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 137;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4778:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4753:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145;
                        readonly nodeType: "IfStatement";
                        readonly src: "4749:131:0";
                        readonly trueBody: {
                            readonly id: 144;
                            readonly nodeType: "Block";
                            readonly src: "4790:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 139;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "4811:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 141;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4842:25:0";
                                        readonly memberName: "HyperdriveAlreadyDeployed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7692;
                                        readonly src: "4811:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 142;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4811:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 143;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4804:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 152;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 146;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "5029:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 147;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5040:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "5029:21:0";
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
                                    readonly id: 150;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5062:1:0";
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
                                    readonly id: 149;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5054:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 148;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5054:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 151;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5054:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5029:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 159;
                        readonly nodeType: "IfStatement";
                        readonly src: "5025:128:0";
                        readonly trueBody: {
                            readonly id: 158;
                            readonly nodeType: "Block";
                            readonly src: "5066:87:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 153;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "5087:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 155;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5118:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7686;
                                        readonly src: "5087:53:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 156;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5087:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 157;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5080:62:0";
                            }];
                        };
                    }, {
                        readonly condition: {
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
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 190;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 182;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly id: 174;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 166;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 160;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 124;
                                                    readonly src: "5242:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                    };
                                                };
                                                readonly id: 161;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5253:7:0";
                                                readonly memberName: "target0";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 27;
                                                readonly src: "5242:18:0";
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
                                                    readonly id: 164;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5272:1:0";
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
                                                    readonly id: 163;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5264:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 162;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5264:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 165;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5264:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5242:32:0";
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
                                            readonly id: 173;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 167;
                                                    readonly name: "deployment";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 124;
                                                    readonly src: "5290:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                    };
                                                };
                                                readonly id: 168;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5301:7:0";
                                                readonly memberName: "target1";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 30;
                                                readonly src: "5290:18:0";
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
                                                    readonly id: 171;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5320:1:0";
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
                                                    readonly id: 170;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5312:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 169;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5312:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 172;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5312:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5290:32:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5242:80:0";
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
                                        readonly id: 181;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 175;
                                                readonly name: "deployment";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 124;
                                                readonly src: "5338:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                                };
                                            };
                                            readonly id: 176;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5349:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 33;
                                            readonly src: "5338:18:0";
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
                                                readonly id: 179;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5368:1:0";
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
                                                readonly id: 178;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5360:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 177;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5360:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 180;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5360:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "5338:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5242:128:0";
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
                                    readonly id: 189;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 183;
                                            readonly name: "deployment";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 124;
                                            readonly src: "5386:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                            };
                                        };
                                        readonly id: 184;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5397:7:0";
                                        readonly memberName: "target3";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 36;
                                        readonly src: "5386:18:0";
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
                                            readonly id: 187;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5416:1:0";
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
                                            readonly id: 186;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "5408:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 185;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "5408:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 188;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5408:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "5386:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5242:176:0";
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
                                        readonly referencedDeclaration: 124;
                                        readonly src: "5434:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                        };
                                    };
                                    readonly id: 192;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5445:7:0";
                                    readonly memberName: "target4";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 39;
                                    readonly src: "5434:18:0";
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
                                        readonly src: "5464:1:0";
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
                                        readonly src: "5456:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 193;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5456:7:0";
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
                                    readonly src: "5456:10:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "5434:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5242:224:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 205;
                        readonly nodeType: "IfStatement";
                        readonly src: "5225:337:0";
                        readonly trueBody: {
                            readonly id: 204;
                            readonly nodeType: "Block";
                            readonly src: "5477:85:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 199;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "5498:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 201;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5529:20:0";
                                        readonly memberName: "IncompleteDeployment";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7689;
                                        readonly src: "5498:51:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 202;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5498:53:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 203;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5491:60:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 214;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 209;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 113;
                                        readonly src: "5665:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 207;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "5654:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 208;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5658:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5654:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 210;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5654:25:0";
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
                                    readonly id: 206;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "5644:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 211;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5644:36:0";
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
                                    readonly id: 212;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "5684:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 213;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5695:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "5684:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5644:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 221;
                        readonly nodeType: "IfStatement";
                        readonly src: "5640:148:0";
                        readonly trueBody: {
                            readonly id: 220;
                            readonly nodeType: "Block";
                            readonly src: "5707:81:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 215;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "5728:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 217;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5759:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7713;
                                        readonly src: "5728:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 218;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5728:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 219;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5721:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 227;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 223;
                                    readonly name: "_extraData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 115;
                                    readonly src: "5888:10:0";
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
                                    readonly id: 222;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "5878:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 224;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5878:21:0";
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
                                    readonly id: 225;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "5903:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 226;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5914:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18;
                                readonly src: "5903:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5878:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 234;
                        readonly nodeType: "IfStatement";
                        readonly src: "5874:139:0";
                        readonly trueBody: {
                            readonly id: 233;
                            readonly nodeType: "Block";
                            readonly src: "5929:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 228;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "5950:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 230;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5981:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7716;
                                        readonly src: "5950:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 231;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5950:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 232;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5943:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 236;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 113;
                                readonly src: "6306:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 235;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 793;
                                readonly src: "6289:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                };
                            };
                            readonly id: 237;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6289:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 238;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6289:31:0";
                    }, {
                        readonly assignments: readonly [243];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 243;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "6469:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 288;
                            readonly src: "6439:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 242;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 241;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["6439:11:0", "6451:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 7280;
                                    readonly src: "6439:22:0";
                                };
                                readonly referencedDeclaration: 7280;
                                readonly src: "6439:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 247;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 245;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 113;
                                readonly src: "6494:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 244;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 889;
                                readonly src: "6478:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$_t_struct$_PoolConfig_$7280_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 246;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6478:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6439:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 253;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 248;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 243;
                                    readonly src: "6518:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 250;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "6525:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7254;
                                readonly src: "6518:29:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 251;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "6550:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 252;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6561:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21;
                                readonly src: "6550:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6518:60:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 254;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6518:60:0";
                    }, {
                        readonly assignments: readonly [256];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 256;
                            readonly mutability: "mutable";
                            readonly name: "hyperdrive";
                            readonly nameLocation: "6676:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 288;
                            readonly src: "6668:18:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly typeName: {
                                readonly id: 255;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6668:7:0";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 275;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 261;
                                readonly name: "config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 243;
                                readonly src: "6747:6:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }, {
                                readonly id: 262;
                                readonly name: "_extraData";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 115;
                                readonly src: "6767:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 263;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "6791:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 264;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6802:7:0";
                                readonly memberName: "target0";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 27;
                                readonly src: "6791:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 265;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "6823:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 266;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6834:7:0";
                                readonly memberName: "target1";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 30;
                                readonly src: "6823:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 267;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "6855:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 268;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6866:7:0";
                                readonly memberName: "target2";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 33;
                                readonly src: "6855:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 269;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "6887:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 270;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6898:7:0";
                                readonly memberName: "target3";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 36;
                                readonly src: "6887:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 271;
                                    readonly name: "deployment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 124;
                                    readonly src: "6919:10:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment memory";
                                    };
                                };
                                readonly id: 272;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6930:7:0";
                                readonly memberName: "target4";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39;
                                readonly src: "6919:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 273;
                                readonly name: "_salt";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 117;
                                readonly src: "6951:5:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
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
                                        readonly id: 258;
                                        readonly name: "coreDeployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 43;
                                        readonly src: "6713:12:0";
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
                                        readonly id: 257;
                                        readonly name: "IHyperdriveCoreDeployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 7676;
                                        readonly src: "6689:23:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveCoreDeployer_$7676_$";
                                            readonly typeString: "type(contract IHyperdriveCoreDeployer)";
                                        };
                                    };
                                    readonly id: 259;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6689:37:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IHyperdriveCoreDeployer_$7676";
                                        readonly typeString: "contract IHyperdriveCoreDeployer";
                                    };
                                };
                                readonly id: 260;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6727:6:0";
                                readonly memberName: "deploy";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7675;
                                readonly src: "6689:44:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,address,address,address,address,address,bytes32) external returns (address)";
                                };
                            };
                            readonly id: 274;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6689:277:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6668:298:0";
                    }, {
                        readonly expression: {
                            readonly id: 284;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 276;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66;
                                            readonly src: "6976:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 280;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 277;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "6989:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 278;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6993:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6989:10:0";
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
                                        readonly src: "6976:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 281;
                                    readonly indexExpression: {
                                        readonly id: 279;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 110;
                                        readonly src: "7001:13:0";
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
                                    readonly src: "6976:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 282;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "7016:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 24;
                                readonly src: "6976:50:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 283;
                                readonly name: "hyperdrive";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 256;
                                readonly src: "7029:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6976:63:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 285;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6976:63:0";
                    }, {
                        readonly expression: {
                            readonly id: 286;
                            readonly name: "hyperdrive";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 256;
                            readonly src: "7057:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 121;
                        readonly id: 287;
                        readonly nodeType: "Return";
                        readonly src: "7050:17:0";
                    }];
                };
                readonly baseFunctions: readonly [7734];
                readonly documentation: {
                    readonly id: 108;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3959:420:0";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance.";
                };
                readonly functionSelector: "c47e90c4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deploy";
                readonly nameLocation: "4393:6:0";
                readonly parameters: {
                    readonly id: 118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 110;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "4417:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4409:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 109;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4409:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 113;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "4476:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4440:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 112;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 111;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["4440:11:0", "4452:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7241;
                                readonly src: "4440:28:0";
                            };
                            readonly referencedDeclaration: 7241;
                            readonly src: "4440:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 115;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "4512:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4499:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 114;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4499:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 117;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "4540:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4532:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 116;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4532:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4399:152:0";
                };
                readonly returnParameters: {
                    readonly id: 121;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 120;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4570:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 119;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4570:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4569:9:0";
                };
                readonly scope: 890;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 695;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7707:5917:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 694;
                    readonly nodeType: "Block";
                    readonly src: "7945:5679:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 308;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 306;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 299;
                                readonly src: "8200:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8216:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "8200:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 422;
                        readonly nodeType: "IfStatement";
                        readonly src: "8196:1789:0";
                        readonly trueBody: {
                            readonly id: 421;
                            readonly nodeType: "Block";
                            readonly src: "8219:1766:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 320;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 309;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "8397:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 312;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 310;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "8410:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 311;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "8414:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "8410:10:0";
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
                                                readonly src: "8397:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 314;
                                            readonly indexExpression: {
                                                readonly id: 313;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "8422:13:0";
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
                                            readonly src: "8397:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 315;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8437:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 15;
                                        readonly src: "8397:50:0";
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
                                            readonly id: 318;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "8459:1:0";
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
                                            readonly id: 317;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "8451:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                readonly typeString: "type(bytes32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 316;
                                                readonly name: "bytes32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "8451:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 319;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8451:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "8397:64:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 327;
                                readonly nodeType: "IfStatement";
                                readonly src: "8376:196:0";
                                readonly trueBody: {
                                    readonly id: 326;
                                    readonly nodeType: "Block";
                                    readonly src: "8476:96:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 321;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 7752;
                                                    readonly src: "8501:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 323;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "8532:23:0";
                                                readonly memberName: "DeploymentAlreadyExists";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7683;
                                                readonly src: "8501:54:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 324;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8501:56:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 325;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "8494:63:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 329;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 295;
                                        readonly src: "8723:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 328;
                                        readonly name: "_checkPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 793;
                                        readonly src: "8706:16:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$__$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
                                        };
                                    };
                                    readonly id: 330;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "8706:31:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 331;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8706:31:0";
                            }, {
                                readonly assignments: readonly [333];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 333;
                                    readonly mutability: "mutable";
                                    readonly name: "initialSharePrice";
                                    readonly nameLocation: "8863:17:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "8855:25:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 332;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8855:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 337;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 335;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 297;
                                        readonly src: "8910:10:0";
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
                                        readonly id: 334;
                                        readonly name: "_getInitialVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 801;
                                        readonly src: "8883:26:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_bytes_memory_ptr_$returns$_t_uint256_$";
                                            readonly typeString: "function (bytes memory) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 336;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "8883:38:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "8855:66:0";
                            }, {
                                readonly assignments: readonly [339];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 339;
                                    readonly mutability: "mutable";
                                    readonly name: "configHash";
                                    readonly nameLocation: "8943:10:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "8935:18:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 338;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8935:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 346;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 343;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 295;
                                            readonly src: "8977:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 341;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "8966:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 342;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8970:6:0";
                                            readonly memberName: "encode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "8966:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 344;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8966:25:0";
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
                                        readonly id: 340;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "8956:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 345;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "8956:36:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "8935:57:0";
                            }, {
                                readonly assignments: readonly [348];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 348;
                                    readonly mutability: "mutable";
                                    readonly name: "extraDataHash";
                                    readonly nameLocation: "9014:13:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "9006:21:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 347;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9006:7:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 352;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 350;
                                        readonly name: "_extraData";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 297;
                                        readonly src: "9040:10:0";
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
                                        readonly id: 349;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "9030:9:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 351;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9030:21:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9006:45:0";
                            }, {
                                readonly assignments: readonly [357];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 357;
                                    readonly mutability: "mutable";
                                    readonly name: "config_";
                                    readonly nameLocation: "9212:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "9182:37:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "memory";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig";
                                    };
                                    readonly typeName: {
                                        readonly id: 356;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 355;
                                            readonly name: "IHyperdrive.PoolConfig";
                                            readonly nameLocations: readonly ["9182:11:0", "9194:10:0"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 7280;
                                            readonly src: "9182:22:0";
                                        };
                                        readonly referencedDeclaration: 7280;
                                        readonly src: "9182:22:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 361;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 359;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 295;
                                        readonly src: "9255:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 358;
                                        readonly name: "_copyPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 889;
                                        readonly src: "9222:15:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$_t_struct$_PoolConfig_$7280_memory_ptr_$";
                                            readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                        };
                                    };
                                    readonly id: 360;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9222:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9182:100:0";
                            }, {
                                readonly expression: {
                                    readonly id: 366;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 362;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 357;
                                            readonly src: "9296:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        };
                                        readonly id: 364;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9304:22:0";
                                        readonly memberName: "initialVaultSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7254;
                                        readonly src: "9296:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 365;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 333;
                                        readonly src: "9329:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9296:50:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 367;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9296:50:0";
                            }, {
                                readonly expression: {
                                    readonly id: 377;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 368;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 304;
                                        readonly src: "9405:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 373;
                                            readonly name: "config_";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 357;
                                            readonly src: "9481:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 374;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 297;
                                            readonly src: "9506:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly id: 375;
                                            readonly name: "_salt";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 301;
                                            readonly src: "9534:5:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
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
                                                    readonly id: 370;
                                                    readonly name: "target0Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 46;
                                                    readonly src: "9440:15:0";
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
                                                    readonly id: 369;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 8259;
                                                    readonly src: "9414:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 371;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "9414:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8259";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 372;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9457:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 8258;
                                            readonly src: "9414:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
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
                                        readonly src: "9414:139:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "9405:148:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 378;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9405:148:0";
                            }, {
                                readonly expression: {
                                    readonly id: 387;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 379;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "9605:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 383;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 380;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "9618:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 381;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "9622:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9618:10:0";
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
                                                readonly src: "9605:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 384;
                                            readonly indexExpression: {
                                                readonly id: 382;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "9630:13:0";
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
                                            readonly src: "9605:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 385;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9645:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 15;
                                        readonly src: "9605:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 386;
                                        readonly name: "configHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 339;
                                        readonly src: "9658:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "9605:63:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 388;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9605:63:0";
                            }, {
                                readonly expression: {
                                    readonly id: 397;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 389;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "9682:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 393;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 390;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "9695:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 391;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "9699:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9695:10:0";
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
                                                readonly src: "9682:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 394;
                                            readonly indexExpression: {
                                                readonly id: 392;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "9707:13:0";
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
                                            readonly src: "9682:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 395;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9739:13:0";
                                        readonly memberName: "extraDataHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18;
                                        readonly src: "9682:70:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 396;
                                        readonly name: "extraDataHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 348;
                                        readonly src: "9755:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "9682:86:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 398;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9682:86:0";
                            }, {
                                readonly expression: {
                                    readonly id: 407;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 399;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "9782:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 403;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 400;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "9795:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 401;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "9799:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9795:10:0";
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
                                                readonly src: "9782:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 404;
                                            readonly indexExpression: {
                                                readonly id: 402;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "9807:13:0";
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
                                            readonly src: "9782:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 405;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9839:17:0";
                                        readonly memberName: "initialSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 21;
                                        readonly src: "9782:74:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 406;
                                        readonly name: "initialSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 333;
                                        readonly src: "9859:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9782:94:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 408;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9782:94:0";
                            }, {
                                readonly expression: {
                                    readonly id: 417;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 409;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "9890:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 413;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 410;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "9903:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 411;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "9907:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9903:10:0";
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
                                                readonly src: "9890:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 414;
                                            readonly indexExpression: {
                                                readonly id: 412;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "9915:13:0";
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
                                            readonly src: "9890:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 415;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9930:7:0";
                                        readonly memberName: "target0";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 27;
                                        readonly src: "9890:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 416;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 304;
                                        readonly src: "9940:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "9890:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 418;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9890:56:0";
                            }, {
                                readonly expression: {
                                    readonly id: 419;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 304;
                                    readonly src: "9968:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly functionReturnParameters: 305;
                                readonly id: 420;
                                readonly nodeType: "Return";
                                readonly src: "9961:13:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 434;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 423;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66;
                                            readonly src: "10134:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 426;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 424;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "10147:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 425;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10151:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "10147:10:0";
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
                                        readonly src: "10134:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 428;
                                    readonly indexExpression: {
                                        readonly id: 427;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 292;
                                        readonly src: "10159:13:0";
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
                                    readonly src: "10134:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 429;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10174:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "10134:50:0";
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
                                    readonly id: 432;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10196:1:0";
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
                                    readonly id: 431;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "10188:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 430;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "10188:7:0";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 433;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10188:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10134:64:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 441;
                        readonly nodeType: "IfStatement";
                        readonly src: "10130:157:0";
                        readonly trueBody: {
                            readonly id: 440;
                            readonly nodeType: "Block";
                            readonly src: "10200:87:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 435;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "10221:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 437;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10252:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7686;
                                        readonly src: "10221:53:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 438;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10221:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 439;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10214:62:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 455;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 445;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 295;
                                        readonly src: "10403:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 443;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "10392:3:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 444;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10396:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "10392:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 446;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10392:25:0";
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
                                    readonly id: 442;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "10382:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 447;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10382:36:0";
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
                                            readonly id: 448;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66;
                                            readonly src: "10434:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 451;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 449;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "10447:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 450;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10451:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "10447:10:0";
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
                                        readonly src: "10434:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 453;
                                    readonly indexExpression: {
                                        readonly id: 452;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 292;
                                        readonly src: "10459:13:0";
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
                                    readonly src: "10434:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 454;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10474:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "10434:50:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10382:102:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 462;
                        readonly nodeType: "IfStatement";
                        readonly src: "10365:211:0";
                        readonly trueBody: {
                            readonly id: 461;
                            readonly nodeType: "Block";
                            readonly src: "10495:81:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 456;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "10516:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 458;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10547:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7713;
                                        readonly src: "10516:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 459;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10516:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 460;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10509:56:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 473;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 464;
                                    readonly name: "_extraData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 297;
                                    readonly src: "10689:10:0";
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
                                    readonly id: 463;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "10679:9:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 465;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10679:21:0";
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
                                            readonly id: 466;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66;
                                            readonly src: "10716:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 469;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 467;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "10729:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 468;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10733:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "10729:10:0";
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
                                        readonly src: "10716:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 471;
                                    readonly indexExpression: {
                                        readonly id: 470;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 292;
                                        readonly src: "10741:13:0";
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
                                    readonly src: "10716:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 472;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10756:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18;
                                readonly src: "10716:53:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10679:90:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 480;
                        readonly nodeType: "IfStatement";
                        readonly src: "10662:202:0";
                        readonly trueBody: {
                            readonly id: 479;
                            readonly nodeType: "Block";
                            readonly src: "10780:84:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 474;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "10801:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 476;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10832:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7716;
                                        readonly src: "10801:50:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
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
                                    readonly src: "10801:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 478;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10794:59:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 482;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 295;
                                readonly src: "11157:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 481;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 793;
                                readonly src: "11140:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$__$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) view";
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
                            readonly src: "11140:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 484;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11140:31:0";
                    }, {
                        readonly assignments: readonly [489];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 489;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "11320:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 694;
                            readonly src: "11290:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 488;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 487;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["11290:11:0", "11302:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 7280;
                                    readonly src: "11290:22:0";
                                };
                                readonly referencedDeclaration: 7280;
                                readonly src: "11290:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 493;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 491;
                                readonly name: "_deployConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 295;
                                readonly src: "11345:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 490;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 889;
                                readonly src: "11329:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7241_memory_ptr_$returns$_t_struct$_PoolConfig_$7280_memory_ptr_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolDeployConfig memory) pure returns (struct IHyperdrive.PoolConfig memory)";
                                };
                            };
                            readonly id: 492;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11329:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11290:69:0";
                    }, {
                        readonly expression: {
                            readonly id: 504;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 494;
                                    readonly name: "config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 489;
                                    readonly src: "11369:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 496;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "11376:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7254;
                                readonly src: "11369:29:0";
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
                                            readonly id: 497;
                                            readonly name: "_deployments";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66;
                                            readonly src: "11401:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                            };
                                        };
                                        readonly id: 500;
                                        readonly indexExpression: {
                                            readonly expression: {
                                                readonly id: 498;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "11414:3:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 499;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11418:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "11414:10:0";
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
                                        readonly src: "11401:24:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                        };
                                    };
                                    readonly id: 502;
                                    readonly indexExpression: {
                                        readonly id: 501;
                                        readonly name: "_deploymentId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 292;
                                        readonly src: "11426:13:0";
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
                                    readonly src: "11401:39:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                    };
                                };
                                readonly id: 503;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "11454:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21;
                                readonly src: "11401:70:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11369:102:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 505;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11369:102:0";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 508;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 506;
                                readonly name: "_targetIndex";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 299;
                                readonly src: "11735:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 507;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "11751:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "11735:17:0";
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
                                readonly id: 552;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 550;
                                    readonly name: "_targetIndex";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 299;
                                    readonly src: "12180:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly hexValue: "32";
                                    readonly id: 551;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "12196:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_2_by_1";
                                        readonly typeString: "int_const 2";
                                    };
                                    readonly value: "2";
                                };
                                readonly src: "12180:17:0";
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
                                    readonly id: 596;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 594;
                                        readonly name: "_targetIndex";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 299;
                                        readonly src: "12625:12:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "33";
                                        readonly id: 595;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "12641:1:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "12625:17:0";
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
                                        readonly id: 640;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 638;
                                            readonly name: "_targetIndex";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 299;
                                            readonly src: "13070:12:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "34";
                                            readonly id: 639;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "13086:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_4_by_1";
                                                readonly typeString: "int_const 4";
                                            };
                                            readonly value: "4";
                                        };
                                        readonly src: "13070:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly falseBody: {
                                        readonly id: 687;
                                        readonly nodeType: "Block";
                                        readonly src: "13511:83:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 682;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 7752;
                                                        readonly src: "13532:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 684;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13563:18:0";
                                                    readonly memberName: "InvalidTargetIndex";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 7710;
                                                    readonly src: "13532:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
                                                    };
                                                };
                                                readonly id: 685;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "13532:51:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 686;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "13525:58:0";
                                        }];
                                    };
                                    readonly id: 688;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "13066:528:0";
                                    readonly trueBody: {
                                        readonly id: 681;
                                        readonly nodeType: "Block";
                                        readonly src: "13089:416:0";
                                        readonly statements: readonly [{
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                                readonly id: 652;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly expression: {
                                                        readonly baseExpression: {
                                                            readonly baseExpression: {
                                                                readonly id: 641;
                                                                readonly name: "_deployments";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 66;
                                                                readonly src: "13107:12:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                                };
                                                            };
                                                            readonly id: 644;
                                                            readonly indexExpression: {
                                                                readonly expression: {
                                                                    readonly id: 642;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "13120:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 643;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "13124:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13120:10:0";
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
                                                            readonly src: "13107:24:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                                readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                            };
                                                        };
                                                        readonly id: 646;
                                                        readonly indexExpression: {
                                                            readonly id: 645;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 292;
                                                            readonly src: "13132:13:0";
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
                                                        readonly src: "13107:39:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                        };
                                                    };
                                                    readonly id: 647;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13147:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 39;
                                                    readonly src: "13107:47:0";
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
                                                        readonly id: 650;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "13166:1:0";
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
                                                        readonly id: 649;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "13158:7:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 648;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "13158:7:0";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 651;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13158:10:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13107:61:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 659;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "13103:161:0";
                                            readonly trueBody: {
                                                readonly id: 658;
                                                readonly nodeType: "Block";
                                                readonly src: "13170:94:0";
                                                readonly statements: readonly [{
                                                    readonly errorCall: {
                                                        readonly arguments: readonly [];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [];
                                                            readonly expression: {
                                                                readonly id: 653;
                                                                readonly name: "IHyperdriveDeployerCoordinator";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 7752;
                                                                readonly src: "13195:30:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                                    readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                                };
                                                            };
                                                            readonly id: 655;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13226:21:0";
                                                            readonly memberName: "TargetAlreadyDeployed";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 7719;
                                                            readonly src: "13195:52:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                                readonly typeString: "function () pure";
                                                            };
                                                        };
                                                        readonly id: 656;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13195:54:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_tuple$__$";
                                                            readonly typeString: "tuple()";
                                                        };
                                                    };
                                                    readonly id: 657;
                                                    readonly nodeType: "RevertStatement";
                                                    readonly src: "13188:61:0";
                                                }];
                                            };
                                        }, {
                                            readonly expression: {
                                                readonly id: 669;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 660;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 304;
                                                    readonly src: "13277:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 665;
                                                        readonly name: "config";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 489;
                                                        readonly src: "13353:6:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                        };
                                                    }, {
                                                        readonly id: 666;
                                                        readonly name: "_extraData";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 297;
                                                        readonly src: "13377:10:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        };
                                                    }, {
                                                        readonly id: 667;
                                                        readonly name: "_salt";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 301;
                                                        readonly src: "13405:5:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
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
                                                                readonly id: 662;
                                                                readonly name: "target4Deployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 58;
                                                                readonly src: "13312:15:0";
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
                                                                readonly id: 661;
                                                                readonly name: "IHyperdriveTargetDeployer";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 8259;
                                                                readonly src: "13286:25:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$";
                                                                    readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                                };
                                                            };
                                                            readonly id: 663;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "13286:42:0";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8259";
                                                                readonly typeString: "contract IHyperdriveTargetDeployer";
                                                            };
                                                        };
                                                        readonly id: 664;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13329:6:0";
                                                        readonly memberName: "deploy";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 8258;
                                                        readonly src: "13286:49:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                            readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                        };
                                                    };
                                                    readonly id: 668;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "13286:138:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13277:147:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 670;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "13277:147:0";
                                        }, {
                                            readonly expression: {
                                                readonly id: 679;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly baseExpression: {
                                                            readonly baseExpression: {
                                                                readonly id: 671;
                                                                readonly name: "_deployments";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 66;
                                                                readonly src: "13438:12:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                                    readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                                };
                                                            };
                                                            readonly id: 675;
                                                            readonly indexExpression: {
                                                                readonly expression: {
                                                                    readonly id: 672;
                                                                    readonly name: "msg";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: -15;
                                                                    readonly src: "13451:3:0";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_magic_message";
                                                                        readonly typeString: "msg";
                                                                    };
                                                                };
                                                                readonly id: 673;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "13455:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13451:10:0";
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
                                                            readonly src: "13438:24:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                                readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                            };
                                                        };
                                                        readonly id: 676;
                                                        readonly indexExpression: {
                                                            readonly id: 674;
                                                            readonly name: "_deploymentId";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 292;
                                                            readonly src: "13463:13:0";
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
                                                        readonly src: "13438:39:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                        };
                                                    };
                                                    readonly id: 677;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "13478:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 39;
                                                    readonly src: "13438:47:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 678;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 304;
                                                    readonly src: "13488:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13438:56:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 680;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "13438:56:0";
                                        }];
                                    };
                                };
                                readonly id: 689;
                                readonly nodeType: "IfStatement";
                                readonly src: "12621:973:0";
                                readonly trueBody: {
                                    readonly id: 637;
                                    readonly nodeType: "Block";
                                    readonly src: "12644:416:0";
                                    readonly statements: readonly [{
                                        readonly condition: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                            readonly id: 608;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly baseExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 597;
                                                            readonly name: "_deployments";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 66;
                                                            readonly src: "12662:12:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                            };
                                                        };
                                                        readonly id: 600;
                                                        readonly indexExpression: {
                                                            readonly expression: {
                                                                readonly id: 598;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "12675:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 599;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "12679:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "12675:10:0";
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
                                                        readonly src: "12662:24:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                        };
                                                    };
                                                    readonly id: 602;
                                                    readonly indexExpression: {
                                                        readonly id: 601;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 292;
                                                        readonly src: "12687:13:0";
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
                                                    readonly src: "12662:39:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                    };
                                                };
                                                readonly id: 603;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12702:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 36;
                                                readonly src: "12662:47:0";
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
                                                    readonly id: 606;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "12721:1:0";
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
                                                    readonly id: 605;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "12713:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 604;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "12713:7:0";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 607;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12713:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "12662:61:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly id: 615;
                                        readonly nodeType: "IfStatement";
                                        readonly src: "12658:161:0";
                                        readonly trueBody: {
                                            readonly id: 614;
                                            readonly nodeType: "Block";
                                            readonly src: "12725:94:0";
                                            readonly statements: readonly [{
                                                readonly errorCall: {
                                                    readonly arguments: readonly [];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [];
                                                        readonly expression: {
                                                            readonly id: 609;
                                                            readonly name: "IHyperdriveDeployerCoordinator";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 7752;
                                                            readonly src: "12750:30:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                            };
                                                        };
                                                        readonly id: 611;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "12781:21:0";
                                                        readonly memberName: "TargetAlreadyDeployed";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 7719;
                                                        readonly src: "12750:52:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                            readonly typeString: "function () pure";
                                                        };
                                                    };
                                                    readonly id: 612;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "12750:54:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_tuple$__$";
                                                        readonly typeString: "tuple()";
                                                    };
                                                };
                                                readonly id: 613;
                                                readonly nodeType: "RevertStatement";
                                                readonly src: "12743:61:0";
                                            }];
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 625;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 616;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 304;
                                                readonly src: "12832:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly id: 621;
                                                    readonly name: "config";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 489;
                                                    readonly src: "12908:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                    };
                                                }, {
                                                    readonly id: 622;
                                                    readonly name: "_extraData";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 297;
                                                    readonly src: "12932:10:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }, {
                                                    readonly id: 623;
                                                    readonly name: "_salt";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 301;
                                                    readonly src: "12960:5:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
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
                                                            readonly id: 618;
                                                            readonly name: "target3Deployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 55;
                                                            readonly src: "12867:15:0";
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
                                                            readonly id: 617;
                                                            readonly name: "IHyperdriveTargetDeployer";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 8259;
                                                            readonly src: "12841:25:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$";
                                                                readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                            };
                                                        };
                                                        readonly id: 619;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "12841:42:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8259";
                                                            readonly typeString: "contract IHyperdriveTargetDeployer";
                                                        };
                                                    };
                                                    readonly id: 620;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12884:6:0";
                                                    readonly memberName: "deploy";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 8258;
                                                    readonly src: "12841:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                        readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                    };
                                                };
                                                readonly id: 624;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "12841:138:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "12832:147:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 626;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "12832:147:0";
                                    }, {
                                        readonly expression: {
                                            readonly id: 635;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly expression: {
                                                    readonly baseExpression: {
                                                        readonly baseExpression: {
                                                            readonly id: 627;
                                                            readonly name: "_deployments";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 66;
                                                            readonly src: "12993:12:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                                readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                            };
                                                        };
                                                        readonly id: 631;
                                                        readonly indexExpression: {
                                                            readonly expression: {
                                                                readonly id: 628;
                                                                readonly name: "msg";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -15;
                                                                readonly src: "13006:3:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_message";
                                                                    readonly typeString: "msg";
                                                                };
                                                            };
                                                            readonly id: 629;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13010:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13006:10:0";
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
                                                        readonly src: "12993:24:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                            readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                        };
                                                    };
                                                    readonly id: 632;
                                                    readonly indexExpression: {
                                                        readonly id: 630;
                                                        readonly name: "_deploymentId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 292;
                                                        readonly src: "13018:13:0";
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
                                                    readonly src: "12993:39:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                        readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                    };
                                                };
                                                readonly id: 633;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly memberLocation: "13033:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 36;
                                                readonly src: "12993:47:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 634;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 304;
                                                readonly src: "13043:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "12993:56:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 636;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "12993:56:0";
                                    }];
                                };
                            };
                            readonly id: 690;
                            readonly nodeType: "IfStatement";
                            readonly src: "12176:1418:0";
                            readonly trueBody: {
                                readonly id: 593;
                                readonly nodeType: "Block";
                                readonly src: "12199:416:0";
                                readonly statements: readonly [{
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 564;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly baseExpression: {
                                                        readonly id: 553;
                                                        readonly name: "_deployments";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 66;
                                                        readonly src: "12217:12:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                        };
                                                    };
                                                    readonly id: 556;
                                                    readonly indexExpression: {
                                                        readonly expression: {
                                                            readonly id: 554;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "12230:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 555;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "12234:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "12230:10:0";
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
                                                    readonly src: "12217:24:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                    };
                                                };
                                                readonly id: 558;
                                                readonly indexExpression: {
                                                    readonly id: 557;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 292;
                                                    readonly src: "12242:13:0";
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
                                                readonly src: "12217:39:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                };
                                            };
                                            readonly id: 559;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12257:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 33;
                                            readonly src: "12217:47:0";
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
                                                readonly id: 562;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "12276:1:0";
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
                                                readonly id: 561;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "12268:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 560;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "12268:7:0";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 563;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12268:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12217:61:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 571;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "12213:161:0";
                                    readonly trueBody: {
                                        readonly id: 570;
                                        readonly nodeType: "Block";
                                        readonly src: "12280:94:0";
                                        readonly statements: readonly [{
                                            readonly errorCall: {
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly id: 565;
                                                        readonly name: "IHyperdriveDeployerCoordinator";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 7752;
                                                        readonly src: "12305:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 567;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12336:21:0";
                                                    readonly memberName: "TargetAlreadyDeployed";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 7719;
                                                    readonly src: "12305:52:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                        readonly typeString: "function () pure";
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
                                                readonly src: "12305:54:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 569;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "12298:61:0";
                                        }];
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 581;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 572;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 304;
                                            readonly src: "12387:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 577;
                                                readonly name: "config";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 489;
                                                readonly src: "12463:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                };
                                            }, {
                                                readonly id: 578;
                                                readonly name: "_extraData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 297;
                                                readonly src: "12487:10:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly id: 579;
                                                readonly name: "_salt";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 301;
                                                readonly src: "12515:5:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
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
                                                        readonly id: 574;
                                                        readonly name: "target2Deployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 52;
                                                        readonly src: "12422:15:0";
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
                                                        readonly id: 573;
                                                        readonly name: "IHyperdriveTargetDeployer";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 8259;
                                                        readonly src: "12396:25:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$";
                                                            readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                        };
                                                    };
                                                    readonly id: 575;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "12396:42:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8259";
                                                        readonly typeString: "contract IHyperdriveTargetDeployer";
                                                    };
                                                };
                                                readonly id: 576;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12439:6:0";
                                                readonly memberName: "deploy";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 8258;
                                                readonly src: "12396:49:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                                };
                                            };
                                            readonly id: 580;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12396:138:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12387:147:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 582;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "12387:147:0";
                                }, {
                                    readonly expression: {
                                        readonly id: 591;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly baseExpression: {
                                                        readonly id: 583;
                                                        readonly name: "_deployments";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 66;
                                                        readonly src: "12548:12:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                            readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                        };
                                                    };
                                                    readonly id: 587;
                                                    readonly indexExpression: {
                                                        readonly expression: {
                                                            readonly id: 584;
                                                            readonly name: "msg";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -15;
                                                            readonly src: "12561:3:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_message";
                                                                readonly typeString: "msg";
                                                            };
                                                        };
                                                        readonly id: 585;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "12565:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "12561:10:0";
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
                                                    readonly src: "12548:24:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                        readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                    };
                                                };
                                                readonly id: 588;
                                                readonly indexExpression: {
                                                    readonly id: 586;
                                                    readonly name: "_deploymentId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 292;
                                                    readonly src: "12573:13:0";
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
                                                readonly src: "12548:39:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                    readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                                };
                                            };
                                            readonly id: 589;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly memberLocation: "12588:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 33;
                                            readonly src: "12548:47:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly id: 590;
                                            readonly name: "target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 304;
                                            readonly src: "12598:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12548:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 592;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "12548:56:0";
                                }];
                            };
                        };
                        readonly id: 691;
                        readonly nodeType: "IfStatement";
                        readonly src: "11731:1863:0";
                        readonly trueBody: {
                            readonly id: 549;
                            readonly nodeType: "Block";
                            readonly src: "11754:416:0";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 520;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 509;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "11772:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 512;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 510;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "11785:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 511;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "11789:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "11785:10:0";
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
                                                readonly src: "11772:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 514;
                                            readonly indexExpression: {
                                                readonly id: 513;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "11797:13:0";
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
                                            readonly src: "11772:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 515;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11812:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 30;
                                        readonly src: "11772:47:0";
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
                                            readonly id: 518;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "11831:1:0";
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
                                            readonly id: 517;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "11823:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 516;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "11823:7:0";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 519;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "11823:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "11772:61:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 527;
                                readonly nodeType: "IfStatement";
                                readonly src: "11768:161:0";
                                readonly trueBody: {
                                    readonly id: 526;
                                    readonly nodeType: "Block";
                                    readonly src: "11835:94:0";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 521;
                                                    readonly name: "IHyperdriveDeployerCoordinator";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 7752;
                                                    readonly src: "11860:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 523;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "11891:21:0";
                                                readonly memberName: "TargetAlreadyDeployed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7719;
                                                readonly src: "11860:52:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 524;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "11860:54:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 525;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "11853:61:0";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 537;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 528;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 304;
                                        readonly src: "11942:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 533;
                                            readonly name: "config";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 489;
                                            readonly src: "12018:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 534;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 297;
                                            readonly src: "12042:10:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly id: 535;
                                            readonly name: "_salt";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 301;
                                            readonly src: "12070:5:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
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
                                                    readonly id: 530;
                                                    readonly name: "target1Deployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 49;
                                                    readonly src: "11977:15:0";
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
                                                    readonly id: 529;
                                                    readonly name: "IHyperdriveTargetDeployer";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 8259;
                                                    readonly src: "11951:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8259_$";
                                                        readonly typeString: "type(contract IHyperdriveTargetDeployer)";
                                                    };
                                                };
                                                readonly id: 531;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "11951:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8259";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 532;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11994:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 8258;
                                            readonly src: "11951:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7280_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
                                                readonly typeString: "function (struct IHyperdrive.PoolConfig memory,bytes memory,bytes32) external returns (address)";
                                            };
                                        };
                                        readonly id: 536;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "11951:138:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "11942:147:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 538;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "11942:147:0";
                            }, {
                                readonly expression: {
                                    readonly id: 547;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly baseExpression: {
                                                readonly baseExpression: {
                                                    readonly id: 539;
                                                    readonly name: "_deployments";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66;
                                                    readonly src: "12103:12:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                                    };
                                                };
                                                readonly id: 543;
                                                readonly indexExpression: {
                                                    readonly expression: {
                                                        readonly id: 540;
                                                        readonly name: "msg";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -15;
                                                        readonly src: "12116:3:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_message";
                                                            readonly typeString: "msg";
                                                        };
                                                    };
                                                    readonly id: 541;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12120:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12116:10:0";
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
                                                readonly src: "12103:24:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                                };
                                            };
                                            readonly id: 544;
                                            readonly indexExpression: {
                                                readonly id: 542;
                                                readonly name: "_deploymentId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 292;
                                                readonly src: "12128:13:0";
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
                                            readonly src: "12103:39:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                                            };
                                        };
                                        readonly id: 545;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "12143:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 30;
                                        readonly src: "12103:47:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 546;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 304;
                                        readonly src: "12153:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12103:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 548;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12103:56:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 692;
                            readonly name: "target";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 304;
                            readonly src: "13611:6:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 305;
                        readonly id: 693;
                        readonly nodeType: "Return";
                        readonly src: "13604:13:0";
                    }];
                };
                readonly baseFunctions: readonly [7751];
                readonly documentation: {
                    readonly id: 290;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7080:622:0";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "7cc39092";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployTarget";
                readonly nameLocation: "7716:12:0";
                readonly parameters: {
                    readonly id: 302;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 292;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "7746:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7738:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 291;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7738:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 295;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "7805:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7769:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 294;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 293;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["7769:11:0", "7781:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7241;
                                readonly src: "7769:28:0";
                            };
                            readonly referencedDeclaration: 7241;
                            readonly src: "7769:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 297;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "7841:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7828:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 296;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7828:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 299;
                        readonly mutability: "mutable";
                        readonly name: "_targetIndex";
                        readonly nameLocation: "7869:12:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7861:20:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 298;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7861:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 301;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "7899:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7891:13:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 300;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7891:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7728:182:0";
                };
                readonly returnParameters: {
                    readonly id: 305;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 304;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "7937:6:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7929:14:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 303;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7929:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7928:16:0";
                };
                readonly scope: 890;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 713;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13830:189:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 712;
                    readonly nodeType: "Block";
                    readonly src: "13957:62:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly baseExpression: {
                                    readonly id: 706;
                                    readonly name: "_deployments";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66;
                                    readonly src: "13974:12:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$_$";
                                        readonly typeString: "mapping(address => mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref))";
                                    };
                                };
                                readonly id: 708;
                                readonly indexExpression: {
                                    readonly id: 707;
                                    readonly name: "_deployer";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 698;
                                    readonly src: "13987:9:0";
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
                                readonly src: "13974:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_bytes32_$_t_struct$_Deployment_$40_storage_$";
                                    readonly typeString: "mapping(bytes32 => struct HyperdriveDeployerCoordinator.Deployment storage ref)";
                                };
                            };
                            readonly id: 710;
                            readonly indexExpression: {
                                readonly id: 709;
                                readonly name: "_deploymentId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 700;
                                readonly src: "13998:13:0";
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
                            readonly src: "13974:38:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly functionReturnParameters: 705;
                        readonly id: 711;
                        readonly nodeType: "Return";
                        readonly src: "13967:45:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 696;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13630:195:0";
                    readonly text: "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment.";
                };
                readonly functionSelector: "20503b3f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployments";
                readonly nameLocation: "13839:11:0";
                readonly parameters: {
                    readonly id: 701;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 698;
                        readonly mutability: "mutable";
                        readonly name: "_deployer";
                        readonly nameLocation: "13868:9:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 713;
                        readonly src: "13860:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 697;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13860:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 700;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "13895:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 713;
                        readonly src: "13887:21:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 699;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13887:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13850:64:0";
                };
                readonly returnParameters: {
                    readonly id: 705;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 704;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 713;
                        readonly src: "13938:17:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Deployment_$40_memory_ptr";
                            readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                        };
                        readonly typeName: {
                            readonly id: 703;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 702;
                                readonly name: "Deployment";
                                readonly nameLocations: readonly ["13938:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 40;
                                readonly src: "13938:10:0";
                            };
                            readonly referencedDeclaration: 40;
                            readonly src: "13938:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13937:19:0";
                };
                readonly scope: 890;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 793;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14174:1195:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 792;
                    readonly nodeType: "Block";
                    readonly src: "14287:1082:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 723;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 720;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 717;
                                    readonly src: "14438:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 721;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14452:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7218;
                                readonly src: "14438:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "316533";
                                readonly id: 722;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "14475:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1000_by_1";
                                    readonly typeString: "int_const 1000";
                                };
                                readonly value: "1e3";
                            };
                            readonly src: "14438:40:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 730;
                        readonly nodeType: "IfStatement";
                        readonly src: "14434:138:0";
                        readonly trueBody: {
                            readonly id: 729;
                            readonly nodeType: "Block";
                            readonly src: "14480:92:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 724;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "14501:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 726;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14532:27:0";
                                        readonly memberName: "InvalidMinimumShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7701;
                                        readonly src: "14501:58:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 727;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "14501:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 728;
                                readonly nodeType: "RevertStatement";
                                readonly src: "14494:67:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 734;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 731;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 717;
                                    readonly src: "14586:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 732;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14600:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7227;
                                readonly src: "14586:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 733;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "14622:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "14586:37:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 741;
                        readonly nodeType: "IfStatement";
                        readonly src: "14582:133:0";
                        readonly trueBody: {
                            readonly id: 740;
                            readonly nodeType: "Block";
                            readonly src: "14625:90:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 735;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "14646:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 737;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14677:25:0";
                                        readonly memberName: "InvalidCheckpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7695;
                                        readonly src: "14646:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 738;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "14646:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 739;
                                readonly nodeType: "RevertStatement";
                                readonly src: "14639:65:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 754;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 746;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 742;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 717;
                                        readonly src: "14741:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 743;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14755:16:0";
                                    readonly memberName: "positionDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7224;
                                    readonly src: "14741:30:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 744;
                                        readonly name: "_deployConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 717;
                                        readonly src: "14774:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 745;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14788:18:0";
                                    readonly memberName: "checkpointDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7227;
                                    readonly src: "14774:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "14741:65:0";
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
                                readonly id: 753;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 751;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 747;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 717;
                                            readonly src: "14822:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 748;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14836:16:0";
                                        readonly memberName: "positionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7224;
                                        readonly src: "14822:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "%";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly id: 749;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 717;
                                            readonly src: "14855:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 750;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14869:18:0";
                                        readonly memberName: "checkpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7227;
                                        readonly src: "14855:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "14822:65:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 752;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "14903:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "14822:82:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "14741:163:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 761;
                        readonly nodeType: "IfStatement";
                        readonly src: "14724:279:0";
                        readonly trueBody: {
                            readonly id: 760;
                            readonly nodeType: "Block";
                            readonly src: "14915:88:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 755;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "14936:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 757;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14967:23:0";
                                        readonly memberName: "InvalidPositionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7707;
                                        readonly src: "14936:54:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 758;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "14936:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 759;
                                readonly nodeType: "RevertStatement";
                                readonly src: "14929:63:0";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 784;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
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
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 772;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 766;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 762;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 717;
                                                    readonly src: "15081:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 763;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "15095:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7240;
                                                readonly src: "15081:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 764;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15100:5:0";
                                            readonly memberName: "curve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7195;
                                            readonly src: "15081:24:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly hexValue: "31653138";
                                            readonly id: 765;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "15108:4:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        };
                                        readonly src: "15081:31:0";
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
                                        readonly id: 771;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 767;
                                                    readonly name: "_deployConfig";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 717;
                                                    readonly src: "15128:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 768;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "15142:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7240;
                                                readonly src: "15128:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 769;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15147:4:0";
                                            readonly memberName: "flat";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7198;
                                            readonly src: "15128:23:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly hexValue: "31653138";
                                            readonly id: 770;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "15154:4:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        };
                                        readonly src: "15128:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "15081:77:0";
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
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 773;
                                                readonly name: "_deployConfig";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 717;
                                                readonly src: "15174:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                };
                                            };
                                            readonly id: 774;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15188:4:0";
                                            readonly memberName: "fees";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7240;
                                            readonly src: "15174:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        };
                                        readonly id: 775;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15193:12:0";
                                        readonly memberName: "governanceLP";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7201;
                                        readonly src: "15174:31:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly hexValue: "31653138";
                                        readonly id: 776;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "15208:4:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                            readonly typeString: "int_const 1000000000000000000";
                                        };
                                        readonly value: "1e18";
                                    };
                                    readonly src: "15174:38:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "15081:131:0";
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
                                readonly id: 783;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly id: 779;
                                            readonly name: "_deployConfig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 717;
                                            readonly src: "15228:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 780;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15242:4:0";
                                        readonly memberName: "fees";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7240;
                                        readonly src: "15228:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        };
                                    };
                                    readonly id: 781;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15247:16:0";
                                    readonly memberName: "governanceZombie";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7204;
                                    readonly src: "15228:35:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "31653138";
                                    readonly id: 782;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "15266:4:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                        readonly typeString: "int_const 1000000000000000000";
                                    };
                                    readonly value: "1e18";
                                };
                                readonly src: "15228:42:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "15081:189:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 791;
                        readonly nodeType: "IfStatement";
                        readonly src: "15064:299:0";
                        readonly trueBody: {
                            readonly id: 790;
                            readonly nodeType: "Block";
                            readonly src: "15281:82:0";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 785;
                                            readonly name: "IHyperdriveDeployerCoordinator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7752;
                                            readonly src: "15302:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7752_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 787;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15333:17:0";
                                        readonly memberName: "InvalidFeeAmounts";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7698;
                                        readonly src: "15302:48:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 788;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15302:50:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 789;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15295:57:0";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 714;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14025:144:0";
                    readonly text: "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkPoolConfig";
                readonly nameLocation: "14183:16:0";
                readonly parameters: {
                    readonly id: 718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 717;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "14245:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 793;
                        readonly src: "14209:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 716;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 715;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["14209:11:0", "14221:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7241;
                                readonly src: "14209:28:0";
                            };
                            readonly referencedDeclaration: 7241;
                            readonly src: "14209:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14199:65:0";
                };
                readonly returnParameters: {
                    readonly id: 719;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14287:0:0";
                };
                readonly scope: 890;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 801;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15589:115:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 794;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15375:209:0";
                    readonly text: "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getInitialVaultSharePrice";
                readonly nameLocation: "15598:26:0";
                readonly parameters: {
                    readonly id: 797;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 796;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "15647:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 801;
                        readonly src: "15634:23:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 795;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15634:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15624:39:0";
                };
                readonly returnParameters: {
                    readonly id: 800;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 799;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 801;
                        readonly src: "15695:7:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 798;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15695:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15694:9:0";
                };
                readonly scope: 890;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 889;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15920:926:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 888;
                    readonly nodeType: "Block";
                    readonly src: "16072:774:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 816;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 811;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16149:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 813;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16157:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7245;
                                readonly src: "16149:17:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 814;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16169:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 815;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16183:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7209;
                                readonly src: "16169:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "16149:43:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 817;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16149:43:0";
                    }, {
                        readonly expression: {
                            readonly id: 823;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 818;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16202:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 820;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16210:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7248;
                                readonly src: "16202:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 821;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16226:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 822;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16240:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7212;
                                readonly src: "16226:27:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16202:51:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 824;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16202:51:0";
                    }, {
                        readonly expression: {
                            readonly id: 830;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 825;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16263:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 827;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16271:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7251;
                                readonly src: "16263:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 828;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16288:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 829;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16302:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7215;
                                readonly src: "16288:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "16263:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 831;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16263:53:0";
                    }, {
                        readonly expression: {
                            readonly id: 837;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 832;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16326:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 834;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16334:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7257;
                                readonly src: "16326:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 835;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16357:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 836;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16371:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7218;
                                readonly src: "16357:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16326:65:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 838;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16326:65:0";
                    }, {
                        readonly expression: {
                            readonly id: 844;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 839;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16401:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 841;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16409:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7260;
                                readonly src: "16401:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 842;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16436:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 843;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16463:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7221;
                                readonly src: "16436:51:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16401:86:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 845;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16401:86:0";
                    }, {
                        readonly expression: {
                            readonly id: 851;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 846;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16497:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 848;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16505:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7263;
                                readonly src: "16497:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 849;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16524:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 850;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16538:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7224;
                                readonly src: "16524:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16497:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 852;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16497:57:0";
                    }, {
                        readonly expression: {
                            readonly id: 858;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 853;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16564:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 855;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16572:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7266;
                                readonly src: "16564:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 856;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16593:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 857;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16607:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7227;
                                readonly src: "16593:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16564:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 859;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16564:61:0";
                    }, {
                        readonly expression: {
                            readonly id: 865;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 860;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16635:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 862;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16643:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7269;
                                readonly src: "16635:19:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 863;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16657:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 864;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16671:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7230;
                                readonly src: "16657:25:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16635:47:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 866;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16635:47:0";
                    }, {
                        readonly expression: {
                            readonly id: 872;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 867;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16692:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 869;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16700:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7272;
                                readonly src: "16692:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 870;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16713:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 871;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16727:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7233;
                                readonly src: "16713:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16692:45:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 873;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16692:45:0";
                    }, {
                        readonly expression: {
                            readonly id: 879;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 874;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16747:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 876;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16755:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7275;
                                readonly src: "16747:20:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 877;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16770:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 878;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16784:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7236;
                                readonly src: "16770:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16747:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 880;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16747:49:0";
                    }, {
                        readonly expression: {
                            readonly id: 886;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 881;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 809;
                                    readonly src: "16806:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 883;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16814:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7279;
                                readonly src: "16806:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 884;
                                    readonly name: "_deployConfig";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 805;
                                    readonly src: "16821:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 885;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16835:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7240;
                                readonly src: "16821:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly src: "16806:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        };
                        readonly id: 887;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16806:33:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 802;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15710:205:0";
                    readonly text: "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_copyPoolConfig";
                readonly nameLocation: "15929:15:0";
                readonly parameters: {
                    readonly id: 806;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 805;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "15990:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 889;
                        readonly src: "15954:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 804;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 803;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["15954:11:0", "15966:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7241;
                                readonly src: "15954:28:0";
                            };
                            readonly referencedDeclaration: 7241;
                            readonly src: "15954:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7241_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15944:65:0";
                };
                readonly returnParameters: {
                    readonly id: 810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 809;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "16063:7:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 889;
                        readonly src: "16033:37:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 808;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 807;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["16033:11:0", "16045:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7280;
                                readonly src: "16033:22:0";
                            };
                            readonly referencedDeclaration: 7280;
                            readonly src: "16033:22:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16032:39:0";
                };
                readonly scope: 890;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 11;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nameLocations: readonly ["946:30:0"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7752;
                    readonly src: "946:30:0";
                };
                readonly id: 12;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "946:30:0";
            }];
            readonly canonicalName: "HyperdriveDeployerCoordinator";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 10;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "399:492:0";
                readonly text: "@author DELV\n @title HyperdriveDeployerCoordinator\n @notice This Hyperdrive deployer coordinates the process of deploying the\n         Hyperdrive system utilizing several child deployers.\n @dev We use multiple deployers to avoid the maximum code size.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [890, 7752];
            readonly name: "HyperdriveDeployerCoordinator";
            readonly nameLocation: "909:29:0";
            readonly scope: 891;
            readonly usedErrors: readonly [7683, 7686, 7689, 7692, 7695, 7698, 7701, 7704, 7707, 7710, 7713, 7716, 7719];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 0;
};
//# sourceMappingURL=HyperdriveDeployerCoordinator.d.ts.map