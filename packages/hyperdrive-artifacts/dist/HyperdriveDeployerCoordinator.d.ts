export declare const HyperdriveDeployerCoordinator: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "coreDeployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deploy";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployConfig";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "_extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployTarget";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployConfig";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolDeployConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "_extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_targetIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployments";
        readonly inputs: readonly [{
            readonly name: "_deployer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct HyperdriveDeployerCoordinator.Deployment";
            readonly components: readonly [{
                readonly name: "configHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "extraDataHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "initialSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hyperdrive";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "target0";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "target1";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "target2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "target3";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "target4";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target0Deployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target1Deployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target2Deployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target3Deployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target4Deployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "DeploymentAlreadyExists";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DeploymentDoesNotExist";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "HyperdriveAlreadyDeployed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IncompleteDeployment";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeAmounts";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinimumShareReserves";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinimumTransactionAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTargetIndex";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MismatchedConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MismatchedExtraData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TargetAlreadyDeployed";
        readonly inputs: readonly [];
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"coreDeployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deployer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"}],\"name\":\"deployments\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32\",\"name\":\"configHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"extraDataHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target4\",\"type\":\"address\"}],\"internalType\":\"struct HyperdriveDeployerCoordinator.Deployment\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4Deployer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"We use multiple deployers to avoid the maximum code size.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_coreDeployer\":\"The core deployer.\",\"_target0Deployer\":\"The target0 deployer.\",\"_target1Deployer\":\"The target1 deployer.\",\"_target2Deployer\":\"The target2 deployer.\",\"_target4Deployer\":\"The target4 deployer.\"}},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed ERC4626Hyperdrive Instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"target\":\"The address of the newly deployed target instance.\"}},\"deployments(address,bytes32)\":{\"params\":{\"_deployer\":\"The deployer.\",\"_deploymentId\":\"The deployment ID.\"},\"returns\":{\"_0\":\"The deployment.\"}}},\"title\":\"HyperdriveDeployerCoordinator\",\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}]},\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the deployer coordinator.\"},\"coreDeployer()\":{\"notice\":\"The contract used to deploy new instances of Hyperdrive.\"},\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"deployments(address,bytes32)\":{\"notice\":\"Gets the deployment specified by the deployer and deployment ID.\"},\"target0Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget0.\"},\"target1Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget1.\"},\"target2Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget2.\"},\"target3Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget3.\"},\"target4Deployer()\":{\"notice\":\"The contract used to deploy new instances of HyperdriveTarget4.\"}},\"notice\":\"This Hyperdrive deployer coordinates the process of deploying the         Hyperdrive system utilizing several child deployers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":\"HyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/deployers/HyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xd66a53192300bd9ea8bec7161b75e261ec7602da46aa0335e58c73796ac9d8b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2f42ba33be4605580eaa2d1409b651751c898fe06d1ea256778e1c267d5f324e\",\"dweb:/ipfs/QmWL1Adbkk6xBzbGCdcJsLwR4e1AEMDKidzFKE6yo2AdSb\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveCoreDeployer.sol\":{\"keccak256\":\"0xa2c8fb3fbe929450758642a88fe1076e64c480ca7583d5f10f9a916a4dfbb3fb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://edd0a39abeedf46c20295fae53d7b41a21b6ca88dbf5a9ace0075cfb37ea2c1a\",\"dweb:/ipfs/QmedBMesHL8VfhThvdzCTMFwZA1TATz8K2R1VhHsM2CtfK\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x07b5c27304387f7fc0ca70e0e93dd233810b50536b902eade119d7166a90a13e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0ca7fb16084139214fc7ac866cc0222ef2958b895298a944c442bdb99fcb2f65\",\"dweb:/ipfs/QmX44bxd2c82k32Z4fgnv2kJHZBVqVqwuFhUvrUsgBZ8Vc\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0xd8d3188dd4ceaa7510a658880ac3e6b90d030b1611f87a3911e876d7638d9dc7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d2f1dca6f5ace4e89ce0e78fd26cdc0dd52ed1216a08e66cfc57e832571cfdb7\",\"dweb:/ipfs/QmeHqkzAnLZSCLtWY4rqdcJMrsraZ66kMBvygojsVQZe8U\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}";
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
                            readonly _0: "The address of the newly deployed ERC4626Hyperdrive Instance.";
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
                readonly keccak256: "0xd66a53192300bd9ea8bec7161b75e261ec7602da46aa0335e58c73796ac9d8b3";
                readonly urls: readonly ["bzz-raw://2f42ba33be4605580eaa2d1409b651751c898fe06d1ea256778e1c267d5f324e", "dweb:/ipfs/QmWL1Adbkk6xBzbGCdcJsLwR4e1AEMDKidzFKE6yo2AdSb"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3";
                readonly urls: readonly ["bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398", "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16";
                readonly urls: readonly ["bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240", "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97";
                readonly urls: readonly ["bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1", "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCoreDeployer.sol": {
                readonly keccak256: "0xa2c8fb3fbe929450758642a88fe1076e64c480ca7583d5f10f9a916a4dfbb3fb";
                readonly urls: readonly ["bzz-raw://edd0a39abeedf46c20295fae53d7b41a21b6ca88dbf5a9ace0075cfb37ea2c1a", "dweb:/ipfs/QmedBMesHL8VfhThvdzCTMFwZA1TATz8K2R1VhHsM2CtfK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                readonly keccak256: "0x07b5c27304387f7fc0ca70e0e93dd233810b50536b902eade119d7166a90a13e";
                readonly urls: readonly ["bzz-raw://0ca7fb16084139214fc7ac866cc0222ef2958b895298a944c442bdb99fcb2f65", "dweb:/ipfs/QmX44bxd2c82k32Z4fgnv2kJHZBVqVqwuFhUvrUsgBZ8Vc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd";
                readonly urls: readonly ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597";
                readonly urls: readonly ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveTargetDeployer.sol": {
                readonly keccak256: "0xd8d3188dd4ceaa7510a658880ac3e6b90d030b1611f87a3911e876d7638d9dc7";
                readonly urls: readonly ["bzz-raw://d2f1dca6f5ace4e89ce0e78fd26cdc0dd52ed1216a08e66cfc57e832571cfdb7", "dweb:/ipfs/QmeHqkzAnLZSCLtWY4rqdcJMrsraZ66kMBvygojsVQZe8U"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a";
                readonly urls: readonly ["bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3", "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002";
                readonly urls: readonly ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191";
                readonly urls: readonly ["bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd", "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868";
                readonly urls: readonly ["bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb", "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"];
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
            readonly IHyperdrive: readonly [7411];
            readonly IHyperdriveCoreDeployer: readonly [7598];
            readonly IHyperdriveDeployerCoordinator: readonly [7673];
            readonly IHyperdriveTargetDeployer: readonly [8099];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:16817:0";
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
            readonly sourceUnit: 7412;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 2;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7411;
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
            readonly sourceUnit: 7599;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4;
                    readonly name: "IHyperdriveCoreDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7598;
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
            readonly sourceUnit: 7674;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6;
                    readonly name: "IHyperdriveDeployerCoordinator";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7673;
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
            readonly sourceUnit: 8100;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8;
                    readonly name: "IHyperdriveTargetDeployer";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8099;
                    readonly src: "318:25:0";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 890;
            readonly nodeType: "ContractDefinition";
            readonly src: "891:15964:0";
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
                readonly src: "4391:2690:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 288;
                    readonly nodeType: "Block";
                    readonly src: "4586:2495:0";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [124];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 124;
                            readonly mutability: "mutable";
                            readonly name: "deployment";
                            readonly nameLocation: "4694:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 288;
                            readonly src: "4676:28:0";
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
                                    readonly nameLocations: readonly ["4676:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 40;
                                    readonly src: "4676:10:0";
                                };
                                readonly referencedDeclaration: 40;
                                readonly src: "4676:10:0";
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
                                    readonly src: "4707:12:0";
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
                                        readonly src: "4720:3:0";
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
                                    readonly memberLocation: "4724:6:0";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4720:10:0";
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
                                readonly src: "4707:24:0";
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
                                readonly src: "4732:13:0";
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
                            readonly src: "4707:39:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4676:70:0";
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
                                    readonly src: "4760:10:0";
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
                                readonly memberLocation: "4771:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 24;
                                readonly src: "4760:21:0";
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
                                    readonly src: "4793:1:0";
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
                                    readonly src: "4785:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 134;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4785:7:0";
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
                                readonly src: "4785:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4760:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145;
                        readonly nodeType: "IfStatement";
                        readonly src: "4756:131:0";
                        readonly trueBody: {
                            readonly id: 144;
                            readonly nodeType: "Block";
                            readonly src: "4797:90:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "4818:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 141;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4849:25:0";
                                        readonly memberName: "HyperdriveAlreadyDeployed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7614;
                                        readonly src: "4818:56:0";
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
                                    readonly src: "4818:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 143;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4811:65:0";
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
                                    readonly src: "5036:10:0";
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
                                readonly memberLocation: "5047:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "5036:21:0";
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
                                    readonly src: "5069:1:0";
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
                                    readonly src: "5061:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 148;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5061:7:0";
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
                                readonly src: "5061:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5036:35:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 159;
                        readonly nodeType: "IfStatement";
                        readonly src: "5032:128:0";
                        readonly trueBody: {
                            readonly id: 158;
                            readonly nodeType: "Block";
                            readonly src: "5073:87:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "5094:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 155;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5125:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7608;
                                        readonly src: "5094:53:0";
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
                                    readonly src: "5094:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 157;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5087:62:0";
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
                                                    readonly src: "5249:10:0";
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
                                                readonly memberLocation: "5260:7:0";
                                                readonly memberName: "target0";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 27;
                                                readonly src: "5249:18:0";
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
                                                    readonly src: "5279:1:0";
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
                                                    readonly src: "5271:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 162;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5271:7:0";
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
                                                readonly src: "5271:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "5249:32:0";
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
                                                    readonly src: "5297:10:0";
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
                                                readonly memberLocation: "5308:7:0";
                                                readonly memberName: "target1";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 30;
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
                                                    readonly id: 171;
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
                                                    readonly id: 170;
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
                                                        readonly id: 169;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5319:7:0";
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
                                        readonly src: "5249:80:0";
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
                                                readonly src: "5345:10:0";
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
                                            readonly memberLocation: "5356:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 33;
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
                                                readonly id: 179;
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
                                                readonly id: 178;
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
                                                    readonly id: 177;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5367:7:0";
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
                                    readonly src: "5249:128:0";
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
                                            readonly src: "5393:10:0";
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
                                        readonly memberLocation: "5404:7:0";
                                        readonly memberName: "target3";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 36;
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
                                            readonly id: 187;
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
                                            readonly id: 186;
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
                                                readonly id: 185;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "5415:7:0";
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
                                readonly src: "5249:176:0";
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
                                        readonly src: "5441:10:0";
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
                                    readonly memberLocation: "5452:7:0";
                                    readonly memberName: "target4";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 39;
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
                                        readonly id: 195;
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
                                        readonly id: 194;
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
                                            readonly id: 193;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5463:7:0";
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
                            readonly src: "5249:224:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 205;
                        readonly nodeType: "IfStatement";
                        readonly src: "5232:337:0";
                        readonly trueBody: {
                            readonly id: 204;
                            readonly nodeType: "Block";
                            readonly src: "5484:85:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "5505:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 201;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5536:20:0";
                                        readonly memberName: "IncompleteDeployment";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7611;
                                        readonly src: "5505:51:0";
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
                                    readonly src: "5505:53:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 203;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5498:60:0";
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
                                        readonly src: "5672:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 207;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "5661:3:0";
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
                                        readonly memberLocation: "5665:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5661:10:0";
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
                                    readonly src: "5661:25:0";
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
                                    readonly src: "5651:9:0";
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
                                readonly src: "5651:36:0";
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
                                    readonly src: "5691:10:0";
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
                                readonly memberLocation: "5702:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "5691:21:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5651:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 221;
                        readonly nodeType: "IfStatement";
                        readonly src: "5647:148:0";
                        readonly trueBody: {
                            readonly id: 220;
                            readonly nodeType: "Block";
                            readonly src: "5714:81:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "5735:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 217;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5766:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7635;
                                        readonly src: "5735:47:0";
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
                                    readonly src: "5735:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 219;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5728:56:0";
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
                                    readonly src: "5895:10:0";
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
                                    readonly src: "5885:9:0";
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
                                readonly src: "5885:21:0";
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
                                    readonly src: "5910:10:0";
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
                                readonly memberLocation: "5921:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18;
                                readonly src: "5910:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "5885:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 234;
                        readonly nodeType: "IfStatement";
                        readonly src: "5881:139:0";
                        readonly trueBody: {
                            readonly id: 233;
                            readonly nodeType: "Block";
                            readonly src: "5936:84:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "5957:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 230;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5988:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7638;
                                        readonly src: "5957:50:0";
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
                                    readonly src: "5957:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 232;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5950:59:0";
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
                                readonly src: "6313:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 235;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 793;
                                readonly src: "6296:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$__$";
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
                            readonly src: "6296:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 238;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6296:31:0";
                    }, {
                        readonly assignments: readonly [243];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 243;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "6476:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 288;
                            readonly src: "6446:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 242;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 241;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["6446:11:0", "6458:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 7215;
                                    readonly src: "6446:22:0";
                                };
                                readonly referencedDeclaration: 7215;
                                readonly src: "6446:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7215_storage_ptr";
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
                                readonly src: "6501:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 244;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 889;
                                readonly src: "6485:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$_t_struct$_PoolConfig_$7215_memory_ptr_$";
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
                            readonly src: "6485:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6446:69:0";
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
                                    readonly src: "6525:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 250;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "6532:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7189;
                                readonly src: "6525:29:0";
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
                                    readonly src: "6557:10:0";
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
                                readonly memberLocation: "6568:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21;
                                readonly src: "6557:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6525:60:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 254;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6525:60:0";
                    }, {
                        readonly assignments: readonly [256];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 256;
                            readonly mutability: "mutable";
                            readonly name: "hyperdrive";
                            readonly nameLocation: "6683:10:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 288;
                            readonly src: "6675:18:0";
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
                                readonly src: "6675:7:0";
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
                                readonly src: "6754:6:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }, {
                                readonly id: 262;
                                readonly name: "_extraData";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 115;
                                readonly src: "6774:10:0";
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
                                    readonly src: "6798:10:0";
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
                                readonly memberLocation: "6809:7:0";
                                readonly memberName: "target0";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 27;
                                readonly src: "6798:18:0";
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
                                    readonly src: "6830:10:0";
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
                                readonly memberLocation: "6841:7:0";
                                readonly memberName: "target1";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 30;
                                readonly src: "6830:18:0";
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
                                    readonly src: "6862:10:0";
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
                                readonly memberLocation: "6873:7:0";
                                readonly memberName: "target2";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 33;
                                readonly src: "6862:18:0";
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
                                    readonly src: "6894:10:0";
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
                                readonly memberLocation: "6905:7:0";
                                readonly memberName: "target3";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 36;
                                readonly src: "6894:18:0";
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
                                    readonly src: "6926:10:0";
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
                                readonly memberLocation: "6937:7:0";
                                readonly memberName: "target4";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39;
                                readonly src: "6926:18:0";
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
                                readonly src: "6958:5:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
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
                                        readonly src: "6720:12:0";
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
                                        readonly referencedDeclaration: 7598;
                                        readonly src: "6696:23:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveCoreDeployer_$7598_$";
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
                                    readonly src: "6696:37:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IHyperdriveCoreDeployer_$7598";
                                        readonly typeString: "contract IHyperdriveCoreDeployer";
                                    };
                                };
                                readonly id: 260;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6734:6:0";
                                readonly memberName: "deploy";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7597;
                                readonly src: "6696:44:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_address_$_t_address_$_t_address_$_t_address_$_t_address_$_t_bytes32_$returns$_t_address_$";
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
                            readonly src: "6696:277:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6675:298:0";
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
                                            readonly src: "6983:12:0";
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
                                                readonly src: "6996:3:0";
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
                                            readonly memberLocation: "7000:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6996:10:0";
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
                                        readonly src: "6983:24:0";
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
                                        readonly src: "7008:13:0";
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
                                    readonly src: "6983:39:0";
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
                                readonly memberLocation: "7023:10:0";
                                readonly memberName: "hyperdrive";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 24;
                                readonly src: "6983:50:0";
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
                                readonly src: "7036:10:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6983:63:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 285;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6983:63:0";
                    }, {
                        readonly expression: {
                            readonly id: 286;
                            readonly name: "hyperdrive";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 256;
                            readonly src: "7064:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 121;
                        readonly id: 287;
                        readonly nodeType: "Return";
                        readonly src: "7057:17:0";
                    }];
                };
                readonly baseFunctions: readonly [7656];
                readonly documentation: {
                    readonly id: 108;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3959:427:0";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed ERC4626Hyperdrive Instance.";
                };
                readonly functionSelector: "c47e90c4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deploy";
                readonly nameLocation: "4400:6:0";
                readonly parameters: {
                    readonly id: 118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 110;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "4424:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4416:21:0";
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
                            readonly src: "4416:7:0";
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
                        readonly nameLocation: "4483:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4447:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 112;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 111;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["4447:11:0", "4459:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7176;
                                readonly src: "4447:28:0";
                            };
                            readonly referencedDeclaration: 7176;
                            readonly src: "4447:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 115;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "4519:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4506:23:0";
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
                            readonly src: "4506:5:0";
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
                        readonly nameLocation: "4547:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 289;
                        readonly src: "4539:13:0";
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
                            readonly src: "4539:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4406:152:0";
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
                        readonly src: "4577:7:0";
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
                            readonly src: "4577:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4576:9:0";
                };
                readonly scope: 890;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 695;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7714:5917:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 694;
                    readonly nodeType: "Block";
                    readonly src: "7952:5679:0";
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
                                readonly src: "8207:12:0";
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
                                readonly src: "8223:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "8207:17:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 422;
                        readonly nodeType: "IfStatement";
                        readonly src: "8203:1789:0";
                        readonly trueBody: {
                            readonly id: 421;
                            readonly nodeType: "Block";
                            readonly src: "8226:1766:0";
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
                                                    readonly src: "8404:12:0";
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
                                                        readonly src: "8417:3:0";
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
                                                    readonly memberLocation: "8421:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "8417:10:0";
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
                                                readonly src: "8404:24:0";
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
                                                readonly src: "8429:13:0";
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
                                            readonly src: "8404:39:0";
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
                                        readonly memberLocation: "8444:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 15;
                                        readonly src: "8404:50:0";
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
                                            readonly src: "8466:1:0";
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
                                            readonly src: "8458:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes32_$";
                                                readonly typeString: "type(bytes32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 316;
                                                readonly name: "bytes32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "8458:7:0";
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
                                        readonly src: "8458:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "8404:64:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 327;
                                readonly nodeType: "IfStatement";
                                readonly src: "8383:196:0";
                                readonly trueBody: {
                                    readonly id: 326;
                                    readonly nodeType: "Block";
                                    readonly src: "8483:96:0";
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
                                                    readonly referencedDeclaration: 7673;
                                                    readonly src: "8508:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 323;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "8539:23:0";
                                                readonly memberName: "DeploymentAlreadyExists";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7605;
                                                readonly src: "8508:54:0";
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
                                            readonly src: "8508:56:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 325;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "8501:63:0";
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
                                        readonly src: "8730:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 328;
                                        readonly name: "_checkPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 793;
                                        readonly src: "8713:16:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$__$";
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
                                    readonly src: "8713:31:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 331;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8713:31:0";
                            }, {
                                readonly assignments: readonly [333];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 333;
                                    readonly mutability: "mutable";
                                    readonly name: "initialSharePrice";
                                    readonly nameLocation: "8870:17:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "8862:25:0";
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
                                        readonly src: "8862:7:0";
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
                                        readonly src: "8917:10:0";
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
                                        readonly src: "8890:26:0";
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
                                    readonly src: "8890:38:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "8862:66:0";
                            }, {
                                readonly assignments: readonly [339];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 339;
                                    readonly mutability: "mutable";
                                    readonly name: "configHash";
                                    readonly nameLocation: "8950:10:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "8942:18:0";
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
                                        readonly src: "8942:7:0";
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
                                            readonly src: "8984:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 341;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "8973:3:0";
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
                                            readonly memberLocation: "8977:6:0";
                                            readonly memberName: "encode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "8973:10:0";
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
                                        readonly src: "8973:25:0";
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
                                        readonly src: "8963:9:0";
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
                                    readonly src: "8963:36:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "8942:57:0";
                            }, {
                                readonly assignments: readonly [348];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 348;
                                    readonly mutability: "mutable";
                                    readonly name: "extraDataHash";
                                    readonly nameLocation: "9021:13:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "9013:21:0";
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
                                        readonly src: "9013:7:0";
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
                                        readonly src: "9047:10:0";
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
                                        readonly src: "9037:9:0";
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
                                    readonly src: "9037:21:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9013:45:0";
                            }, {
                                readonly assignments: readonly [357];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 357;
                                    readonly mutability: "mutable";
                                    readonly name: "config_";
                                    readonly nameLocation: "9219:7:0";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 421;
                                    readonly src: "9189:37:0";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "memory";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig";
                                    };
                                    readonly typeName: {
                                        readonly id: 356;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 355;
                                            readonly name: "IHyperdrive.PoolConfig";
                                            readonly nameLocations: readonly ["9189:11:0", "9201:10:0"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 7215;
                                            readonly src: "9189:22:0";
                                        };
                                        readonly referencedDeclaration: 7215;
                                        readonly src: "9189:22:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7215_storage_ptr";
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
                                        readonly src: "9262:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly id: 358;
                                        readonly name: "_copyPoolConfig";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 889;
                                        readonly src: "9229:15:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$_t_struct$_PoolConfig_$7215_memory_ptr_$";
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
                                    readonly src: "9229:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "9189:100:0";
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
                                            readonly src: "9303:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        };
                                        readonly id: 364;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "9311:22:0";
                                        readonly memberName: "initialVaultSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7189;
                                        readonly src: "9303:30:0";
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
                                        readonly src: "9336:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9303:50:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 367;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9303:50:0";
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
                                        readonly src: "9412:6:0";
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
                                            readonly src: "9488:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 374;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 297;
                                            readonly src: "9513:10:0";
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
                                            readonly src: "9541:5:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
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
                                                    readonly src: "9447:15:0";
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
                                                    readonly referencedDeclaration: 8099;
                                                    readonly src: "9421:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$";
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
                                                readonly src: "9421:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8099";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 372;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9464:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 8098;
                                            readonly src: "9421:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
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
                                        readonly src: "9421:139:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "9412:148:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 378;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9412:148:0";
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
                                                    readonly src: "9612:12:0";
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
                                                        readonly src: "9625:3:0";
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
                                                    readonly memberLocation: "9629:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9625:10:0";
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
                                                readonly src: "9612:24:0";
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
                                                readonly src: "9637:13:0";
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
                                            readonly src: "9612:39:0";
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
                                        readonly memberLocation: "9652:10:0";
                                        readonly memberName: "configHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 15;
                                        readonly src: "9612:50:0";
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
                                        readonly src: "9665:10:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "9612:63:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 388;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9612:63:0";
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
                                                    readonly src: "9689:12:0";
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
                                                        readonly src: "9702:3:0";
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
                                                    readonly memberLocation: "9706:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9702:10:0";
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
                                                readonly src: "9689:24:0";
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
                                                readonly src: "9714:13:0";
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
                                            readonly src: "9689:39:0";
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
                                        readonly memberLocation: "9746:13:0";
                                        readonly memberName: "extraDataHash";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18;
                                        readonly src: "9689:70:0";
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
                                        readonly src: "9762:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "9689:86:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 398;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9689:86:0";
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
                                                    readonly src: "9789:12:0";
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
                                                        readonly src: "9802:3:0";
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
                                                    readonly memberLocation: "9806:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9802:10:0";
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
                                                readonly src: "9789:24:0";
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
                                                readonly src: "9814:13:0";
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
                                            readonly src: "9789:39:0";
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
                                        readonly memberLocation: "9846:17:0";
                                        readonly memberName: "initialSharePrice";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 21;
                                        readonly src: "9789:74:0";
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
                                        readonly src: "9866:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9789:94:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 408;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9789:94:0";
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
                                                    readonly src: "9897:12:0";
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
                                                        readonly src: "9910:3:0";
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
                                                    readonly memberLocation: "9914:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "9910:10:0";
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
                                                readonly src: "9897:24:0";
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
                                                readonly src: "9922:13:0";
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
                                            readonly src: "9897:39:0";
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
                                        readonly memberLocation: "9937:7:0";
                                        readonly memberName: "target0";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 27;
                                        readonly src: "9897:47:0";
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
                                        readonly src: "9947:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "9897:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 418;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9897:56:0";
                            }, {
                                readonly expression: {
                                    readonly id: 419;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 304;
                                    readonly src: "9975:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly functionReturnParameters: 305;
                                readonly id: 420;
                                readonly nodeType: "Return";
                                readonly src: "9968:13:0";
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
                                            readonly src: "10141:12:0";
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
                                                readonly src: "10154:3:0";
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
                                            readonly memberLocation: "10158:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "10154:10:0";
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
                                        readonly src: "10141:24:0";
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
                                        readonly src: "10166:13:0";
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
                                    readonly src: "10141:39:0";
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
                                readonly memberLocation: "10181:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "10141:50:0";
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
                                    readonly src: "10203:1:0";
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
                                    readonly src: "10195:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes32_$";
                                        readonly typeString: "type(bytes32)";
                                    };
                                    readonly typeName: {
                                        readonly id: 430;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "10195:7:0";
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
                                readonly src: "10195:10:0";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10141:64:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 441;
                        readonly nodeType: "IfStatement";
                        readonly src: "10137:157:0";
                        readonly trueBody: {
                            readonly id: 440;
                            readonly nodeType: "Block";
                            readonly src: "10207:87:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "10228:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 437;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10259:22:0";
                                        readonly memberName: "DeploymentDoesNotExist";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7608;
                                        readonly src: "10228:53:0";
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
                                    readonly src: "10228:55:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 439;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10221:62:0";
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
                                        readonly src: "10410:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 443;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "10399:3:0";
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
                                        readonly memberLocation: "10403:6:0";
                                        readonly memberName: "encode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "10399:10:0";
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
                                    readonly src: "10399:25:0";
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
                                    readonly src: "10389:9:0";
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
                                readonly src: "10389:36:0";
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
                                            readonly src: "10441:12:0";
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
                                                readonly src: "10454:3:0";
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
                                            readonly memberLocation: "10458:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "10454:10:0";
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
                                        readonly src: "10441:24:0";
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
                                        readonly src: "10466:13:0";
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
                                    readonly src: "10441:39:0";
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
                                readonly memberLocation: "10481:10:0";
                                readonly memberName: "configHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15;
                                readonly src: "10441:50:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10389:102:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 462;
                        readonly nodeType: "IfStatement";
                        readonly src: "10372:211:0";
                        readonly trueBody: {
                            readonly id: 461;
                            readonly nodeType: "Block";
                            readonly src: "10502:81:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "10523:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 458;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10554:16:0";
                                        readonly memberName: "MismatchedConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7635;
                                        readonly src: "10523:47:0";
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
                                    readonly src: "10523:49:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 460;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10516:56:0";
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
                                    readonly src: "10696:10:0";
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
                                    readonly src: "10686:9:0";
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
                                readonly src: "10686:21:0";
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
                                            readonly src: "10723:12:0";
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
                                                readonly src: "10736:3:0";
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
                                            readonly memberLocation: "10740:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "10736:10:0";
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
                                        readonly src: "10723:24:0";
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
                                        readonly src: "10748:13:0";
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
                                    readonly src: "10723:39:0";
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
                                readonly memberLocation: "10763:13:0";
                                readonly memberName: "extraDataHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18;
                                readonly src: "10723:53:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "10686:90:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 480;
                        readonly nodeType: "IfStatement";
                        readonly src: "10669:202:0";
                        readonly trueBody: {
                            readonly id: 479;
                            readonly nodeType: "Block";
                            readonly src: "10787:84:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "10808:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 476;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10839:19:0";
                                        readonly memberName: "MismatchedExtraData";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7638;
                                        readonly src: "10808:50:0";
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
                                    readonly src: "10808:52:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 478;
                                readonly nodeType: "RevertStatement";
                                readonly src: "10801:59:0";
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
                                readonly src: "11164:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 481;
                                readonly name: "_checkPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 793;
                                readonly src: "11147:16:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$__$";
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
                            readonly src: "11147:31:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 484;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11147:31:0";
                    }, {
                        readonly assignments: readonly [489];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 489;
                            readonly mutability: "mutable";
                            readonly name: "config";
                            readonly nameLocation: "11327:6:0";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 694;
                            readonly src: "11297:36:0";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                            readonly typeName: {
                                readonly id: 488;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 487;
                                    readonly name: "IHyperdrive.PoolConfig";
                                    readonly nameLocations: readonly ["11297:11:0", "11309:10:0"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 7215;
                                    readonly src: "11297:22:0";
                                };
                                readonly referencedDeclaration: 7215;
                                readonly src: "11297:22:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7215_storage_ptr";
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
                                readonly src: "11352:13:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                }];
                                readonly id: 490;
                                readonly name: "_copyPoolConfig";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 889;
                                readonly src: "11336:15:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PoolDeployConfig_$7176_memory_ptr_$returns$_t_struct$_PoolConfig_$7215_memory_ptr_$";
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
                            readonly src: "11336:30:0";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11297:69:0";
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
                                    readonly src: "11376:6:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 496;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "11383:22:0";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7189;
                                readonly src: "11376:29:0";
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
                                            readonly src: "11408:12:0";
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
                                                readonly src: "11421:3:0";
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
                                            readonly memberLocation: "11425:6:0";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "11421:10:0";
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
                                        readonly src: "11408:24:0";
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
                                        readonly src: "11433:13:0";
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
                                    readonly src: "11408:39:0";
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
                                readonly memberLocation: "11461:17:0";
                                readonly memberName: "initialSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21;
                                readonly src: "11408:70:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "11376:102:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 505;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11376:102:0";
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
                                readonly src: "11742:12:0";
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
                                readonly src: "11758:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "11742:17:0";
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
                                    readonly src: "12187:12:0";
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
                                    readonly src: "12203:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_2_by_1";
                                        readonly typeString: "int_const 2";
                                    };
                                    readonly value: "2";
                                };
                                readonly src: "12187:17:0";
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
                                        readonly src: "12632:12:0";
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
                                        readonly src: "12648:1:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "12632:17:0";
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
                                            readonly src: "13077:12:0";
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
                                            readonly src: "13093:1:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_4_by_1";
                                                readonly typeString: "int_const 4";
                                            };
                                            readonly value: "4";
                                        };
                                        readonly src: "13077:17:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly falseBody: {
                                        readonly id: 687;
                                        readonly nodeType: "Block";
                                        readonly src: "13518:83:0";
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
                                                        readonly referencedDeclaration: 7673;
                                                        readonly src: "13539:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 684;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "13570:18:0";
                                                    readonly memberName: "InvalidTargetIndex";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 7632;
                                                    readonly src: "13539:49:0";
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
                                                readonly src: "13539:51:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 686;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "13532:58:0";
                                        }];
                                    };
                                    readonly id: 688;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "13073:528:0";
                                    readonly trueBody: {
                                        readonly id: 681;
                                        readonly nodeType: "Block";
                                        readonly src: "13096:416:0";
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
                                                                readonly src: "13114:12:0";
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
                                                                    readonly src: "13127:3:0";
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
                                                                readonly memberLocation: "13131:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13127:10:0";
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
                                                            readonly src: "13114:24:0";
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
                                                            readonly src: "13139:13:0";
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
                                                        readonly src: "13114:39:0";
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
                                                    readonly memberLocation: "13154:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 39;
                                                    readonly src: "13114:47:0";
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
                                                        readonly src: "13173:1:0";
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
                                                        readonly src: "13165:7:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 648;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "13165:7:0";
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
                                                    readonly src: "13165:10:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13114:61:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 659;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "13110:161:0";
                                            readonly trueBody: {
                                                readonly id: 658;
                                                readonly nodeType: "Block";
                                                readonly src: "13177:94:0";
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
                                                                readonly referencedDeclaration: 7673;
                                                                readonly src: "13202:30:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                                    readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                                };
                                                            };
                                                            readonly id: 655;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13233:21:0";
                                                            readonly memberName: "TargetAlreadyDeployed";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 7641;
                                                            readonly src: "13202:52:0";
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
                                                        readonly src: "13202:54:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_tuple$__$";
                                                            readonly typeString: "tuple()";
                                                        };
                                                    };
                                                    readonly id: 657;
                                                    readonly nodeType: "RevertStatement";
                                                    readonly src: "13195:61:0";
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
                                                    readonly src: "13284:6:0";
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
                                                        readonly src: "13360:6:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                        };
                                                    }, {
                                                        readonly id: 666;
                                                        readonly name: "_extraData";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 297;
                                                        readonly src: "13384:10:0";
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
                                                        readonly src: "13412:5:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
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
                                                                readonly src: "13319:15:0";
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
                                                                readonly referencedDeclaration: 8099;
                                                                readonly src: "13293:25:0";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$";
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
                                                            readonly src: "13293:42:0";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8099";
                                                                readonly typeString: "contract IHyperdriveTargetDeployer";
                                                            };
                                                        };
                                                        readonly id: 664;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "13336:6:0";
                                                        readonly memberName: "deploy";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 8098;
                                                        readonly src: "13293:49:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
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
                                                    readonly src: "13293:138:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13284:147:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 670;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "13284:147:0";
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
                                                                readonly src: "13445:12:0";
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
                                                                    readonly src: "13458:3:0";
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
                                                                readonly memberLocation: "13462:6:0";
                                                                readonly memberName: "sender";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly src: "13458:10:0";
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
                                                            readonly src: "13445:24:0";
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
                                                            readonly src: "13470:13:0";
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
                                                        readonly src: "13445:39:0";
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
                                                    readonly memberLocation: "13485:7:0";
                                                    readonly memberName: "target4";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 39;
                                                    readonly src: "13445:47:0";
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
                                                    readonly src: "13495:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly src: "13445:56:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly id: 680;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "13445:56:0";
                                        }];
                                    };
                                };
                                readonly id: 689;
                                readonly nodeType: "IfStatement";
                                readonly src: "12628:973:0";
                                readonly trueBody: {
                                    readonly id: 637;
                                    readonly nodeType: "Block";
                                    readonly src: "12651:416:0";
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
                                                            readonly src: "12669:12:0";
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
                                                                readonly src: "12682:3:0";
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
                                                            readonly memberLocation: "12686:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "12682:10:0";
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
                                                        readonly src: "12669:24:0";
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
                                                        readonly src: "12694:13:0";
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
                                                    readonly src: "12669:39:0";
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
                                                readonly memberLocation: "12709:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 36;
                                                readonly src: "12669:47:0";
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
                                                    readonly src: "12728:1:0";
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
                                                    readonly src: "12720:7:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 604;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "12720:7:0";
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
                                                readonly src: "12720:10:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "12669:61:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly id: 615;
                                        readonly nodeType: "IfStatement";
                                        readonly src: "12665:161:0";
                                        readonly trueBody: {
                                            readonly id: 614;
                                            readonly nodeType: "Block";
                                            readonly src: "12732:94:0";
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
                                                            readonly referencedDeclaration: 7673;
                                                            readonly src: "12757:30:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                            };
                                                        };
                                                        readonly id: 611;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "12788:21:0";
                                                        readonly memberName: "TargetAlreadyDeployed";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 7641;
                                                        readonly src: "12757:52:0";
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
                                                    readonly src: "12757:54:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_tuple$__$";
                                                        readonly typeString: "tuple()";
                                                    };
                                                };
                                                readonly id: 613;
                                                readonly nodeType: "RevertStatement";
                                                readonly src: "12750:61:0";
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
                                                readonly src: "12839:6:0";
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
                                                    readonly src: "12915:6:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                    };
                                                }, {
                                                    readonly id: 622;
                                                    readonly name: "_extraData";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 297;
                                                    readonly src: "12939:10:0";
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
                                                    readonly src: "12967:5:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
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
                                                            readonly src: "12874:15:0";
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
                                                            readonly referencedDeclaration: 8099;
                                                            readonly src: "12848:25:0";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$";
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
                                                        readonly src: "12848:42:0";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8099";
                                                            readonly typeString: "contract IHyperdriveTargetDeployer";
                                                        };
                                                    };
                                                    readonly id: 620;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12891:6:0";
                                                    readonly memberName: "deploy";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 8098;
                                                    readonly src: "12848:49:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
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
                                                readonly src: "12848:138:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "12839:147:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 626;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "12839:147:0";
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
                                                            readonly src: "13000:12:0";
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
                                                                readonly src: "13013:3:0";
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
                                                            readonly memberLocation: "13017:6:0";
                                                            readonly memberName: "sender";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "13013:10:0";
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
                                                        readonly src: "13000:24:0";
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
                                                        readonly src: "13025:13:0";
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
                                                    readonly src: "13000:39:0";
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
                                                readonly memberLocation: "13040:7:0";
                                                readonly memberName: "target3";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 36;
                                                readonly src: "13000:47:0";
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
                                                readonly src: "13050:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            };
                                            readonly src: "13000:56:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 636;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "13000:56:0";
                                    }];
                                };
                            };
                            readonly id: 690;
                            readonly nodeType: "IfStatement";
                            readonly src: "12183:1418:0";
                            readonly trueBody: {
                                readonly id: 593;
                                readonly nodeType: "Block";
                                readonly src: "12206:416:0";
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
                                                        readonly src: "12224:12:0";
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
                                                            readonly src: "12237:3:0";
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
                                                        readonly memberLocation: "12241:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "12237:10:0";
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
                                                    readonly src: "12224:24:0";
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
                                                    readonly src: "12249:13:0";
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
                                                readonly src: "12224:39:0";
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
                                            readonly memberLocation: "12264:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 33;
                                            readonly src: "12224:47:0";
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
                                                readonly src: "12283:1:0";
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
                                                readonly src: "12275:7:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 560;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "12275:7:0";
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
                                            readonly src: "12275:10:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12224:61:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 571;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "12220:161:0";
                                    readonly trueBody: {
                                        readonly id: 570;
                                        readonly nodeType: "Block";
                                        readonly src: "12287:94:0";
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
                                                        readonly referencedDeclaration: 7673;
                                                        readonly src: "12312:30:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                            readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                        };
                                                    };
                                                    readonly id: 567;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "12343:21:0";
                                                    readonly memberName: "TargetAlreadyDeployed";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 7641;
                                                    readonly src: "12312:52:0";
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
                                                readonly src: "12312:54:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_tuple$__$";
                                                    readonly typeString: "tuple()";
                                                };
                                            };
                                            readonly id: 569;
                                            readonly nodeType: "RevertStatement";
                                            readonly src: "12305:61:0";
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
                                            readonly src: "12394:6:0";
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
                                                readonly src: "12470:6:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                                };
                                            }, {
                                                readonly id: 578;
                                                readonly name: "_extraData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 297;
                                                readonly src: "12494:10:0";
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
                                                readonly src: "12522:5:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes32";
                                                    readonly typeString: "bytes32";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
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
                                                        readonly src: "12429:15:0";
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
                                                        readonly referencedDeclaration: 8099;
                                                        readonly src: "12403:25:0";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$";
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
                                                    readonly src: "12403:42:0";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8099";
                                                        readonly typeString: "contract IHyperdriveTargetDeployer";
                                                    };
                                                };
                                                readonly id: 576;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "12446:6:0";
                                                readonly memberName: "deploy";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 8098;
                                                readonly src: "12403:49:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
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
                                            readonly src: "12403:138:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12394:147:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 582;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "12394:147:0";
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
                                                        readonly src: "12555:12:0";
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
                                                            readonly src: "12568:3:0";
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
                                                        readonly memberLocation: "12572:6:0";
                                                        readonly memberName: "sender";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "12568:10:0";
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
                                                    readonly src: "12555:24:0";
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
                                                    readonly src: "12580:13:0";
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
                                                readonly src: "12555:39:0";
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
                                            readonly memberLocation: "12595:7:0";
                                            readonly memberName: "target2";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 33;
                                            readonly src: "12555:47:0";
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
                                            readonly src: "12605:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "12555:56:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 592;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "12555:56:0";
                                }];
                            };
                        };
                        readonly id: 691;
                        readonly nodeType: "IfStatement";
                        readonly src: "11738:1863:0";
                        readonly trueBody: {
                            readonly id: 549;
                            readonly nodeType: "Block";
                            readonly src: "11761:416:0";
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
                                                    readonly src: "11779:12:0";
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
                                                        readonly src: "11792:3:0";
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
                                                    readonly memberLocation: "11796:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "11792:10:0";
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
                                                readonly src: "11779:24:0";
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
                                                readonly src: "11804:13:0";
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
                                            readonly src: "11779:39:0";
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
                                        readonly memberLocation: "11819:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 30;
                                        readonly src: "11779:47:0";
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
                                            readonly src: "11838:1:0";
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
                                            readonly src: "11830:7:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 516;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "11830:7:0";
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
                                        readonly src: "11830:10:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "11779:61:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 527;
                                readonly nodeType: "IfStatement";
                                readonly src: "11775:161:0";
                                readonly trueBody: {
                                    readonly id: 526;
                                    readonly nodeType: "Block";
                                    readonly src: "11842:94:0";
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
                                                    readonly referencedDeclaration: 7673;
                                                    readonly src: "11867:30:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                        readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                                    };
                                                };
                                                readonly id: 523;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "11898:21:0";
                                                readonly memberName: "TargetAlreadyDeployed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7641;
                                                readonly src: "11867:52:0";
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
                                            readonly src: "11867:54:0";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 525;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "11860:61:0";
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
                                        readonly src: "11949:6:0";
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
                                            readonly src: "12025:6:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                            };
                                        }, {
                                            readonly id: 534;
                                            readonly name: "_extraData";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 297;
                                            readonly src: "12049:10:0";
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
                                            readonly src: "12077:5:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes32";
                                                readonly typeString: "bytes32";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
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
                                                    readonly src: "11984:15:0";
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
                                                    readonly referencedDeclaration: 8099;
                                                    readonly src: "11958:25:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveTargetDeployer_$8099_$";
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
                                                readonly src: "11958:42:0";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IHyperdriveTargetDeployer_$8099";
                                                    readonly typeString: "contract IHyperdriveTargetDeployer";
                                                };
                                            };
                                            readonly id: 532;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12001:6:0";
                                            readonly memberName: "deploy";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 8098;
                                            readonly src: "11958:49:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_struct$_PoolConfig_$7215_memory_ptr_$_t_bytes_memory_ptr_$_t_bytes32_$returns$_t_address_$";
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
                                        readonly src: "11958:138:0";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "11949:147:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 538;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "11949:147:0";
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
                                                    readonly src: "12110:12:0";
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
                                                        readonly src: "12123:3:0";
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
                                                    readonly memberLocation: "12127:6:0";
                                                    readonly memberName: "sender";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "12123:10:0";
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
                                                readonly src: "12110:24:0";
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
                                                readonly src: "12135:13:0";
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
                                            readonly src: "12110:39:0";
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
                                        readonly memberLocation: "12150:7:0";
                                        readonly memberName: "target1";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 30;
                                        readonly src: "12110:47:0";
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
                                        readonly src: "12160:6:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "12110:56:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 548;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "12110:56:0";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 692;
                            readonly name: "target";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 304;
                            readonly src: "13618:6:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 305;
                        readonly id: 693;
                        readonly nodeType: "Return";
                        readonly src: "13611:13:0";
                    }];
                };
                readonly baseFunctions: readonly [7672];
                readonly documentation: {
                    readonly id: 290;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7087:622:0";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "7cc39092";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployTarget";
                readonly nameLocation: "7723:12:0";
                readonly parameters: {
                    readonly id: 302;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 292;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "7753:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7745:21:0";
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
                            readonly src: "7745:7:0";
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
                        readonly nameLocation: "7812:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7776:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 294;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 293;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["7776:11:0", "7788:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7176;
                                readonly src: "7776:28:0";
                            };
                            readonly referencedDeclaration: 7176;
                            readonly src: "7776:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 297;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "7848:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7835:23:0";
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
                            readonly src: "7835:5:0";
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
                        readonly nameLocation: "7876:12:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7868:20:0";
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
                            readonly src: "7868:7:0";
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
                        readonly nameLocation: "7906:5:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7898:13:0";
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
                            readonly src: "7898:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7735:182:0";
                };
                readonly returnParameters: {
                    readonly id: 305;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 304;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "7944:6:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 695;
                        readonly src: "7936:14:0";
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
                            readonly src: "7936:7:0";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7935:16:0";
                };
                readonly scope: 890;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 713;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13837:189:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 712;
                    readonly nodeType: "Block";
                    readonly src: "13964:62:0";
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
                                    readonly src: "13981:12:0";
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
                                    readonly src: "13994:9:0";
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
                                readonly src: "13981:23:0";
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
                                readonly src: "14005:13:0";
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
                            readonly src: "13981:38:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment storage ref";
                            };
                        };
                        readonly functionReturnParameters: 705;
                        readonly id: 711;
                        readonly nodeType: "Return";
                        readonly src: "13974:45:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 696;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13637:195:0";
                    readonly text: "@notice Gets the deployment specified by the deployer and deployment ID.\n @param _deployer The deployer.\n @param _deploymentId The deployment ID.\n @return The deployment.";
                };
                readonly functionSelector: "20503b3f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployments";
                readonly nameLocation: "13846:11:0";
                readonly parameters: {
                    readonly id: 701;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 698;
                        readonly mutability: "mutable";
                        readonly name: "_deployer";
                        readonly nameLocation: "13875:9:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 713;
                        readonly src: "13867:17:0";
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
                            readonly src: "13867:7:0";
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
                        readonly nameLocation: "13902:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 713;
                        readonly src: "13894:21:0";
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
                            readonly src: "13894:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13857:64:0";
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
                        readonly src: "13945:17:0";
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
                                readonly nameLocations: readonly ["13945:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 40;
                                readonly src: "13945:10:0";
                            };
                            readonly referencedDeclaration: 40;
                            readonly src: "13945:10:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Deployment_$40_storage_ptr";
                                readonly typeString: "struct HyperdriveDeployerCoordinator.Deployment";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13944:19:0";
                };
                readonly scope: 890;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 793;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14181:1195:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 792;
                    readonly nodeType: "Block";
                    readonly src: "14294:1082:0";
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
                                    readonly src: "14445:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 721;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14459:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7153;
                                readonly src: "14445:34:0";
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
                                readonly src: "14482:3:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1000_by_1";
                                    readonly typeString: "int_const 1000";
                                };
                                readonly value: "1e3";
                            };
                            readonly src: "14445:40:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 730;
                        readonly nodeType: "IfStatement";
                        readonly src: "14441:138:0";
                        readonly trueBody: {
                            readonly id: 729;
                            readonly nodeType: "Block";
                            readonly src: "14487:92:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "14508:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 726;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14539:27:0";
                                        readonly memberName: "InvalidMinimumShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7623;
                                        readonly src: "14508:58:0";
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
                                    readonly src: "14508:60:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 728;
                                readonly nodeType: "RevertStatement";
                                readonly src: "14501:67:0";
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
                                    readonly src: "14593:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 732;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14607:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7162;
                                readonly src: "14593:32:0";
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
                                readonly src: "14629:1:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "14593:37:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 741;
                        readonly nodeType: "IfStatement";
                        readonly src: "14589:133:0";
                        readonly trueBody: {
                            readonly id: 740;
                            readonly nodeType: "Block";
                            readonly src: "14632:90:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "14653:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 737;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14684:25:0";
                                        readonly memberName: "InvalidCheckpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7617;
                                        readonly src: "14653:56:0";
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
                                    readonly src: "14653:58:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 739;
                                readonly nodeType: "RevertStatement";
                                readonly src: "14646:65:0";
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
                                        readonly src: "14748:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 743;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14762:16:0";
                                    readonly memberName: "positionDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7159;
                                    readonly src: "14748:30:0";
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
                                        readonly src: "14781:13:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                        };
                                    };
                                    readonly id: 745;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14795:18:0";
                                    readonly memberName: "checkpointDuration";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7162;
                                    readonly src: "14781:32:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "14748:65:0";
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
                                            readonly src: "14829:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 748;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14843:16:0";
                                        readonly memberName: "positionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7159;
                                        readonly src: "14829:30:0";
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
                                            readonly src: "14862:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 750;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14876:18:0";
                                        readonly memberName: "checkpointDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7162;
                                        readonly src: "14862:32:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "14829:65:0";
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
                                    readonly src: "14910:1:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "14829:82:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "14748:163:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 761;
                        readonly nodeType: "IfStatement";
                        readonly src: "14731:279:0";
                        readonly trueBody: {
                            readonly id: 760;
                            readonly nodeType: "Block";
                            readonly src: "14922:88:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "14943:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 757;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14974:23:0";
                                        readonly memberName: "InvalidPositionDuration";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7629;
                                        readonly src: "14943:54:0";
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
                                    readonly src: "14943:56:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 759;
                                readonly nodeType: "RevertStatement";
                                readonly src: "14936:63:0";
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
                                                    readonly src: "15088:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 763;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "15102:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7175;
                                                readonly src: "15088:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 764;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15107:5:0";
                                            readonly memberName: "curve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7130;
                                            readonly src: "15088:24:0";
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
                                            readonly src: "15115:4:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        };
                                        readonly src: "15088:31:0";
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
                                                    readonly src: "15135:13:0";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                    };
                                                };
                                                readonly id: 768;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "15149:4:0";
                                                readonly memberName: "fees";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7175;
                                                readonly src: "15135:18:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                                };
                                            };
                                            readonly id: 769;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15154:4:0";
                                            readonly memberName: "flat";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7133;
                                            readonly src: "15135:23:0";
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
                                            readonly src: "15161:4:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                                readonly typeString: "int_const 1000000000000000000";
                                            };
                                            readonly value: "1e18";
                                        };
                                        readonly src: "15135:30:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "15088:77:0";
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
                                                readonly src: "15181:13:0";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                    readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                                };
                                            };
                                            readonly id: 774;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15195:4:0";
                                            readonly memberName: "fees";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7175;
                                            readonly src: "15181:18:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.Fees memory";
                                            };
                                        };
                                        readonly id: 775;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15200:12:0";
                                        readonly memberName: "governanceLP";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7136;
                                        readonly src: "15181:31:0";
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
                                        readonly src: "15215:4:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                            readonly typeString: "int_const 1000000000000000000";
                                        };
                                        readonly value: "1e18";
                                    };
                                    readonly src: "15181:38:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "15088:131:0";
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
                                            readonly src: "15235:13:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                                readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                            };
                                        };
                                        readonly id: 780;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15249:4:0";
                                        readonly memberName: "fees";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7175;
                                        readonly src: "15235:18:0";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        };
                                    };
                                    readonly id: 781;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15254:16:0";
                                    readonly memberName: "governanceZombie";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7139;
                                    readonly src: "15235:35:0";
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
                                    readonly src: "15273:4:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                        readonly typeString: "int_const 1000000000000000000";
                                    };
                                    readonly value: "1e18";
                                };
                                readonly src: "15235:42:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "15088:189:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 791;
                        readonly nodeType: "IfStatement";
                        readonly src: "15071:299:0";
                        readonly trueBody: {
                            readonly id: 790;
                            readonly nodeType: "Block";
                            readonly src: "15288:82:0";
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
                                            readonly referencedDeclaration: 7673;
                                            readonly src: "15309:30:0";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveDeployerCoordinator_$7673_$";
                                                readonly typeString: "type(contract IHyperdriveDeployerCoordinator)";
                                            };
                                        };
                                        readonly id: 787;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15340:17:0";
                                        readonly memberName: "InvalidFeeAmounts";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7620;
                                        readonly src: "15309:48:0";
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
                                    readonly src: "15309:50:0";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 789;
                                readonly nodeType: "RevertStatement";
                                readonly src: "15302:57:0";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 714;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14032:144:0";
                    readonly text: "@dev Checks the pool configuration to ensure that it is valid.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkPoolConfig";
                readonly nameLocation: "14190:16:0";
                readonly parameters: {
                    readonly id: 718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 717;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "14252:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 793;
                        readonly src: "14216:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 716;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 715;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["14216:11:0", "14228:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7176;
                                readonly src: "14216:28:0";
                            };
                            readonly referencedDeclaration: 7176;
                            readonly src: "14216:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14206:65:0";
                };
                readonly returnParameters: {
                    readonly id: 719;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14294:0:0";
                };
                readonly scope: 890;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 801;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15596:115:0";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 794;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15382:209:0";
                    readonly text: "@dev Gets the initial vault share price of the Hyperdrive pool.\n @param _extraData The extra data passed to the child deployers.\n @return The initial vault share price of the Hyperdrive pool.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getInitialVaultSharePrice";
                readonly nameLocation: "15605:26:0";
                readonly parameters: {
                    readonly id: 797;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 796;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "15654:10:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 801;
                        readonly src: "15641:23:0";
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
                            readonly src: "15641:5:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15631:39:0";
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
                        readonly src: "15702:7:0";
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
                            readonly src: "15702:7:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15701:9:0";
                };
                readonly scope: 890;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 889;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15927:926:0";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 888;
                    readonly nodeType: "Block";
                    readonly src: "16079:774:0";
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
                                    readonly src: "16156:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 813;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16164:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7180;
                                readonly src: "16156:17:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6740";
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
                                    readonly src: "16176:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 815;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16190:9:0";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7144;
                                readonly src: "16176:23:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6740";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "16156:43:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$6740";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 817;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16156:43:0";
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
                                    readonly src: "16209:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 820;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16217:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7183;
                                readonly src: "16209:21:0";
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
                                    readonly src: "16233:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 822;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16247:13:0";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7147;
                                readonly src: "16233:27:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16209:51:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 824;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16209:51:0";
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
                                    readonly src: "16270:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 827;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16278:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7186;
                                readonly src: "16270:22:0";
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
                                    readonly src: "16295:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 829;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16309:14:0";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7150;
                                readonly src: "16295:28:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "16270:53:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 831;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16270:53:0";
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
                                    readonly src: "16333:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 834;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16341:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7192;
                                readonly src: "16333:28:0";
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
                                    readonly src: "16364:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 836;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16378:20:0";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7153;
                                readonly src: "16364:34:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16333:65:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 838;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16333:65:0";
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
                                    readonly src: "16408:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 841;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16416:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7195;
                                readonly src: "16408:32:0";
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
                                    readonly src: "16443:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 843;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16470:24:0";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7156;
                                readonly src: "16443:51:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16408:86:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 845;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16408:86:0";
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
                                    readonly src: "16504:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 848;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16512:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7198;
                                readonly src: "16504:24:0";
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
                                    readonly src: "16531:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 850;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16545:16:0";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7159;
                                readonly src: "16531:30:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16504:57:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 852;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16504:57:0";
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
                                    readonly src: "16571:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 855;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16579:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7201;
                                readonly src: "16571:26:0";
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
                                    readonly src: "16600:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 857;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16614:18:0";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7162;
                                readonly src: "16600:32:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16571:61:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 859;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16571:61:0";
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
                                    readonly src: "16642:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 862;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16650:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7204;
                                readonly src: "16642:19:0";
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
                                    readonly src: "16664:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 864;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16678:11:0";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7165;
                                readonly src: "16664:25:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16642:47:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 866;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16642:47:0";
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
                                    readonly src: "16699:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 869;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16707:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7207;
                                readonly src: "16699:18:0";
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
                                    readonly src: "16720:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 871;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16734:10:0";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7168;
                                readonly src: "16720:24:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16699:45:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 873;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16699:45:0";
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
                                    readonly src: "16754:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 876;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16762:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7210;
                                readonly src: "16754:20:0";
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
                                    readonly src: "16777:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 878;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16791:12:0";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7171;
                                readonly src: "16777:26:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "16754:49:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 880;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16754:49:0";
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
                                    readonly src: "16813:7:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 883;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "16821:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7214;
                                readonly src: "16813:12:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
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
                                    readonly src: "16828:13:0";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolDeployConfig memory";
                                    };
                                };
                                readonly id: 885;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16842:4:0";
                                readonly memberName: "fees";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7175;
                                readonly src: "16828:18:0";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.Fees memory";
                                };
                            };
                            readonly src: "16813:33:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                                readonly typeString: "struct IHyperdrive.Fees memory";
                            };
                        };
                        readonly id: 887;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16813:33:0";
                    }];
                };
                readonly documentation: {
                    readonly id: 802;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15717:205:0";
                    readonly text: "@notice Copies the deploy config into a pool config.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @return _config The pool configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_copyPoolConfig";
                readonly nameLocation: "15936:15:0";
                readonly parameters: {
                    readonly id: 806;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 805;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "15997:13:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 889;
                        readonly src: "15961:49:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 804;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 803;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["15961:11:0", "15973:16:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7176;
                                readonly src: "15961:28:0";
                            };
                            readonly referencedDeclaration: 7176;
                            readonly src: "15961:28:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15951:65:0";
                };
                readonly returnParameters: {
                    readonly id: 810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 809;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "16070:7:0";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 889;
                        readonly src: "16040:37:0";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7215_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 808;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 807;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["16040:11:0", "16052:10:0"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7215;
                                readonly src: "16040:22:0";
                            };
                            readonly referencedDeclaration: 7215;
                            readonly src: "16040:22:0";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7215_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16039:39:0";
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
                    readonly referencedDeclaration: 7673;
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
            readonly linearizedBaseContracts: readonly [890, 7673];
            readonly name: "HyperdriveDeployerCoordinator";
            readonly nameLocation: "909:29:0";
            readonly scope: 891;
            readonly usedErrors: readonly [7605, 7608, 7611, 7614, 7617, 7620, 7623, 7626, 7629, 7632, 7635, 7638, 7641];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 0;
};
//# sourceMappingURL=HyperdriveDeployerCoordinator.d.ts.map