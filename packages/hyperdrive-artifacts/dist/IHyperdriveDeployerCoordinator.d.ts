export declare const IHyperdriveDeployerCoordinator: {
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
        readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "1ae6f515";
        readonly "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "0b3c4f86";
        readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultSharesToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"_0\":\"target The address of the newly deployed target instance.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"InvalidVaultSharesToken()\":[{\"notice\":\"Thrown when the vault shares token isn't valid. Each instance         will have different criteria for what constitutes a valid base         token.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":\"IHyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x2eb8c9cd2fb58f1c6b1054c5d5e325b78386855bbcfd0a86b595aa98bd05df28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cd2aa557854a35ada0b5d334c981739eecbc82580aa35693277749b8cadbe4f4\",\"dweb:/ipfs/QmcRWJuLSrA44XmFC1bMAGCKUfPmVUnUv7YE8fNC4gy91v\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
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
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
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
                            readonly _0: "target The address of the newly deployed target instance.";
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
                    readonly "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive instance with the given parameters.";
                    };
                    readonly "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive target instance with the given parameters.";
                    };
                    readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Initializes a pool that was deployed by this coordinator.";
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
                readonly "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": "IHyperdriveDeployerCoordinator";
            };
            readonly libraries: {};
        };
        readonly sources: {
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
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol";
        readonly id: 10835;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [10506];
            readonly IHyperdriveDeployerCoordinator: readonly [10834];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:5899:88";
        readonly nodes: readonly [{
            readonly id: 10725;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:88";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 10727;
            readonly nodeType: "ImportDirective";
            readonly src: "64:48:88";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "./IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 10835;
            readonly sourceUnit: 10507;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 10726;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10506;
                    readonly src: "73:11:88";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 10834;
            readonly nodeType: "ContractDefinition";
            readonly src: "114:5823:88";
            readonly nodes: readonly [{
                readonly id: 10730;
                readonly nodeType: "ErrorDefinition";
                readonly src: "300:32:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10728;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "181:114:88";
                    readonly text: "@notice Thrown when a user attempts to deploy target0 the deployment has\n         already been created.";
                };
                readonly errorSelector: "77c3669a";
                readonly name: "DeploymentAlreadyExists";
                readonly nameLocation: "306:23:88";
                readonly parameters: {
                    readonly id: 10729;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "329:2:88";
                };
            }, {
                readonly id: 10733;
                readonly nodeType: "ErrorDefinition";
                readonly src: "496:31:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10731;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "338:153:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a contract that requires\n         the deployment to be created and the deployment doesn't exist.";
                };
                readonly errorSelector: "e62c7024";
                readonly name: "DeploymentDoesNotExist";
                readonly nameLocation: "502:22:88";
                readonly parameters: {
                    readonly id: 10732;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "524:2:88";
                };
            }, {
                readonly id: 10736;
                readonly nodeType: "ErrorDefinition";
                readonly src: "673:29:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10734;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "533:135:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a Hyperdrive entrypoint\n         without first deploying the required targets.";
                };
                readonly errorSelector: "e97cc2bf";
                readonly name: "IncompleteDeployment";
                readonly nameLocation: "679:20:88";
                readonly parameters: {
                    readonly id: 10735;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "699:2:88";
                };
            }, {
                readonly id: 10739;
                readonly nodeType: "ErrorDefinition";
                readonly src: "836:34:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10737;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "708:123:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a hyperdrive contract\n         after it has already been deployed.";
                };
                readonly errorSelector: "2c95caeb";
                readonly name: "HyperdriveAlreadyDeployed";
                readonly nameLocation: "842:25:88";
                readonly parameters: {
                    readonly id: 10738;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "867:2:88";
                };
            }, {
                readonly id: 10742;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1001:32:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10740;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "876:120:88";
                    readonly text: "@notice Thrown when a user attempts to initialize a hyperdrive contract\n         before is has been deployed.";
                };
                readonly errorSelector: "952b05cb";
                readonly name: "HyperdriveIsNotDeployed";
                readonly nameLocation: "1007:23:88";
                readonly parameters: {
                    readonly id: 10741;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1030:2:88";
                };
            }, {
                readonly id: 10745;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1179:26:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10743;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1039:135:88";
                    readonly text: "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance.";
                };
                readonly errorSelector: "11011294";
                readonly name: "InsufficientValue";
                readonly nameLocation: "1185:17:88";
                readonly parameters: {
                    readonly id: 10744;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1202:2:88";
                };
            }, {
                readonly id: 10748;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1367:25:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10746;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1211:151:88";
                    readonly text: "@notice Thrown when the base token isn't valid. Each instance will have\n         different criteria for what constitutes a valid base token.";
                };
                readonly errorSelector: "0e442a4a";
                readonly name: "InvalidBaseToken";
                readonly nameLocation: "1373:16:88";
                readonly parameters: {
                    readonly id: 10747;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1389:2:88";
                };
            }, {
                readonly id: 10751;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1578:32:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10749;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1398:175:88";
                    readonly text: "@notice Thrown when the vault shares token isn't valid. Each instance\n         will have different criteria for what constitutes a valid base\n         token.";
                };
                readonly errorSelector: "e7ee73a0";
                readonly name: "InvalidVaultSharesToken";
                readonly nameLocation: "1584:23:88";
                readonly parameters: {
                    readonly id: 10750;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1607:2:88";
                };
            }, {
                readonly id: 10754;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1687:34:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10752;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1616:66:88";
                    readonly text: "@notice Thrown when the checkpoint duration specified is zero.";
                };
                readonly errorSelector: "5428734d";
                readonly name: "InvalidCheckpointDuration";
                readonly nameLocation: "1693:25:88";
                readonly parameters: {
                    readonly id: 10753;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1718:2:88";
                };
            }, {
                readonly id: 10757;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1862:26:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10755;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1727:130:88";
                    readonly text: "@notice Thrown when the curve fee, flat fee, governance LP fee, or\n         governance zombie fee is greater than 100%.";
                };
                readonly errorSelector: "45ee5986";
                readonly name: "InvalidFeeAmounts";
                readonly nameLocation: "1868:17:88";
                readonly parameters: {
                    readonly id: 10756;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1885:2:88";
                };
            }, {
                readonly id: 10760;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2142:36:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10758;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1894:243:88";
                    readonly text: "@notice Thrown when the minimum share reserves is too small. The\n         absolute smallest allowable minimum share reserves is 1e3;\n         however, yield sources may require a larger minimum share\n         reserves.";
                };
                readonly errorSelector: "49db44f5";
                readonly name: "InvalidMinimumShareReserves";
                readonly nameLocation: "2148:27:88";
                readonly parameters: {
                    readonly id: 10759;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2175:2:88";
                };
            }, {
                readonly id: 10763;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2257:40:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10761;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2184:68:88";
                    readonly text: "@notice Thrown when the minimum transaction amount is too small.";
                };
                readonly errorSelector: "3192a446";
                readonly name: "InvalidMinimumTransactionAmount";
                readonly nameLocation: "2263:31:88";
                readonly parameters: {
                    readonly id: 10762;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2294:2:88";
                };
            }, {
                readonly id: 10766;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2458:32:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10764;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2303:150:88";
                    readonly text: "@notice Thrown when the position duration is smaller than the checkpoint\n         duration or is not a multiple of the checkpoint duration.";
                };
                readonly errorSelector: "4a7fff9e";
                readonly name: "InvalidPositionDuration";
                readonly nameLocation: "2464:23:88";
                readonly parameters: {
                    readonly id: 10765;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2487:2:88";
                };
            }, {
                readonly id: 10769;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2635:27:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10767;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2496:134:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a target using a target\n         index that is outside of the accepted range.";
                };
                readonly errorSelector: "3b3f02b2";
                readonly name: "InvalidTargetIndex";
                readonly nameLocation: "2641:18:88";
                readonly parameters: {
                    readonly id: 10768;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2659:2:88";
                };
            }, {
                readonly id: 10772;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2854:25:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10770;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2668:181:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with a config that doesn't match the deployment's\n         config hash.";
                };
                readonly errorSelector: "332ee11f";
                readonly name: "MismatchedConfig";
                readonly nameLocation: "2860:16:88";
                readonly parameters: {
                    readonly id: 10771;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2876:2:88";
                };
            }, {
                readonly id: 10775;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3077:28:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10773;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2885:187:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with extra data that doesn't match the deployment's\n         extra data hash.";
                };
                readonly errorSelector: "d1939688";
                readonly name: "MismatchedExtraData";
                readonly nameLocation: "3083:19:88";
                readonly parameters: {
                    readonly id: 10774;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3102:2:88";
                };
            }, {
                readonly id: 10778;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3230:19:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10776;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3111:114:88";
                    readonly text: "@notice Thrown when ether is sent to an instance that doesn't accept\n         ether as a deposit asset.";
                };
                readonly errorSelector: "1574f9f3";
                readonly name: "NotPayable";
                readonly nameLocation: "3236:10:88";
                readonly parameters: {
                    readonly id: 10777;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3246:2:88";
                };
            }, {
                readonly id: 10781;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3379:30:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10779;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3255:119:88";
                    readonly text: "@notice Thrown when a user attempts to deploy a target contract after\n         it has already been deployed.";
                };
                readonly errorSelector: "0744b578";
                readonly name: "TargetAlreadyDeployed";
                readonly nameLocation: "3385:21:88";
                readonly parameters: {
                    readonly id: 10780;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3406:2:88";
                };
            }, {
                readonly id: 10784;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3468:23:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10782;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3415:48:88";
                    readonly text: "@notice Thrown when an ether transfer fails.";
                };
                readonly errorSelector: "90b8ec18";
                readonly name: "TransferFailed";
                readonly nameLocation: "3474:14:88";
                readonly parameters: {
                    readonly id: 10783;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3488:2:88";
                };
            }, {
                readonly id: 10799;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3945:195:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10785;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3520:420:88";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance.";
                };
                readonly functionSelector: "1ae6f515";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deploy";
                readonly nameLocation: "3954:6:88";
                readonly parameters: {
                    readonly id: 10795;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10787;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "3978:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10799;
                        readonly src: "3970:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 10786;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3970:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10790;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "4037:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10799;
                        readonly src: "4001:49:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 10789;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 10788;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["4001:11:88", "4013:16:88"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "4001:28:88";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "4001:28:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10792;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "4073:10:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10799;
                        readonly src: "4060:23:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 10791;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4060:5:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10794;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "4101:5:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10799;
                        readonly src: "4093:13:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 10793;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4093:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3960:152:88";
                };
                readonly returnParameters: {
                    readonly id: 10798;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10797;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10799;
                        readonly src: "4131:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10796;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4131:7:88";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4130:9:88";
                };
                readonly scope: 10834;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10816;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4773:231:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10800;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4146:622:88";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "0b3c4f86";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployTarget";
                readonly nameLocation: "4782:12:88";
                readonly parameters: {
                    readonly id: 10812;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10802;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "4812:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10816;
                        readonly src: "4804:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 10801;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4804:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10805;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "4871:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10816;
                        readonly src: "4835:49:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 10804;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 10803;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["4835:11:88", "4847:16:88"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10254;
                                readonly src: "4835:28:88";
                            };
                            readonly referencedDeclaration: 10254;
                            readonly src: "4835:28:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10254_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10807;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "4907:10:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10816;
                        readonly src: "4894:23:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 10806;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4894:5:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10809;
                        readonly mutability: "mutable";
                        readonly name: "_targetIndex";
                        readonly nameLocation: "4935:12:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10816;
                        readonly src: "4927:20:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10808;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4927:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10811;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "4965:5:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10816;
                        readonly src: "4957:13:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 10810;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4957:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4794:182:88";
                };
                readonly returnParameters: {
                    readonly id: 10815;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10814;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10816;
                        readonly src: "4995:7:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10813;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4995:7:88";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4994:9:88";
                };
                readonly scope: 10834;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10833;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5715:220:88";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10817;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5010:700:88";
                    readonly text: "@notice Initializes a pool that was deployed by this coordinator.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created.";
                };
                readonly functionSelector: "16abfc70";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initialize";
                readonly nameLocation: "5724:10:88";
                readonly parameters: {
                    readonly id: 10829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10819;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "5752:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10833;
                        readonly src: "5744:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 10818;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5744:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10821;
                        readonly mutability: "mutable";
                        readonly name: "_lp";
                        readonly nameLocation: "5783:3:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10833;
                        readonly src: "5775:11:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10820;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5775:7:88";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10823;
                        readonly mutability: "mutable";
                        readonly name: "_contribution";
                        readonly nameLocation: "5804:13:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10833;
                        readonly src: "5796:21:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10822;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5796:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10825;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "5835:4:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10833;
                        readonly src: "5827:12:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10824;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5827:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10828;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "5876:8:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10833;
                        readonly src: "5849:35:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10356_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 10827;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 10826;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["5849:11:88", "5861:7:88"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10356;
                                readonly src: "5849:19:88";
                            };
                            readonly referencedDeclaration: 10356;
                            readonly src: "5849:19:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10356_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5734:156:88";
                };
                readonly returnParameters: {
                    readonly id: 10832;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10831;
                        readonly mutability: "mutable";
                        readonly name: "lpShares";
                        readonly nameLocation: "5925:8:88";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10833;
                        readonly src: "5917:16:88";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10830;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5917:7:88";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5916:18:88";
                };
                readonly scope: 10834;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IHyperdriveDeployerCoordinator";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [10834];
            readonly name: "IHyperdriveDeployerCoordinator";
            readonly nameLocation: "124:30:88";
            readonly scope: 10835;
            readonly usedErrors: readonly [10730, 10733, 10736, 10739, 10742, 10745, 10748, 10751, 10754, 10757, 10760, 10763, 10766, 10769, 10772, 10775, 10778, 10781, 10784];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 88;
};
//# sourceMappingURL=IHyperdriveDeployerCoordinator.d.ts.map