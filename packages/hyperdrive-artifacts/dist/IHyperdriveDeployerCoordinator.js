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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeploymentAlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeploymentDoesNotExist\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveIsNotDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompleteDeployment\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTargetIndex\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidVaultSharesToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MismatchedExtraData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SenderIsNotFactory\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TargetAlreadyDeployed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"_deployConfig\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"_extraData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"_targetIndex\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"_salt\",\"type\":\"bytes32\"}],\"name\":\"deployTarget\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_deploymentId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_lp\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy Hyperdrive.\"},\"returns\":{\"_0\":\"The address of the newly deployed Hyperdrive instance.\"}},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"details\":\"As a convention, target0 must be deployed first. After this, the      targets can be deployed in any order.\",\"params\":{\"_deployConfig\":\"The deploy configuration of the Hyperdrive pool.\",\"_deploymentId\":\"The ID of the deployment.\",\"_extraData\":\"The extra data that contains the pool and sweep targets.\",\"_salt\":\"The create2 salt used to deploy the target.\",\"_targetIndex\":\"The index of the target to deploy.\"},\"returns\":{\"_0\":\"target The address of the newly deployed target instance.\"}},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"details\":\"This function utilizes several helper functions that provide      flexibility to implementations.\",\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_deploymentId\":\"The ID of the deployment.\",\"_lp\":\"The LP that is initializing the pool.\",\"_options\":\"The options that configure how the initialization is        settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DeploymentAlreadyExists()\":[{\"notice\":\"Thrown when a user attempts to deploy target0 the deployment has         already been created.\"}],\"DeploymentDoesNotExist()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract that requires         the deployment to be created and the deployment doesn't exist.\"}],\"HyperdriveAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a hyperdrive contract         after it has already been deployed.\"}],\"HyperdriveIsNotDeployed()\":[{\"notice\":\"Thrown when a user attempts to initialize a hyperdrive contract         before is has been deployed.\"}],\"IncompleteDeployment()\":[{\"notice\":\"Thrown when a user attempts to deploy a Hyperdrive entrypoint         without first deploying the required targets.\"}],\"InsufficientValue()\":[{\"notice\":\"Thrown when a deployer provides an insufficient amount of base         to initialize a payable Hyperdrive instance.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointDuration()\":[{\"notice\":\"Thrown when the checkpoint duration specified is zero.\"}],\"InvalidFeeAmounts()\":[{\"notice\":\"Thrown when the curve fee, flat fee, governance LP fee, or         governance zombie fee is greater than 100%.\"}],\"InvalidMinimumShareReserves()\":[{\"notice\":\"Thrown when the minimum share reserves is too small. The         absolute smallest allowable minimum share reserves is 1e3;         however, yield sources may require a larger minimum share         reserves.\"}],\"InvalidMinimumTransactionAmount()\":[{\"notice\":\"Thrown when the minimum transaction amount is too small.\"}],\"InvalidPositionDuration()\":[{\"notice\":\"Thrown when the position duration is smaller than the checkpoint         duration or is not a multiple of the checkpoint duration.\"}],\"InvalidTargetIndex()\":[{\"notice\":\"Thrown when a user attempts to deploy a target using a target         index that is outside of the accepted range.\"}],\"InvalidVaultSharesToken()\":[{\"notice\":\"Thrown when the vault shares token isn't valid. Each instance         will have different criteria for what constitutes a valid base         token.\"}],\"MismatchedConfig()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with a config that doesn't match the deployment's         config hash.\"}],\"MismatchedExtraData()\":[{\"notice\":\"Thrown when a user attempts to deploy a contract in an existing         deployment with extra data that doesn't match the deployment's         extra data hash.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"SenderIsNotFactory()\":[{\"notice\":\"Thrown when the sender of a `deploy`, `deployTarget`, or         `initialize` transaction isn't the associated factory.\"}],\"TargetAlreadyDeployed()\":[{\"notice\":\"Thrown when a user attempts to deploy a target contract after         it has already been deployed.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}]},\"kind\":\"user\",\"methods\":{\"deploy(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)\":{\"notice\":\"Deploys a Hyperdrive instance with the given parameters.\"},\"deployTarget(bytes32,(address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,uint256,bytes32)\":{\"notice\":\"Deploys a Hyperdrive target instance with the given parameters.\"},\"initialize(bytes32,address,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Initializes a pool that was deployed by this coordinator.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":\"IHyperdriveDeployerCoordinator\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58\",\"dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
        "id": 10685,
        "exportedSymbols": {
            "IHyperdrive": [
                10351
            ],
            "IHyperdriveDeployerCoordinator": [
                10684
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:6076:88",
        "nodes": [
            {
                "id": 10572,
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
                "id": 10574,
                "nodeType": "ImportDirective",
                "src": "64:48:88",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10685,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10573,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "73:11:88",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10684,
                "nodeType": "ContractDefinition",
                "src": "114:6000:88",
                "nodes": [
                    {
                        "id": 10577,
                        "nodeType": "ErrorDefinition",
                        "src": "300:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10575,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:114:88",
                            "text": "@notice Thrown when a user attempts to deploy target0 the deployment has\n         already been created."
                        },
                        "errorSelector": "77c3669a",
                        "name": "DeploymentAlreadyExists",
                        "nameLocation": "306:23:88",
                        "parameters": {
                            "id": 10576,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "329:2:88"
                        }
                    },
                    {
                        "id": 10580,
                        "nodeType": "ErrorDefinition",
                        "src": "496:31:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10578,
                            "nodeType": "StructuredDocumentation",
                            "src": "338:153:88",
                            "text": "@notice Thrown when a user attempts to deploy a contract that requires\n         the deployment to be created and the deployment doesn't exist."
                        },
                        "errorSelector": "e62c7024",
                        "name": "DeploymentDoesNotExist",
                        "nameLocation": "502:22:88",
                        "parameters": {
                            "id": 10579,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "524:2:88"
                        }
                    },
                    {
                        "id": 10583,
                        "nodeType": "ErrorDefinition",
                        "src": "673:29:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10581,
                            "nodeType": "StructuredDocumentation",
                            "src": "533:135:88",
                            "text": "@notice Thrown when a user attempts to deploy a Hyperdrive entrypoint\n         without first deploying the required targets."
                        },
                        "errorSelector": "e97cc2bf",
                        "name": "IncompleteDeployment",
                        "nameLocation": "679:20:88",
                        "parameters": {
                            "id": 10582,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "699:2:88"
                        }
                    },
                    {
                        "id": 10586,
                        "nodeType": "ErrorDefinition",
                        "src": "836:34:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10584,
                            "nodeType": "StructuredDocumentation",
                            "src": "708:123:88",
                            "text": "@notice Thrown when a user attempts to deploy a hyperdrive contract\n         after it has already been deployed."
                        },
                        "errorSelector": "2c95caeb",
                        "name": "HyperdriveAlreadyDeployed",
                        "nameLocation": "842:25:88",
                        "parameters": {
                            "id": 10585,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "867:2:88"
                        }
                    },
                    {
                        "id": 10589,
                        "nodeType": "ErrorDefinition",
                        "src": "1001:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10587,
                            "nodeType": "StructuredDocumentation",
                            "src": "876:120:88",
                            "text": "@notice Thrown when a user attempts to initialize a hyperdrive contract\n         before is has been deployed."
                        },
                        "errorSelector": "952b05cb",
                        "name": "HyperdriveIsNotDeployed",
                        "nameLocation": "1007:23:88",
                        "parameters": {
                            "id": 10588,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1030:2:88"
                        }
                    },
                    {
                        "id": 10592,
                        "nodeType": "ErrorDefinition",
                        "src": "1179:26:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10590,
                            "nodeType": "StructuredDocumentation",
                            "src": "1039:135:88",
                            "text": "@notice Thrown when a deployer provides an insufficient amount of base\n         to initialize a payable Hyperdrive instance."
                        },
                        "errorSelector": "11011294",
                        "name": "InsufficientValue",
                        "nameLocation": "1185:17:88",
                        "parameters": {
                            "id": 10591,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1202:2:88"
                        }
                    },
                    {
                        "id": 10595,
                        "nodeType": "ErrorDefinition",
                        "src": "1367:25:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10593,
                            "nodeType": "StructuredDocumentation",
                            "src": "1211:151:88",
                            "text": "@notice Thrown when the base token isn't valid. Each instance will have\n         different criteria for what constitutes a valid base token."
                        },
                        "errorSelector": "0e442a4a",
                        "name": "InvalidBaseToken",
                        "nameLocation": "1373:16:88",
                        "parameters": {
                            "id": 10594,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1389:2:88"
                        }
                    },
                    {
                        "id": 10598,
                        "nodeType": "ErrorDefinition",
                        "src": "1578:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10596,
                            "nodeType": "StructuredDocumentation",
                            "src": "1398:175:88",
                            "text": "@notice Thrown when the vault shares token isn't valid. Each instance\n         will have different criteria for what constitutes a valid base\n         token."
                        },
                        "errorSelector": "e7ee73a0",
                        "name": "InvalidVaultSharesToken",
                        "nameLocation": "1584:23:88",
                        "parameters": {
                            "id": 10597,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1607:2:88"
                        }
                    },
                    {
                        "id": 10601,
                        "nodeType": "ErrorDefinition",
                        "src": "1687:34:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10599,
                            "nodeType": "StructuredDocumentation",
                            "src": "1616:66:88",
                            "text": "@notice Thrown when the checkpoint duration specified is zero."
                        },
                        "errorSelector": "5428734d",
                        "name": "InvalidCheckpointDuration",
                        "nameLocation": "1693:25:88",
                        "parameters": {
                            "id": 10600,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1718:2:88"
                        }
                    },
                    {
                        "id": 10604,
                        "nodeType": "ErrorDefinition",
                        "src": "1862:26:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10602,
                            "nodeType": "StructuredDocumentation",
                            "src": "1727:130:88",
                            "text": "@notice Thrown when the curve fee, flat fee, governance LP fee, or\n         governance zombie fee is greater than 100%."
                        },
                        "errorSelector": "45ee5986",
                        "name": "InvalidFeeAmounts",
                        "nameLocation": "1868:17:88",
                        "parameters": {
                            "id": 10603,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1885:2:88"
                        }
                    },
                    {
                        "id": 10607,
                        "nodeType": "ErrorDefinition",
                        "src": "2142:36:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10605,
                            "nodeType": "StructuredDocumentation",
                            "src": "1894:243:88",
                            "text": "@notice Thrown when the minimum share reserves is too small. The\n         absolute smallest allowable minimum share reserves is 1e3;\n         however, yield sources may require a larger minimum share\n         reserves."
                        },
                        "errorSelector": "49db44f5",
                        "name": "InvalidMinimumShareReserves",
                        "nameLocation": "2148:27:88",
                        "parameters": {
                            "id": 10606,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2175:2:88"
                        }
                    },
                    {
                        "id": 10610,
                        "nodeType": "ErrorDefinition",
                        "src": "2257:40:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10608,
                            "nodeType": "StructuredDocumentation",
                            "src": "2184:68:88",
                            "text": "@notice Thrown when the minimum transaction amount is too small."
                        },
                        "errorSelector": "3192a446",
                        "name": "InvalidMinimumTransactionAmount",
                        "nameLocation": "2263:31:88",
                        "parameters": {
                            "id": 10609,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2294:2:88"
                        }
                    },
                    {
                        "id": 10613,
                        "nodeType": "ErrorDefinition",
                        "src": "2458:32:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10611,
                            "nodeType": "StructuredDocumentation",
                            "src": "2303:150:88",
                            "text": "@notice Thrown when the position duration is smaller than the checkpoint\n         duration or is not a multiple of the checkpoint duration."
                        },
                        "errorSelector": "4a7fff9e",
                        "name": "InvalidPositionDuration",
                        "nameLocation": "2464:23:88",
                        "parameters": {
                            "id": 10612,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2487:2:88"
                        }
                    },
                    {
                        "id": 10616,
                        "nodeType": "ErrorDefinition",
                        "src": "2635:27:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10614,
                            "nodeType": "StructuredDocumentation",
                            "src": "2496:134:88",
                            "text": "@notice Thrown when a user attempts to deploy a target using a target\n         index that is outside of the accepted range."
                        },
                        "errorSelector": "3b3f02b2",
                        "name": "InvalidTargetIndex",
                        "nameLocation": "2641:18:88",
                        "parameters": {
                            "id": 10615,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2659:2:88"
                        }
                    },
                    {
                        "id": 10619,
                        "nodeType": "ErrorDefinition",
                        "src": "2854:25:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10617,
                            "nodeType": "StructuredDocumentation",
                            "src": "2668:181:88",
                            "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with a config that doesn't match the deployment's\n         config hash."
                        },
                        "errorSelector": "332ee11f",
                        "name": "MismatchedConfig",
                        "nameLocation": "2860:16:88",
                        "parameters": {
                            "id": 10618,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2876:2:88"
                        }
                    },
                    {
                        "id": 10622,
                        "nodeType": "ErrorDefinition",
                        "src": "3077:28:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10620,
                            "nodeType": "StructuredDocumentation",
                            "src": "2885:187:88",
                            "text": "@notice Thrown when a user attempts to deploy a contract in an existing\n         deployment with extra data that doesn't match the deployment's\n         extra data hash."
                        },
                        "errorSelector": "d1939688",
                        "name": "MismatchedExtraData",
                        "nameLocation": "3083:19:88",
                        "parameters": {
                            "id": 10621,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3102:2:88"
                        }
                    },
                    {
                        "id": 10625,
                        "nodeType": "ErrorDefinition",
                        "src": "3230:19:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10623,
                            "nodeType": "StructuredDocumentation",
                            "src": "3111:114:88",
                            "text": "@notice Thrown when ether is sent to an instance that doesn't accept\n         ether as a deposit asset."
                        },
                        "errorSelector": "1574f9f3",
                        "name": "NotPayable",
                        "nameLocation": "3236:10:88",
                        "parameters": {
                            "id": 10624,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3246:2:88"
                        }
                    },
                    {
                        "id": 10628,
                        "nodeType": "ErrorDefinition",
                        "src": "3399:27:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10626,
                            "nodeType": "StructuredDocumentation",
                            "src": "3255:139:88",
                            "text": "@notice Thrown when the sender of a `deploy`, `deployTarget`, or\n         `initialize` transaction isn't the associated factory."
                        },
                        "errorSelector": "40843511",
                        "name": "SenderIsNotFactory",
                        "nameLocation": "3405:18:88",
                        "parameters": {
                            "id": 10627,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3423:2:88"
                        }
                    },
                    {
                        "id": 10631,
                        "nodeType": "ErrorDefinition",
                        "src": "3556:30:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10629,
                            "nodeType": "StructuredDocumentation",
                            "src": "3432:119:88",
                            "text": "@notice Thrown when a user attempts to deploy a target contract after\n         it has already been deployed."
                        },
                        "errorSelector": "0744b578",
                        "name": "TargetAlreadyDeployed",
                        "nameLocation": "3562:21:88",
                        "parameters": {
                            "id": 10630,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3583:2:88"
                        }
                    },
                    {
                        "id": 10634,
                        "nodeType": "ErrorDefinition",
                        "src": "3645:23:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10632,
                            "nodeType": "StructuredDocumentation",
                            "src": "3592:48:88",
                            "text": "@notice Thrown when an ether transfer fails."
                        },
                        "errorSelector": "90b8ec18",
                        "name": "TransferFailed",
                        "nameLocation": "3651:14:88",
                        "parameters": {
                            "id": 10633,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3665:2:88"
                        }
                    },
                    {
                        "id": 10649,
                        "nodeType": "FunctionDefinition",
                        "src": "4122:195:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10635,
                            "nodeType": "StructuredDocumentation",
                            "src": "3697:420:88",
                            "text": "@notice Deploys a Hyperdrive instance with the given parameters.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _salt The create2 salt used to deploy Hyperdrive.\n @return The address of the newly deployed Hyperdrive instance."
                        },
                        "functionSelector": "1ae6f515",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "4131:6:88",
                        "parameters": {
                            "id": 10645,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10637,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "4155:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10649,
                                    "src": "4147:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10636,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4147:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10640,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "4214:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10649,
                                    "src": "4178:49:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 10639,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10638,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "4178:11:88",
                                                "4190:16:88"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "4178:28:88"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "4178:28:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10642,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "4250:10:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10649,
                                    "src": "4237:23:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 10641,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4237:5:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10644,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "4278:5:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10649,
                                    "src": "4270:13:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10643,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4270:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4137:152:88"
                        },
                        "returnParameters": {
                            "id": 10648,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10647,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10649,
                                    "src": "4308:7:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10646,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4308:7:88",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4307:9:88"
                        },
                        "scope": 10684,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10666,
                        "nodeType": "FunctionDefinition",
                        "src": "4950:231:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10650,
                            "nodeType": "StructuredDocumentation",
                            "src": "4323:622:88",
                            "text": "@notice Deploys a Hyperdrive target instance with the given parameters.\n @dev As a convention, target0 must be deployed first. After this, the\n      targets can be deployed in any order.\n @param _deploymentId The ID of the deployment.\n @param _deployConfig The deploy configuration of the Hyperdrive pool.\n @param _extraData The extra data that contains the pool and sweep targets.\n @param _targetIndex The index of the target to deploy.\n @param _salt The create2 salt used to deploy the target.\n @return target The address of the newly deployed target instance."
                        },
                        "functionSelector": "0b3c4f86",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployTarget",
                        "nameLocation": "4959:12:88",
                        "parameters": {
                            "id": 10662,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10652,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "4989:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10666,
                                    "src": "4981:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10651,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4981:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10655,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "5048:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10666,
                                    "src": "5012:49:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 10654,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10653,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "5012:11:88",
                                                "5024:16:88"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "5012:28:88"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "5012:28:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10657,
                                    "mutability": "mutable",
                                    "name": "_extraData",
                                    "nameLocation": "5084:10:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10666,
                                    "src": "5071:23:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 10656,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5071:5:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10659,
                                    "mutability": "mutable",
                                    "name": "_targetIndex",
                                    "nameLocation": "5112:12:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10666,
                                    "src": "5104:20:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10658,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5104:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10661,
                                    "mutability": "mutable",
                                    "name": "_salt",
                                    "nameLocation": "5142:5:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10666,
                                    "src": "5134:13:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10660,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5134:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4971:182:88"
                        },
                        "returnParameters": {
                            "id": 10665,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10664,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10666,
                                    "src": "5172:7:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10663,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5172:7:88",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5171:9:88"
                        },
                        "scope": 10684,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10683,
                        "nodeType": "FunctionDefinition",
                        "src": "5892:220:88",
                        "nodes": [],
                        "documentation": {
                            "id": 10667,
                            "nodeType": "StructuredDocumentation",
                            "src": "5187:700:88",
                            "text": "@notice Initializes a pool that was deployed by this coordinator.\n @dev This function utilizes several helper functions that provide\n      flexibility to implementations.\n @param _deploymentId The ID of the deployment.\n @param _lp The LP that is initializing the pool.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the initialization is\n        settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "functionSelector": "16abfc70",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "5901:10:88",
                        "parameters": {
                            "id": 10679,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10669,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "5929:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10683,
                                    "src": "5921:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10668,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5921:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10671,
                                    "mutability": "mutable",
                                    "name": "_lp",
                                    "nameLocation": "5960:3:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10683,
                                    "src": "5952:11:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10670,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5952:7:88",
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
                                    "id": 10673,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "5981:13:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10683,
                                    "src": "5973:21:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10672,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5973:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10675,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "6012:4:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10683,
                                    "src": "6004:12:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10674,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6004:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10678,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "6053:8:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10683,
                                    "src": "6026:35:88",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10677,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10676,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "6026:11:88",
                                                "6038:7:88"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "6026:19:88"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "6026:19:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5911:156:88"
                        },
                        "returnParameters": {
                            "id": 10682,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10681,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "6102:8:88",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10683,
                                    "src": "6094:16:88",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10680,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6094:7:88",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6093:18:88"
                        },
                        "scope": 10684,
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
                    10684
                ],
                "name": "IHyperdriveDeployerCoordinator",
                "nameLocation": "124:30:88",
                "scope": 10685,
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
    "id": 88
};
