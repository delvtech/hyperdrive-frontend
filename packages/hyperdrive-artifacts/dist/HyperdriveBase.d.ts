export declare const HyperdriveBase: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "AddLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fees";
            readonly type: "uint256";
        }];
        readonly name: "CollectGovernanceFee";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "checkpointTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedShorts";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedLongs";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "CreateCheckpoint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newGovernance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "apr";
            readonly type: "uint256";
        }];
        readonly name: "Initialize";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseProceeds";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PauseStatusUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newPauser";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "status";
            readonly type: "bool";
        }];
        readonly name: "PauserUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }];
        readonly name: "RedeemWithdrawalShares";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "RemoveLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"The Hyperdrive base contract that provides a set of helper methods         and defines the functions that must be overridden by implementations.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "AddLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "ApprovalForAll";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "fees";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CollectGovernanceFee";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "checkpointTime";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedShorts";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedLongs";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CreateCheckpoint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "apr";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Initialize";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseProceeds";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isPaused";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauseStatusUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newPauser";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "status";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauserUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RedeemWithdrawalShares";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RemoveLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "TransferSingle";
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
                readonly "contracts/src/internal/HyperdriveBase.sol": "HyperdriveBase";
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
                readonly keccak256: "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317";
                readonly urls: readonly ["bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213", "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76";
                readonly urls: readonly ["bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb", "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"];
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
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc";
                readonly urls: readonly ["bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa", "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f";
                readonly urls: readonly ["bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d", "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e";
                readonly urls: readonly ["bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534", "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785";
                readonly urls: readonly ["bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263", "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
        readonly id: 9918;
        readonly exportedSymbols: {
            readonly AssetId: readonly [14117];
            readonly FixedPointMath: readonly [14917];
            readonly HyperdriveBase: readonly [9917];
            readonly HyperdriveMath: readonly [15630];
            readonly HyperdriveStorage: readonly [13842];
            readonly IERC20: readonly [6920];
            readonly IHyperdrive: readonly [7616];
            readonly IHyperdriveEvents: readonly [8062];
            readonly LPMath: readonly [17396];
            readonly ONE: readonly [14151];
            readonly SafeCast: readonly [17575];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:29287:64";
        readonly nodes: readonly [{
            readonly id: 8938;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:64";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 8940;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 6921;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8939;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6920;
                    readonly src: "73:6:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8942;
            readonly nodeType: "ImportDirective";
            readonly src: "115:60:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 7617;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8941;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7616;
                    readonly src: "124:11:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8944;
            readonly nodeType: "ImportDirective";
            readonly src: "176:72:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveEvents.sol";
            readonly file: "../interfaces/IHyperdriveEvents.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 8063;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8943;
                    readonly name: "IHyperdriveEvents";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8062;
                    readonly src: "185:17:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8946;
            readonly nodeType: "ImportDirective";
            readonly src: "249:51:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/AssetId.sol";
            readonly file: "../libraries/AssetId.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 14118;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8945;
                    readonly name: "AssetId";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14117;
                    readonly src: "258:7:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8949;
            readonly nodeType: "ImportDirective";
            readonly src: "301:70:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 14918;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8947;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14917;
                    readonly src: "310:14:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 8948;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14151;
                    readonly src: "326:3:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8951;
            readonly nodeType: "ImportDirective";
            readonly src: "372:65:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "../libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 15631;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8950;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15630;
                    readonly src: "381:14:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8953;
            readonly nodeType: "ImportDirective";
            readonly src: "438:49:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "../libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 17397;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8952;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17396;
                    readonly src: "447:6:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8955;
            readonly nodeType: "ImportDirective";
            readonly src: "488:53:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "../libraries/SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 17576;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8954;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17575;
                    readonly src: "497:8:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8957;
            readonly nodeType: "ImportDirective";
            readonly src: "542:60:64";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "./HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 9918;
            readonly sourceUnit: 13843;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8956;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13842;
                    readonly src: "551:17:64";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 9917;
            readonly nodeType: "ContractDefinition";
            readonly src: "1032:28293:64";
            readonly nodes: readonly [{
                readonly id: 8965;
                readonly nodeType: "UsingForDirective";
                readonly src: "1111:33:64";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 8963;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1117:14:64"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14917;
                    readonly src: "1117:14:64";
                };
                readonly typeName: {
                    readonly id: 8964;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1136:7:64";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 8968;
                readonly nodeType: "UsingForDirective";
                readonly src: "1149:32:64";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 8966;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1155:14:64"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14917;
                    readonly src: "1155:14:64";
                };
                readonly typeName: {
                    readonly id: 8967;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1174:6:64";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 8971;
                readonly nodeType: "UsingForDirective";
                readonly src: "1186:27:64";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 8969;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["1192:8:64"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 17575;
                    readonly src: "1192:8:64";
                };
                readonly typeName: {
                    readonly id: 8970;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1205:7:64";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 8974;
                readonly nodeType: "UsingForDirective";
                readonly src: "1218:26:64";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 8972;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["1224:8:64"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 17575;
                    readonly src: "1224:8:64";
                };
                readonly typeName: {
                    readonly id: 8973;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1237:6:64";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 8978;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1428:52:64";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8975;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1276:147:64";
                    readonly text: "@dev A yield source dependent check that prevents ether from being\n         transferred to Hyperdrive instances that don't accept ether.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "1437:18:64";
                readonly parameters: {
                    readonly id: 8976;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1455:2:64";
                };
                readonly returnParameters: {
                    readonly id: 8977;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1479:0:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 9000;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1898:221:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 8999;
                    readonly nodeType: "Block";
                    readonly src: "1996:123:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 8991;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 8985;
                                    readonly name: "_options";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 8982;
                                    readonly src: "2010:8:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                                        readonly typeString: "struct IHyperdrive.Options calldata";
                                    };
                                };
                                readonly id: 8986;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2019:11:64";
                                readonly memberName: "destination";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7456;
                                readonly src: "2010:20:64";
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
                                    readonly id: 8989;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "2042:1:64";
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
                                    readonly id: 8988;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2034:7:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 8987;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2034:7:64";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 8990;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2034:10:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2010:34:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 8998;
                        readonly nodeType: "IfStatement";
                        readonly src: "2006:107:64";
                        readonly trueBody: {
                            readonly id: 8997;
                            readonly nodeType: "Block";
                            readonly src: "2046:67:64";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 8992;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7616;
                                            readonly src: "2067:11:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 8994;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2079:21:64";
                                        readonly memberName: "RestrictedZeroAddress";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7550;
                                        readonly src: "2067:33:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 8995;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2067:35:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 8996;
                                readonly nodeType: "RevertStatement";
                                readonly src: "2060:42:64";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 8979;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1486:407:64";
                    readonly text: "@dev A yield source dependent check that verifies that the provided\n      options are valid. The default check is that the destination is\n      non-zero to prevent users from accidentally transferring funds\n      to the zero address. Custom integrations can override this to\n      implement additional checks.\n @param _options The provided options for the transaction.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkOptions";
                readonly nameLocation: "1907:13:64";
                readonly parameters: {
                    readonly id: 8983;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8982;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1959:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9000;
                        readonly src: "1930:37:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 8981;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8980;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["1930:11:64", "1942:7:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7463;
                                readonly src: "1930:19:64";
                            };
                            readonly referencedDeclaration: 7463;
                            readonly src: "1930:19:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7463_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1920:53:64";
                };
                readonly returnParameters: {
                    readonly id: 8984;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1996:0:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 9013;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2793:169:64";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9001;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2125:663:64";
                    readonly text: "@dev Accepts a deposit from the user and commits it to the yield source.\n @param _amount The amount of capital to deposit. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the deposit is\n        settled. In particular, the currency used in the deposit is\n        specified here. Aside from those options, yield sources can\n        choose to implement additional options.\n @return sharesMinted The shares created by this deposit.\n @return vaultSharePrice The vault share price.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_deposit";
                readonly nameLocation: "2802:8:64";
                readonly parameters: {
                    readonly id: 9007;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9003;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "2828:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9013;
                        readonly src: "2820:15:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9002;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2820:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9006;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "2874:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9013;
                        readonly src: "2845:37:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 9005;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9004;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["2845:11:64", "2857:7:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7463;
                                readonly src: "2845:19:64";
                            };
                            readonly referencedDeclaration: 7463;
                            readonly src: "2845:19:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7463_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2810:78:64";
                };
                readonly returnParameters: {
                    readonly id: 9012;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9009;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "2923:12:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9013;
                        readonly src: "2915:20:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9008;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2915:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9011;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "2945:15:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9013;
                        readonly src: "2937:23:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9010;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2937:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2914:47:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 9026;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3703:182:64";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9014;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2968:730:64";
                    readonly text: "@dev Withdraws shares from the yield source and sends the proceeds to\n      the destination.\n @param _shares The vault shares to withdraw from the yield source.\n @param _vaultSharePrice The vault share price.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the destination and currency used in the\n        withdrawal are specified here. Aside from those options, yield\n        sources can choose to implement additional options.\n @return amountWithdrawn The proceeds of the withdrawal. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdraw";
                readonly nameLocation: "3712:9:64";
                readonly parameters: {
                    readonly id: 9022;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9016;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "3739:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9026;
                        readonly src: "3731:15:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9015;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3731:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9018;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "3764:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9026;
                        readonly src: "3756:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9017;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3756:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9021;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "3819:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9026;
                        readonly src: "3790:37:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 9020;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9019;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["3790:11:64", "3802:7:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7463;
                                readonly src: "3790:19:64";
                            };
                            readonly referencedDeclaration: 7463;
                            readonly src: "3790:19:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7463_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3721:112:64";
                };
                readonly returnParameters: {
                    readonly id: 9025;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9024;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "3868:15:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9026;
                        readonly src: "3860:23:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9023;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3860:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3859:25:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 9032;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4012:119:64";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9027;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3891:116:64";
                    readonly text: "@dev Loads the share price from the yield source.\n @return vaultSharePrice The current vault share price.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_pricePerVaultShare";
                readonly nameLocation: "4021:19:64";
                readonly parameters: {
                    readonly id: 9028;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4040:2:64";
                };
                readonly returnParameters: {
                    readonly id: 9031;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9030;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "4114:15:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9032;
                        readonly src: "4106:23:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9029;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4106:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4105:25:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 9046;
                readonly nodeType: "ModifierDefinition";
                readonly src: "4224:135:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9045;
                    readonly nodeType: "Block";
                    readonly src: "4247:112:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 9035;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13691;
                                readonly src: "4261:12:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 9036;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "4274:8:64";
                            readonly memberName: "isPaused";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 7301;
                            readonly src: "4261:21:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9043;
                        readonly nodeType: "IfStatement";
                        readonly src: "4257:85:64";
                        readonly trueBody: {
                            readonly id: 9042;
                            readonly nodeType: "Block";
                            readonly src: "4284:58:64";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 9037;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7616;
                                            readonly src: "4305:11:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7616_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 9039;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4317:12:64";
                                        readonly memberName: "PoolIsPaused";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7547;
                                        readonly src: "4305:24:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 9040;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4305:26:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 9041;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4298:33:64";
                            }];
                        };
                    }, {
                        readonly id: 9044;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "4351:1:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9033;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4156:63:64";
                    readonly text: "@dev Blocks a function execution if the contract is paused.";
                };
                readonly name: "isNotPaused";
                readonly nameLocation: "4233:11:64";
                readonly parameters: {
                    readonly id: 9034;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4244:2:64";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9056;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4678:154:64";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 9047;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4389:284:64";
                    readonly text: "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _vaultSharePrice The current vault share price.\n @return openVaultSharePrice The open vault share price of the latest\n         checkpoint.";
                };
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyCheckpoint";
                readonly nameLocation: "4687:16:64";
                readonly parameters: {
                    readonly id: 9052;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9049;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointTime";
                        readonly nameLocation: "4721:15:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9056;
                        readonly src: "4713:23:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9048;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4713:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9051;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "4754:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9056;
                        readonly src: "4746:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9050;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4746:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4703:73:64";
                };
                readonly returnParameters: {
                    readonly id: 9055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9054;
                        readonly mutability: "mutable";
                        readonly name: "openVaultSharePrice";
                        readonly nameLocation: "4811:19:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9056;
                        readonly src: "4803:27:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9053;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4803:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4802:29:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 9088;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5065:432:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9087;
                    readonly nodeType: "Block";
                    readonly src: "5181:316:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9065];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9065;
                            readonly mutability: "mutable";
                            readonly name: "latestCheckpoint";
                            readonly nameLocation: "5199:16:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9087;
                            readonly src: "5191:24:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9064;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5191:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9068;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 9066;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9142;
                                readonly src: "5218:17:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 9067;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5218:19:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5191:46:64";
                    }, {
                        readonly expression: {
                            readonly id: 9078;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9069;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9062;
                                readonly src: "5247:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 9072;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 9070;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9059;
                                        readonly src: "5263:13:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 9071;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9065;
                                        readonly src: "5279:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5263:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 9076;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5357:1:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly id: 9077;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5263:95:64";
                                readonly trueExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 9075;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 9073;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9059;
                                        readonly src: "5310:13:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 9074;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9065;
                                        readonly src: "5326:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5310:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5247:111:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9079;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5247:111:64";
                    }, {
                        readonly expression: {
                            readonly id: 9085;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9080;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9062;
                                readonly src: "5434:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9083;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13663;
                                    readonly src: "5472:17:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9081;
                                        readonly name: "timeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9062;
                                        readonly src: "5450:13:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9082;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5464:7:64";
                                    readonly memberName: "divDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14215;
                                    readonly src: "5450:21:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9084;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5450:40:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5434:56:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9086;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5434:56:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9057;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4859:201:64";
                    readonly text: "@dev Calculates the normalized time remaining of a position.\n @param _maturityTime The maturity time of the position.\n @return timeRemaining The normalized time remaining (in [0, 1]).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateTimeRemaining";
                readonly nameLocation: "5074:23:64";
                readonly parameters: {
                    readonly id: 9060;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9059;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "5115:13:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9088;
                        readonly src: "5107:21:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9058;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5107:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5097:37:64";
                };
                readonly returnParameters: {
                    readonly id: 9063;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9062;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "5166:13:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9088;
                        readonly src: "5158:21:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9061;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5158:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5157:23:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9124;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5697:450:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9123;
                    readonly nodeType: "Block";
                    readonly src: "5819:328:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9097];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9097;
                            readonly mutability: "mutable";
                            readonly name: "latestCheckpoint";
                            readonly nameLocation: "5837:16:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9123;
                            readonly src: "5829:24:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9096;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5829:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9102;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9101;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 9098;
                                    readonly name: "_latestCheckpoint";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9142;
                                    readonly src: "5856:17:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 9099;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5856:19:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "*";
                            readonly rightExpression: {
                                readonly id: 9100;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 14151;
                                readonly src: "5878:3:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5856:25:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5829:52:64";
                    }, {
                        readonly expression: {
                            readonly id: 9112;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9103;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9094;
                                readonly src: "5891:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 9106;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 9104;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9091;
                                        readonly src: "5907:13:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 9105;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9097;
                                        readonly src: "5923:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5907:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 9110;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6001:1:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly id: 9111;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5907:95:64";
                                readonly trueExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 9109;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 9107;
                                        readonly name: "_maturityTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9091;
                                        readonly src: "5954:13:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 9108;
                                        readonly name: "latestCheckpoint";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9097;
                                        readonly src: "5970:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5954:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5891:111:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9113;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5891:111:64";
                    }, {
                        readonly expression: {
                            readonly id: 9121;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9114;
                                readonly name: "timeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9094;
                                readonly src: "6078:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 9119;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 9117;
                                        readonly name: "_positionDuration";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13663;
                                        readonly src: "6116:17:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "*";
                                    readonly rightExpression: {
                                        readonly id: 9118;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 14151;
                                        readonly src: "6136:3:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6116:23:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9115;
                                        readonly name: "timeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9094;
                                        readonly src: "6094:13:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9116;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6108:7:64";
                                    readonly memberName: "divDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14215;
                                    readonly src: "6094:21:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9120;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6094:46:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6078:62:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9122;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6078:62:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9089;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5503:189:64";
                    readonly text: "@dev Calculates the normalized time remaining of a position when the\n      maturity time is scaled up 18 decimals.\n @param _maturityTime The maturity time of the position.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateTimeRemainingScaled";
                readonly nameLocation: "5706:29:64";
                readonly parameters: {
                    readonly id: 9092;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9091;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "5753:13:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9124;
                        readonly src: "5745:21:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9090;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5745:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5735:37:64";
                };
                readonly returnParameters: {
                    readonly id: 9095;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9094;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "5804:13:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9124;
                        readonly src: "5796:21:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9093;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5796:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5795:23:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9142;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6260:223:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9141;
                    readonly nodeType: "Block";
                    readonly src: "6366:117:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 9139;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9130;
                                readonly name: "latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9128;
                                readonly src: "6376:16:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9138;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 9131;
                                        readonly name: "block";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -4;
                                        readonly src: "6407:5:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_block";
                                            readonly typeString: "block";
                                        };
                                    };
                                    readonly id: 9132;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6413:9:64";
                                    readonly memberName: "timestamp";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "6407:15:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 9136;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 9133;
                                                readonly name: "block";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -4;
                                                readonly src: "6438:5:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_block";
                                                    readonly typeString: "block";
                                                };
                                            };
                                            readonly id: 9134;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6444:9:64";
                                            readonly memberName: "timestamp";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6438:15:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "%";
                                        readonly rightExpression: {
                                            readonly id: 9135;
                                            readonly name: "_checkpointDuration";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13660;
                                            readonly src: "6456:19:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "6438:37:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 9137;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "6437:39:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6407:69:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6376:100:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9140;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6376:100:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9125;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6153:102:64";
                    readonly text: "@dev Gets the most recent checkpoint time.\n @return latestCheckpoint The latest checkpoint.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_latestCheckpoint";
                readonly nameLocation: "6269:17:64";
                readonly parameters: {
                    readonly id: 9126;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6286:2:64";
                };
                readonly returnParameters: {
                    readonly id: 9129;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9128;
                        readonly mutability: "mutable";
                        readonly name: "latestCheckpoint";
                        readonly nameLocation: "6344:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9142;
                        readonly src: "6336:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9127;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6336:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6335:26:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9157;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6664:253:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9156;
                    readonly nodeType: "Block";
                    readonly src: "6731:186:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 9150;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13691;
                                    readonly src: "6824:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 9151;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6837:13:64";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7274;
                                readonly src: "6824:26:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 9152;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13691;
                                    readonly src: "6868:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 9153;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6881:15:64";
                                readonly memberName: "shareAdjustment";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7286;
                                readonly src: "6868:28:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                }];
                                readonly expression: {
                                    readonly id: 9148;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "6760:14:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 9149;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6775:31:64";
                                readonly memberName: "calculateEffectiveShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15110;
                                readonly src: "6760:46:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,int256) pure returns (uint256)";
                                };
                            };
                            readonly id: 9154;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6760:150:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 9147;
                        readonly id: 9155;
                        readonly nodeType: "Return";
                        readonly src: "6741:169:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9143;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6489:170:64";
                    readonly text: "@dev Gets the effective share reserves.\n @return The effective share reserves. This is the share reserves used\n         by the YieldSpace pricing model.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_effectiveShareReserves";
                readonly nameLocation: "6673:23:64";
                readonly parameters: {
                    readonly id: 9144;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6696:2:64";
                };
                readonly returnParameters: {
                    readonly id: 9147;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9146;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9157;
                        readonly src: "6722:7:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9145;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6722:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6721:9:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9190;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7255:675:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9189;
                    readonly nodeType: "Block";
                    readonly src: "7348:582:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 9187;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly baseExpression: {
                                            readonly id: 9165;
                                            readonly name: "_totalSupply";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13733;
                                            readonly src: "7611:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                                readonly typeString: "mapping(uint256 => uint256)";
                                            };
                                        };
                                        readonly id: 9173;
                                        readonly indexExpression: {
                                            readonly arguments: readonly [{
                                                readonly expression: {
                                                    readonly expression: {
                                                        readonly id: 9168;
                                                        readonly name: "AssetId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 14117;
                                                        readonly src: "7663:7:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                            readonly typeString: "type(library AssetId)";
                                                        };
                                                    };
                                                    readonly id: 9169;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "7671:13:64";
                                                    readonly memberName: "AssetIdPrefix";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 13864;
                                                    readonly src: "7663:21:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$13864_$";
                                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                                    };
                                                };
                                                readonly id: 9170;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7685:4:64";
                                                readonly memberName: "Long";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 13861;
                                                readonly src: "7663:26:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13864";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                };
                                            }, {
                                                readonly id: 9171;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9160;
                                                readonly src: "7691:13:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13864";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                }, {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly expression: {
                                                    readonly id: 9166;
                                                    readonly name: "AssetId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 14117;
                                                    readonly src: "7641:7:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                        readonly typeString: "type(library AssetId)";
                                                    };
                                                };
                                                readonly id: 9167;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7649:13:64";
                                                readonly memberName: "encodeAssetId";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 13887;
                                                readonly src: "7641:21:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13864_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 9172;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "7641:64:64";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "7611:108:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9174;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7720:8:64";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17574;
                                    readonly src: "7611:117:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 9175;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7611:119:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly baseExpression: {
                                            readonly id: 9176;
                                            readonly name: "_totalSupply";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13733;
                                            readonly src: "7745:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                                readonly typeString: "mapping(uint256 => uint256)";
                                            };
                                        };
                                        readonly id: 9184;
                                        readonly indexExpression: {
                                            readonly arguments: readonly [{
                                                readonly expression: {
                                                    readonly expression: {
                                                        readonly id: 9179;
                                                        readonly name: "AssetId";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 14117;
                                                        readonly src: "7818:7:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                            readonly typeString: "type(library AssetId)";
                                                        };
                                                    };
                                                    readonly id: 9180;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "7826:13:64";
                                                    readonly memberName: "AssetIdPrefix";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 13864;
                                                    readonly src: "7818:21:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$13864_$";
                                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                                    };
                                                };
                                                readonly id: 9181;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7840:5:64";
                                                readonly memberName: "Short";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 13862;
                                                readonly src: "7818:27:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13864";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                };
                                            }, {
                                                readonly id: 9182;
                                                readonly name: "_maturityTime";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9160;
                                                readonly src: "7867:13:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$13864";
                                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                                }, {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly expression: {
                                                    readonly id: 9177;
                                                    readonly name: "AssetId";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 14117;
                                                    readonly src: "7775:7:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                        readonly typeString: "type(library AssetId)";
                                                    };
                                                };
                                                readonly id: 9178;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7783:13:64";
                                                readonly memberName: "encodeAssetId";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 13887;
                                                readonly src: "7775:21:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13864_$_t_uint256_$returns$_t_uint256_$";
                                                    readonly typeString: "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 9183;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "7775:123:64";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "7745:167:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9185;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7913:8:64";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17574;
                                    readonly src: "7745:176:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 9186;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7745:178:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "7611:312:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 9164;
                        readonly id: 9188;
                        readonly nodeType: "Return";
                        readonly src: "7592:331:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9158;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6923:327:64";
                    readonly text: "@dev Gets the amount of non-netted longs with a given maturity.\n @param _maturityTime The maturity time of the longs.\n @return The amount of non-netted longs. This is a signed value that\n         can be negative. This is convenient for updating the long\n         exposure when closing positions.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_nonNettedLongs";
                readonly nameLocation: "7264:15:64";
                readonly parameters: {
                    readonly id: 9161;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9160;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "7297:13:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9190;
                        readonly src: "7289:21:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9159;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7289:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7279:37:64";
                };
                readonly returnParameters: {
                    readonly id: 9164;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9163;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9190;
                        readonly src: "7340:6:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 9162;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7340:6:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7339:8:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9280;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8221:1887:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9279;
                    readonly nodeType: "Block";
                    readonly src: "8488:1620:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9209];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9209;
                            readonly mutability: "mutable";
                            readonly name: "presentValueParams";
                            readonly nameLocation: "8698:18:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9279;
                            readonly src: "8653:63:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                            readonly typeName: {
                                readonly id: 9208;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 9207;
                                    readonly name: "LPMath.PresentValueParams";
                                    readonly nameLocations: readonly ["8653:6:64", "8660:18:64"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 15790;
                                    readonly src: "8653:25:64";
                                };
                                readonly referencedDeclaration: 15790;
                                readonly src: "8653:25:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_storage_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9213;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 9211;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9197;
                                readonly src: "8759:16:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 9210;
                                readonly name: "_getPresentValueParams";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9319;
                                readonly src: "8719:22:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15790_memory_ptr_$";
                                    readonly typeString: "function (uint256) view returns (struct LPMath.PresentValueParams memory)";
                                };
                            };
                            readonly id: 9212;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8719:70:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8653:136:64";
                    }, {
                        readonly assignments: readonly [9215];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9215;
                            readonly mutability: "mutable";
                            readonly name: "startingPresentValue";
                            readonly nameLocation: "8807:20:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9279;
                            readonly src: "8799:28:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9214;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8799:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9216;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8799:28:64";
                    }, {
                        readonly expression: {
                            readonly id: 9224;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 9217;
                                    readonly name: "startingPresentValue";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9215;
                                    readonly src: "8838:20:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9218;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9203;
                                    readonly src: "8860:7:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 9219;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "8837:31:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9222;
                                    readonly name: "presentValueParams";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9209;
                                    readonly src: "8917:18:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 9220;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17396;
                                        readonly src: "8871:6:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17396_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 9221;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8878:25:64";
                                    readonly memberName: "calculatePresentValueSafe";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15885;
                                    readonly src: "8871:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$_t_bool_$";
                                        readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256,bool)";
                                    };
                                };
                                readonly id: 9223;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8871:74:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly src: "8837:108:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 9225;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8837:108:64";
                    }, {
                        readonly condition: {
                            readonly id: 9227;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "8959:8:64";
                            readonly subExpression: {
                                readonly id: 9226;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9203;
                                readonly src: "8960:7:64";
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
                        readonly id: 9233;
                        readonly nodeType: "IfStatement";
                        readonly src: "8955:61:64";
                        readonly trueBody: {
                            readonly id: 9232;
                            readonly nodeType: "Block";
                            readonly src: "8969:47:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 9228;
                                        readonly name: "params";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9201;
                                        readonly src: "8991:6:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr";
                                            readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                        };
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 9229;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "8999:5:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 9230;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "8990:15:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_bool_$";
                                        readonly typeString: "tuple(struct LPMath.DistributeExcessIdleParams memory,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 9204;
                                readonly id: 9231;
                                readonly nodeType: "Return";
                                readonly src: "8983:22:64";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [9235];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9235;
                            readonly mutability: "mutable";
                            readonly name: "netCurveTrade";
                            readonly nameLocation: "9170:13:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9279;
                            readonly src: "9163:20:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 9234;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9163:6:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9253;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 9252;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 9239;
                                                readonly name: "presentValueParams";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9209;
                                                readonly src: "9254:18:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                                };
                                            };
                                            readonly id: 9240;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9273:24:64";
                                            readonly memberName: "longAverageTimeRemaining";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 15785;
                                            readonly src: "9254:43:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 9236;
                                                    readonly name: "presentValueParams";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 9209;
                                                    readonly src: "9186:18:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                                    };
                                                };
                                                readonly id: 9237;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9218:16:64";
                                                readonly memberName: "longsOutstanding";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 15783;
                                                readonly src: "9186:48:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9238;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9248:5:64";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 14247;
                                            readonly src: "9186:67:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 9241;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9186:112:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9242;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9312:8:64";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17574;
                                    readonly src: "9186:134:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 9243;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9186:136:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 9247;
                                                readonly name: "presentValueParams";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9209;
                                                readonly src: "9416:18:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                                };
                                            };
                                            readonly id: 9248;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9435:25:64";
                                            readonly memberName: "shortAverageTimeRemaining";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 15789;
                                            readonly src: "9416:44:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 9244;
                                                    readonly name: "presentValueParams";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 9209;
                                                    readonly src: "9337:18:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                                    };
                                                };
                                                readonly id: 9245;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9373:17:64";
                                                readonly memberName: "shortsOutstanding";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 15787;
                                                readonly src: "9337:53:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9246;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9408:7:64";
                                            readonly memberName: "mulDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 14197;
                                            readonly src: "9337:78:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 9249;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9337:124:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9250;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9479:8:64";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17574;
                                    readonly src: "9337:150:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 9251;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9337:152:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "9186:303:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9163:326:64";
                    }, {
                        readonly expression: {
                            readonly id: 9273;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9254;
                                readonly name: "params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9201;
                                readonly src: "9499:6:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9257;
                                    readonly name: "presentValueParams";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9209;
                                    readonly src: "9576:18:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    };
                                }, {
                                    readonly id: 9258;
                                    readonly name: "startingPresentValue";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9215;
                                    readonly src: "9630:20:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly baseExpression: {
                                        readonly id: 9259;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13733;
                                        readonly src: "9685:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 9262;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 9260;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 14117;
                                            readonly src: "9698:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 9261;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "9706:12:64";
                                        readonly memberName: "_LP_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 13850;
                                        readonly src: "9698:20:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "9685:34:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9263;
                                    readonly name: "_withdrawalSharesTotalSupply";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9195;
                                    readonly src: "9762:28:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9264;
                                    readonly name: "_idle";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9193;
                                    readonly src: "9810:5:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9265;
                                    readonly name: "netCurveTrade";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9235;
                                    readonly src: "9844:13:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9266;
                                        readonly name: "presentValueParams";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9209;
                                        readonly src: "9894:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                            readonly typeString: "struct LPMath.PresentValueParams memory";
                                        };
                                    };
                                    readonly id: 9267;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9913:13:64";
                                    readonly memberName: "shareReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15767;
                                    readonly src: "9894:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9268;
                                        readonly name: "presentValueParams";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9209;
                                        readonly src: "9965:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                            readonly typeString: "struct LPMath.PresentValueParams memory";
                                        };
                                    };
                                    readonly id: 9269;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9984:15:64";
                                    readonly memberName: "shareAdjustment";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15769;
                                    readonly src: "9965:34:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9270;
                                        readonly name: "presentValueParams";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9209;
                                        readonly src: "10035:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                            readonly typeString: "struct LPMath.PresentValueParams memory";
                                        };
                                    };
                                    readonly id: 9271;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10054:12:64";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15771;
                                    readonly src: "10035:31:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                        readonly typeString: "struct LPMath.PresentValueParams memory";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9255;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17396;
                                        readonly src: "9508:6:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17396_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 9256;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9515:26:64";
                                    readonly memberName: "DistributeExcessIdleParams";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 16262;
                                    readonly src: "9508:33:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_DistributeExcessIdleParams_$16262_storage_ptr_$";
                                        readonly typeString: "type(struct LPMath.DistributeExcessIdleParams storage pointer)";
                                    };
                                };
                                readonly id: 9272;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["9556:18:64", "9608:20:64", "9664:19:64", "9733:27:64", "9804:4:64", "9829:13:64", "9871:21:64", "9940:23:64", "10013:20:64"];
                                readonly names: readonly ["presentValueParams", "startingPresentValue", "activeLpTotalSupply", "withdrawalSharesTotalSupply", "idle", "netCurveTrade", "originalShareReserves", "originalShareAdjustment", "originalBondReserves"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9508:569:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr";
                                    readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                                };
                            };
                            readonly src: "9499:578:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams memory";
                            };
                        };
                        readonly id: 9274;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9499:578:64";
                    }, {
                        readonly expression: {
                            readonly id: 9277;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9275;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9203;
                                readonly src: "10087:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "74727565";
                                readonly id: 9276;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10097:4:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            };
                            readonly src: "10087:14:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9278;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10087:14:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9191;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7936:280:64";
                    readonly text: "@dev Gets the distribute excess idle parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The distribute excess idle parameters.\n @return success A failure flag indicating if the calculation succeeded.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getDistributeExcessIdleParamsSafe";
                readonly nameLocation: "8230:34:64";
                readonly parameters: {
                    readonly id: 9198;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9193;
                        readonly mutability: "mutable";
                        readonly name: "_idle";
                        readonly nameLocation: "8282:5:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9280;
                        readonly src: "8274:13:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9192;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8274:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9195;
                        readonly mutability: "mutable";
                        readonly name: "_withdrawalSharesTotalSupply";
                        readonly nameLocation: "8305:28:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9280;
                        readonly src: "8297:36:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9194;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8297:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9197;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "8351:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9280;
                        readonly src: "8343:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9196;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8343:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8264:109:64";
                };
                readonly returnParameters: {
                    readonly id: 9204;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9201;
                        readonly mutability: "mutable";
                        readonly name: "params";
                        readonly nameLocation: "8462:6:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9280;
                        readonly src: "8421:47:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr";
                            readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                        };
                        readonly typeName: {
                            readonly id: 9200;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9199;
                                readonly name: "LPMath.DistributeExcessIdleParams";
                                readonly nameLocations: readonly ["8421:6:64", "8428:26:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 16262;
                                readonly src: "8421:33:64";
                            };
                            readonly referencedDeclaration: 16262;
                            readonly src: "8421:33:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_DistributeExcessIdleParams_$16262_storage_ptr";
                                readonly typeString: "struct LPMath.DistributeExcessIdleParams";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9203;
                        readonly mutability: "mutable";
                        readonly name: "success";
                        readonly nameLocation: "8475:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9280;
                        readonly src: "8470:12:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 9202;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8470:4:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8420:63:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9319;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10301:1035:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9318;
                    readonly nodeType: "Block";
                    readonly src: "10437:899:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 9316;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9289;
                                readonly name: "params";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9287;
                                readonly src: "10447:6:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 9292;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "10511:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9293;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10524:13:64";
                                    readonly memberName: "shareReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7274;
                                    readonly src: "10511:26:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9294;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "10568:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9295;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10581:15:64";
                                    readonly memberName: "shareAdjustment";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7286;
                                    readonly src: "10568:28:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9296;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "10624:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9297;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10637:12:64";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7277;
                                    readonly src: "10624:25:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly id: 9298;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9283;
                                    readonly src: "10680:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9299;
                                    readonly name: "_initialVaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13681;
                                    readonly src: "10734:23:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9300;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13684;
                                    readonly src: "10793:21:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9301;
                                    readonly name: "_minimumTransactionAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13687;
                                    readonly src: "10854:25:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9302;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13666;
                                    readonly src: "10906:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9303;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "10950:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9304;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10963:16:64";
                                    readonly memberName: "longsOutstanding";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7283;
                                    readonly src: "10950:29:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 9306;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "11066:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9307;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11079:23:64";
                                        readonly memberName: "longAverageMaturityTime";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7292;
                                        readonly src: "11066:36:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        }];
                                        readonly id: 9305;
                                        readonly name: "_calculateTimeRemainingScaled";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9124;
                                        readonly src: "11019:29:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 9308;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11019:97:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 9309;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "11149:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9310;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "11162:17:64";
                                    readonly memberName: "shortsOutstanding";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7289;
                                    readonly src: "11149:30:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 9312;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "11267:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9313;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "11280:24:64";
                                        readonly memberName: "shortAverageMaturityTime";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7295;
                                        readonly src: "11267:37:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        }];
                                        readonly id: 9311;
                                        readonly name: "_calculateTimeRemainingScaled";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9124;
                                        readonly src: "11220:29:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 9314;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "11220:98:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    }, {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9290;
                                        readonly name: "LPMath";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17396;
                                        readonly src: "10456:6:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17396_$";
                                            readonly typeString: "type(library LPMath)";
                                        };
                                    };
                                    readonly id: 9291;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10463:18:64";
                                    readonly memberName: "PresentValueParams";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 15790;
                                    readonly src: "10456:25:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_PresentValueParams_$15790_storage_ptr_$";
                                        readonly typeString: "type(struct LPMath.PresentValueParams storage pointer)";
                                    };
                                };
                                readonly id: 9315;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["10496:13:64", "10551:15:64", "10610:12:64", "10663:15:64", "10710:22:64", "10771:20:64", "10828:24:64", "10893:11:64", "10932:16:64", "10993:24:64", "11130:17:64", "11193:25:64"];
                                readonly names: readonly ["shareReserves", "shareAdjustment", "bondReserves", "vaultSharePrice", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "timeStretch", "longsOutstanding", "longAverageTimeRemaining", "shortsOutstanding", "shortAverageTimeRemaining"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10456:873:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            };
                            readonly src: "10447:882:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams memory";
                            };
                        };
                        readonly id: 9317;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10447:882:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9281;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10114:182:64";
                    readonly text: "@dev Gets the present value parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The present value parameters.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_getPresentValueParams";
                readonly nameLocation: "10310:22:64";
                readonly parameters: {
                    readonly id: 9284;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9283;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "10350:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9319;
                        readonly src: "10342:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9282;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10342:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10332:40:64";
                };
                readonly returnParameters: {
                    readonly id: 9288;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9287;
                        readonly mutability: "mutable";
                        readonly name: "params";
                        readonly nameLocation: "10429:6:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9319;
                        readonly src: "10396:39:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                            readonly typeString: "struct LPMath.PresentValueParams";
                        };
                        readonly typeName: {
                            readonly id: 9286;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9285;
                                readonly name: "LPMath.PresentValueParams";
                                readonly nameLocations: readonly ["10396:6:64", "10403:18:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 15790;
                                readonly src: "10396:25:64";
                            };
                            readonly referencedDeclaration: 15790;
                            readonly src: "10396:25:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_storage_ptr";
                                readonly typeString: "struct LPMath.PresentValueParams";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10395:41:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9352;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11815:683:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9351;
                    readonly nodeType: "Block";
                    readonly src: "11977:521:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9332];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9332;
                            readonly mutability: "mutable";
                            readonly name: "endingSpotPrice";
                            readonly nameLocation: "12204:15:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9351;
                            readonly src: "12196:23:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9331;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12196:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9346;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9338;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 9335;
                                        readonly name: "_effectiveShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9157;
                                        readonly src: "12269:23:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                            readonly typeString: "function () view returns (uint256)";
                                        };
                                    };
                                    readonly id: 9336;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "12269:25:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 9337;
                                    readonly name: "_shareCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9322;
                                    readonly src: "12297:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "12269:44:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9342;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 9339;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "12327:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9340;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12340:12:64";
                                    readonly memberName: "bondReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7277;
                                    readonly src: "12327:25:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 9341;
                                    readonly name: "_bondCurveDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9324;
                                    readonly src: "12355:15:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "12327:43:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 9343;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13681;
                                readonly src: "12384:23:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 9344;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13666;
                                readonly src: "12421:12:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
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
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 9333;
                                    readonly name: "HyperdriveMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 15630;
                                    readonly src: "12222:14:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveMath_$15630_$";
                                        readonly typeString: "type(library HyperdriveMath)";
                                    };
                                };
                                readonly id: 9334;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12237:18:64";
                                readonly memberName: "calculateSpotPrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15035;
                                readonly src: "12222:33:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 9345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12222:221:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12196:247:64";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9349;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9347;
                                readonly name: "endingSpotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9332;
                                readonly src: "12460:15:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 9348;
                                readonly name: "_maxSpotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9326;
                                readonly src: "12478:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "12460:31:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 9330;
                        readonly id: 9350;
                        readonly nodeType: "Return";
                        readonly src: "12453:38:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9320;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11342:468:64";
                    readonly text: "@dev Checks if any of the bonds the trader purchased on the curve\n      were purchased above the price of 1 base per bonds.\n @param _shareCurveDelta The amount of shares the trader pays the curve.\n @param _bondCurveDelta The amount of bonds the trader receives from the\n        curve.\n @param _maxSpotPrice The maximum allowable spot price for the trade.\n @return A flag indicating whether the trade was negative interest.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_isNegativeInterest";
                readonly nameLocation: "11824:19:64";
                readonly parameters: {
                    readonly id: 9327;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9322;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "11861:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9352;
                        readonly src: "11853:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9321;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11853:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9324;
                        readonly mutability: "mutable";
                        readonly name: "_bondCurveDelta";
                        readonly nameLocation: "11895:15:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9352;
                        readonly src: "11887:23:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9323;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11887:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9326;
                        readonly mutability: "mutable";
                        readonly name: "_maxSpotPrice";
                        readonly nameLocation: "11928:13:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9352;
                        readonly src: "11920:21:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9325;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11920:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11843:104:64";
                };
                readonly returnParameters: {
                    readonly id: 9330;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9329;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9352;
                        readonly src: "11971:4:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 9328;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11971:4:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11970:6:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9378;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12830:376:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9377;
                    readonly nodeType: "Block";
                    readonly src: "12905:301:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9375;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 9366;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9355;
                                    readonly src: "13077:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 9362;
                                                readonly name: "_marketState";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13691;
                                                readonly src: "13041:12:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                };
                                            };
                                            readonly id: 9363;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "13054:13:64";
                                            readonly memberName: "shareReserves";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7274;
                                            readonly src: "13041:26:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            }];
                                            readonly id: 9361;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "13033:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 9360;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "13033:7:64";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 9364;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "13033:35:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9365;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13069:7:64";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14197;
                                    readonly src: "13033:43:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9367;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13033:61:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">=";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9374;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 9368;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "13110:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9369;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13123:12:64";
                                    readonly memberName: "longExposure";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7280;
                                    readonly src: "13110:25:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 9372;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9355;
                                        readonly src: "13182:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9370;
                                            readonly name: "_minimumShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13684;
                                            readonly src: "13154:21:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9371;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13176:5:64";
                                        readonly memberName: "mulUp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14247;
                                        readonly src: "13154:27:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9373;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13154:45:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "13110:89:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "13033:166:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 9359;
                        readonly id: 9376;
                        readonly nodeType: "Return";
                        readonly src: "13014:185:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9353;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12504:321:64";
                    readonly text: "@dev Check solvency by verifying that the share reserves are greater\n      than the exposure plus the minimum share reserves.\n @param _vaultSharePrice The current vault share price.\n @return True if the share reserves are greater than the exposure plus\n         the minimum share reserves.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_isSolvent";
                readonly nameLocation: "12839:10:64";
                readonly parameters: {
                    readonly id: 9356;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9355;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12858:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9378;
                        readonly src: "12850:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9354;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12850:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12849:26:64";
                };
                readonly returnParameters: {
                    readonly id: 9359;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9358;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9378;
                        readonly src: "12899:4:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 9357;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12899:4:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12898:6:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9431;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13377:551:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9430;
                    readonly nodeType: "Block";
                    readonly src: "13446:482:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9387];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9387;
                            readonly mutability: "mutable";
                            readonly name: "delta";
                            readonly nameLocation: "13688:5:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9430;
                            readonly src: "13681:12:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                            readonly typeName: {
                                readonly id: 9386;
                                readonly name: "int128";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "13681:6:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9400;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 9396;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 9390;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "13708:1:64";
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
                                                readonly expression: {
                                                    readonly id: 9388;
                                                    readonly name: "_after";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 9383;
                                                    readonly src: "13697:6:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
                                                readonly id: 9389;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13704:3:64";
                                                readonly memberName: "max";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 14916;
                                                readonly src: "13697:10:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                    readonly typeString: "function (int256,int256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 9391;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13697:13:64";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 9394;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "13725:1:64";
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
                                                readonly expression: {
                                                    readonly id: 9392;
                                                    readonly name: "_before";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 9381;
                                                    readonly src: "13713:7:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
                                                readonly id: 9393;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "13721:3:64";
                                                readonly memberName: "max";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 14916;
                                                readonly src: "13713:11:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                    readonly typeString: "function (int256,int256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 9395;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13713:14:64";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "13697:30:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }];
                                    readonly id: 9397;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "13696:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 9398;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "13729:8:64";
                                readonly memberName: "toInt128";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17539;
                                readonly src: "13696:41:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$";
                                    readonly typeString: "function (int256) pure returns (int128)";
                                };
                            };
                            readonly id: 9399;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13696:43:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "13681:58:64";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                            readonly id: 9403;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9401;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9387;
                                readonly src: "13753:5:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 9402;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "13761:1:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "13753:9:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                                readonly id: 9416;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 9414;
                                    readonly name: "delta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9387;
                                    readonly src: "13842:5:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 9415;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "13850:1:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "13842:9:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 9428;
                            readonly nodeType: "IfStatement";
                            readonly src: "13838:84:64";
                            readonly trueBody: {
                                readonly id: 9427;
                                readonly nodeType: "Block";
                                readonly src: "13853:69:64";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 9425;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly expression: {
                                                readonly id: 9417;
                                                readonly name: "_marketState";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13691;
                                                readonly src: "13867:12:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                };
                                            };
                                            readonly id: 9419;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: true;
                                            readonly memberLocation: "13880:12:64";
                                            readonly memberName: "longExposure";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 7280;
                                            readonly src: "13867:25:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "-=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly id: 9423;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "13904:6:64";
                                                readonly subExpression: {
                                                    readonly id: 9422;
                                                    readonly name: "delta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 9387;
                                                    readonly src: "13905:5:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int128";
                                                        readonly typeString: "int128";
                                                    };
                                                };
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int128";
                                                    readonly typeString: "int128";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_int128";
                                                    readonly typeString: "int128";
                                                }];
                                                readonly id: 9421;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "13896:7:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint128_$";
                                                    readonly typeString: "type(uint128)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 9420;
                                                    readonly name: "uint128";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "13896:7:64";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 9424;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "13896:15:64";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint128";
                                                readonly typeString: "uint128";
                                            };
                                        };
                                        readonly src: "13867:44:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly id: 9426;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13867:44:64";
                                }];
                            };
                        };
                        readonly id: 9429;
                        readonly nodeType: "IfStatement";
                        readonly src: "13749:173:64";
                        readonly trueBody: {
                            readonly id: 9413;
                            readonly nodeType: "Block";
                            readonly src: "13764:68:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9411;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 9404;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "13778:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9406;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "13791:12:64";
                                        readonly memberName: "longExposure";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7280;
                                        readonly src: "13778:25:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 9409;
                                            readonly name: "delta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9387;
                                            readonly src: "13815:5:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int128";
                                                readonly typeString: "int128";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_int128";
                                                readonly typeString: "int128";
                                            }];
                                            readonly id: 9408;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "13807:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint128_$";
                                                readonly typeString: "type(uint128)";
                                            };
                                            readonly typeName: {
                                                readonly id: 9407;
                                                readonly name: "uint128";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "13807:7:64";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 9410;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "13807:14:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "13778:43:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly id: 9412;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "13778:43:64";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 9379;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13212:160:64";
                    readonly text: "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_updateLongExposure";
                readonly nameLocation: "13386:19:64";
                readonly parameters: {
                    readonly id: 9384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9381;
                        readonly mutability: "mutable";
                        readonly name: "_before";
                        readonly nameLocation: "13413:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9431;
                        readonly src: "13406:14:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 9380;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13406:6:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9383;
                        readonly mutability: "mutable";
                        readonly name: "_after";
                        readonly nameLocation: "13429:6:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9431;
                        readonly src: "13422:13:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 9382;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13422:6:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13405:31:64";
                };
                readonly returnParameters: {
                    readonly id: 9385;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13446:0:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9523;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14350:1652:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9522;
                    readonly nodeType: "Block";
                    readonly src: "14476:1526:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9442, 9444];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9442;
                            readonly mutability: "mutable";
                            readonly name: "zombieBaseProceeds";
                            readonly nameLocation: "14602:18:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9522;
                            readonly src: "14594:26:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9441;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14594:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 9444;
                            readonly mutability: "mutable";
                            readonly name: "zombieBaseReserves";
                            readonly nameLocation: "14642:18:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9522;
                            readonly src: "14634:26:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9443;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14634:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9448;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 9446;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9436;
                                readonly src: "14696:16:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 9445;
                                readonly name: "_collectZombieInterest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9611;
                                readonly src: "14673:22:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 9447;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14673:40:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14580:133:64";
                    }, {
                        readonly assignments: readonly [9450];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9450;
                            readonly mutability: "mutable";
                            readonly name: "baseProceeds";
                            readonly nameLocation: "14990:12:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9522;
                            readonly src: "14982:20:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9449;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14982:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9455;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 9453;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9436;
                                readonly src: "15028:16:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 9451;
                                    readonly name: "_shareProceeds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9434;
                                    readonly src: "15005:14:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9452;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "15020:7:64";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14197;
                                readonly src: "15005:22:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 9454;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15005:40:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14982:63:64";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9458;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9456;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9442;
                                readonly src: "15059:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 9457;
                                readonly name: "zombieBaseReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9444;
                                readonly src: "15080:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "15059:39:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9468;
                        readonly nodeType: "IfStatement";
                        readonly src: "15055:198:64";
                        readonly trueBody: {
                            readonly id: 9467;
                            readonly nodeType: "Block";
                            readonly src: "15100:153:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9465;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9459;
                                        readonly name: "_shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9434;
                                        readonly src: "15114:14:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 9462;
                                            readonly name: "zombieBaseReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9444;
                                            readonly src: "15174:18:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 9463;
                                            readonly name: "zombieBaseProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9442;
                                            readonly src: "15210:18:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 9460;
                                                readonly name: "_shareProceeds";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9434;
                                                readonly src: "15131:14:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9461;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "15146:10:64";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 14179;
                                            readonly src: "15131:25:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 9464;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "15131:111:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "15114:128:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9466;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "15114:128:64";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9471;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9469;
                                readonly name: "baseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9450;
                                readonly src: "15344:12:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 9470;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9442;
                                readonly src: "15359:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "15344:33:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 9482;
                            readonly nodeType: "Block";
                            readonly src: "15486:47:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9480;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9478;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9442;
                                        readonly src: "15500:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "30";
                                        readonly id: 9479;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "15521:1:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "15500:22:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9481;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "15500:22:64";
                            }];
                        };
                        readonly id: 9483;
                        readonly nodeType: "IfStatement";
                        readonly src: "15340:193:64";
                        readonly trueBody: {
                            readonly id: 9477;
                            readonly nodeType: "Block";
                            readonly src: "15379:101:64";
                            readonly statements: readonly [{
                                readonly id: 9476;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "15393:77:64";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 9474;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 9472;
                                            readonly name: "zombieBaseProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9442;
                                            readonly src: "15421:18:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "-=";
                                        readonly rightHandSide: {
                                            readonly id: 9473;
                                            readonly name: "baseProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9450;
                                            readonly src: "15443:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "15421:34:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9475;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "15421:34:64";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 9490;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 9484;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13691;
                                    readonly src: "15542:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 9486;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "15555:18:64";
                                readonly memberName: "zombieBaseProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7304;
                                readonly src: "15542:31:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 9487;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9442;
                                        readonly src: "15576:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9488;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15595:9:64";
                                    readonly memberName: "toUint112";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17431;
                                    readonly src: "15576:28:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint112)";
                                    };
                                };
                                readonly id: 9489;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15576:30:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly src: "15542:64:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint112";
                                readonly typeString: "uint112";
                            };
                        };
                        readonly id: 9491;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15542:64:64";
                    }, {
                        readonly assignments: readonly [9493];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9493;
                            readonly mutability: "mutable";
                            readonly name: "zombieShareReserves";
                            readonly nameLocation: "15624:19:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9522;
                            readonly src: "15616:27:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9492;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "15616:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9496;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 9494;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13691;
                                readonly src: "15646:12:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly id: 9495;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "15659:19:64";
                            readonly memberName: "zombieShareReserves";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 7307;
                            readonly src: "15646:32:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15616:62:64";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9499;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9497;
                                readonly name: "_shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9434;
                                readonly src: "15692:14:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 9498;
                                readonly name: "zombieShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9493;
                                readonly src: "15709:19:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "15692:36:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 9510;
                            readonly nodeType: "Block";
                            readonly src: "15840:48:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9508;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9506;
                                        readonly name: "zombieShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9493;
                                        readonly src: "15854:19:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "30";
                                        readonly id: 9507;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "15876:1:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "15854:23:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9509;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "15854:23:64";
                            }];
                        };
                        readonly id: 9511;
                        readonly nodeType: "IfStatement";
                        readonly src: "15688:200:64";
                        readonly trueBody: {
                            readonly id: 9505;
                            readonly nodeType: "Block";
                            readonly src: "15730:104:64";
                            readonly statements: readonly [{
                                readonly id: 9504;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "15744:80:64";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 9502;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 9500;
                                            readonly name: "zombieShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9493;
                                            readonly src: "15772:19:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "-=";
                                        readonly rightHandSide: {
                                            readonly id: 9501;
                                            readonly name: "_shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9434;
                                            readonly src: "15795:14:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "15772:37:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9503;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "15772:37:64";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 9518;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 9512;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13691;
                                    readonly src: "15897:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 9514;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "15910:19:64";
                                readonly memberName: "zombieShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7307;
                                readonly src: "15897:32:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 9515;
                                        readonly name: "zombieShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9493;
                                        readonly src: "15932:19:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9516;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15952:9:64";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17461;
                                    readonly src: "15932:29:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 9517;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15932:31:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "15897:66:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 9519;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15897:66:64";
                    }, {
                        readonly expression: {
                            readonly id: 9520;
                            readonly name: "_shareProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 9434;
                            readonly src: "15981:14:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 9440;
                        readonly id: 9521;
                        readonly nodeType: "Return";
                        readonly src: "15974:21:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9432;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13934:411:64";
                    readonly text: "@dev Apply the updates to the market state as a result of closing a\n      position after maturity. This function also adjusts the proceeds\n      to account for any negative interest that has accrued in the\n      zombie reserves.\n @param _shareProceeds The share proceeds.\n @param _vaultSharePrice The current vault share price.\n @return The adjusted share proceeds.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_applyZombieClose";
                readonly nameLocation: "14359:17:64";
                readonly parameters: {
                    readonly id: 9437;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9434;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "14394:14:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9523;
                        readonly src: "14386:22:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9433;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14386:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9436;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "14426:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9523;
                        readonly src: "14418:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9435;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14418:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14376:72:64";
                };
                readonly returnParameters: {
                    readonly id: 9440;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9439;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9523;
                        readonly src: "14467:7:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9438;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14467:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14466:9:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9611;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16421:2511:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9610;
                    readonly nodeType: "Block";
                    readonly src: "16587:2345:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 9539;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9533;
                                readonly name: "zombieBaseReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9531;
                                readonly src: "16721:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 9536;
                                        readonly name: "_marketState";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13691;
                                        readonly src: "16780:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                            readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                        };
                                    };
                                    readonly id: 9537;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16793:19:64";
                                    readonly memberName: "zombieShareReserves";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7307;
                                    readonly src: "16780:32:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    }];
                                    readonly expression: {
                                        readonly id: 9534;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9526;
                                        readonly src: "16742:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9535;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16759:7:64";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14197;
                                    readonly src: "16742:24:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9538;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16742:80:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16721:101:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9540;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16721:101:64";
                    }, {
                        readonly expression: {
                            readonly id: 9544;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9541;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9529;
                                readonly src: "16832:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 9542;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13691;
                                    readonly src: "16853:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 9543;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "16866:18:64";
                                readonly memberName: "zombieBaseProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7304;
                                readonly src: "16853:31:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly src: "16832:52:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9545;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16832:52:64";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9548;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9546;
                                readonly name: "zombieBaseReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9531;
                                readonly src: "17027:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 9547;
                                readonly name: "zombieBaseProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9529;
                                readonly src: "17048:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "17027:39:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9609;
                        readonly nodeType: "IfStatement";
                        readonly src: "17023:1903:64";
                        readonly trueBody: {
                            readonly id: 9608;
                            readonly nodeType: "Block";
                            readonly src: "17068:1858:64";
                            readonly statements: readonly [{
                                readonly assignments: readonly [9550];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 9550;
                                    readonly mutability: "mutable";
                                    readonly name: "zombieInterest";
                                    readonly nameLocation: "17240:14:64";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 9608;
                                    readonly src: "17232:22:64";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 9549;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "17232:7:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 9554;
                                readonly initialValue: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 9553;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 9551;
                                        readonly name: "zombieBaseReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9531;
                                        readonly src: "17257:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 9552;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9529;
                                        readonly src: "17278:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "17257:39:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "17232:64:64";
                            }, {
                                readonly expression: {
                                    readonly id: 9564;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 9555;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "17533:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9557;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "17546:19:64";
                                        readonly memberName: "zombieShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7307;
                                        readonly src: "17533:32:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "-=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 9560;
                                                    readonly name: "_vaultSharePrice";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 9526;
                                                    readonly src: "17607:16:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 9558;
                                                        readonly name: "zombieInterest";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 9550;
                                                        readonly src: "17569:14:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 9559;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "17601:5:64";
                                                    readonly memberName: "divUp";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 14265;
                                                    readonly src: "17569:37:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 9561;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "17569:55:64";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9562;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "17642:9:64";
                                            readonly memberName: "toUint128";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 17461;
                                            readonly src: "17569:82:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256) pure returns (uint128)";
                                            };
                                        };
                                        readonly id: 9563;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "17569:84:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "17533:120:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly id: 9565;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "17533:120:64";
                            }, {
                                readonly assignments: readonly [9567];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 9567;
                                    readonly mutability: "mutable";
                                    readonly name: "zombieInterestShares";
                                    readonly nameLocation: "17960:20:64";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 9608;
                                    readonly src: "17952:28:64";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 9566;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "17952:7:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 9572;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 9570;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9526;
                                        readonly src: "18023:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9568;
                                            readonly name: "zombieInterest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9550;
                                            readonly src: "17983:14:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9569;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "17998:7:64";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14215;
                                        readonly src: "17983:22:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9571;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17983:70:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "17952:101:64";
                            }, {
                                readonly assignments: readonly [9574];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 9574;
                                    readonly mutability: "mutable";
                                    readonly name: "governanceZombieFeeCollected";
                                    readonly nameLocation: "18075:28:64";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 9608;
                                    readonly src: "18067:36:64";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 9573;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "18067:7:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 9579;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 9577;
                                        readonly name: "_governanceZombieFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13678;
                                        readonly src: "18152:20:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9575;
                                            readonly name: "zombieInterestShares";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9567;
                                            readonly src: "18106:20:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9576;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "18127:7:64";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14197;
                                        readonly src: "18106:28:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9578;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "18106:80:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "18067:119:64";
                            }, {
                                readonly expression: {
                                    readonly id: 9582;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9580;
                                        readonly name: "_governanceFeesAccrued";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13710;
                                        readonly src: "18200:22:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 9581;
                                        readonly name: "governanceZombieFeeCollected";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9574;
                                        readonly src: "18226:28:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18200:54:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9583;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "18200:54:64";
                            }, {
                                readonly expression: {
                                    readonly id: 9586;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9584;
                                        readonly name: "zombieInterestShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9567;
                                        readonly src: "18531:20:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "-=";
                                    readonly rightHandSide: {
                                        readonly id: 9585;
                                        readonly name: "governanceZombieFeeCollected";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9574;
                                        readonly src: "18555:28:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18531:52:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9587;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "18531:52:64";
                            }, {
                                readonly expression: {
                                    readonly id: 9594;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 9588;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "18597:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9590;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "18610:13:64";
                                        readonly memberName: "shareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7274;
                                        readonly src: "18597:26:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly expression: {
                                                readonly id: 9591;
                                                readonly name: "zombieInterestShares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9567;
                                                readonly src: "18627:20:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9592;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "18648:9:64";
                                            readonly memberName: "toUint128";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 17461;
                                            readonly src: "18627:30:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256) pure returns (uint128)";
                                            };
                                        };
                                        readonly id: 9593;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "18627:32:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    };
                                    readonly src: "18597:62:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint128";
                                        readonly typeString: "uint128";
                                    };
                                };
                                readonly id: 9595;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "18597:62:64";
                            }, {
                                readonly expression: {
                                    readonly id: 9602;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly expression: {
                                            readonly id: 9596;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "18673:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9598;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly memberLocation: "18686:15:64";
                                        readonly memberName: "shareAdjustment";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7286;
                                        readonly src: "18673:28:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int128";
                                            readonly typeString: "int128";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly expression: {
                                                readonly id: 9599;
                                                readonly name: "zombieInterestShares";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9567;
                                                readonly src: "18705:20:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9600;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "18726:8:64";
                                            readonly memberName: "toInt128";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 17499;
                                            readonly src: "18705:29:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int128_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256) pure returns (int128)";
                                            };
                                        };
                                        readonly id: 9601;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "18705:31:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int128";
                                            readonly typeString: "int128";
                                        };
                                    };
                                    readonly src: "18673:63:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int128";
                                        readonly typeString: "int128";
                                    };
                                };
                                readonly id: 9603;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "18673:63:64";
                            }, {
                                readonly expression: {
                                    readonly id: 9606;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9604;
                                        readonly name: "zombieBaseReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9531;
                                        readonly src: "18876:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 9605;
                                        readonly name: "zombieBaseProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9529;
                                        readonly src: "18897:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18876:39:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9607;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "18876:39:64";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 9524;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16008:408:64";
                    readonly text: "@dev Collect the interest earned on unredeemed matured positions. This\n      interest is split between the LPs and governance.\n @param _vaultSharePrice The current vault share price.\n @return zombieBaseProceeds The base proceeds reserved for zombie\n         positions.\n @return zombieBaseReserves The updated base reserves reserved for zombie\n         positions.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_collectZombieInterest";
                readonly nameLocation: "16430:22:64";
                readonly parameters: {
                    readonly id: 9527;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9526;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "16470:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9611;
                        readonly src: "16462:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9525;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16462:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16452:40:64";
                };
                readonly returnParameters: {
                    readonly id: 9532;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9529;
                        readonly mutability: "mutable";
                        readonly name: "zombieBaseProceeds";
                        readonly nameLocation: "16535:18:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9611;
                        readonly src: "16527:26:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9528;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16527:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9531;
                        readonly mutability: "mutable";
                        readonly name: "zombieBaseReserves";
                        readonly nameLocation: "16563:18:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9611;
                        readonly src: "16555:26:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9530;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16555:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16526:56:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9650;
                readonly nodeType: "FunctionDefinition";
                readonly src: "19212:558:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9649;
                    readonly nodeType: "Block";
                    readonly src: "19332:438:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9620];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9620;
                            readonly mutability: "mutable";
                            readonly name: "longExposure";
                            readonly nameLocation: "19410:12:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9649;
                            readonly src: "19402:20:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9619;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "19402:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9629;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 9627;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9614;
                                readonly src: "19479:16:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 9623;
                                            readonly name: "_marketState";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13691;
                                            readonly src: "19433:12:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                            };
                                        };
                                        readonly id: 9624;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "19446:12:64";
                                        readonly memberName: "longExposure";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7280;
                                        readonly src: "19433:25:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        }];
                                        readonly id: 9622;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "19425:7:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 9621;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "19425:7:64";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 9625;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "19425:34:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9626;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "19460:5:64";
                                readonly memberName: "divUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14265;
                                readonly src: "19425:40:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 9628;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "19425:80:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "19402:103:64";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9635;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 9630;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13691;
                                    readonly src: "19519:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 9631;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "19532:13:64";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7274;
                                readonly src: "19519:26:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9634;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 9632;
                                    readonly name: "longExposure";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9620;
                                    readonly src: "19548:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 9633;
                                    readonly name: "_minimumShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13684;
                                    readonly src: "19563:21:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "19548:36:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "19519:65:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9646;
                        readonly nodeType: "IfStatement";
                        readonly src: "19515:222:64";
                        readonly trueBody: {
                            readonly id: 9645;
                            readonly nodeType: "Block";
                            readonly src: "19586:151:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9643;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 9636;
                                        readonly name: "idleShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9617;
                                        readonly src: "19600:10:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 9642;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 9640;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 9637;
                                                    readonly name: "_marketState";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13691;
                                                    readonly src: "19629:12:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_struct$_MarketState_$7308_storage";
                                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                                    };
                                                };
                                                readonly id: 9638;
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "19642:13:64";
                                                readonly memberName: "shareReserves";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 7274;
                                                readonly src: "19629:26:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint128";
                                                    readonly typeString: "uint128";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 9639;
                                                readonly name: "longExposure";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 9620;
                                                readonly src: "19674:12:64";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "19629:57:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 9641;
                                            readonly name: "_minimumShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13684;
                                            readonly src: "19705:21:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "19629:97:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "19600:126:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9644;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "19600:126:64";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 9647;
                            readonly name: "idleShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 9617;
                            readonly src: "19753:10:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 9618;
                        readonly id: 9648;
                        readonly nodeType: "Return";
                        readonly src: "19746:17:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9612;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "18938:269:64";
                    readonly text: "@dev Calculates the number of share reserves that are not reserved by\n      open positions.\n @param _vaultSharePrice The current vault share price.\n @return idleShares The amount of shares that are available for LPs to\n         withdraw.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateIdleShareReserves";
                readonly nameLocation: "19221:27:64";
                readonly parameters: {
                    readonly id: 9615;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9614;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "19266:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9650;
                        readonly src: "19258:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9613;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19258:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19248:40:64";
                };
                readonly returnParameters: {
                    readonly id: 9618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9617;
                        readonly mutability: "mutable";
                        readonly name: "idleShares";
                        readonly nameLocation: "19320:10:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9650;
                        readonly src: "19312:18:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9616;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19312:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19311:20:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9727;
                readonly nodeType: "FunctionDefinition";
                readonly src: "20108:1358:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9726;
                    readonly nodeType: "Block";
                    readonly src: "20222:1244:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [9661, 9663];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9661;
                            readonly mutability: "mutable";
                            readonly name: "presentValueShares";
                            readonly nameLocation: "20367:18:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9726;
                            readonly src: "20359:26:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9660;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "20359:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 9663;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "20392:7:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9726;
                            readonly src: "20387:12:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 9662;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "20387:4:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9670;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 9667;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9653;
                                    readonly src: "20489:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 9666;
                                    readonly name: "_getPresentValueParams";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9319;
                                    readonly src: "20466:22:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15790_memory_ptr_$";
                                        readonly typeString: "function (uint256) view returns (struct LPMath.PresentValueParams memory)";
                                    };
                                };
                                readonly id: 9668;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "20466:40:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PresentValueParams_$15790_memory_ptr";
                                    readonly typeString: "struct LPMath.PresentValueParams memory";
                                }];
                                readonly expression: {
                                    readonly id: 9664;
                                    readonly name: "LPMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17396;
                                    readonly src: "20403:6:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_LPMath_$17396_$";
                                        readonly typeString: "type(library LPMath)";
                                    };
                                };
                                readonly id: 9665;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "20423:25:64";
                                readonly memberName: "calculatePresentValueSafe";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 15885;
                                readonly src: "20403:45:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$_t_bool_$";
                                    readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256,bool)";
                                };
                            };
                            readonly id: 9669;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "20403:117:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "20358:162:64";
                    }, {
                        readonly condition: {
                            readonly id: 9672;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "20534:8:64";
                            readonly subExpression: {
                                readonly id: 9671;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9663;
                                readonly src: "20535:7:64";
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
                        readonly id: 9678;
                        readonly nodeType: "IfStatement";
                        readonly src: "20530:56:64";
                        readonly trueBody: {
                            readonly id: 9677;
                            readonly nodeType: "Block";
                            readonly src: "20544:42:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 9673;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "20566:1:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 9674;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "20569:5:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 9675;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "20565:10:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_rational_0_by_1_$_t_bool_$";
                                        readonly typeString: "tuple(int_const 0,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 9659;
                                readonly id: 9676;
                                readonly nodeType: "Return";
                                readonly src: "20558:17:64";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [9680];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9680;
                            readonly mutability: "mutable";
                            readonly name: "presentValue";
                            readonly nameLocation: "20752:12:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9726;
                            readonly src: "20744:20:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9679;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "20744:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9690;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9683;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 9681;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9653;
                                    readonly src: "20767:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 9682;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "20786:1:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "20767:20:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 9688;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "20861:1:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 9689;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "20767:95:64";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 9686;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9653;
                                    readonly src: "20829:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9684;
                                        readonly name: "presentValueShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9661;
                                        readonly src: "20802:18:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9685;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "20821:7:64";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14197;
                                    readonly src: "20802:26:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9687;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "20802:44:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "20744:118:64";
                    }, {
                        readonly assignments: readonly [9692];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9692;
                            readonly mutability: "mutable";
                            readonly name: "lpTotalSupply";
                            readonly nameLocation: "20880:13:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9726;
                            readonly src: "20872:21:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9691;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "20872:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9705;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9704;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9701;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly baseExpression: {
                                        readonly id: 9693;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13733;
                                        readonly src: "20896:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 9696;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 9694;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 14117;
                                            readonly src: "20909:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 9695;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "20917:12:64";
                                        readonly memberName: "_LP_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 13850;
                                        readonly src: "20909:20:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "20896:34:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly baseExpression: {
                                        readonly id: 9697;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13733;
                                        readonly src: "20945:12:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 9700;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 9698;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 14117;
                                            readonly src: "20958:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$14117_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 9699;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "20966:26:64";
                                        readonly memberName: "_WITHDRAWAL_SHARE_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 13859;
                                        readonly src: "20958:34:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "20945:48:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "20896:97:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 9702;
                                    readonly name: "_withdrawPool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13695;
                                    readonly src: "21008:13:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$7319_storage";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                    };
                                };
                                readonly id: 9703;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "21022:15:64";
                                readonly memberName: "readyToWithdraw";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7315;
                                readonly src: "21008:29:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "20896:141:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "20872:165:64";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 9708;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 9706;
                                readonly name: "lpTotalSupply";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9692;
                                readonly src: "21174:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 9707;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "21191:1:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "21174:18:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 9714;
                        readonly nodeType: "IfStatement";
                        readonly src: "21170:66:64";
                        readonly trueBody: {
                            readonly id: 9713;
                            readonly nodeType: "Block";
                            readonly src: "21194:42:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 9709;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "21216:1:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 9710;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "21219:5:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 9711;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "21215:10:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_rational_0_by_1_$_t_bool_$";
                                        readonly typeString: "tuple(int_const 0,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 9659;
                                readonly id: 9712;
                                readonly nodeType: "Return";
                                readonly src: "21208:17:64";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [9716];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9716;
                            readonly mutability: "mutable";
                            readonly name: "lpSharePrice";
                            readonly nameLocation: "21371:12:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9726;
                            readonly src: "21363:20:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9715;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "21363:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9721;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 9719;
                                readonly name: "lpTotalSupply";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9692;
                                readonly src: "21407:13:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 9717;
                                    readonly name: "presentValue";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9680;
                                    readonly src: "21386:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9718;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "21399:7:64";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14215;
                                readonly src: "21386:20:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 9720;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "21386:35:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "21363:58:64";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 9722;
                                readonly name: "lpSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9716;
                                readonly src: "21440:12:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly hexValue: "74727565";
                                readonly id: 9723;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "21454:4:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            }];
                            readonly id: 9724;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "21439:20:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly functionReturnParameters: 9659;
                        readonly id: 9725;
                        readonly nodeType: "Return";
                        readonly src: "21432:27:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9651;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "19776:327:64";
                    readonly text: "@dev Calculates the LP share price. If the LP share price can't be\n      calculated, this function returns a failure flag.\n @param _vaultSharePrice The current vault share price.\n @return The LP share price in units of (base / lp shares).\n @return A flag indicating if the calculation succeeded.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateLPSharePriceSafe";
                readonly nameLocation: "20117:26:64";
                readonly parameters: {
                    readonly id: 9654;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9653;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "20161:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9727;
                        readonly src: "20153:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9652;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "20153:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "20143:40:64";
                };
                readonly returnParameters: {
                    readonly id: 9659;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9656;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9727;
                        readonly src: "20207:7:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9655;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "20207:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9658;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9727;
                        readonly src: "20216:4:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 9657;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "20216:4:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "20206:15:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9768;
                readonly nodeType: "FunctionDefinition";
                readonly src: "21986:1651:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9767;
                    readonly nodeType: "Block";
                    readonly src: "22188:1449:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 9758;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9741;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9737;
                                readonly src: "23184:8:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9756;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9730;
                                    readonly src: "23311:12:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 9753;
                                            readonly name: "_vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9734;
                                            readonly src: "23274:16:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 9750;
                                                    readonly name: "_curveFee";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 13669;
                                                    readonly src: "23244:9:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    }];
                                                    readonly expression: {
                                                        readonly components: readonly [{
                                                            readonly commonType: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                            readonly id: 9747;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly leftExpression: {
                                                                readonly arguments: readonly [{
                                                                    readonly id: 9744;
                                                                    readonly name: "_spotPrice";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 9732;
                                                                    readonly src: "23206:10:64";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                }];
                                                                readonly expression: {
                                                                    readonly argumentTypes: readonly [{
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    }];
                                                                    readonly expression: {
                                                                        readonly id: 9742;
                                                                        readonly name: "ONE";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 14151;
                                                                        readonly src: "23196:3:64";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    };
                                                                    readonly id: 9743;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly memberLocation: "23200:5:64";
                                                                    readonly memberName: "divUp";
                                                                    readonly nodeType: "MemberAccess";
                                                                    readonly referencedDeclaration: 14265;
                                                                    readonly src: "23196:9:64";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                                    };
                                                                };
                                                                readonly id: 9745;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly kind: "functionCall";
                                                                readonly lValueRequested: false;
                                                                readonly nameLocations: readonly [];
                                                                readonly names: readonly [];
                                                                readonly nodeType: "FunctionCall";
                                                                readonly src: "23196:21:64";
                                                                readonly tryCall: false;
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly nodeType: "BinaryOperation";
                                                            readonly operator: "-";
                                                            readonly rightExpression: {
                                                                readonly id: 9746;
                                                                readonly name: "ONE";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 14151;
                                                                readonly src: "23220:3:64";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly src: "23196:27:64";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        }];
                                                        readonly id: 9748;
                                                        readonly isConstant: false;
                                                        readonly isInlineArray: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "TupleExpression";
                                                        readonly src: "23195:29:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 9749;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "23238:5:64";
                                                    readonly memberName: "mulUp";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 14247;
                                                    readonly src: "23195:48:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 9751;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "23195:59:64";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9752;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "23268:5:64";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 14247;
                                            readonly src: "23195:78:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 9754;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "23195:96:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9755;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "23305:5:64";
                                    readonly memberName: "mulUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14247;
                                    readonly src: "23195:115:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9757;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "23195:129:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "23184:140:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9759;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "23184:140:64";
                    }, {
                        readonly expression: {
                            readonly id: 9765;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9760;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9739;
                                readonly src: "23575:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9763;
                                    readonly name: "_governanceLPFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13675;
                                    readonly src: "23613:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9761;
                                        readonly name: "curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9737;
                                        readonly src: "23596:8:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9762;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "23605:7:64";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14197;
                                    readonly src: "23596:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9764;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "23596:34:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "23575:55:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9766;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "23575:55:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9728;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "21472:509:64";
                    readonly text: "@dev Calculates the fees that go to the LPs and governance.\n @param _shareAmount The amount of shares exchanged for bonds.\n @param _spotPrice The price without slippage of bonds in terms of base\n         (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of bonds.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateFeesGivenShares";
                readonly nameLocation: "21995:25:64";
                readonly parameters: {
                    readonly id: 9735;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9730;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "22038:12:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9768;
                        readonly src: "22030:20:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9729;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22030:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9732;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "22068:10:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9768;
                        readonly src: "22060:18:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9731;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22060:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9734;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "22096:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9768;
                        readonly src: "22088:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9733;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22088:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "22020:98:64";
                };
                readonly returnParameters: {
                    readonly id: 9740;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9737;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "22150:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9768;
                        readonly src: "22142:16:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9736;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22142:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9739;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "22168:18:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9768;
                        readonly src: "22160:26:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9738;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "22160:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "22141:46:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9838;
                readonly nodeType: "FunctionDefinition";
                readonly src: "24454:2727:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9837;
                    readonly nodeType: "Block";
                    readonly src: "24827:2354:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 9802;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9788;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9780;
                                readonly src: "25563:8:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9799;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9773;
                                    readonly src: "25675:24:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 9800;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9777;
                                    readonly src: "25701:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 9796;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9771;
                                            readonly src: "25640:11:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 9793;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 9791;
                                                        readonly name: "ONE";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 14151;
                                                        readonly src: "25603:3:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly id: 9792;
                                                        readonly name: "_spotPrice";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 9775;
                                                        readonly src: "25609:10:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly src: "25603:16:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 9789;
                                                        readonly name: "_curveFee";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 13669;
                                                        readonly src: "25574:9:64";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 9790;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "25597:5:64";
                                                    readonly memberName: "mulUp";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 14247;
                                                    readonly src: "25574:28:64";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 9794;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "25574:46:64";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 9795;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "25634:5:64";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 14247;
                                            readonly src: "25574:65:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 9797;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "25574:78:64";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9798;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "25666:8:64";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14229;
                                    readonly src: "25574:100:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9801;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "25574:144:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "25563:155:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9803;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "25563:155:64";
                    }, {
                        readonly expression: {
                            readonly id: 9809;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9804;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9784;
                                readonly src: "25985:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9807;
                                    readonly name: "_governanceLPFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13675;
                                    readonly src: "26023:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9805;
                                        readonly name: "curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9780;
                                        readonly src: "26006:8:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9806;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "26015:7:64";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14197;
                                    readonly src: "26006:16:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9808;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "26006:34:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "25985:55:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9810;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "25985:55:64";
                    }, {
                        readonly assignments: readonly [9812];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 9812;
                            readonly mutability: "mutable";
                            readonly name: "flat";
                            readonly nameLocation: "26556:4:64";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 9837;
                            readonly src: "26548:12:64";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 9811;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "26548:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 9820;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9817;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 9815;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 14151;
                                    readonly src: "26597:3:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 9816;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9773;
                                    readonly src: "26603:24:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "26597:30:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 9818;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9777;
                                readonly src: "26641:16:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 9813;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9771;
                                    readonly src: "26563:11:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 9814;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "26575:8:64";
                                readonly memberName: "mulDivUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 14229;
                                readonly src: "26563:20:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 9819;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "26563:104:64";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "26548:119:64";
                    }, {
                        readonly expression: {
                            readonly id: 9826;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9821;
                                readonly name: "flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9782;
                                readonly src: "26677:7:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 9824;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13672;
                                    readonly src: "26698:8:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 9822;
                                        readonly name: "flat";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9812;
                                        readonly src: "26687:4:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 9823;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "26692:5:64";
                                    readonly memberName: "mulUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 14247;
                                    readonly src: "26687:10:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 9825;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "26687:20:64";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "26677:30:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9827;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "26677:30:64";
                    }, {
                        readonly expression: {
                            readonly id: 9835;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 9828;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9786;
                                readonly src: "27075:18:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 9834;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 9829;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9784;
                                    readonly src: "27108:18:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 9832;
                                        readonly name: "_governanceLPFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13675;
                                        readonly src: "27157:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9830;
                                            readonly name: "flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9782;
                                            readonly src: "27141:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9831;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "27149:7:64";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14197;
                                        readonly src: "27141:15:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9833;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "27141:33:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "27108:66:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "27075:99:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 9836;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "27075:99:64";
                    }];
                };
                readonly documentation: {
                    readonly id: 9769;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "23643:806:64";
                    readonly text: "@dev Calculates the fees that go to the LPs and governance.\n @param _bondAmount The amount of bonds being exchanged for shares.\n @param _normalizedTimeRemaining The normalized amount of time until\n        maturity.\n @param _spotPrice The price without slippage of bonds in terms of base\n        (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of shares.\n @return flatFee The flat fee. The fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of shares.\n @return totalGovernanceFee The total fee that goes to governance. The\n         fee is in terms of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_calculateFeesGivenBonds";
                readonly nameLocation: "24463:24:64";
                readonly parameters: {
                    readonly id: 9778;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9771;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "24505:11:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24497:19:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9770;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24497:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9773;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "24534:24:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24526:32:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9772;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24526:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9775;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "24576:10:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24568:18:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9774;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24568:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9777;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "24604:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24596:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9776;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24596:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "24487:139:64";
                };
                readonly returnParameters: {
                    readonly id: 9787;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9780;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "24695:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24687:16:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9779;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24687:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9782;
                        readonly mutability: "mutable";
                        readonly name: "flatFee";
                        readonly nameLocation: "24725:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24717:15:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9781;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24717:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9784;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "24754:18:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24746:26:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9783;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24746:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9786;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "24794:18:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9838;
                        readonly src: "24786:26:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9785;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24786:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "24673:149:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9864;
                readonly nodeType: "FunctionDefinition";
                readonly src: "27506:391:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9863;
                    readonly nodeType: "Block";
                    readonly src: "27684:213:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 9851;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9846;
                                readonly src: "27698:8:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 9852;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "27707:6:64";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 7459;
                            readonly src: "27698:15:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 9861;
                            readonly nodeType: "Block";
                            readonly src: "27760:131:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 9858;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9843;
                                        readonly src: "27863:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9856;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9841;
                                            readonly src: "27847:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9857;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "27855:7:64";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14197;
                                        readonly src: "27847:15:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9859;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "27847:33:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 9850;
                                readonly id: 9860;
                                readonly nodeType: "Return";
                                readonly src: "27840:40:64";
                            }];
                        };
                        readonly id: 9862;
                        readonly nodeType: "IfStatement";
                        readonly src: "27694:197:64";
                        readonly trueBody: {
                            readonly id: 9855;
                            readonly nodeType: "Block";
                            readonly src: "27715:39:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9853;
                                    readonly name: "_amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9841;
                                    readonly src: "27736:7:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 9850;
                                readonly id: 9854;
                                readonly nodeType: "Return";
                                readonly src: "27729:14:64";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 9839;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "27187:314:64";
                    readonly text: "@dev Converts input to base if necessary according to what is specified\n      in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBaseFromOption";
                readonly nameLocation: "27515:24:64";
                readonly parameters: {
                    readonly id: 9847;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9841;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "27557:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9864;
                        readonly src: "27549:15:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9840;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27549:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9843;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "27582:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9864;
                        readonly src: "27574:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9842;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27574:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9846;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "27637:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9864;
                        readonly src: "27608:37:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 9845;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9844;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["27608:11:64", "27620:7:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7463;
                                readonly src: "27608:19:64";
                            };
                            readonly referencedDeclaration: 7463;
                            readonly src: "27608:19:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7463_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "27539:112:64";
                };
                readonly returnParameters: {
                    readonly id: 9850;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9849;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9864;
                        readonly src: "27675:7:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9848;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "27675:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "27674:9:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9890;
                readonly nodeType: "FunctionDefinition";
                readonly src: "28230:405:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9889;
                    readonly nodeType: "Block";
                    readonly src: "28415:220:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 9877;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9872;
                                readonly src: "28429:8:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 9878;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "28438:6:64";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 7459;
                            readonly src: "28429:15:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 9887;
                            readonly nodeType: "Block";
                            readonly src: "28590:39:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9885;
                                    readonly name: "_amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9867;
                                    readonly src: "28611:7:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 9876;
                                readonly id: 9886;
                                readonly nodeType: "Return";
                                readonly src: "28604:14:64";
                            }];
                        };
                        readonly id: 9888;
                        readonly nodeType: "IfStatement";
                        readonly src: "28425:204:64";
                        readonly trueBody: {
                            readonly id: 9884;
                            readonly nodeType: "Block";
                            readonly src: "28446:138:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 9881;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9869;
                                        readonly src: "28556:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9879;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9867;
                                            readonly src: "28540:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9880;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "28548:7:64";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14215;
                                        readonly src: "28540:15:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9882;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "28540:33:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 9876;
                                readonly id: 9883;
                                readonly nodeType: "Return";
                                readonly src: "28533:40:64";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 9865;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "27903:322:64";
                    readonly text: "@dev Converts input to vault shares if necessary according to what is\n      specified in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToVaultSharesFromOption";
                readonly nameLocation: "28239:31:64";
                readonly parameters: {
                    readonly id: 9873;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9867;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "28288:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9890;
                        readonly src: "28280:15:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9866;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "28280:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9869;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "28313:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9890;
                        readonly src: "28305:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9868;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "28305:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9872;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "28368:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9890;
                        readonly src: "28339:37:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 9871;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9870;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["28339:11:64", "28351:7:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7463;
                                readonly src: "28339:19:64";
                            };
                            readonly referencedDeclaration: 7463;
                            readonly src: "28339:19:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7463_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "28270:112:64";
                };
                readonly returnParameters: {
                    readonly id: 9876;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9875;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9890;
                        readonly src: "28406:7:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9874;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "28406:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "28405:9:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 9916;
                readonly nodeType: "FunctionDefinition";
                readonly src: "28930:393:64";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 9915;
                    readonly nodeType: "Block";
                    readonly src: "29108:215:64";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly expression: {
                                readonly id: 9903;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 9898;
                                readonly src: "29122:8:64";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            };
                            readonly id: 9904;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "29131:6:64";
                            readonly memberName: "asBase";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 7459;
                            readonly src: "29122:15:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 9913;
                            readonly nodeType: "Block";
                            readonly src: "29184:133:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 9910;
                                        readonly name: "_vaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 9895;
                                        readonly src: "29289:16:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 9908;
                                            readonly name: "_amount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 9893;
                                            readonly src: "29273:7:64";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 9909;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "29281:7:64";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 14215;
                                        readonly src: "29273:15:64";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 9911;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "29273:33:64";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 9902;
                                readonly id: 9912;
                                readonly nodeType: "Return";
                                readonly src: "29266:40:64";
                            }];
                        };
                        readonly id: 9914;
                        readonly nodeType: "IfStatement";
                        readonly src: "29118:199:64";
                        readonly trueBody: {
                            readonly id: 9907;
                            readonly nodeType: "Block";
                            readonly src: "29139:39:64";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 9905;
                                    readonly name: "_amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 9893;
                                    readonly src: "29160:7:64";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 9902;
                                readonly id: 9906;
                                readonly nodeType: "Return";
                                readonly src: "29153:14:64";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 9891;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "28641:284:64";
                    readonly text: "@dev Converts input to what is specified in the options from base.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToOptionFromBase";
                readonly nameLocation: "28939:24:64";
                readonly parameters: {
                    readonly id: 9899;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9893;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "28981:7:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9916;
                        readonly src: "28973:15:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9892;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "28973:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9895;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "29006:16:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9916;
                        readonly src: "28998:24:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9894;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "28998:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 9898;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "29061:8:64";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9916;
                        readonly src: "29032:37:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7463_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 9897;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 9896;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["29032:11:64", "29044:7:64"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7463;
                                readonly src: "29032:19:64";
                            };
                            readonly referencedDeclaration: 7463;
                            readonly src: "29032:19:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7463_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "28963:112:64";
                };
                readonly returnParameters: {
                    readonly id: 9902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 9901;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 9916;
                        readonly src: "29099:7:64";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 9900;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29099:7:64";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "29098:9:64";
                };
                readonly scope: 9917;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 8959;
                    readonly name: "IHyperdriveEvents";
                    readonly nameLocations: readonly ["1068:17:64"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 8062;
                    readonly src: "1068:17:64";
                };
                readonly id: 8960;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1068:17:64";
            }, {
                readonly baseName: {
                    readonly id: 8961;
                    readonly name: "HyperdriveStorage";
                    readonly nameLocations: readonly ["1087:17:64"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 13842;
                    readonly src: "1087:17:64";
                };
                readonly id: 8962;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1087:17:64";
            }];
            readonly canonicalName: "HyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 8958;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "604:428:64";
                readonly text: "@author DELV\n @title HyperdriveBase\n @notice The Hyperdrive base contract that provides a set of helper methods\n         and defines the functions that must be overridden by implementations.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [9917, 13842, 67058, 8062, 8623];
            readonly name: "HyperdriveBase";
            readonly nameLocation: "1050:14:64";
            readonly scope: 9918;
            readonly usedErrors: readonly [67003];
            readonly usedEvents: readonly [7909, 7924, 7941, 7954, 7971, 7990, 8007, 8024, 8037, 8044, 8049, 8056, 8061, 8604, 8613, 8622];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 64;
};
//# sourceMappingURL=HyperdriveBase.d.ts.map