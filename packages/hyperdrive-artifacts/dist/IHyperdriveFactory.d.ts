export declare const IHyperdriveFactory: {
    readonly abi: readonly [{
        readonly type: "event";
        readonly name: "CheckpointDurationResolutionUpdated";
        readonly inputs: readonly [{
            readonly name: "newCheckpointDurationResolution";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DefaultPausersUpdated";
        readonly inputs: readonly [{
            readonly name: "newDefaultPausers";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deployed";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "hyperdrive";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "config";
            readonly type: "tuple";
            readonly indexed: false;
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
            readonly name: "extraData";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DeployerCoordinatorAdded";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DeployerCoordinatorRemoved";
        readonly inputs: readonly [{
            readonly name: "deployerCoordinator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeeCollectorUpdated";
        readonly inputs: readonly [{
            readonly name: "newFeeCollector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "governance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HyperdriveGovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "hyperdriveGovernance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ImplementationUpdated";
        readonly inputs: readonly [{
            readonly name: "newDeployer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LinkerCodeHashUpdated";
        readonly inputs: readonly [{
            readonly name: "newLinkerCodeHash";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LinkerFactoryUpdated";
        readonly inputs: readonly [{
            readonly name: "newLinkerFactory";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxCheckpointDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxCheckpointDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxFeesUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxFees";
            readonly type: "tuple";
            readonly indexed: false;
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
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxFixedAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxFixedAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxPositionDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxPositionDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MaxTimeStretchAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMaxTimeStretchAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinCheckpointDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinCheckpointDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinFeesUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinFees";
            readonly type: "tuple";
            readonly indexed: false;
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
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinFixedAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinFixedAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinPositionDurationUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinPositionDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinTimeStretchAPRUpdated";
        readonly inputs: readonly [{
            readonly name: "newMinTimeStretchAPR";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "DeployerCoordinatorAlreadyAdded";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DeployerCoordinatorIndexMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DeployerCoordinatorNotAdded";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "EndIndexTooLarge";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointDurationResolution";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDeployConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDeployerCoordinator";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFixedAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidIndexes";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxFixedAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMaxTimeStretchAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinCheckpointDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinFixedAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMinTimeStretchAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPositionDuration";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTimeStretchAPR";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DeployerCoordinatorAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DeployerCoordinatorNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDurationResolution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployConfig\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployerCoordinator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaxTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFees\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinFixedAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimeStretchAPR\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newCheckpointDurationResolution\",\"type\":\"uint256\"}],\"name\":\"CheckpointDurationResolutionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"newDefaultPausers\",\"type\":\"address[]\"}],\"name\":\"DefaultPausersUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.PoolDeployConfig\",\"name\":\"config\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"Deployed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"deployerCoordinator\",\"type\":\"address\"}],\"name\":\"DeployerCoordinatorRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdriveGovernance\",\"type\":\"address\"}],\"name\":\"HyperdriveGovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newDeployer\",\"type\":\"address\"}],\"name\":\"ImplementationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newLinkerCodeHash\",\"type\":\"bytes32\"}],\"name\":\"LinkerCodeHashUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newLinkerFactory\",\"type\":\"address\"}],\"name\":\"LinkerFactoryUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MaxCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMaxFees\",\"type\":\"tuple\"}],\"name\":\"MaxFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MaxFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MaxPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMaxTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MaxTimeStretchAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinCheckpointDuration\",\"type\":\"uint256\"}],\"name\":\"MinCheckpointDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"newMinFees\",\"type\":\"tuple\"}],\"name\":\"MinFeesUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinFixedAPR\",\"type\":\"uint256\"}],\"name\":\"MinFixedAPRUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinPositionDuration\",\"type\":\"uint256\"}],\"name\":\"MinPositionDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinTimeStretchAPR\",\"type\":\"uint256\"}],\"name\":\"MinTimeStretchAPRUpdated\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"DeployerCoordinatorAlreadyAdded()\":[{\"notice\":\"Errors ///\"}]},\"events\":{\"Deployed(address,address,(address,address,bytes32,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256,uint256)),bytes)\":{\"notice\":\"Events ///\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveFactory.sol\":\"IHyperdriveFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveFactory.sol\":{\"keccak256\":\"0x1a694017176d5a5857a4c7382779666f789e98d93ee87ebbb1f2bfaa4b3bcc8d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://19cd7d505c0a9a864f5cd16f05f8cf7c40883de57b273466d5ae41741bdeccea\",\"dweb:/ipfs/Qmf3g6qBTS7LQPAh3z86EnVdTAahYfmJ15xW4CFnDrMfvv\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorAlreadyAdded";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorIndexMismatch";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DeployerCoordinatorNotAdded";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "EndIndexTooLarge";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointDurationResolution";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidDeployConfig";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidDeployerCoordinator";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidIndexes";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMaxTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinCheckpointDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinFees";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinFixedAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidMinTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidPositionDuration";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTimeStretchAPR";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newCheckpointDurationResolution";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CheckpointDurationResolutionUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "newDefaultPausers";
                    readonly type: "address[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "DefaultPausersUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "hyperdrive";
                    readonly type: "address";
                    readonly indexed: false;
                }, {
                    readonly internalType: "struct IHyperdrive.PoolDeployConfig";
                    readonly name: "config";
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
                    readonly indexed: false;
                }, {
                    readonly internalType: "bytes";
                    readonly name: "extraData";
                    readonly type: "bytes";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Deployed";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "DeployerCoordinatorAdded";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "deployerCoordinator";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "DeployerCoordinatorRemoved";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newFeeCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "FeeCollectorUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "governance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "hyperdriveGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "HyperdriveGovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newDeployer";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "ImplementationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "newLinkerCodeHash";
                    readonly type: "bytes32";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "LinkerCodeHashUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newLinkerFactory";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "LinkerFactoryUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxCheckpointDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxCheckpointDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Fees";
                    readonly name: "newMaxFees";
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
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxFeesUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxFixedAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxFixedAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxPositionDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxPositionDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMaxTimeStretchAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MaxTimeStretchAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinCheckpointDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinCheckpointDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Fees";
                    readonly name: "newMinFees";
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
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinFeesUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinFixedAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinFixedAPRUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinPositionDuration";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinPositionDurationUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "newMinTimeStretchAPR";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "MinTimeStretchAPRUpdated";
                readonly anonymous: false;
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
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
                readonly "contracts/src/interfaces/IHyperdriveFactory.sol": "IHyperdriveFactory";
            };
            readonly libraries: {};
        };
        readonly sources: {
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
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd";
                readonly urls: readonly ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveFactory.sol": {
                readonly keccak256: "0x1a694017176d5a5857a4c7382779666f789e98d93ee87ebbb1f2bfaa4b3bcc8d";
                readonly urls: readonly ["bzz-raw://19cd7d505c0a9a864f5cd16f05f8cf7c40883de57b273466d5ae41741bdeccea", "dweb:/ipfs/Qmf3g6qBTS7LQPAh3z86EnVdTAahYfmJ15xW4CFnDrMfvv"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597";
                readonly urls: readonly ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"];
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
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveFactory.sol";
        readonly id: 7966;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [7411];
            readonly IHyperdriveFactory: readonly [7965];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2597:49";
        readonly nodes: readonly [{
            readonly id: 7816;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:49";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7818;
            readonly nodeType: "ImportDirective";
            readonly src: "64:48:49";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "./IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7966;
            readonly sourceUnit: 7412;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7817;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7411;
                    readonly src: "73:11:49";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7965;
            readonly nodeType: "ContractDefinition";
            readonly src: "114:2521:49";
            readonly nodes: readonly [{
                readonly id: 7830;
                readonly nodeType: "EventDefinition";
                readonly src: "169:164:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 7819;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "149:15:49";
                    readonly text: "Events ///";
                };
                readonly eventSelector: "2b2f18d6a5803b503bcb3d887ccd7a77aa7e1e644a4c99effef843bf3e307157";
                readonly name: "Deployed";
                readonly nameLocation: "175:8:49";
                readonly parameters: {
                    readonly id: 7829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7821;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "209:19:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7830;
                        readonly src: "193:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7820;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "193:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7823;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "hyperdrive";
                        readonly nameLocation: "246:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7830;
                        readonly src: "238:18:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7822;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "238:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7826;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "config";
                        readonly nameLocation: "295:6:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7830;
                        readonly src: "266:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                        };
                        readonly typeName: {
                            readonly id: 7825;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7824;
                                readonly name: "IHyperdrive.PoolDeployConfig";
                                readonly nameLocations: readonly ["266:11:49", "278:16:49"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7176;
                                readonly src: "266:28:49";
                            };
                            readonly referencedDeclaration: 7176;
                            readonly src: "266:28:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolDeployConfig_$7176_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolDeployConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7828;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "extraData";
                        readonly nameLocation: "317:9:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7830;
                        readonly src: "311:15:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 7827;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "311:5:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "183:149:49";
                };
            }, {
                readonly id: 7834;
                readonly nodeType: "EventDefinition";
                readonly src: "339:68:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "16ce88285cfd59829a5aa04370a5ec8090a18c14e7e7fb9d4b12a42291c098e3";
                readonly name: "DeployerCoordinatorAdded";
                readonly nameLocation: "345:24:49";
                readonly parameters: {
                    readonly id: 7833;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7832;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "386:19:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7834;
                        readonly src: "370:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7831;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "370:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "369:37:49";
                };
            }, {
                readonly id: 7838;
                readonly nodeType: "EventDefinition";
                readonly src: "413:70:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "709b7450bfafda93efd91d29149870a794637ac9d696ca61625fd2f53548afe0";
                readonly name: "DeployerCoordinatorRemoved";
                readonly nameLocation: "419:26:49";
                readonly parameters: {
                    readonly id: 7837;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7836;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "deployerCoordinator";
                        readonly nameLocation: "462:19:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7838;
                        readonly src: "446:35:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7835;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "446:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "445:37:49";
                };
            }, {
                readonly id: 7843;
                readonly nodeType: "EventDefinition";
                readonly src: "489:57:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "2a85276cf604a3822e19b29a3e97aebfbc47a19025c2e8f6e80b3af774dcbc38";
                readonly name: "DefaultPausersUpdated";
                readonly nameLocation: "495:21:49";
                readonly parameters: {
                    readonly id: 7842;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7841;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newDefaultPausers";
                        readonly nameLocation: "527:17:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7843;
                        readonly src: "517:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 7839;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "517:7:49";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 7840;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "517:9:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "516:29:49";
                };
            }, {
                readonly id: 7847;
                readonly nodeType: "EventDefinition";
                readonly src: "552:59:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f";
                readonly name: "FeeCollectorUpdated";
                readonly nameLocation: "558:19:49";
                readonly parameters: {
                    readonly id: 7846;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7845;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newFeeCollector";
                        readonly nameLocation: "594:15:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7847;
                        readonly src: "578:31:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7844;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "578:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "577:33:49";
                };
            }, {
                readonly id: 7851;
                readonly nodeType: "EventDefinition";
                readonly src: "617:52:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "623:17:49";
                readonly parameters: {
                    readonly id: 7850;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7849;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "governance";
                        readonly nameLocation: "657:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7851;
                        readonly src: "641:26:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7848;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "641:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "640:28:49";
                };
            }, {
                readonly id: 7855;
                readonly nodeType: "EventDefinition";
                readonly src: "675:72:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "f3e07b4bb4394f2ff320bd1dd151551dff304d5e948b401d8558b228482c97d8";
                readonly name: "HyperdriveGovernanceUpdated";
                readonly nameLocation: "681:27:49";
                readonly parameters: {
                    readonly id: 7854;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7853;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "hyperdriveGovernance";
                        readonly nameLocation: "725:20:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7855;
                        readonly src: "709:36:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7852;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "709:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "708:38:49";
                };
            }, {
                readonly id: 7859;
                readonly nodeType: "EventDefinition";
                readonly src: "753:57:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca03";
                readonly name: "ImplementationUpdated";
                readonly nameLocation: "759:21:49";
                readonly parameters: {
                    readonly id: 7858;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7857;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newDeployer";
                        readonly nameLocation: "797:11:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7859;
                        readonly src: "781:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7856;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "781:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "780:29:49";
                };
            }, {
                readonly id: 7863;
                readonly nodeType: "EventDefinition";
                readonly src: "816:61:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "03aa5b0fb65014eea89fda04a7bc11742014881f3c078f2c75b7226ce10d9418";
                readonly name: "LinkerFactoryUpdated";
                readonly nameLocation: "822:20:49";
                readonly parameters: {
                    readonly id: 7862;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7861;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newLinkerFactory";
                        readonly nameLocation: "859:16:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7863;
                        readonly src: "843:32:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7860;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "843:7:49";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "842:34:49";
                };
            }, {
                readonly id: 7867;
                readonly nodeType: "EventDefinition";
                readonly src: "883:63:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "395a61259037298d1c4cd4bf177b64ad5995d38a9394573fcd9060d649314ad0";
                readonly name: "LinkerCodeHashUpdated";
                readonly nameLocation: "889:21:49";
                readonly parameters: {
                    readonly id: 7866;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7865;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newLinkerCodeHash";
                        readonly nameLocation: "927:17:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7867;
                        readonly src: "911:33:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 7864;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "911:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "910:35:49";
                };
            }, {
                readonly id: 7871;
                readonly nodeType: "EventDefinition";
                readonly src: "952:97:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "04ed835b488b4fcf0a212a46ed67cbbffc2fc81b5cb6a12c546572cbf7b7e06a";
                readonly name: "CheckpointDurationResolutionUpdated";
                readonly nameLocation: "958:35:49";
                readonly parameters: {
                    readonly id: 7870;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7869;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newCheckpointDurationResolution";
                        readonly nameLocation: "1011:31:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7871;
                        readonly src: "1003:39:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7868;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1003:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "993:55:49";
                };
            }, {
                readonly id: 7875;
                readonly nodeType: "EventDefinition";
                readonly src: "1055:69:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "31407ddd1722f500b8aa2c18e112398626dd7c2869a5f80731ec30b244d9b5f2";
                readonly name: "MaxCheckpointDurationUpdated";
                readonly nameLocation: "1061:28:49";
                readonly parameters: {
                    readonly id: 7874;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7873;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxCheckpointDuration";
                        readonly nameLocation: "1098:24:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7875;
                        readonly src: "1090:32:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7872;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1090:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1089:34:49";
                };
            }, {
                readonly id: 7879;
                readonly nodeType: "EventDefinition";
                readonly src: "1130:69:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "6f8175cdbac1b4d238abba24a17d2554d7b9750bbeda6414e191c478384b7631";
                readonly name: "MinCheckpointDurationUpdated";
                readonly nameLocation: "1136:28:49";
                readonly parameters: {
                    readonly id: 7878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7877;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinCheckpointDuration";
                        readonly nameLocation: "1173:24:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7879;
                        readonly src: "1165:32:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7876;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1165:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1164:34:49";
                };
            }, {
                readonly id: 7883;
                readonly nodeType: "EventDefinition";
                readonly src: "1205:65:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "866fe9485f9983afceaa1385307b6eb0fd3df5a250ae2b0bf76dc9ddd316926b";
                readonly name: "MaxPositionDurationUpdated";
                readonly nameLocation: "1211:26:49";
                readonly parameters: {
                    readonly id: 7882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7881;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxPositionDuration";
                        readonly nameLocation: "1246:22:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7883;
                        readonly src: "1238:30:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7880;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1238:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1237:32:49";
                };
            }, {
                readonly id: 7887;
                readonly nodeType: "EventDefinition";
                readonly src: "1276:65:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "e9ef3e93dff799d4db8a12ff79e0918a5a78d75b10527864f4b1c920f6f4f178";
                readonly name: "MinPositionDurationUpdated";
                readonly nameLocation: "1282:26:49";
                readonly parameters: {
                    readonly id: 7886;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7885;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinPositionDuration";
                        readonly nameLocation: "1317:22:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7887;
                        readonly src: "1309:30:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7884;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1309:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1308:32:49";
                };
            }, {
                readonly id: 7891;
                readonly nodeType: "EventDefinition";
                readonly src: "1347:49:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "4fa35c11ce9a45ae882c154ecb53ab5cac52a74a5b9b0373be36deb30c782978";
                readonly name: "MaxFixedAPRUpdated";
                readonly nameLocation: "1353:18:49";
                readonly parameters: {
                    readonly id: 7890;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7889;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxFixedAPR";
                        readonly nameLocation: "1380:14:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7891;
                        readonly src: "1372:22:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7888;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1372:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1371:24:49";
                };
            }, {
                readonly id: 7895;
                readonly nodeType: "EventDefinition";
                readonly src: "1402:49:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "aab0ee9100629c405a4d75336e1640cc81e0608fb0d7f17389c06ee8d4f02191";
                readonly name: "MinFixedAPRUpdated";
                readonly nameLocation: "1408:18:49";
                readonly parameters: {
                    readonly id: 7894;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7893;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinFixedAPR";
                        readonly nameLocation: "1435:14:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7895;
                        readonly src: "1427:22:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7892;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1427:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1426:24:49";
                };
            }, {
                readonly id: 7899;
                readonly nodeType: "EventDefinition";
                readonly src: "1457:61:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "a9e7961bb3342715dbecc208087a6a9df8986d524b3a0a829fd90f5a2f5ba53e";
                readonly name: "MaxTimeStretchAPRUpdated";
                readonly nameLocation: "1463:24:49";
                readonly parameters: {
                    readonly id: 7898;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7897;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxTimeStretchAPR";
                        readonly nameLocation: "1496:20:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7899;
                        readonly src: "1488:28:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7896;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1488:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1487:30:49";
                };
            }, {
                readonly id: 7903;
                readonly nodeType: "EventDefinition";
                readonly src: "1524:61:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "490eb2a91746aa933c9ffe2f7939aa06498f3259139f8805f008b12c8c697a46";
                readonly name: "MinTimeStretchAPRUpdated";
                readonly nameLocation: "1530:24:49";
                readonly parameters: {
                    readonly id: 7902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7901;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinTimeStretchAPR";
                        readonly nameLocation: "1563:20:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7903;
                        readonly src: "1555:28:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7900;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1555:7:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1554:30:49";
                };
            }, {
                readonly id: 7908;
                readonly nodeType: "EventDefinition";
                readonly src: "1591:50:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "8c6093c7e65dd862e88162770c4e156e8a0da57d25d961e0fb6f28cfb7ff89a7";
                readonly name: "MaxFeesUpdated";
                readonly nameLocation: "1597:14:49";
                readonly parameters: {
                    readonly id: 7907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7906;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMaxFees";
                        readonly nameLocation: "1629:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7908;
                        readonly src: "1612:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                        readonly typeName: {
                            readonly id: 7905;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7904;
                                readonly name: "IHyperdrive.Fees";
                                readonly nameLocations: readonly ["1612:11:49", "1624:4:49"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7140;
                                readonly src: "1612:16:49";
                            };
                            readonly referencedDeclaration: 7140;
                            readonly src: "1612:16:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7140_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Fees";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1611:29:49";
                };
            }, {
                readonly id: 7913;
                readonly nodeType: "EventDefinition";
                readonly src: "1647:50:49";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "e1c45f8aeb543f30b37cc2fccfbac0f32cc8f234284df921d71cff04e51ef421";
                readonly name: "MinFeesUpdated";
                readonly nameLocation: "1653:14:49";
                readonly parameters: {
                    readonly id: 7912;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7911;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "newMinFees";
                        readonly nameLocation: "1685:10:49";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7913;
                        readonly src: "1668:27:49";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$7140_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                        readonly typeName: {
                            readonly id: 7910;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7909;
                                readonly name: "IHyperdrive.Fees";
                                readonly nameLocations: readonly ["1668:11:49", "1680:4:49"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7140;
                                readonly src: "1668:16:49";
                            };
                            readonly referencedDeclaration: 7140;
                            readonly src: "1668:16:49";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Fees_$7140_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Fees";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1667:29:49";
                };
            }, {
                readonly id: 7916;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1723:40:49";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7914;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1703:15:49";
                    readonly text: "Errors ///";
                };
                readonly errorSelector: "bd34634f";
                readonly name: "DeployerCoordinatorAlreadyAdded";
                readonly nameLocation: "1729:31:49";
                readonly parameters: {
                    readonly id: 7915;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1760:2:49";
                };
            }, {
                readonly id: 7918;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1769:36:49";
                readonly nodes: readonly [];
                readonly errorSelector: "4bf121ab";
                readonly name: "DeployerCoordinatorNotAdded";
                readonly nameLocation: "1775:27:49";
                readonly parameters: {
                    readonly id: 7917;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1802:2:49";
                };
            }, {
                readonly id: 7920;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1811:41:49";
                readonly nodes: readonly [];
                readonly errorSelector: "3c9c032c";
                readonly name: "DeployerCoordinatorIndexMismatch";
                readonly nameLocation: "1817:32:49";
                readonly parameters: {
                    readonly id: 7919;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1849:2:49";
                };
            }, {
                readonly id: 7922;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1858:25:49";
                readonly nodes: readonly [];
                readonly errorSelector: "e0f7becb";
                readonly name: "EndIndexTooLarge";
                readonly nameLocation: "1864:16:49";
                readonly parameters: {
                    readonly id: 7921;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1880:2:49";
                };
            }, {
                readonly id: 7924;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1889:34:49";
                readonly nodes: readonly [];
                readonly errorSelector: "5428734d";
                readonly name: "InvalidCheckpointDuration";
                readonly nameLocation: "1895:25:49";
                readonly parameters: {
                    readonly id: 7923;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1920:2:49";
                };
            }, {
                readonly id: 7926;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1929:44:49";
                readonly nodes: readonly [];
                readonly errorSelector: "8dbae0a8";
                readonly name: "InvalidCheckpointDurationResolution";
                readonly nameLocation: "1935:35:49";
                readonly parameters: {
                    readonly id: 7925;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1970:2:49";
                };
            }, {
                readonly id: 7928;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1979:28:49";
                readonly nodes: readonly [];
                readonly errorSelector: "e8c02dd7";
                readonly name: "InvalidDeployConfig";
                readonly nameLocation: "1985:19:49";
                readonly parameters: {
                    readonly id: 7927;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2004:2:49";
                };
            }, {
                readonly id: 7930;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2013:35:49";
                readonly nodes: readonly [];
                readonly errorSelector: "6e623f0f";
                readonly name: "InvalidDeployerCoordinator";
                readonly nameLocation: "2019:26:49";
                readonly parameters: {
                    readonly id: 7929;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2045:2:49";
                };
            }, {
                readonly id: 7932;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2054:20:49";
                readonly nodes: readonly [];
                readonly errorSelector: "2d8768f9";
                readonly name: "InvalidFees";
                readonly nameLocation: "2060:11:49";
                readonly parameters: {
                    readonly id: 7931;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2071:2:49";
                };
            }, {
                readonly id: 7934;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2080:23:49";
                readonly nodes: readonly [];
                readonly errorSelector: "764e6b56";
                readonly name: "InvalidIndexes";
                readonly nameLocation: "2086:14:49";
                readonly parameters: {
                    readonly id: 7933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2100:2:49";
                };
            }, {
                readonly id: 7936;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2109:23:49";
                readonly nodes: readonly [];
                readonly errorSelector: "2c20e3f6";
                readonly name: "InvalidMaxFees";
                readonly nameLocation: "2115:14:49";
                readonly parameters: {
                    readonly id: 7935;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2129:2:49";
                };
            }, {
                readonly id: 7938;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2138:23:49";
                readonly nodes: readonly [];
                readonly errorSelector: "15b05a8f";
                readonly name: "InvalidMinFees";
                readonly nameLocation: "2144:14:49";
                readonly parameters: {
                    readonly id: 7937;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2158:2:49";
                };
            }, {
                readonly id: 7940;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2167:37:49";
                readonly nodes: readonly [];
                readonly errorSelector: "f9c0959d";
                readonly name: "InvalidMaxCheckpointDuration";
                readonly nameLocation: "2173:28:49";
                readonly parameters: {
                    readonly id: 7939;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2201:2:49";
                };
            }, {
                readonly id: 7942;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2210:37:49";
                readonly nodes: readonly [];
                readonly errorSelector: "0433acc6";
                readonly name: "InvalidMinCheckpointDuration";
                readonly nameLocation: "2216:28:49";
                readonly parameters: {
                    readonly id: 7941;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2244:2:49";
                };
            }, {
                readonly id: 7944;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2253:35:49";
                readonly nodes: readonly [];
                readonly errorSelector: "cfb699cb";
                readonly name: "InvalidMaxPositionDuration";
                readonly nameLocation: "2259:26:49";
                readonly parameters: {
                    readonly id: 7943;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2285:2:49";
                };
            }, {
                readonly id: 7946;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2294:35:49";
                readonly nodes: readonly [];
                readonly errorSelector: "600f5a02";
                readonly name: "InvalidMinPositionDuration";
                readonly nameLocation: "2300:26:49";
                readonly parameters: {
                    readonly id: 7945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2326:2:49";
                };
            }, {
                readonly id: 7948;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2335:32:49";
                readonly nodes: readonly [];
                readonly errorSelector: "4a7fff9e";
                readonly name: "InvalidPositionDuration";
                readonly nameLocation: "2341:23:49";
                readonly parameters: {
                    readonly id: 7947;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2364:2:49";
                };
            }, {
                readonly id: 7950;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2373:27:49";
                readonly nodes: readonly [];
                readonly errorSelector: "673edec0";
                readonly name: "InvalidMaxFixedAPR";
                readonly nameLocation: "2379:18:49";
                readonly parameters: {
                    readonly id: 7949;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2397:2:49";
                };
            }, {
                readonly id: 7952;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2406:27:49";
                readonly nodes: readonly [];
                readonly errorSelector: "1670f797";
                readonly name: "InvalidMinFixedAPR";
                readonly nameLocation: "2412:18:49";
                readonly parameters: {
                    readonly id: 7951;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2430:2:49";
                };
            }, {
                readonly id: 7954;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2439:24:49";
                readonly nodes: readonly [];
                readonly errorSelector: "30554de1";
                readonly name: "InvalidFixedAPR";
                readonly nameLocation: "2445:15:49";
                readonly parameters: {
                    readonly id: 7953;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2460:2:49";
                };
            }, {
                readonly id: 7956;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2469:33:49";
                readonly nodes: readonly [];
                readonly errorSelector: "a35539d0";
                readonly name: "InvalidMaxTimeStretchAPR";
                readonly nameLocation: "2475:24:49";
                readonly parameters: {
                    readonly id: 7955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2499:2:49";
                };
            }, {
                readonly id: 7958;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2508:33:49";
                readonly nodes: readonly [];
                readonly errorSelector: "5a8f6557";
                readonly name: "InvalidMinTimeStretchAPR";
                readonly nameLocation: "2514:24:49";
                readonly parameters: {
                    readonly id: 7957;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2538:2:49";
                };
            }, {
                readonly id: 7960;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2547:30:49";
                readonly nodes: readonly [];
                readonly errorSelector: "83ebdfb7";
                readonly name: "InvalidTimeStretchAPR";
                readonly nameLocation: "2553:21:49";
                readonly parameters: {
                    readonly id: 7959;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2574:2:49";
                };
            }, {
                readonly id: 7962;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2583:23:49";
                readonly nodes: readonly [];
                readonly errorSelector: "90b8ec18";
                readonly name: "TransferFailed";
                readonly nameLocation: "2589:14:49";
                readonly parameters: {
                    readonly id: 7961;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2603:2:49";
                };
            }, {
                readonly id: 7964;
                readonly nodeType: "ErrorDefinition";
                readonly src: "2612:21:49";
                readonly nodes: readonly [];
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "2618:12:49";
                readonly parameters: {
                    readonly id: 7963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2630:2:49";
                };
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IHyperdriveFactory";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [7965];
            readonly name: "IHyperdriveFactory";
            readonly nameLocation: "124:18:49";
            readonly scope: 7966;
            readonly usedErrors: readonly [7916, 7918, 7920, 7922, 7924, 7926, 7928, 7930, 7932, 7934, 7936, 7938, 7940, 7942, 7944, 7946, 7948, 7950, 7952, 7954, 7956, 7958, 7960, 7962, 7964];
            readonly usedEvents: readonly [7830, 7834, 7838, 7843, 7847, 7851, 7855, 7859, 7863, 7867, 7871, 7875, 7879, 7883, 7887, 7891, 7895, 7899, 7903, 7908, 7913];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 49;
};
//# sourceMappingURL=IHyperdriveFactory.d.ts.map