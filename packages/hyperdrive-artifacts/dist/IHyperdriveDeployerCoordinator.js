export const IHyperdriveDeployerCoordinator = {
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
            "name": "NotPayable",
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
        "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "8d10a15b",
        "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "1b06a35b",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"_0\":\"target The address of the newly deployed target instance.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":\"IHyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xb21fef06e9a50d1dd8fb765fe9efe9dd0cf01dfba1edf519743930e64b6cec9b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f5dba59592d1f4ff5359367ceadac86a19dbb976958c5abf632c953ae10b8799\",\"dweb:/ipfs/QmTfWhYzcMaLtmJFymXPweCXu6njXQPtHf4mhPEWErR8V5\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                    "name": "NotPayable"
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
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
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
                    "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        "details": "As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.",
                        "params": {
                            "_deployConfig": "The deploy configuration of the Hyperdrive pool.",
                            "_deploymentId": "The ID of the deployment.",
                            "_extraData": "The extra data that contains the pool and sweep targets.",
                            "_salt": "The create2 salt used to deploy the target.",
                            "_targetIndex": "The index of the target to deploy."
                        },
                        "returns": {
                            "_0": "target The address of the newly deployed target instance."
                        }
                    },
                    "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        "details": "This function utilizes several helper functions that provide      flexibility to implementations.",
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
                    "deploy(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        "notice": "Deploys a Hyperdrive instance with the given parameters."
                    },
                    "deployTarget(bytes32,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
                        "notice": "Deploys a Hyperdrive target instance with the given parameters."
                    },
                    "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Initializes a pool that was deployed by this coordinator."
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
                "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": "IHyperdriveDeployerCoordinator"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                "keccak256": "0xb21fef06e9a50d1dd8fb765fe9efe9dd0cf01dfba1edf519743930e64b6cec9b",
                "urls": [
                    "bzz-raw://f5dba59592d1f4ff5359367ceadac86a19dbb976958c5abf632c953ae10b8799",
                    "dweb:/ipfs/QmTfWhYzcMaLtmJFymXPweCXu6njXQPtHf4mhPEWErR8V5"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
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
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol",
        "id": 11351,
        "exportedSymbols": {
            "IHyperdrive": [
                11028
            ],
            "IHyperdriveDeployerCoordinator": [
                11350
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:5494:90",
        "nodes": [
            {
                "id": 11247,
                "nodeType": "PragmaDirective",
                "src": "39:23:90",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11249,
                "nodeType": "ImportDirective",
                "src": "64:48:90",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11351,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11248,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "73:11:90",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11350,
                "nodeType": "ContractDefinition",
                "src": "114:5418:90",
                "nodes": [
                    {
                        "id": 11252,
                        "nodeType": "ErrorDefinition",
                        "src": "300:32:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11250,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:114:90",
                            "text": "@notice Thrown when a user attempts to deploy target0 the deployment has\n         already been created."
                        },
                        "errorSelector": "77c3669a",
                        "name": "DeploymentAlreadyExists",
                        "nameLocation": "306:23:90",
                        "parameters": {
                            "id": 11251,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "329:2:90"
                        }
                    },
                    {
                        "id": 11255,
                        "nodeType": "ErrorDefinition",
                        "src": "496:31:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11253,
                            "nodeType": "StructuredDocumentation",
                            "src": "338:153:90",
                            "text": "@notice Thrown when a user attempts to deploy a contract that requires\n         the deployment to be created and the deployment doesn't exist."
                        },
                        "errorSelector": "e62c7024",
                        "name": "DeploymentDoesNotExist",
                        "nameLocation": "502:22:90",
                        "parameters": {
                            "id": 11254,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "524:2:90"
                        }
                    },
                    {
                        "id": 11258,
                        "nodeType": "ErrorDefinition",
                        "src": "673:29:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11256,
                            "nodeType": "StructuredDocumentation",
                            "src": "533:135:90",
                            "text": "@notice Thrown when a user attempts to deploy a Hyperdrive entrypoint\n         without first deploying the required targets."
                        },
                        "errorSelector": "e97cc2bf",
                        "name": "IncompleteDeployment",
                        "nameLocation": "679:20:90",
                        "parameters": {
                            "id": 11257,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "699:2:90"
                        }
                    },
                    {
                        "id": 11261,
                        "nodeType": "ErrorDefinition",
                        "src": "836:34:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11259,
                            "nodeType": "StructuredDocumentation",
                            "src": "708:123:90",
                            "text": "@notice Thrown when a user attempts to deploy a hyperdrive contract\n         after it has already been deployed."
                        },
                        "errorSelector": "2c95caeb",
                        "name": "HyperdriveAlreadyDeployed",
                        "nameLocation": "842:25:90",
                        "parameters": {
                            "id": 11260,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "867:2:90"
                        }
                    },
                    {
                        "id": 11264,
                        "nodeType": "ErrorDefinition",
                        "src": "1001:32:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11262,
                            "nodeType": "StructuredDocumentation",
                            "src": "876:120:90",
                            "text": "@notice Thrown when a user attempts to initialize a hyperdrive contract\n         before is has been deployed."
                        },
                        "errorSelector": "952b05cb",
                        "name": "HyperdriveIsNotDeployed",
                        "nameLocation": "1007:23:90",
                        "parameters": {
                            "id": 11263,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1030:2:90"
                        }
                    },
                    {
                        "id": 11267,
                        "nodeType": "ErrorDefinition",
                        "src": "1179:26:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11265,
                            "nodeType": "StructuredDocumentation",
                            "src": "1039:135:90",
                            "text": "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance."
                        },
                        "errorSelector": "11011294",
                        "name": "InsufficientValue",
                        "nameLocation": "1185:17:90",
                        "parameters": {
                            "id": 11266,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1202:2:90"
                        }
                    },
                    {
                        "id": 11270,
                        "nodeType": "ErrorDefinition",
                        "src": "1282:34:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11268,
                            "nodeType": "StructuredDocumentation",
                            "src": "1211:66:90",
                            "text": "@notice Thrown when the checkpoint duration specified is zero."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "1288:25:90",
                        "parameters": {
                            "id": 11269,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1313:2:90"
                        }
                    },
                    {
                        "id": 11273,
                        "nodeType": "ErrorDefinition",
                        "src": "1457:26:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11271,
                            "nodeType": "StructuredDocumentation",
                            "src": "1322:130:90",
                            "text": "@notice Thrown when the curve fee, flat fee, governance LP fee, or\n         governance zombie fee is greater than 100%."
                        },
                        "errorSelector": "45ee5986",
                        "name": "InvalidFeeAmounts",
                        "nameLocation": "1463:17:90",
                        "parameters": {
                            "id": 11272,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1480:2:90"
                        }
                    },
                    {
                        "id": 11276,
                        "nodeType": "ErrorDefinition",
                        "src": "1737:36:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11274,
                            "nodeType": "StructuredDocumentation",
                            "src": "1489:243:90",
                            "text": "@notice Thrown when the minimum share reserves is too small. The\n         absolute smallest allowable minimum share reserves is 1e3;\n         however, yield sources may require a larger minimum share\n         reserves."
                        },
                        "errorSelector": "49db44f5",
                        "name": "InvalidMinimumShareReserves",
                        "nameLocation": "1743:27:90",
                        "parameters": {
                            "id": 11275,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1770:2:90"
                        }
                    },
                    {
                        "id": 11279,
                        "nodeType": "ErrorDefinition",
                        "src": "1852:40:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11277,
                            "nodeType": "StructuredDocumentation",
                            "src": "1779:68:90",
                            "text": "@notice Thrown when the minimum transaction amount is too small."
                        },
                        "errorSelector": "3192a446",
                        "name": "InvalidMinimumTransactionAmount",
                        "nameLocation": "1858:31:90",
                        "parameters": {
                            "id": 11278,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1889:2:90"
                        }
                    },
                    {
                        "id": 11282,
                        "nodeType": "ErrorDefinition",
                        "src": "2053:32:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11280,
                            "nodeType": "StructuredDocumentation",
                            "src": "1898:150:90",
                            "text": "@notice Thrown when the position duration is smaller than the checkpoint\n         duration or is not a multiple of the checkpoint duration."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "2059:23:90",
                        "parameters": {
                            "id": 11281,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2082:2:90"
                        }
                    },
                    {
                        "id": 11285,
                        "nodeType": "ErrorDefinition",
                        "src": "2230:27:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11283,
                            "nodeType": "StructuredDocumentation",
                            "src": "2091:134:90",
                            "text": "@notice Thrown when a user attempts to deploy a target using a target\n         index that is outside of the accepted range."
                        },
                        "errorSelector": "3b3f02b2",
                        "name": "InvalidTargetIndex",
                        "nameLocation": "2236:18:90",
                        "parameters": {
                            "id": 11284,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2254:2:90"
                        }
                    },
                    {
                        "id": 11288,
                        "nodeType": "ErrorDefinition",
                        "src": "2449:25:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11286,
                            "nodeType": "StructuredDocumentation",
                            "src": "2263:181:90",
                            "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with a config that doesn't match the deployment's\n         config hash."
                        },
                        "errorSelector": "332ee11f",
                        "name": "MismatchedConfig",
                        "nameLocation": "2455:16:90",
                        "parameters": {
                            "id": 11287,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2471:2:90"
                        }
                    },
                    {
                        "id": 11291,
                        "nodeType": "ErrorDefinition",
                        "src": "2672:28:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11289,
                            "nodeType": "StructuredDocumentation",
                            "src": "2480:187:90",
                            "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with extra data that doesn't match the deployment's\n         extra data hash."
                        },
                        "errorSelector": "d1939688",
                        "name": "MismatchedExtraData",
                        "nameLocation": "2678:19:90",
                        "parameters": {
                            "id": 11290,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2697:2:90"
                        }
                    },
                    {
                        "id": 11294,
                        "nodeType": "ErrorDefinition",
                        "src": "2825:19:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11292,
                            "nodeType": "StructuredDocumentation",
                            "src": "2706:114:90",
                            "text": "@notice Thrown when ether is sent to an instance that doesn't accept\n         ether as a deposit asset."
                        },
                        "errorSelector": "1574f9f3",
                        "name": "NotPayable",
                        "nameLocation": "2831:10:90",
                        "parameters": {
                            "id": 11293,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2841:2:90"
                        }
                    },
                    {
                        "id": 11297,
                        "nodeType": "ErrorDefinition",
                        "src": "2974:30:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11295,
                            "nodeType": "StructuredDocumentation",
                            "src": "2850:119:90",
                            "text": "@notice Thrown when a user attempts to deploy a target contract after\n         it has already been deployed."
                        },
                        "errorSelector": "0744b578",
                        "name": "TargetAlreadyDeployed",
                        "nameLocation": "2980:21:90",
                        "parameters": {
                            "id": 11296,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3001:2:90"
                        }
                    },
                    {
                        "id": 11300,
                        "nodeType": "ErrorDefinition",
                        "src": "3063:23:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11298,
                            "nodeType": "StructuredDocumentation",
                            "src": "3010:48:90",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "3069:14:90",
                        "parameters": {
                            "id": 11299,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3083:2:90"
                        }
                    },
                    {
                        "id": 11315,
                        "nodeType": "FunctionDefinition",
                        "src": "3540:195:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11301,
                            "nodeType": "StructuredDocumentation",
                            "src": "3115:420:90",
                            "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance."
                        },
                        "functionSelector": "8d10a15b",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "3549:6:90",
                        "parameters": {
                            "id": 11311,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11303,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "3573:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11315,
                                    "src": "3565:21:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11302,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3565:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11306,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "3632:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11315,
                                    "src": "3596:49:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10777_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 11305,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11304,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "3596:11:90",
                                                "3608:16:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10777,
                                            "src": "3596:28:90"
                                        },
                                        "referencedDeclaration": 10777,
                                        "src": "3596:28:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10777_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11308,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "3668:10:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11315,
                                    "src": "3655:23:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 11307,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3655:5:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11310,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "3696:5:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11315,
                                    "src": "3688:13:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11309,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3688:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3555:152:90"
                        },
                        "returnParameters": {
                            "id": 11314,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11313,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11315,
                                    "src": "3726:7:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11312,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3726:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3725:9:90"
                        },
                        "scope": 11350,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11332,
                        "nodeType": "FunctionDefinition",
                        "src": "4368:231:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11316,
                            "nodeType": "StructuredDocumentation",
                            "src": "3741:622:90",
                            "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
                        },
                        "functionSelector": "1b06a35b",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployTarget",
                        "nameLocation": "4377:12:90",
                        "parameters": {
                            "id": 11328,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11318,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "4407:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11332,
                                    "src": "4399:21:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11317,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4399:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11321,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "4466:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11332,
                                    "src": "4430:49:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10777_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 11320,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11319,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "4430:11:90",
                                                "4442:16:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10777,
                                            "src": "4430:28:90"
                                        },
                                        "referencedDeclaration": 10777,
                                        "src": "4430:28:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10777_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11323,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "4502:10:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11332,
                                    "src": "4489:23:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 11322,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4489:5:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11325,
                                    "mutability": "mutable",
                                    "name": "_targetIndex",
                                    "nameLocation": "4530:12:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11332,
                                    "src": "4522:20:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11324,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4522:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11327,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "4560:5:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11332,
                                    "src": "4552:13:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11326,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4552:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4389:182:90"
                        },
                        "returnParameters": {
                            "id": 11331,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11330,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11332,
                                    "src": "4590:7:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11329,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4590:7:90",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4589:9:90"
                        },
                        "scope": 11350,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11349,
                        "nodeType": "FunctionDefinition",
                        "src": "5310:220:90",
                        "nodes": [],
                        "documentation": {
                            "id": 11333,
                            "nodeType": "StructuredDocumentation",
                            "src": "4605:700:90",
                            "text": "@notice Initializes a pool that was deployed by this coordinator.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "functionSelector": "16abfc70",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "5319:10:90",
                        "parameters": {
                            "id": 11345,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11335,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "5347:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11349,
                                    "src": "5339:21:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 11334,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5339:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11337,
                                    "mutability": "mutable",
                                    "name": "_lp",
                                    "nameLocation": "5378:3:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11349,
                                    "src": "5370:11:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11336,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5370:7:90",
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
                                    "id": 11339,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "5399:13:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11349,
                                    "src": "5391:21:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11338,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5391:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11341,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "5430:4:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11349,
                                    "src": "5422:12:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11340,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5422:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11344,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "5471:8:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11349,
                                    "src": "5444:35:90",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10875_memory_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 11343,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11342,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "5444:11:90",
                                                "5456:7:90"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10875,
                                            "src": "5444:19:90"
                                        },
                                        "referencedDeclaration": 10875,
                                        "src": "5444:19:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5329:156:90"
                        },
                        "returnParameters": {
                            "id": 11348,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11347,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "5520:8:90",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11349,
                                    "src": "5512:16:90",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11346,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5512:7:90",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5511:18:90"
                        },
                        "scope": 11350,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IHyperdriveDeployerCoordinator",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11350
                ],
                "name": "IHyperdriveDeployerCoordinator",
                "nameLocation": "124:30:90",
                "scope": 11351,
                "usedErrors": [
                    11252,
                    11255,
                    11258,
                    11261,
                    11264,
                    11267,
                    11270,
                    11273,
                    11276,
                    11279,
                    11282,
                    11285,
                    11288,
                    11291,
                    11294,
                    11297,
                    11300
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 90
};
