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
        "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "1ae6f515",
        "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": "0b3c4f86",
        "initialize(bytes32,address,uint256,uint256,(address,bool,bytes))": "16abfc70"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultSharesToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"_0\":\"target The address of the newly deployed target instance.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"InvalidVaultSharesToken()\":[{\"notice\":\"Thrown when the vault shares token isn't valid. Each instance         will have different criteria for what constitutes a valid base         token.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":\"IHyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0x2eb8c9cd2fb58f1c6b1054c5d5e325b78386855bbcfd0a86b595aa98bd05df28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cd2aa557854a35ada0b5d334c981739eecbc82580aa35693277749b8cadbe4f4\",\"dweb:/ipfs/QmcRWJuLSrA44XmFC1bMAGCKUfPmVUnUv7YE8fNC4gy91v\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                    "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
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
                    "deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": {
                        "notice": "Deploys a Hyperdrive instance with the given parameters."
                    },
                    "deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)": {
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
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
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
                "keccak256": "0x2eb8c9cd2fb58f1c6b1054c5d5e325b78386855bbcfd0a86b595aa98bd05df28",
                "urls": [
                    "bzz-raw://cd2aa557854a35ada0b5d334c981739eecbc82580aa35693277749b8cadbe4f4",
                    "dweb:/ipfs/QmcRWJuLSrA44XmFC1bMAGCKUfPmVUnUv7YE8fNC4gy91v"
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
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
        "id": 11005,
        "exportedSymbols": {
            "IHyperdrive": [
                10676
            ],
            "IHyperdriveDeployerCoordinator": [
                11004
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:5899:88",
        "nodes": [
            {
                "id": 10895,
                "nodeType": "PragmaDirective",
                "src": "39:23:88",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10897,
                "nodeType": "ImportDirective",
                "src": "64:48:88",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11005,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10896,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "73:11:88",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11004,
                "nodeType": "ContractDefinition",
                "src": "114:5823:88",
                "nodes": [
                    {
                        "id": 10900,
                        "nodeType": "ErrorDefinition",
                        "src": "300:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10898,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:114:88",
                            "text": "@notice Thrown when a user attempts to deploy target0 the deployment has\n         already been created."
                        },
                        "errorSelector": "77c3669a",
                        "name": "DeploymentAlreadyExists",
                        "nameLocation": "306:23:88",
                        "parameters": {
                            "id": 10899,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "329:2:88"
                        }
                    },
                    {
                        "id": 10903,
                        "nodeType": "ErrorDefinition",
                        "src": "496:31:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10901,
                            "nodeType": "StructuredDocumentation",
                            "src": "338:153:88",
                            "text": "@notice Thrown when a user attempts to deploy a contract that requires\n         the deployment to be created and the deployment doesn't exist."
                        },
                        "errorSelector": "e62c7024",
                        "name": "DeploymentDoesNotExist",
                        "nameLocation": "502:22:88",
                        "parameters": {
                            "id": 10902,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "524:2:88"
                        }
                    },
                    {
                        "id": 10906,
                        "nodeType": "ErrorDefinition",
                        "src": "673:29:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10904,
                            "nodeType": "StructuredDocumentation",
                            "src": "533:135:88",
                            "text": "@notice Thrown when a user attempts to deploy a Hyperdrive entrypoint\n         without first deploying the required targets."
                        },
                        "errorSelector": "e97cc2bf",
                        "name": "IncompleteDeployment",
                        "nameLocation": "679:20:88",
                        "parameters": {
                            "id": 10905,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "699:2:88"
                        }
                    },
                    {
                        "id": 10909,
                        "nodeType": "ErrorDefinition",
                        "src": "836:34:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10907,
                            "nodeType": "StructuredDocumentation",
                            "src": "708:123:88",
                            "text": "@notice Thrown when a user attempts to deploy a hyperdrive contract\n         after it has already been deployed."
                        },
                        "errorSelector": "2c95caeb",
                        "name": "HyperdriveAlreadyDeployed",
                        "nameLocation": "842:25:88",
                        "parameters": {
                            "id": 10908,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "867:2:88"
                        }
                    },
                    {
                        "id": 10912,
                        "nodeType": "ErrorDefinition",
                        "src": "1001:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10910,
                            "nodeType": "StructuredDocumentation",
                            "src": "876:120:88",
                            "text": "@notice Thrown when a user attempts to initialize a hyperdrive contract\n         before is has been deployed."
                        },
                        "errorSelector": "952b05cb",
                        "name": "HyperdriveIsNotDeployed",
                        "nameLocation": "1007:23:88",
                        "parameters": {
                            "id": 10911,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1030:2:88"
                        }
                    },
                    {
                        "id": 10915,
                        "nodeType": "ErrorDefinition",
                        "src": "1179:26:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10913,
                            "nodeType": "StructuredDocumentation",
                            "src": "1039:135:88",
                            "text": "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance."
                        },
                        "errorSelector": "11011294",
                        "name": "InsufficientValue",
                        "nameLocation": "1185:17:88",
                        "parameters": {
                            "id": 10914,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1202:2:88"
                        }
                    },
                    {
                        "id": 10918,
                        "nodeType": "ErrorDefinition",
                        "src": "1367:25:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10916,
                            "nodeType": "StructuredDocumentation",
                            "src": "1211:151:88",
                            "text": "@notice Thrown when the base token isn't valid. Each instance will have\n         different criteria for what constitutes a valid base token."
                        },
                        "errorSelector": "0e442a4a",
                        "name": "InvalidBaseToken",
                        "nameLocation": "1373:16:88",
                        "parameters": {
                            "id": 10917,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1389:2:88"
                        }
                    },
                    {
                        "id": 10921,
                        "nodeType": "ErrorDefinition",
                        "src": "1578:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10919,
                            "nodeType": "StructuredDocumentation",
                            "src": "1398:175:88",
                            "text": "@notice Thrown when the vault shares token isn't valid. Each instance\n         will have different criteria for what constitutes a valid base\n         token."
                        },
                        "errorSelector": "e7ee73a0",
                        "name": "InvalidVaultSharesToken",
                        "nameLocation": "1584:23:88",
                        "parameters": {
                            "id": 10920,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1607:2:88"
                        }
                    },
                    {
                        "id": 10924,
                        "nodeType": "ErrorDefinition",
                        "src": "1687:34:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10922,
                            "nodeType": "StructuredDocumentation",
                            "src": "1616:66:88",
                            "text": "@notice Thrown when the checkpoint duration specified is zero."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "1693:25:88",
                        "parameters": {
                            "id": 10923,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1718:2:88"
                        }
                    },
                    {
                        "id": 10927,
                        "nodeType": "ErrorDefinition",
                        "src": "1862:26:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10925,
                            "nodeType": "StructuredDocumentation",
                            "src": "1727:130:88",
                            "text": "@notice Thrown when the curve fee, flat fee, governance LP fee, or\n         governance zombie fee is greater than 100%."
                        },
                        "errorSelector": "45ee5986",
                        "name": "InvalidFeeAmounts",
                        "nameLocation": "1868:17:88",
                        "parameters": {
                            "id": 10926,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1885:2:88"
                        }
                    },
                    {
                        "id": 10930,
                        "nodeType": "ErrorDefinition",
                        "src": "2142:36:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10928,
                            "nodeType": "StructuredDocumentation",
                            "src": "1894:243:88",
                            "text": "@notice Thrown when the minimum share reserves is too small. The\n         absolute smallest allowable minimum share reserves is 1e3;\n         however, yield sources may require a larger minimum share\n         reserves."
                        },
                        "errorSelector": "49db44f5",
                        "name": "InvalidMinimumShareReserves",
                        "nameLocation": "2148:27:88",
                        "parameters": {
                            "id": 10929,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2175:2:88"
                        }
                    },
                    {
                        "id": 10933,
                        "nodeType": "ErrorDefinition",
                        "src": "2257:40:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10931,
                            "nodeType": "StructuredDocumentation",
                            "src": "2184:68:88",
                            "text": "@notice Thrown when the minimum transaction amount is too small."
                        },
                        "errorSelector": "3192a446",
                        "name": "InvalidMinimumTransactionAmount",
                        "nameLocation": "2263:31:88",
                        "parameters": {
                            "id": 10932,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2294:2:88"
                        }
                    },
                    {
                        "id": 10936,
                        "nodeType": "ErrorDefinition",
                        "src": "2458:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10934,
                            "nodeType": "StructuredDocumentation",
                            "src": "2303:150:88",
                            "text": "@notice Thrown when the position duration is smaller than the checkpoint\n         duration or is not a multiple of the checkpoint duration."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "2464:23:88",
                        "parameters": {
                            "id": 10935,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2487:2:88"
                        }
                    },
                    {
                        "id": 10939,
                        "nodeType": "ErrorDefinition",
                        "src": "2635:27:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10937,
                            "nodeType": "StructuredDocumentation",
                            "src": "2496:134:88",
                            "text": "@notice Thrown when a user attempts to deploy a target using a target\n         index that is outside of the accepted range."
                        },
                        "errorSelector": "3b3f02b2",
                        "name": "InvalidTargetIndex",
                        "nameLocation": "2641:18:88",
                        "parameters": {
                            "id": 10938,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2659:2:88"
                        }
                    },
                    {
                        "id": 10942,
                        "nodeType": "ErrorDefinition",
                        "src": "2854:25:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10940,
                            "nodeType": "StructuredDocumentation",
                            "src": "2668:181:88",
                            "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with a config that doesn't match the deployment's\n         config hash."
                        },
                        "errorSelector": "332ee11f",
                        "name": "MismatchedConfig",
                        "nameLocation": "2860:16:88",
                        "parameters": {
                            "id": 10941,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2876:2:88"
                        }
                    },
                    {
                        "id": 10945,
                        "nodeType": "ErrorDefinition",
                        "src": "3077:28:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10943,
                            "nodeType": "StructuredDocumentation",
                            "src": "2885:187:88",
                            "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with extra data that doesn't match the deployment's\n         extra data hash."
                        },
                        "errorSelector": "d1939688",
                        "name": "MismatchedExtraData",
                        "nameLocation": "3083:19:88",
                        "parameters": {
                            "id": 10944,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3102:2:88"
                        }
                    },
                    {
                        "id": 10948,
                        "nodeType": "ErrorDefinition",
                        "src": "3230:19:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10946,
                            "nodeType": "StructuredDocumentation",
                            "src": "3111:114:88",
                            "text": "@notice Thrown when ether is sent to an instance that doesn't accept\n         ether as a deposit asset."
                        },
                        "errorSelector": "1574f9f3",
                        "name": "NotPayable",
                        "nameLocation": "3236:10:88",
                        "parameters": {
                            "id": 10947,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3246:2:88"
                        }
                    },
                    {
                        "id": 10951,
                        "nodeType": "ErrorDefinition",
                        "src": "3379:30:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10949,
                            "nodeType": "StructuredDocumentation",
                            "src": "3255:119:88",
                            "text": "@notice Thrown when a user attempts to deploy a target contract after\n         it has already been deployed."
                        },
                        "errorSelector": "0744b578",
                        "name": "TargetAlreadyDeployed",
                        "nameLocation": "3385:21:88",
                        "parameters": {
                            "id": 10950,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3406:2:88"
                        }
                    },
                    {
                        "id": 10954,
                        "nodeType": "ErrorDefinition",
                        "src": "3468:23:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10952,
                            "nodeType": "StructuredDocumentation",
                            "src": "3415:48:88",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "3474:14:88",
                        "parameters": {
                            "id": 10953,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3488:2:88"
                        }
                    },
                    {
                        "id": 10969,
                        "nodeType": "FunctionDefinition",
                        "src": "3945:195:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10955,
                            "nodeType": "StructuredDocumentation",
                            "src": "3520:420:88",
                            "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance."
                        },
                        "functionSelector": "1ae6f515",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "3954:6:88",
                        "parameters": {
                            "id": 10965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10957,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "3978:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10969,
                                    "src": "3970:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10956,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3970:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10960,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "4037:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10969,
                                    "src": "4001:49:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10424_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 10959,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10958,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "4001:11:88",
                                                "4013:16:88"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10424,
                                            "src": "4001:28:88"
                                        },
                                        "referencedDeclaration": 10424,
                                        "src": "4001:28:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10424_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10962,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "4073:10:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10969,
                                    "src": "4060:23:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 10961,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4060:5:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10964,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "4101:5:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10969,
                                    "src": "4093:13:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10963,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4093:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3960:152:88"
                        },
                        "returnParameters": {
                            "id": 10968,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10967,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10969,
                                    "src": "4131:7:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10966,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4131:7:88",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4130:9:88"
                        },
                        "scope": 11004,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10986,
                        "nodeType": "FunctionDefinition",
                        "src": "4773:231:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10970,
                            "nodeType": "StructuredDocumentation",
                            "src": "4146:622:88",
                            "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
                        },
                        "functionSelector": "0b3c4f86",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployTarget",
                        "nameLocation": "4782:12:88",
                        "parameters": {
                            "id": 10982,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10972,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "4812:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10986,
                                    "src": "4804:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10971,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4804:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10975,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "4871:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10986,
                                    "src": "4835:49:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10424_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 10974,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10973,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "4835:11:88",
                                                "4847:16:88"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10424,
                                            "src": "4835:28:88"
                                        },
                                        "referencedDeclaration": 10424,
                                        "src": "4835:28:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10424_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10977,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "4907:10:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10986,
                                    "src": "4894:23:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 10976,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4894:5:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10979,
                                    "mutability": "mutable",
                                    "name": "_targetIndex",
                                    "nameLocation": "4935:12:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10986,
                                    "src": "4927:20:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10978,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4927:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10981,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "4965:5:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10986,
                                    "src": "4957:13:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10980,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4957:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4794:182:88"
                        },
                        "returnParameters": {
                            "id": 10985,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10984,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10986,
                                    "src": "4995:7:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10983,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4995:7:88",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4994:9:88"
                        },
                        "scope": 11004,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11003,
                        "nodeType": "FunctionDefinition",
                        "src": "5715:220:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10987,
                            "nodeType": "StructuredDocumentation",
                            "src": "5010:700:88",
                            "text": "@notice Initializes a pool that was deployed by this coordinator.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "functionSelector": "16abfc70",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "5724:10:88",
                        "parameters": {
                            "id": 10999,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10989,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "5752:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11003,
                                    "src": "5744:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10988,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5744:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10991,
                                    "mutability": "mutable",
                                    "name": "_lp",
                                    "nameLocation": "5783:3:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11003,
                                    "src": "5775:11:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10990,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5775:7:88",
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
                                    "id": 10993,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "5804:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11003,
                                    "src": "5796:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10992,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5796:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10995,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "5835:4:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11003,
                                    "src": "5827:12:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10994,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5827:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10998,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "5876:8:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11003,
                                    "src": "5849:35:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_memory_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10997,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10996,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "5849:11:88",
                                                "5861:7:88"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "5849:19:88"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "5849:19:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5734:156:88"
                        },
                        "returnParameters": {
                            "id": 11002,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11001,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "5925:8:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11003,
                                    "src": "5917:16:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11000,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5917:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5916:18:88"
                        },
                        "scope": 11004,
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
                    11004
                ],
                "name": "IHyperdriveDeployerCoordinator",
                "nameLocation": "124:30:88",
                "scope": 11005,
                "usedErrors": [
                    10900,
                    10903,
                    10906,
                    10909,
                    10912,
                    10915,
                    10918,
                    10921,
                    10924,
                    10927,
                    10930,
                    10933,
                    10936,
                    10939,
                    10942,
                    10945,
                    10948,
                    10951,
                    10954
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 88
};
