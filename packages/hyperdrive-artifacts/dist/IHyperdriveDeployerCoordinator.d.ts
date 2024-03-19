export declare const IHyperdriveDeployerCoordinator: {
    readonly abi: readonly [{
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
                readonly name: "sweepCollector";
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
                readonly name: "sweepCollector";
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
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_deploymentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_lp";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_apr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "lpShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
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
        readonly name: "HyperdriveIsNotDeployed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IncompleteDeployment";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientValue";
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
        readonly name: "NotPayable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TargetAlreadyDeployed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
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
        readonly "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "8d10a15b";
        readonly "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "1b06a35b";
        readonly "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"_0\":\"target The address of the newly deployed target instance.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":\"IHyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xb21fef06e9a50d1dd8fb765fe9efe9dd0cf01dfba1edf519743930e64b6cec9b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f5dba59592d1f4ff5359367ceadac86a19dbb976958c5abf632c953ae10b8799\",\"dweb:/ipfs/QmTfWhYzcMaLtmJFymXPweCXu6njXQPtHf4mhPEWErR8V5\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
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
                    readonly "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
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
                    readonly "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
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
                    readonly "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        readonly notice: "Deploys a Hyperdrive instance with the given parameters.";
                    };
                    readonly "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                readonly keccak256: "0xb21fef06e9a50d1dd8fb765fe9efe9dd0cf01dfba1edf519743930e64b6cec9b";
                readonly urls: readonly ["bzz-raw://f5dba59592d1f4ff5359367ceadac86a19dbb976958c5abf632c953ae10b8799", "dweb:/ipfs/QmTfWhYzcMaLtmJFymXPweCXu6njXQPtHf4mhPEWErR8V5"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
        readonly id: 11399;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [11076];
            readonly IHyperdriveDeployerCoordinator: readonly [11398];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:5494:90";
        readonly nodes: readonly [{
            readonly id: 11295;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:90";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11297;
            readonly nodeType: "ImportDirective";
            readonly src: "64:48:90";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "./IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11399;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11296;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "73:11:90";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11398;
            readonly nodeType: "ContractDefinition";
            readonly src: "114:5418:90";
            readonly nodes: readonly [{
                readonly id: 11300;
                readonly nodeType: "ErrorDefinition";
                readonly src: "300:32:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11298;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "181:114:90";
                    readonly text: "@notice Thrown when a user attempts to deploy target0 the deployment has\n         already been created.";
                };
                readonly errorSelector: "77c3669a";
                readonly name: "DeploymentAlreadyExists";
                readonly nameLocation: "306:23:90";
                readonly parameters: {
                    readonly id: 11299;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "329:2:90";
                };
            }, {
                readonly id: 11303;
                readonly nodeType: "ErrorDefinition";
                readonly src: "496:31:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11301;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "338:153:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a contract that requires\n         the deployment to be created and the deployment doesn't exist.";
                };
                readonly errorSelector: "e62c7024";
                readonly name: "DeploymentDoesNotExist";
                readonly nameLocation: "502:22:90";
                readonly parameters: {
                    readonly id: 11302;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "524:2:90";
                };
            }, {
                readonly id: 11306;
                readonly nodeType: "ErrorDefinition";
                readonly src: "673:29:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11304;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "533:135:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a Hyperdrive entrypoint\n         without first deploying the required targets.";
                };
                readonly errorSelector: "e97cc2bf";
                readonly name: "IncompleteDeployment";
                readonly nameLocation: "679:20:90";
                readonly parameters: {
                    readonly id: 11305;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "699:2:90";
                };
            }, {
                readonly id: 11309;
                readonly nodeType: "ErrorDefinition";
                readonly src: "836:34:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11307;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "708:123:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a hyperdrive contract\n         after it has already been deployed.";
                };
                readonly errorSelector: "2c95caeb";
                readonly name: "HyperdriveAlreadyDeployed";
                readonly nameLocation: "842:25:90";
                readonly parameters: {
                    readonly id: 11308;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "867:2:90";
                };
            }, {
                readonly id: 11312;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1001:32:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11310;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "876:120:90";
                    readonly text: "@notice Thrown when a user attempts to initialize a hyperdrive contract\n         before is has been deployed.";
                };
                readonly errorSelector: "952b05cb";
                readonly name: "HyperdriveIsNotDeployed";
                readonly nameLocation: "1007:23:90";
                readonly parameters: {
                    readonly id: 11311;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1030:2:90";
                };
            }, {
                readonly id: 11315;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1179:26:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11313;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1039:135:90";
                    readonly text: "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance.";
                };
                readonly errorSelector: "11011294";
                readonly name: "InsufficientValue";
                readonly nameLocation: "1185:17:90";
                readonly parameters: {
                    readonly id: 11314;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1202:2:90";
                };
            }, {
                readonly id: 11318;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1282:34:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11316;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1211:66:90";
                    readonly text: "@notice Thrown when the checkpoint duration specified is zero.";
                };
                readonly errorSelector: "5428734d";
                readonly name: "InvalidCheckpointDuration";
                readonly nameLocation: "1288:25:90";
                readonly parameters: {
                    readonly id: 11317;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1313:2:90";
                };
            }, {
                readonly id: 11321;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1457:26:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11319;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1322:130:90";
                    readonly text: "@notice Thrown when the curve fee, flat fee, governance LP fee, or\n         governance zombie fee is greater than 100%.";
                };
                readonly errorSelector: "45ee5986";
                readonly name: "InvalidFeeAmounts";
                readonly nameLocation: "1463:17:90";
                readonly parameters: {
                    readonly id: 11320;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1480:2:90";
                };
            }, {
                readonly id: 11324;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1737:36:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11322;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1489:243:90";
                    readonly text: "@notice Thrown when the minimum share reserves is too small. The\n         absolute smallest allowable minimum share reserves is 1e3;\n         however, yield sources may require a larger minimum share\n         reserves.";
                };
                readonly errorSelector: "49db44f5";
                readonly name: "InvalidMinimumShareReserves";
                readonly nameLocation: "1743:27:90";
                readonly parameters: {
                    readonly id: 11323;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1770:2:90";
                };
            }, {
                readonly id: 11327;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1852:40:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11325;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1779:68:90";
                    readonly text: "@notice Thrown when the minimum transaction amount is too small.";
                };
                readonly errorSelector: "3192a446";
                readonly name: "InvalidMinimumTransactionAmount";
                readonly nameLocation: "1858:31:90";
                readonly parameters: {
                    readonly id: 11326;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1889:2:90";
                };
            }, {
                readonly id: 11330;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2053:32:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11328;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1898:150:90";
                    readonly text: "@notice Thrown when the position duration is smaller than the checkpoint\n         duration or is not a multiple of the checkpoint duration.";
                };
                readonly errorSelector: "4a7fff9e";
                readonly name: "InvalidPositionDuration";
                readonly nameLocation: "2059:23:90";
                readonly parameters: {
                    readonly id: 11329;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2082:2:90";
                };
            }, {
                readonly id: 11333;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2230:27:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11331;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2091:134:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a target using a target\n         index that is outside of the accepted range.";
                };
                readonly errorSelector: "3b3f02b2";
                readonly name: "InvalidTargetIndex";
                readonly nameLocation: "2236:18:90";
                readonly parameters: {
                    readonly id: 11332;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2254:2:90";
                };
            }, {
                readonly id: 11336;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2449:25:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11334;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2263:181:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with a config that doesn't match the deployment's\n         config hash.";
                };
                readonly errorSelector: "332ee11f";
                readonly name: "MismatchedConfig";
                readonly nameLocation: "2455:16:90";
                readonly parameters: {
                    readonly id: 11335;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2471:2:90";
                };
            }, {
                readonly id: 11339;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2672:28:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11337;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2480:187:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with extra data that doesn't match the deployment's\n         extra data hash.";
                };
                readonly errorSelector: "d1939688";
                readonly name: "MismatchedExtraData";
                readonly nameLocation: "2678:19:90";
                readonly parameters: {
                    readonly id: 11338;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2697:2:90";
                };
            }, {
                readonly id: 11342;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2825:19:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11340;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2706:114:90";
                    readonly text: "@notice Thrown when ether is sent to an instance that doesn't accept\n         ether as a deposit asset.";
                };
                readonly errorSelector: "1574f9f3";
                readonly name: "NotPayable";
                readonly nameLocation: "2831:10:90";
                readonly parameters: {
                    readonly id: 11341;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2841:2:90";
                };
            }, {
                readonly id: 11345;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2974:30:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11343;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2850:119:90";
                    readonly text: "@notice Thrown when a user attempts to deploy a target contract after\n         it has already been deployed.";
                };
                readonly errorSelector: "0744b578";
                readonly name: "TargetAlreadyDeployed";
                readonly nameLocation: "2980:21:90";
                readonly parameters: {
                    readonly id: 11344;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3001:2:90";
                };
            }, {
                readonly id: 11348;
                readonly nodeType: "ErrorDefinition";
                readonly src: "3063:23:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11346;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3010:48:90";
                    readonly text: "@notice Thrown when an ether transfer fails.";
                };
                readonly errorSelector: "90b8ec18";
                readonly name: "TransferFailed";
                readonly nameLocation: "3069:14:90";
                readonly parameters: {
                    readonly id: 11347;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3083:2:90";
                };
            }, {
                readonly id: 11363;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3540:195:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11349;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3115:420:90";
                    readonly text: "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance.";
                };
                readonly functionSelector: "8d10a15b";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deploy";
                readonly nameLocation: "3549:6:90";
                readonly parameters: {
                    readonly id: 11359;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11351;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "3573:13:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11363;
                        readonly src: "3565:21:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11350;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3565:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11354;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "3632:13:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11363;
                        readonly src: "3596:49:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10825_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 11353;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11352;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["3596:11:90", "3608:16:90"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10825;
                                readonly src: "3596:28:90";
                            };
                            readonly referencedDeclaration: 10825;
                            readonly src: "3596:28:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10825_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11356;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "3668:10:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11363;
                        readonly src: "3655:23:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 11355;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3655:5:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11358;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "3696:5:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11363;
                        readonly src: "3688:13:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11357;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3688:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3555:152:90";
                };
                readonly returnParameters: {
                    readonly id: 11362;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11361;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11363;
                        readonly src: "3726:7:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11360;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3726:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3725:9:90";
                };
                readonly scope: 11398;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11380;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4368:231:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11364;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3741:622:90";
                    readonly text: "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance.";
                };
                readonly functionSelector: "1b06a35b";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deployTarget";
                readonly nameLocation: "4377:12:90";
                readonly parameters: {
                    readonly id: 11376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11366;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "4407:13:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11380;
                        readonly src: "4399:21:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11365;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4399:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11369;
                        readonly mutability: "mutable";
                        readonly name: "_deployConfig";
                        readonly nameLocation: "4466:13:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11380;
                        readonly src: "4430:49:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10825_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 11368;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11367;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["4430:11:90", "4442:16:90"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10825;
                                readonly src: "4430:28:90";
                            };
                            readonly referencedDeclaration: 10825;
                            readonly src: "4430:28:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$10825_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11371;
                        readonly mutability: "mutable";
                        readonly name: "_extraData";
                        readonly nameLocation: "4502:10:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11380;
                        readonly src: "4489:23:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 11370;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4489:5:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11373;
                        readonly mutability: "mutable";
                        readonly name: "_targetIndex";
                        readonly nameLocation: "4530:12:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11380;
                        readonly src: "4522:20:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11372;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4522:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11375;
                        readonly mutability: "mutable";
                        readonly name: "_salt";
                        readonly nameLocation: "4560:5:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11380;
                        readonly src: "4552:13:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11374;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4552:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4389:182:90";
                };
                readonly returnParameters: {
                    readonly id: 11379;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11378;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11380;
                        readonly src: "4590:7:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11377;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4590:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4589:9:90";
                };
                readonly scope: 11398;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11397;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5310:220:90";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11381;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4605:700:90";
                    readonly text: "@notice Initializes a pool that was deployed by this coordinator.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created.";
                };
                readonly functionSelector: "16abfc70";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initialize";
                readonly nameLocation: "5319:10:90";
                readonly parameters: {
                    readonly id: 11393;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11383;
                        readonly mutability: "mutable";
                        readonly name: "_deploymentId";
                        readonly nameLocation: "5347:13:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11397;
                        readonly src: "5339:21:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11382;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5339:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11385;
                        readonly mutability: "mutable";
                        readonly name: "_lp";
                        readonly nameLocation: "5378:3:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11397;
                        readonly src: "5370:11:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11384;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5370:7:90";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11387;
                        readonly mutability: "mutable";
                        readonly name: "_contribution";
                        readonly nameLocation: "5399:13:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11397;
                        readonly src: "5391:21:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11386;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5391:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11389;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "5430:4:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11397;
                        readonly src: "5422:12:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11388;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5422:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11392;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "5471:8:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11397;
                        readonly src: "5444:35:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 11391;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11390;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["5444:11:90", "5456:7:90"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "5444:19:90";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "5444:19:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5329:156:90";
                };
                readonly returnParameters: {
                    readonly id: 11396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11395;
                        readonly mutability: "mutable";
                        readonly name: "lpShares";
                        readonly nameLocation: "5520:8:90";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11397;
                        readonly src: "5512:16:90";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11394;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5512:7:90";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5511:18:90";
                };
                readonly scope: 11398;
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
            readonly linearizedBaseContracts: readonly [11398];
            readonly name: "IHyperdriveDeployerCoordinator";
            readonly nameLocation: "124:30:90";
            readonly scope: 11399;
            readonly usedErrors: readonly [11300, 11303, 11306, 11309, 11312, 11315, 11318, 11321, 11324, 11327, 11330, 11333, 11336, 11339, 11342, 11345, 11348];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 90;
};
//# sourceMappingURL=IHyperdriveDeployerCoordinator.d.ts.map